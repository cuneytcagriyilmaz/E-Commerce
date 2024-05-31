import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
    {
        image: "/cagristore/src/assets/img/bestSellerProduct/1.jpeg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
        image: "/cagristore/src/assets/img/bestSellerProduct/2.jpeg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
        image: "/cagristore/src/assets/img/bestSellerProduct/3.jpeg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
        image: "/cagristore/src/assets/img/bestSellerProduct/4.jpeg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
        image: "/cagristore/src/assets/img/bestSellerProduct/5.jpeg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
        image: "/cagristore/src/assets/img/bestSellerProduct/6.jpeg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
        image: "/cagristore/src/assets/img/bestSellerProduct/7.jpeg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
        image: "/cagristore/src/assets/img/bestSellerProduct/8.jpeg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    }
];

function BestSellerProducts() {
    return (
        <div className="p-8 max-w-[1800px] mx-auto ">
            <h2 className="text-lg sm:text-2xl text-textColorLightGray text-center mb-2">Featured Products</h2>
            <h1 className="text-xl sm:text-4xl text-textColorDarkGray font-bold text-center mb-4">BESTSELLER PRODUCTS</h1>
            <p className="text-sm sm:text-base text-center text-textColorLightGray mb-8">Problems trying to resolve the conflict between</p>
            <div className="flex flex-wrap justify-center gap-4">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}

export default BestSellerProducts;
