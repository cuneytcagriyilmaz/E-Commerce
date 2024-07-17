// import React, { useState } from 'react';

// const CreditCardForm = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [cardHolder, setCardHolder] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//      console.log('Card Number:', cardNumber);
//     console.log('Expiry Date:', expiryDate);
//     console.log('CVV:', cvv);
//     console.log('Card Holder:', cardHolder);
//   };

//   return (
//     <div className="  mx-auto bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4">Kredi Kartı Bilgileri</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
//             Kart Numarası
//           </label>
//           <input
//             type="text"
//             id="cardNumber"
//             name="cardNumber"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
//             Son Kullanma Tarihi
//           </label>
//           <input
//             type="text"
//             id="expiryDate"
//             name="expiryDate"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="MM/YY"
//             value={expiryDate}
//             onChange={(e) => setExpiryDate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
//             CVV
//           </label>
//           <input
//             type="text"
//             id="cvv"
//             name="cvv"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={cvv}
//             onChange={(e) => setCvv(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardHolder">
//             Kart Sahibinin Adı
//           </label>
//           <input
//             type="text"
//             id="cardHolder"
//             name="cardHolder"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={cardHolder}
//             onChange={(e) => setCardHolder(e.target.value)}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Gönder
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreditCardForm;
// import React, { useState } from "react";

// const CreditCardForm = () => {
//   const [showNewCardForm, setShowNewCardForm] = useState(false);

//   return (
//     <div className="bg-gray-100  border mr-6 rounded-lg flex items-center justify-center">
//       <div className="  w-full bg-white p-6 rounded-lg  ">
//         <h2 className="text-xl font-semibold mb-4">Kart ile Öde</h2>
//         <p className="text-gray-600 mb-6">
//           Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak ödemenizi
//           güvenle yapabilirsiniz.
//         </p>

//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <h3 className="text-gray-800 font-medium mb-2">Kart Bilgileri</h3>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="card"
//                   id="bonus"
//                   className="form-radio text-orange-500"
//                 />
//                 <label htmlFor="bonus" className="flex items-center space-x-2">
//                   <img
//                     src="https://via.placeholder.com/60x40"
//                     alt="Bonus"
//                     className="mr-2"
//                   />
//                   <div className="flex flex-col">
//                     <span className="text-sm">5556 60** **** 6885</span>
//                     <span className="text-xs text-gray-500">8/2030</span>
//                   </div>
//                 </label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="card"
//                   id="vakif1"
//                   className="form-radio text-orange-500"
//                 />
//                 <label htmlFor="vakif1" className="flex items-center space-x-2">
//                   <img
//                     src="https://via.placeholder.com/60x40"
//                     alt="Vakıfbank"
//                     className="mr-2"
//                   />
//                   <div className="flex flex-col">
//                     <span className="text-sm">5421 19** **** 5420</span>
//                     <span className="text-xs text-gray-500">3/2025</span>
//                   </div>
//                 </label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="card"
//                   id="vakif2"
//                   className="form-radio text-orange-500"
//                 />
//                 <label htmlFor="vakif2" className="flex items-center space-x-2">
//                   <img
//                     src="https://via.placeholder.com/60x40"
//                     alt="Vakıfbank"
//                     className="mr-2"
//                   />
//                   <div className="flex flex-col">
//                     <span className="text-sm">5428 04** **** 2736</span>
//                     <span className="text-xs text-gray-500">6/2024</span>
//                   </div>
//                 </label>
//               </div>
//             </div>
//             <div className="mt-4">
//               <label htmlFor="secure" className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   id="secure"
//                   className="form-checkbox text-orange-500"
//                 />
//                 <span className="text-sm font-medium">
//                   3D Secure ile ödemek istiyorum.
//                 </span>
//               </label>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-gray-800 font-medium mb-2">
//               Taksit Seçenekleri
//             </h3>
//             <div className="border border-gray-300 rounded-lg p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm font-medium">Taksit Sayısı</span>
//                 <span className="text-sm font-medium">Aylık Ödeme</span>
//               </div>
//               <div className="flex items-center justify-between border-t border-gray-300 pt-2">
//                 <div className="flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     name="installment"
//                     id="single"
//                     className="form-radio text-orange-500"
//                   />
//                   <label htmlFor="single" className="text-sm font-medium">
//                     Tek Çekim
//                   </label>
//                 </div>
//                 <span className="text-sm text-orange-500 font-medium">
//                   6.604,22 TL
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-4 text-right">
//           {showNewCardForm ? (
//             <button
//               onClick={() => setShowNewCardForm(false)}
//               className="text-sm text-orange-500 font-medium"
//             >
//               Kayıtlı kartımla ödeme yap
//             </button>
//           ) : (
//             <button
//               onClick={() => setShowNewCardForm(true)}
//               className="text-sm text-orange-500 font-medium"
//             >
//               Başka bir Kart ile Ödeme Yap
//             </button>
//           )}
//         </div>

//         {showNewCardForm && (
//           <div className="mt-6 bg-white p-6 rounded-lg  ">
//             <h3 className="text-gray-800 font-medium mb-2">Kart Bilgileri</h3>
//             <div className="flex flex-col space-y-4">
//               <div>
//                 <label className="text-sm font-medium" htmlFor="cardSaveName">
//                   Kartı Kayıt Ederken Kullanılacak İsim
//                 </label>
//                 <input
//                   type="text"
//                   id="cardSaveName"
//                   className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-medium" htmlFor="cardHolderName">
//                   Kartın Üzerinde Yazılı İsim
//                 </label>
//                 <input
//                   type="text"
//                   id="cardHolderName"
//                   className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-medium" htmlFor="cardNumber">
//                   Kart Numarası
//                 </label>
//                 <input
//                   type="text"
//                   id="cardNumber"
//                   className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
//                 />
//               </div>
//               <div className="flex space-x-4">
//                 <div className="flex-1">
//                   <label className="text-sm font-medium" htmlFor="expiryMonth">
//                     Son Kullanma Tarihi
//                   </label>
//                   <select
//                     id="expiryMonth"
//                     className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
//                   >
//                     <option>Ay</option>
//                   </select>
//                 </div>
//                 <div className="flex-1">
//                   <label className="text-sm font-medium" htmlFor="expiryYear">
//                     Yıl
//                   </label>
//                   <select
//                     id="expiryYear"
//                     className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
//                   >
//                     <option>Yıl</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="flex space-x-4">
//                 <div className="flex-1">
//                   <label className="text-sm font-medium" htmlFor="cvv">
//                     CVV
//                   </label>
//                   <input
//                     type="text"
//                     id="cvv"
//                     className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium">
//                   Onayla
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default CreditCardForm;
import React, { useState, useEffect } from "react";
import { fetchSavedCards, axiosInstance } from "../../store/api/axiosInstance";

const CreditCardForm = () => {
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [formData, setFormData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetchSavedCards();
      if (response && response.data) {
        setSavedCards(response.data);
      } else {
        console.error(
          "fetchSavedCards function returned unexpected data:",
          response
        );
      }
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
      const response = await axiosInstance.post("/user/card", formData);
      console.log("Card creation response:", response.data);
      fetchCards();
      setShowNewCardForm(false);
    } catch (error) {
      console.error("Error creating card:", error);
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

  // Varsayılan bir kart tanımlaması
  const defaultCard = {
    id: "defaultCard",
    bank: "Bank Name",
    number: "**** **** **** 1234",
    expiry: "MM/YY",
    imageHtml: '<i class="fa-brands fa-cc-visa" style="color: #74C0FC;"></i>',
  };

  return (
    <div className="bg-gray-100 border mr-6 rounded-lg flex items-center justify-center">
      <div className="w-full bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Kart ile Öde</h2>
        <p className="text-gray-600 mb-6">
          Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak ödemenizi
          güvenle yapabilirsiniz.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-gray-800 font-medium mb-2">Kart Bilgileri</h3>
            <div className="space-y-4">
              {savedCards.length > 0 ? (
                savedCards.map((card) => (
                  <div key={card.id} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="card"
                      id={`card-${card.id}`}
                      className="form-radio text-orange-500"
                    />
                    <label
                      htmlFor={`card-${card.id}`}
                      className="flex items-center space-x-2"
                    >
                      {/* Saved Card Image */}
                      <span
                        dangerouslySetInnerHTML={{ __html: card.imageHtml }}
                      />
                      <div className="flex flex-col">
                        <span className="text-sm">{card.number}</span>
                        <span className="text-xs text-gray-500">
                          {card.expiry}
                        </span>
                      </div>
                    </label>
                  </div>
                ))
              ) : (
                <div
                  key={defaultCard.id}
                  className="flex items-center space-x-2"
                >
                  {/* Default Card Image */}
                  <span
                    dangerouslySetInnerHTML={{ __html: defaultCard.imageHtml }}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm">{defaultCard.number}</span>
                    <span className="text-xs text-gray-500">
                      {defaultCard.expiry}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4">
              <label htmlFor="secure" className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="secure"
                  className="form-checkbox text-orange-500"
                />
                <span className="text-sm font-medium">
                  3D Secure ile ödemek istiyorum.
                </span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium mb-2">
              Taksit Seçenekleri
            </h3>
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Taksit Sayısı</span>
                <span className="text-sm font-medium">Aylık Ödeme</span>
              </div>
              <div className="flex items-center justify-between border-t border-gray-300 pt-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="installment"
                    id="single"
                    className="form-radio text-orange-500"
                  />
                  <label htmlFor="single" className="text-sm font-medium">
                    Tek Çekim
                  </label>
                </div>
                <span className="text-sm text-orange-500 font-medium">
                  6.604,22 TL
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-right">
          {showNewCardForm ? (
            <button
              onClick={() => setShowNewCardForm(false)}
              className="text-sm text-orange-500 font-medium"
            >
              Kayıtlı kartımla ödeme yap
            </button>
          ) : (
            <button
              onClick={() => setShowNewCardForm(true)}
              className="text-sm text-orange-500 font-medium"
            >
              Başka bir Kart ile Ödeme Yap
            </button>
          )}
        </div>

        {showNewCardForm && (
          <form onSubmit={handleSubmit}>
            <div className="mt-6 bg-white p-6 rounded-lg">
              <h3 className="text-gray-800 font-medium mb-2">Kart Bilgileri</h3>
              <div className="flex flex-col space-y-4">
                <div>
                  <label className="text-sm font-medium" htmlFor="cardSaveName">
                    Kartı Kayıt Ederken Kullanılacak İsim
                  </label>
                  <input
                    type="text"
                    id="name_on_card"
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium"
                    htmlFor="cardHolderName"
                  >
                    Kartın Üzerinde Yazılı İsim
                  </label>
                  <input
                    type="text"
                    id="cardHolderName"
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="cardNumber">
                    Kart Numarası
                  </label>
                  <input
                    type="text"
                    id="card_no"
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label
                      className="text-sm font-medium"
                      htmlFor="expiryMonth"
                    >
                      Son Kullanma Tarihi
                    </label>
                    <select
                      id="expire_month"
                      className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Ay</option>
                      {monthOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium" htmlFor="expiryYear">
                      Yıl
                    </label>
                    <select
                      id="expire_year"
                      className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Yıl</option>
                      {yearOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="text-sm font-medium" htmlFor="cvv">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium"
                  >
                    Onayla
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreditCardForm;
