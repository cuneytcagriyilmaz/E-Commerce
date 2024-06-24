import React, { useState } from "react";

const ProductDetailSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "/img/productCardsShop/productCardsShop11.jpeg",
        "/img/productCardsShop/productCardsShop1.jpeg",
    ];

    const showSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        showSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        showSlide((currentSlide - 1 + images.length) % images.length);
    };

    return (
        <div className="bg-mainBackgroundWhite py-12">
            <div className="  mx-auto flex flex-col md:flex-row gap-8 p-3  w-[92%]">
                <div className="md:w-1/2 flex flex-col ">
                    <div className="relative w-full max-w-md h-64 overflow-hidden items-center">
                        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {images.map((image, index) => (
                                <div className="w-full flex-shrink-0" key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <button className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white p-2 cursor-pointer" onClick={prevSlide}>
                            <i className="fa-solid fa-chevron-left fa-2xl text-white"></i>
                        </button>
                        <button className="absolute top-1/2 transform -translate-y-1/2 right-0 text-white p-2 cursor-pointer" onClick={nextSlide}>
                            <i className="fa-solid fa-chevron-right fa-2xl text-white"></i>
                        </button>
                    </div>
                    <div className="flex justify-start space-x-4 py-2">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-16 h-16 object-cover cursor-pointer ${currentSlide === index ? 'border-2' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>


                <div className="md:w-1/2 p-4">
                    <h2 className="text-xl font-bold mb-2">Floating Phone</h2>
                    <div className="flex items-center mb-2">
                        <div className="flex items-center text-yellow-500">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star text-gray-400"></i>
                        </div>
                        <span className="ml-2 text-gray-600">(10 Reviews)</span>
                    </div>
                    <p className="text-xl font-semibold mb-2">$1,139.33</p>
                    <p className="text-textColorLightGray mb-2">Availability: <span className="text-navbarLigthBlue"> In Stock</span></p>
                    <p className="text-[#858585] text-sm mb-4 border-b-2">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    <div className="flex space-x-2 mb-4">
                        <span className="w-6 h-6 bg-blue-500 rounded-full block"></span>
                        <span className="w-6 h-6 bg-green-500 rounded-full block"></span>
                        <span className="w-6 h-6 bg-orange-500 rounded-full block"></span>
                        <span className="w-6 h-6 bg-black rounded-full block"></span>
                    </div>
                    <div className="flex space-x-4 mt-8">
                        <button className="bg-navbarLigthBlue text-white px-4 py-2 rounded hover:bg-blue-600">Select Options</button>
                        <button className="bg-white border rounded-full hover:text-gray-700 p-2">
                            <i className="far fa-lg fa-heart"></i>
                        </button>
                        <button className="bg-white border rounded-full hover:text-gray-700 p-2">
                            <i className="fas fa-lg fa-shopping-cart"></i>
                        </button>
                        <button className="bg-white border rounded-full hover:text-gray-700 p-2">
                            <i className="far fa-lg fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSlider;