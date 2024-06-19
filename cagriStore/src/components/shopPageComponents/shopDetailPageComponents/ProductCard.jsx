import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductCard = ({ product, isInsideProductDescription }) => {

  const colors = ['#23A6F0', '#23856D', '#E77C40', '#252B42'];


  const history = useHistory();

  const handleClick = () => {
    history.push(`/shop/item/${product.id}`);
  };

  function isInsideTrue() {

    return (
      <div className="max-w-xs rounded overflow-hidden   m-2 cursor-pointer bg-white" onClick={handleClick}>
        <img className="w-full" src={product.image} alt={product.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">{product.department}</p>
          <div className="mt-4">
            <span className="text-green-500 text-xl font-semibold">${product.discountedPrice}</span>
            <span className="line-through text-gray-500 ml-2">${product.originalPrice}</span>
          </div>
        </div>
      </div>
    );
  };


  function isInsideFalse() {
    return (
      <div className="max-w-xs rounded overflow-hidden p-4 m-2 cursor-pointer" onClick={handleClick}>
        <img className="w-full" src={product.image} alt={product.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">{product.department}</p>
          <div className="mt-4">
            <span className="text-green-500 text-xl font-semibold">${product.discountedPrice}</span>
            <span className="line-through text-gray-500 ml-2">${product.originalPrice}</span>
          </div>
          <div className="flex mt-4">
            {colors.map((color, index) => (
              <span
                key={index}
                className="w-6 h-6 rounded-full mr-2"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div onClick={handleClick}>
      {isInsideProductDescription ? isInsideTrue() : isInsideFalse()}

    </div>
  );
}

export default ProductCard;
