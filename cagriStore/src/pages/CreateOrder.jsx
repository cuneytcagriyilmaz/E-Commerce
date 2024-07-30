// import React, { useState } from "react";
// import AddressInfo from "../components/OrderComponents/AddressInfo";
// import OrderInfoTypeCart from "../components/OrderComponents/OrderInfoTypeCart";
// import CreditCardForm from "../components/OrderComponents/CreditCardForm";
// import Header from "../layout/Header";
// import Footer from "../components/generalComponents/Footer";
// import OrderSummary from "../components/OrderComponents/OrderSummary";

// function CreateOrder() {
//   const [currentStep, setCurrentStep] = useState("address");
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   return (
//     <div>
//       <Header />
//       <div className=" px-4 py-2 w-[92%] mx-auto flex flex-col md:flex-row">
//         <div className="flex flex-col  ">
//           <OrderInfoTypeCart
//             setCurrentStep={setCurrentStep}
//             selectedAddress={selectedAddress}
//           />

//           {currentStep === "address" && (
//             <AddressInfo setSelectedAddress={setSelectedAddress} />
//           )}
//           {currentStep === "payment" && <CreditCardForm />}
//         </div>
//         <div className="flex-row">
//           <OrderSummary />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default CreateOrder;



import React, { useState } from "react";
import AddressInfo from "../components/OrderComponents/AddressInfo";
import OrderInfoTypeCart from "../components/OrderComponents/OrderInfoTypeCart";
import CreditCardForm from "../components/OrderComponents/CreditCardForm";
import Header from "../layout/Header";
import Footer from "../components/generalComponents/Footer";
import OrderSummary from "../components/OrderComponents/OrderSummary";

function CreateOrder() {
  const [currentStep, setCurrentStep] = useState("address");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [grandTotal, setGrandTotal] = useState(0);

  return (
    <div>
      <Header />
      <div className="px-4 py-2 w-[92%] mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col">
          <OrderInfoTypeCart
            setCurrentStep={setCurrentStep}
            selectedAddress={selectedAddress}
          />

          {currentStep === "address" && (
            <AddressInfo setSelectedAddress={setSelectedAddress} />
          )}
          {currentStep === "payment" && <CreditCardForm grandTotal={grandTotal} />}
        </div>
        <div className="flex-row">
          <OrderSummary setGrandTotal={setGrandTotal} isCreateOrderContext={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateOrder;
