import React, { useState } from "react";
import AddressInfo from "../components/OrderComponents/AddressInfo";
import OrderInfoTypeCart from "../components/OrderComponents/OrderInfoTypeCart";
import CreditCardForm from "../components/OrderComponents/CreditCardForm";
import Header from "../layout/Header";
import Footer from "../components/generalComponents/Footer";
import OrderSummary from "../components/OrderComponents/OrderSummary";

function CreateOrder() {
  const [currentStep, setCurrentStep] = useState("address");

  const [grandTotal, setGrandTotal] = useState(0);

  const [filteredAddresses, setFilteredAddresses] = useState([]);

  const handleAddressData = (addresses) => {
    setFilteredAddresses(addresses);
  };

  return (
    <div>
      <Header />
      <div className="px-4 py-2 w-[92%] mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col">
          <OrderInfoTypeCart
            setCurrentStep={setCurrentStep}
            filteredAddresses={filteredAddresses}
          />

          {currentStep === "address" && <AddressInfo />}
          {currentStep === "payment" && (
            <CreditCardForm grandTotal={grandTotal} />
          )}
        </div>
        <div className="flex-row">
          <OrderSummary
            setGrandTotal={setGrandTotal}
            isCreateOrderContext={true}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateOrder;
