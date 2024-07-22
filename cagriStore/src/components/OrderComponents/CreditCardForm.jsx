// import React, { useState, useEffect } from "react";
// import { fetchSavedCards, addNewCard } from "../../store/api/axiosInstance";

// const CreditCardForm = () => {
//   const [showNewCardForm, setShowNewCardForm] = useState(false);
//   const [savedCards, setSavedCards] = useState([]);
//   const [formData, setFormData] = useState({
//     card_no: "",
//     expire_month: "",
//     expire_year: "",
//     name_on_card: "",
//   });

//   useEffect(() => {
//     fetchCards();
//   }, []);

//   const fetchCards = async () => {
//     try {
//       const cards = await fetchSavedCards();
//       console.log("Fetched Cards:", cards);
//       setSavedCards(cards || []);
//     } catch (error) {
//       console.error("Error fetching saved cards:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addNewCard(formData);
//       fetchCards();
//       setShowNewCardForm(false);
//       setFormData({
//         card_no: "",
//         expire_month: "",
//         expire_year: "",
//         name_on_card: "",
//       });
//     } catch (error) {
//       console.error("Error creating card:", error);
//     }
//   };

//   const monthOptions = Array.from({ length: 12 }, (_, index) => ({
//     value: index + 1,
//     label: `${index + 1}`,
//   }));

//   const currentYear = new Date().getFullYear();
//   const yearOptions = Array.from({ length: 10 }, (_, index) => ({
//     value: currentYear + index,
//     label: `${currentYear + index}`,
//   }));

//   const defaultCard = {
//     id: "defaultCard",
//     bank: "Bank Name",
//     number: "**** **** **** 1234",
//     expiry: "MM/YY",
//     imageHtml: '<i class="fa-brands fa-cc-visa" style="color: #74C0FC;"></i>',
//   };

//   return (
//     <div className="bg-gray-100 border mr-6 rounded-lg flex items-center justify-center">
//       <div className="w-full bg-white p-6 rounded-lg">
//         <h2 className="text-xl font-semibold mb-4">Kart ile Öde</h2>
//         <p className="text-gray-600 mb-6">
//           Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak ödemenizi
//           güvenle yapabilirsiniz.
//         </p>

//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <h3 className="text-gray-800 font-medium mb-2">Kart Bilgileri</h3>
//             <div className="space-y-4">
//               {savedCards.length > 0 ? (
//                 savedCards.map((card) => (
//                   <div key={card.id} className="flex items-center space-x-2">
//                     <input
//                       type="radio"
//                       name="card"
//                       id={`card-${card.id}`}
//                       className="form-radio text-orange-500"
//                     />
//                     <label
//                       htmlFor={`card-${card.id}`}
//                       className="flex items-center space-x-2"
//                     >
//                       <span
//                         dangerouslySetInnerHTML={{
//                           __html: defaultCard.imageHtml,
//                         }}
//                       />
//                       <div className="flex flex-col">
//                         <span className="text-sm">{card.card_no}</span>
//                         <span className="text-xs text-gray-500">
//                           {card.expire_month} / {card.expire_year}
//                         </span>
//                       </div>
//                     </label>
//                   </div>
//                 ))
//               ) : (
//                 <div className="flex items-center space-x-2">
//                   <span
//                     dangerouslySetInnerHTML={{ __html: defaultCard.imageHtml }}
//                   />
//                   <div className="flex flex-col">
//                     <span className="text-sm">{defaultCard.number}</span>
//                     <span className="text-xs text-gray-500">
//                       {defaultCard.expiry}
//                     </span>
//                     <p className="text-xs text-gray-500 mt-2">
//                       Kayıtlı kartınız yok. Lütfen yeni bir kart ekleyin.
//                     </p>
//                   </div>
//                 </div>
//               )}
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
//           <form onSubmit={handleSubmit}>
//             <div className="mt-6 bg-white p-6 rounded-lg">
//               <h3 className="text-gray-800 font-medium mb-2">Kart Bilgileri</h3>
//               <div className="flex flex-col space-y-4">
//                 <div>
//                   <label className="text-sm font-medium" htmlFor="name_on_card">
//                     Kartı Kayıt Ederken Kullanılacak İsim
//                   </label>
//                   <input
//                     type="text"
//                     id="name_on_card"
//                     className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
//                     onChange={handleInputChange}
//                     value={formData.name_on_card}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium" htmlFor="card_no">
//                     Kart Numarası
//                   </label>
//                   <input
//                     type="text"
//                     id="card_no"
//                     className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
//                     onChange={handleInputChange}
//                     value={formData.card_no}
//                     required
//                   />
//                 </div>
//                 <div className="flex space-x-4">
//                   <div className="w-full">
//                     <label
//                       className="text-sm font-medium"
//                       htmlFor="expire_month"
//                     >
//                       Ay
//                     </label>
//                     <select
//                       id="expire_month"
//                       className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
//                       onChange={handleInputChange}
//                       value={formData.expire_month}
//                       required
//                     >
//                       <option value="">Ay seçin</option>
//                       {monthOptions.map((option) => (
//                         <option key={option.value} value={option.value}>
//                           {option.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="w-full">
//                     <label
//                       className="text-sm font-medium"
//                       htmlFor="expire_year"
//                     >
//                       Yıl
//                     </label>
//                     <select
//                       id="expire_year"
//                       className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-red-500"
//                       onChange={handleInputChange}
//                       value={formData.expire_year}
//                       required
//                     >
//                       <option value="">Yıl seçin</option>
//                       {yearOptions.map((option) => (
//                         <option key={option.value} value={option.value}>
//                           {option.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <button
//                     type="submit"
//                     className="bg-orange-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   >
//                     Kartı Kaydet
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreditCardForm;

import React, { useState, useEffect } from "react";
import { fetchSavedCards, addNewCard } from "../../store/api/axiosInstance";

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
      await addNewCard(formData);
      fetchCards();
      setShowNewCardForm(false);
      setFormData({
        card_no: "",
        expire_month: "",
        expire_year: "",
        name_on_card: "",
      });
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

  const defaultCard = {
    id: "defaultCard",
    bank: "Bank Name",
    number: "**** **** **** 1234",
    expiry: "MM/YY",
    imageHtml: '<i class="fa-brands fa-cc-visa" style="color: #74C0FC;"></i>',
  };

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
      <div className="flex flex-wrap border mr-6 rounded-lg  ">
        <div className="w-full md:w-1/2 p-4 border-r border-gray-300">
          <div className="mb-4 flex-row justify-between">
            <h1 className="font-bold text-xl">Kart Bilgileri</h1>
            <h1 className="font-bolder text-textColorLightGray underline">
              Başka kart ile ödeme yap
            </h1>
          </div>
          <div className="mb-4 max-w-sm ">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="vakifbank1"
                name="card"
                className="mr-2"
              />
              <label htmlFor="vakifbank1" className="text-orange-600 font-bold">
                Vakıfbank kartım
              </label>
            </div>
            <div className="border border-orange-500 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">Logo</div>
                <img
                  src="https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98397dfdff2889_mastercard-p-500.webp"
                  alt="MasterCard"
                  className="h-8"
                />
              </div>
              <div className="text-md text-end">
                5421 19<span className="text-gray-500">**</span>{" "}
                <span className="text-gray-500">****</span> 5420
              </div>
              <div className="text-right mt-4">3/2025</div>
            </div>
          </div>
          <div className="mb-4 max-w-sm">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="vakifbank2"
                name="card"
                className="mr-2"
              />
              <label htmlFor="vakifbank2" className="text-orange-600 font-bold">
                Vakıfbank kartım
              </label>
            </div>
            <div className="border border-orange-500 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">Logo</div>
                <img
                  src="https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98397dfdff2889_mastercard-p-500.webp"
                  alt="MasterCard"
                  className="h-8"
                />
              </div>
              <div className="text-md text-end">
                5421 19<span className="text-gray-500">**</span>{" "}
                <span className="text-gray-500">****</span> 5420
              </div>
              <div className="text-right mt-4">3/2025</div>
            </div>
          </div>
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
                <div className="text-orange-600 font-semibold">6.604,22 TL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
