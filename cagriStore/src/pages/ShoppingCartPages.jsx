// import React from "react";
// import Header from "../layout/Header";
// import Footer from "../components/generalComponents/Footer";
// import ShoppingCart from "../components/shoppingCartComponent/ShoppingCart";
// import OrderSummary from "../components/OrderComponents/OrderSummary";

// function ShoppingCartPages() {
//   return (
//     <div>
//       <Header />
//       <div className="flex flex-col lg:flex-row lg:space-x-4 px-4 justify-between w-[92%] mx-auto">
//         <ShoppingCart />
//         <OrderSummary />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default ShoppingCartPages;


import React from "react";
import Header from "../layout/Header";
import Footer from "../components/generalComponents/Footer";
import ShoppingCart from "../components/shoppingCartComponent/ShoppingCart";
import OrderSummary from "../components/OrderComponents/OrderSummary";

function ShoppingCartPages() {
  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row lg:space-x-4 px-4 justify-between w-[92%] mx-auto">
        <ShoppingCart />
        <OrderSummary />
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCartPages;
