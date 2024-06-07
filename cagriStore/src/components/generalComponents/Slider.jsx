import React, { useState } from 'react'


const imageUrls = [
    'img/header/ContainerFluidCarouselHeroFirst.png',
    'img/header/ContainerFluidCarouselHeroFirst.png',

]


function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
    };

    const mobileView = (
        <div className="pt-16 flex flex-col items-center justify-center bg-sliderBgColorGreen">
            <div className="max-w-sm pt-16 mt-16 relative">
                <div className="p-6 text-white text-center">
                    <p className="text-sm">SUMMER 2020</p>
                    <h2 className="text-2xl font-bold mt-2">Vita Classic Product</h2>
                    <p className="mt-4">We know how large objects will act, but things on a small scale.</p>
                    <p className="text-lg font-bold mt-4">$16.48</p>
                </div>

                <div className="p-6 flex flex-row justify-between items-center text-white text-center">
                    <button onClick={handlePrevClick} className="text-white text-2xl">
                        <i className="fa-solid fa-chevron-left fa-2xl text-white"></i>

                    </button>
                    <button className="bg-buttonBgColorGreem hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        ADD TO CART
                    </button>
                    <button onClick={handleNextClick} className="text-white text-2xl">
                        <i className="fa-solid fa-chevron-right fa-2xl text-white"></i>

                    </button>
                </div>
                <div className="relative">
                    <img src={imageUrls[currentIndex]} alt="Product" className="h-4/5 w-full object-cover" />
                </div>
            </div>
            <div className="flex justify-center mt-4 mb-4 space-x-2">
                {imageUrls.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-10 ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                    ></div>
                ))}
            </div>
        </div>
    );

    const desktop = (
        <div className="pt-16 pb-2 flex flex-col items-center justify-center bg-sliderBgColorGreen">
            <div className="flex flex-row items-center justify-center">
                <div className="p-6 text-white justify-start text-left w-1/2">
                    <p className="text-base">SUMMER 2020</p>
                    <h2 className="font-bold mt-2 text-4xl">Vita Classic Product</h2>
                    <p className="mt-6">We know how large objects will act, We know how are objects will act, We know</p>
                    <p className="text-lg font-bold mt-6">$16.48  <button className="bg-green-500 hover:bg-green-600 ml-4 text-white font-bold py-2 px-4 rounded mt-6">
                        ADD TO CART
                    </button></p>

                </div>
                <button onClick={handlePrevClick} className="block text-white text-2xl absolute left-0">
                    <i className="fa-solid fa-chevron-left fa-2xl text-white"></i>

                </button>
                <div className="pt-6 relative w-1/2 flex items-center justify-center">
                    <img src={imageUrls[currentIndex]} alt="Product" className="h-full object-cover" />
                </div>
                <button onClick={handleNextClick} className="block text-white text-2xl absolute right-4">
                    <i className="fa-solid fa-chevron-right fa-2xl text-white"></i>

                </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                {imageUrls.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-10 ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                    ></div>
                ))}
            </div>
        </div>
    );

    return (
        <>

            <div className="sm:hidden">
                {mobileView}
            </div>

            <div className="hidden sm:block">
                {desktop}
            </div>
        </>


    );
}

export default Slider;



