// import React from "react";
// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

// const OrderSummary = () => {
//   const cart = useSelector((state) => state.cart.cart);
//   const history = useHistory();

//   const totalAmount = cart.reduce(
//     (sum, item) => sum + item.product.price * item.count,
//     0
//   );
//   const shippingCost =
//     totalAmount >= 150
//       ? 0
//       : cart.reduce((sum, item) => sum + (item.product.shippingCost || 0), 0);
//   const discount =
//     shippingCost === 0
//       ? cart.reduce((sum, item) => sum + (item.product.shippingCost || 0), 0)
//       : 0;
//   const grandTotal = totalAmount + shippingCost - discount;

//   const handleCheckout = () => {
//     history.push("/order");
//   };

//   return (
//     <div className="p-4 border rounded-lg">
//       <h2 className="text-xl font-semibold mb-4">Sipariş Özeti</h2>
//       <div className="flex justify-between mb-2">
//         <span>Ürünün Toplamı</span>
//         <span className="font-bold">${totalAmount.toFixed(2)}</span>
//       </div>
//       <div className="flex justify-between mb-2">
//         <span>Kargo Toplam</span>
//         <span className="font-bold">${shippingCost.toFixed(2)}</span>
//       </div>
//       <div className="flex justify-between mb-2">
//         <span>$150 ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
//         <span className="font-bold text-red-500">-${discount.toFixed(2)}</span>
//       </div>
//       <div className="flex justify-between mb-4 border-t pt-2">
//         <span className="font-semibold">Toplam</span>
//         <span className="font-bold">${grandTotal.toFixed(2)}</span>
//       </div>
//       <div className="mb-4">
//         <button
//           onClick={handleCheckout}
//           className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold"
//         >
//           Sepeti Onayla
//         </button>
//       </div>
//       <div className="flex justify-center items-center text-orange-500">
//         <i className="fas fa-plus mr-2"></i>
//         <span>İNDİRİM KODU GİR</span>
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;
  

import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const OrderSummary = ({ isCreateOrderContext }) => {        
  const cart = useSelector((state) => state.cart.cart);
  const history = useHistory();

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

  const handleCheckout = () => {
    history.push("/order");
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Sipariş Özeti</h2>
      <div className="flex justify-between mb-2">
        <span>Ürünün Toplamı</span>
        <span className="font-bold">${totalAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Kargo Toplam</span>
        <span className="font-bold">${shippingCost.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>$150 ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
        <span className="font-bold text-red-500">-${discount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-4 border-t pt-2">
        <span className="font-semibold">Toplam</span>
        <span className="font-bold">${grandTotal.toFixed(2)}</span>
      </div>
      <div className="mb-4">
        <button
          onClick={handleCheckout}
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold"
        >
          {isCreateOrderContext ? "Sipariş Ver" : "Sepeti Onayla"}
        </button>
      </div>
      <div className="flex justify-center items-center text-orange-500">
        <i className="fas fa-plus mr-2"></i>
        <span>İNDİRİM KODU GİR</span>
      </div>
    </div>
  );
};

export default OrderSummary;
