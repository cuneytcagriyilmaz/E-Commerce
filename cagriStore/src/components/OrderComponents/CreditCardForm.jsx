import React, { useState, useEffect } from "react";
import {
  fetchSavedCards,
  addNewCard,
  updateCard,
  deleteCard,
  createOrder,
} from "../../store/api/axiosInstance";
import { useSelector } from "react-redux";

const CreditCardForm = () => {
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [showUpdateCardForm, setShowUpdateCardForm] = useState(false);
  const [showCVVInput, setShowCVVInput] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [cvv, setCvv] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  );
  const shippingCost =
    totalAmount >= 150
      ? 0
      : cart.reduce((sum, item) => sum + (item.product.shippingCost || 0), 0);
  const discount =
    shippingCost === 0
      ? cart.reduce((sum, item) => sum + (item.product.shippingCost || 0), 0)
      : 0;
  const grandTotal = totalAmount + shippingCost - discount;

  const [formData, setFormData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  const [filteredAddresses, setFilteredAddresses] = useState([]);
  useEffect(() => {
    const addresses = localStorage.getItem("filteredAddresses");
    if (addresses) {
      const parsedAddresses = JSON.parse(addresses);
      setFilteredAddresses(parsedAddresses);
    }
  }, []);

  const getAddressInfo = () => {
    if (filteredAddresses.length > 0) {
      const address = filteredAddresses[0];
      return `${address.id}`;
    }
    return -1;
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const cards = await fetchSavedCards();
      console.log("Fetched Cards:", cards);
      setSavedCards(cards || []);
    } catch (error) {
      console.error("Error fetching saved cards:", error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (showUpdateCardForm) {
        await updateCard(formData);
      } else {
        await addNewCard(formData);
      }
      fetchCards();
      setShowNewCardForm(false);
      setShowUpdateCardForm(false);
      setFormData({
        card_no: "",
        expire_month: "",
        expire_year: "",
        name_on_card: "",
      });
    } catch (error) {
      console.error("Error submitting card:", error);
    }
  };

  const handleUpdateClick = (card) => {
    setFormData(card);
    setShowUpdateCardForm(true);
  };

  const handleDeleteClick = async (cardId) => {
    try {
      await deleteCard(cardId);
      fetchCards();
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleOrderClick = () => {
    if (selectedCardId) {
      setShowCVVInput(true);
    } else {
      alert("Lütfen bir kart seçin.");
    }
  };

  const selectedCard = savedCards.find((card) => card.id === selectedCardId);

  const handleCVVSubmit = async () => {
    getAddressInfo();

    try {
      await createOrder({
        address_id: getAddressInfo(),
        order_date: new Date().toISOString(),
        card_no: selectedCard.card_no,
        card_name: selectedCard.name_on_card,
        card_expire_month: selectedCard.expire_month,
        card_expire_year: selectedCard.expire_year,
        card_ccv: cvv,
        price: grandTotal,
        products: cart.map((item) => ({
          product_id: item.product.id,
          count: item.count,
          detail: item.product.description,
        })),
      });
      setShowCVVInput(false);
      alert("Sipariş başarılı!");
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Sipariş oluşturulurken hata oluştu.");
    }
  };

  const monthOptions = Array.from({ length: 12 }, (_, index) => ({
    value: index + 1,
    label: `${index + 1}`,
  }));

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 10 }, (_, index) => ({
    value: currentYear + index,
    label: `${currentYear + index}`,
  }));

  return (
    <div className="bg-white">
      <div className="flex items-center border mr-6 rounded-lg">
        <div className="flex-col ml-5">
          <i className="fa-regular fa-circle-check fa-2xl text-[#FFD43B]"></i>
        </div>
        <div className="flex-col ml-5">
          <h1 className="text-2xl font-bold">Kart İle Öde</h1>
          <h3 className="font-bolder">
            Kart ile ödemeyi seçtiniz. Banka veya kredi kartı kullanarak
            ödemenizi güvenle yapabilirsiniz.
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap border mr-6 rounded-lg">
        <div className="w-full md:w-1/2 p-4 border-r border-gray-300">
          <div className="mb-4 flex-row justify-between">
            <h1 className="font-bold text-xl">Kart Bilgileri</h1>
            <h1
              className="font-bolder text-textColorLightGray underline cursor-pointer"
              onClick={() => setShowNewCardForm(true)}
            >
              Başka kart ile ödeme yap
            </h1>
          </div>
          {savedCards.map((card) => (
            <div key={card.id} className="mb-4 max-w-sm">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`card-${card.id}`}
                  name="card"
                  className="mr-2"
                  onChange={() => setSelectedCardId(card.id)}
                />
                <label
                  htmlFor={`card-${card.id}`}
                  className="text-orange-600 font-bold"
                >
                  {card.bank} kartım
                </label>
              </div>
              <div
                className={`border rounded-xl p-4 ${
                  selectedCardId === card.id
                    ? "border-orange-500"
                    : "border-black"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">Logo</div>
                  <img
                    src="https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98397dfdff2889_mastercard-p-500.webp"
                    alt="MasterCard"
                    className="h-8"
                  />
                </div>
                <div className="text-md text-end">
                  {card.card_no.replace(/.(?=.{4})/g, "*")}
                </div>
                <div className="text-right mt-4">
                  {card.expire_month}/{card.expire_year}
                </div>
                <div className="flex justify-between mt-2">
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleUpdateClick(card)}
                  >
                    Kartı Güncelle
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleDeleteClick(card.id)}
                  >
                    Kartı Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="mb-4 font-bold text-xl">Taksit Seçenekleri</h1>
          <h1 className="mb-4">Kartınıza uygun taksit seçeneğini seçiniz</h1>
          <div className="border rounded-lg shadow-md max-w-md">
            <div className="flex justify-between p-4">
              <div className="font-semibold">Taksit Sayısı</div>
              <div className="font-semibold">Aylık Ödeme</div>
            </div>
            <div className="border-t">
              <div className="flex justify-between p-4 items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="single"
                    name="payment"
                    className="mr-2"
                  />
                  <label
                    htmlFor="single"
                    className="text-orange-600 font-semibold"
                  >
                    Tek Çekim
                  </label>
                </div>
                <div className="text-orange-600 font-semibold">
                  ${grandTotal.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {(showNewCardForm || showUpdateCardForm) && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg mt-6">
          <h3 className="text-gray-800 font-medium mb-2">
            {showUpdateCardForm ? "Kartı Güncelle" : "Yeni Kart Ekle"}
          </h3>
          <div className="mb-4">
            <label htmlFor="card_no" className="block text-gray-600 mb-1">
              Kart Numarası
            </label>
            <input
              type="text"
              id="card_no"
              value={formData.card_no}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expire_month" className="block text-gray-600 mb-1">
              Son Kullanma Tarihi (Ay)
            </label>
            <select
              id="expire_month"
              value={formData.expire_month}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="">Ay</option>
              {monthOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="expire_year" className="block text-gray-600 mb-1">
              Son Kullanma Tarihi (Yıl)
            </label>
            <select
              id="expire_year"
              value={formData.expire_year}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="">Yıl</option>
              {yearOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="name_on_card" className="block text-gray-600 mb-1">
              Kart Üzerindeki İsim
            </label>
            <input
              type="text"
              id="name_on_card"
              value={formData.name_on_card}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
              onClick={() => {
                setShowNewCardForm(false);
                setShowUpdateCardForm(false);
                setFormData({
                  card_no: "",
                  expire_month: "",
                  expire_year: "",
                  name_on_card: "",
                });
              }}
            >
              İptal
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            >
              {showUpdateCardForm ? "Güncelle" : "Ekle"}
            </button>
          </div>
        </form>
      )}
      <div className="flex justify-end mt-6">
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
          onClick={handleOrderClick}
        >
          Sipariş Ver
        </button>
      </div>
      {showCVVInput && (
        <div className="bg-white p-6 rounded-lg mt-6">
          <h3 className="text-gray-800 font-medium mb-2">CVV Girin</h3>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
          <div className="flex justify-end mt-4">
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg"
              onClick={handleCVVSubmit}
            >
              Onayla
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCardForm;
