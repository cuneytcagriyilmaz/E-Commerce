import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden  p-4  m-2">
      <img className="w-full" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.department}</p>
        <div className="mt-4">
          <span className="text-green-500 text-xl font-semibold">${product.discountedPrice}</span>
          <span className="line-through text-gray-500 ml-2">${product.originalPrice}</span>
        </div>
        <div className="flex mt-4">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-6 h-6 rounded-full  mr-2"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
