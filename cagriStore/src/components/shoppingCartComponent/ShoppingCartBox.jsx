import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShoppingCartBox = () => {
    const cartItems = useSelector((state) => state.cart.cart);

    return (
        <div className="max-w-md mx-auto p-4 bg-mainBackgroundWhite shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sepetim ({cartItems.length} Ürün)</h2>
            {cartItems.map((item) => (
                <div key={item.product.id} className="flex mb-4 border-b pb-4">
                    <img src={item.product.images[0].url} alt={item.product.name} className="w-20 h-20 object-cover mr-4 rounded" />
                    <div className="flex flex-col justify-between flex-1">
                        <div>
                            <h3 className="text-md font-semibold">{item.product.name}</h3>
                            <p className="text-sm text-gray-600">Beden: {item.product.size} Adet: {item.count}</p>
                        </div>
                        <div className="text-right text-lg font-bold text-orange-500">${item.product.price}</div>
                    </div>
                </div>
            ))}
            <div className="flex justify-between">
                <Link to="/cart" className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">Sepete Git</Link>
                <button className="bg-navbarLigthBlue text-white py-2 px-4 rounded hover:bg-orange-600">Siparişi Tamamla</button>
            </div>
        </div>
    );
};

export default ShoppingCartBox;
