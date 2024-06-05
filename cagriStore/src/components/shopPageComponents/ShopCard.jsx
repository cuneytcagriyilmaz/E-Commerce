import React from 'react';

const shopItems = [
    {
        image: "src/assets/img/desktopShopCard/shopCard1.jpeg",
        title: "CLOTHS",
        description: "5 Item"
    },
    {
        image: "src/assets/img/desktopShopCard/shopCard2.jpeg",
        title: "CLOTHS",
        description: "5 Item"
    },
    {
        image: "src/assets/img/desktopShopCard/shopCard3.jpeg",
        title: "CLOTHS",
        description: "5 Item"
    },
    {
        image: "src/assets/img/desktopShopCard/shopCard4.jpeg",
        title: "CLOTHS",
        description: "5 Item"
    },
    {
        image: "src/assets/img/desktopShopCard/shopCard5.jpeg",
        title: "CLOTHS",
        description: "5 Item"
    }
];

function ShopCard() {
    return (
        <div className="flex flex-wrap bg-mainBackgroundWhite justify-center">
            <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:w-[92%] mx-auto">
                {shopItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-64 mx-4 my-4">
                        <div className="relative">
                            <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                                <h2 className="text-xl font-bold">{item.title}</h2>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopCard;
