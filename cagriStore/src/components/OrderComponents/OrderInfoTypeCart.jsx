// import React from "react";

// const OrderInfoTypeCart = ({ setCurrentStep }) => {
//   return (
//     <div className="  bg-white  mr-6 rounded-lg  ">
//       <div className="flex justify-between mb-6">
//         <div
//           className="flex items-center w-1/2 cursor-pointer border rounded-lg p-2"
//           onClick={() => setCurrentStep("address")}
//         >
//           <span className="bg-orange-500 text-white rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold mr-2">
//             1
//           </span>
//           <div>
//             <h2 className="text-orange-500 text-xl font-semibold">
//               Adres Bilgileri
//             </h2>
//             <p className="text-gray-700">Ev</p>
//             <p className="text-gray-700">06000 - Ankara/Etimesgut</p>
//           </div>
//         </div>
//         <div
//           className="flex items-center w-1/2 cursor-pointer border rounded-lg p-2"
//           onClick={() => setCurrentStep("payment")}
//         >
//           <span className="bg-orange-500 text-white rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold mr-2">
//             2
//           </span>
//           <div>
//             <h2 className="text-gray-700 text-xl font-semibold">
//               Ödeme Seçenekleri
//             </h2>
//             <p className="text-gray-700">
//               Banka/Kredi Kartı veya Alışveriş Kredisi ile ödemenizi güvenle
//               yapabilirsiniz.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className=" border  rounded-lg p-4 mb-6 flex items-center">
//         <i className="fas fa-info-circle text-yellow-500 text-2xl mr-3"></i>
//         <p className="text-gray-700">
//           Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese Gönder"
//           tikini kaldırın ve Fatura adresi olarak kayıtlı Kurumsal Fatura
//           adresinizi seçin.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OrderInfoTypeCart;
import React, { useState } from "react";

const OrderInfoTypeCart = ({ setCurrentStep }) => {
  const [selectedStep, setSelectedStep] = useState("address");

  const handleStepClick = (step) => {
    setCurrentStep(step);
    setSelectedStep(step);
  };

  return (
    <div className="bg-white mr-6">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div
          className={`flex items-center md:w-1/2 cursor-pointer border rounded-lg p-2 ${
            selectedStep === "address"
              ? "bg-white text-orange-500 border-orange-500"
              : "bg-gray-200 text-gray-700 border-gray-300"
          }`}
          onClick={() => handleStepClick("address")}
        >
          <span className="bg-orange-500 text-white rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold mr-2">
            1
          </span>
          <div>
            <h2
              className={`text-xl font-semibold ${
                selectedStep === "address" ? "text-orange-500" : ""
              }`}
            >
              Adres Bilgileri
            </h2>
            <p className="text-gray-700">Ev</p>
            <p className="text-gray-700">06000 - Ankara/Etimesgut</p>
          </div>
        </div>
        <div
          className={`flex items-center md:w-1/2 mt-3 md:mt-0 cursor-pointer border rounded-lg p-2 ${
            selectedStep === "payment"
              ? "bg-white text-orange-500 border-orange-500"
              : "bg-gray-200 text-gray-700 border-gray-300"
          }`}
          onClick={() => handleStepClick("payment")}
        >
          <span className="bg-orange-500 text-white rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold mr-2">
            2
          </span>
          <div>
            <h2
              className={`text-xl font-semibold ${
                selectedStep === "payment" ? "text-orange-500" : ""
              }`}
            >
              Ödeme Seçenekleri
            </h2>
            <p className="text-gray-700">
              Banka/Kredi Kartı veya Alışveriş Kredisi ile ödemenizi güvenle
              yapabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`border rounded-lg p-4 mb-6 flex items-center ${
          selectedStep === "address" ? "border-orange-500" : "border-gray-300"
        }`}
      >
        <i className="fas fa-info-circle text-yellow-500 text-2xl mr-3"></i>
        <p className="text-gray-700">
          Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese Gönder"
          tikini kaldırın ve Fatura adresi olarak kayıtlı Kurumsal Fatura
          adresinizi seçin.
        </p>
      </div>
    </div>
  );
};

export default OrderInfoTypeCart;
