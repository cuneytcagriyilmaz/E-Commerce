// import React from 'react'
// import AddressInfo from '../components/OrderComponents/AddressInfo'
// import OrderInfoTypeCart from '../components/OrderComponents/OrderInfoTypeCart'
// import CreditCardForm from '../components/OrderComponents/CreditCardForm'

// function CreateOrder() {
//   return (
//     <div>
//         <OrderInfoTypeCart />
//         <AddressInfo />
//         <CreditCardForm />
//     </div>
//   )
// }

// export default CreateOrder

// import React, { useState } from 'react';
// import AddressInfo from '../components/OrderComponents/AddressInfo';
// import OrderInfoTypeCart from '../components/OrderComponents/OrderInfoTypeCart';
// import CreditCardForm from '../components/OrderComponents/CreditCardForm';
// import Header from '../layout/Header';
// import Footer from '../components/generalComponents/Footer';

// function CreateOrder() {
//   const [currentStep, setCurrentStep] = useState('address'); // Default to 'address'
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   return (
//     <div>
//         <Header />

//         <OrderInfoTypeCart setCurrentStep={setCurrentStep} selectedAddress={selectedAddress} />
//         {currentStep === 'address' && <AddressInfo setSelectedAddress={setSelectedAddress} />}
//         {currentStep === 'payment' && <CreditCardForm />}
//         <Footer />
//     </div>
//   )
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

  return (
    <div>
      <Header />
      <div className=" px-4 py-2 w-[92%] mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col  ">
          <OrderInfoTypeCart
            setCurrentStep={setCurrentStep}
            selectedAddress={selectedAddress}
          />

          {currentStep === "address" && (
            <AddressInfo setSelectedAddress={setSelectedAddress} />
          )}
          {currentStep === "payment" && <CreditCardForm />}
        </div>
        <div className="flex">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
