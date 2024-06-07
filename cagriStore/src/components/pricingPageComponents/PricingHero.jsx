// import React, { useState } from 'react';

// function PricingHero() {
//     const [isYearly, setIsYearly] = useState(false);

//     return (
//         <div className=" w-[92%] p-8 mx-auto ">
//             <div className=" flex flex-col items-center xl:items-stretch justify-between py-16">
//                 <div className="text-center mb-10 flex flex-col">
//                     <h1 className="text-3xl font-bold">Pricing</h1>
//                     <p className="text-gray-500">
//                         Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
//                     </p>
//                     <div className="flex items-center justify-center mt-4">
//                         <button
//                             className='px-4 py-2 rounded-l text-lg'
//                             onClick={() => setIsYearly(false)}
//                         >
//                             Monthly
//                         </button>

//                         <i className={`fas ${isYearly ? 'fa-toggle-on' : 'fa-toggle-off'} mx-2 text-3xl cursor-pointer`} onClick={() => setIsYearly(!isYearly)}></i>

//                         <button
//                             className='px-4 py-2 rounded-r text-lg'
//                             onClick={() => setIsYearly(true)}
//                         >
//                             Yearly
//                         </button>
//                         <span className="px-4 py-2 font-semibold text-blue-400 bg-saveBColor rounded-full ml-4">
//                             Save 25%
//                         </span>
//                     </div>
//                 </div>
//                 <div className=" justify-center flex  flex-col xl:flex-row xl:justify-between gap-10 xl:gap-1">
//                     <div className="bg-white border border-buttonFullBlue shadow-md xl:rounded-lg p-32 w-96">
//                         <h2 className="text-xl font-bold mb-4 text-center">FREE</h2>
//                         <p className="text-gray-500 mb-4 text-center">Organize across all apps by hand</p>
//                         <p className="text-3xl font-bold mb-4 text-center text-lightBluePricing">0$ <span className="text-base text-lightBluePricing ">Per Month</span></p>
//                         <ul className="mb-6">
//                             <li className="flex items-center text-buttonBgColorGreem mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl "></i>Unlimited product updates
//                             </li>
//                             <li className="flex items-center text-buttonBgColorGreem mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl "></i>Unlimited product updates
//                             </li>
//                             <li className="flex items-center text-buttonBgColorGreem mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl "></i>Unlimited product updates
//                             </li>
//                             <li className="flex items-center  mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl text-textColorLightGray "></i>1GB Cloud storage
//                             </li>
//                             <li className="flex items-center  gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl text-textColorLightGray "></i>Email and community support
//                             </li>
//                         </ul>
//                         <button className="w-full bg-textColorDarkGray text-white py-2 rounded">Try for free</button>
//                     </div>
//                     <div className="bg-textColorDarkGray border   border-buttonFullBlue text-white shadow-md xl:rounded-lg p-32  w-96 ">
//                         <h2 className="text-xl font-bold mb-4 text-center">STANDARD</h2>
//                         <p className="text-gray-200 mb-4 text-center">Organize across all apps by hand</p>
//                         <p className="text-3xl font-bold mb-4 text-center text-lightBluePricing">9.99$ <span className="text-base text-lightBluePricing ">Per Month</span></p>
//                         <ul className="mb-6">
//                             <li className="flex items-center mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl text-buttonBgColorGreem "></i>Unlimited product updates
//                             </li>
//                             <li className="flex items-center mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl  text-buttonBgColorGreem"></i>Unlimited product updates
//                             </li>
//                             <li className="flex items-center mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl text-textColorLightGray"></i>Unlimited product updates
//                             </li>
//                             <li className="flex items-center mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl text-textColorLightGray"></i>1GB Cloud storage
//                             </li>
//                             <li className="flex items-center gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl text-textColorLightGray  "></i>Email and community support
//                             </li>
//                         </ul>
//                         <button className="w-full bg-buttonFullBlue py-2 xl:rounded">Try for free</button>
//                     </div>
//                     <div className="bg-white border border-buttonFullBlue shadow-md rounded-lg p-32 w-96">
//                         <h2 className="text-xl font-bold mb-4 text-center">PREMIUM</h2>
//                         <p className="text-gray-500 mb-4 text-center">Organize across all apps by hand</p>
//                         <p className="text-3xl font-bold mb-4 text-center text-lightBluePricing">19.99$ <span className="text-base text-lightBluePricing ">Per Month</span></p>
//                         <ul className="mb-6">
//                             <li className="flex items-center text-buttonBgColorGreem mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl"></i>Unlimited product updates
//                             </li>
//                             <li className="flex items-center text-buttonBgColorGreem mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl"></i>Unlimited product updates
//                             </li>
//                             <li className="flex items-center text-buttonBgColorGreem mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl"></i>Unlimited product updates
//                             </li>
//                             <li className="flex items-center  mb-2 gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl text-textColorLightGray"></i>1GB Cloud storage
//                             </li>
//                             <li className="flex items-center  gap-2">
//                                 <i class="fa-solid fa-circle-check fa-2xl text-textColorLightGray "></i>Email and community support
//                             </li>
//                         </ul>
//                         <button className="w-full bg-buttonFullBlue text-white py-2 rounded">Try for free</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PricingHero;




// PricingHero.jsx
import React, { useState } from 'react';
import PricingCard from './PricingCard';

function PricingHero() {
    const [isYearly, setIsYearly] = useState(false);

    const pricingPlans = [
        {
            name: "FREE",
            description: "Organize across all apps by hand",
            price: "0",
            priceUnit: "$",
            period: "Per Month",
            features: [
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "1GB Cloud storage", color: "text-textColorLightGray" },
                { text: "Email and community support", color: "text-textColorLightGray" },
            ],
            buttonClass: "bg-textColorDarkGray text-white",
        },
        {
            name: "STANDARD",
            description: "Organize across all apps by hand",
            price: "9.99",
            priceUnit: "$",
            period: "Per Month",
            features: [
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "1GB Cloud storage", color: "text-textColorLightGray" },
                { text: "Email and community support", color: "text-textColorLightGray" },
            ],
            buttonClass: "bg-buttonFullBlue",
        },
        {
            name: "PREMIUM",
            description: "Organize across all apps by hand",
            price: "19.99",
            priceUnit: "$",
            period: "Per Month",
            features: [
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "Unlimited product updates", color: "text-buttonBgColorGreem" },
                { text: "1GB Cloud storage", color: "text-textColorLightGray" },
                { text: "Email and community support", color: "text-textColorLightGray" },
            ],
            buttonClass: "bg-buttonFullBlue text-white",
        },
    ];


    return (
        <div className="w-[92%] p-8 mx-auto">
            <div className="flex flex-col items-center xl:items-stretch  gap-2 justify-between py-16">
                <div className="text-center mb-10 flex flex-col gap-2 ">
                    <h1 className="text-3xl font-bold">Pricing</h1>
                    <p className="text-textColorLightGray">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                    <div className="flex items-center justify-center mt-4">
                        <button
                            className='px-4 py-2 rounded-l text-lg'
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </button>

                        <i className={`fas ${isYearly ? 'fa-toggle-on' : 'fa-toggle-off'} mx-2 text-3xl text-blue-400 cursor-pointer`} onClick={() => setIsYearly(!isYearly)}></i>


                        <button
                            className='px-4 py-2 rounded-r text-lg'
                            onClick={() => setIsYearly(true)}
                        >
                            Yearly
                        </button>
                        <span className="px-4 py-2 font-semibold text-blue-400 bg-saveBColor rounded-full ml-4">
                            Save 25%
                        </span>
                    </div>
                </div>
                <div className="flex justify-center flex-col xl:flex-row  xl:justify-between gap-10 xl:gap-1">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PricingHero;
