import React from 'react'

function HomeContainerFluid() {

    const mobileView = (
        <div className=" flex flex-col items-center justify-center bg-mainBackgroundWhite">
            <div className="max-w-sm pt-16 mt-16 relative">
                <div className="p-6 text-white text-center">
                    <p className="text-sm text-textColorH2">SUMMER 2020</p>
                    <h2 className="text-2xl font-bold mt-2 text-textColorDarkGray">Part of the Neural Universe</h2>
                    <p className="mt-4 text-textColorLightGray">We know how large objects will act, but things on a small scale.</p>
                </div>

                <div className="p-6 flex flex-col justify-between items-center gap-3 text-white text-center">
                    <button className="bg-buttonFullBlue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        BUY NOW
                    </button>
                    <button className="text-buttonFullBlue border-[1px] border-buttonFullBlue hover:bg-blue-600   font-bold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>
                <div className="relative">
                    <img src='/cagristore/src/assets/img/homeContainerFluid/homeContainerFluid.png' alt="ContainerFluid" className="h-4/5 w-full object-cover" />
                </div>
            </div>
        </div>
    );


    const desktop = (
        <div className="pt-16 pb-2 flex flex-col items-center justify-center bg-mainBackgroundWhite">
            <div className="flex flex-row items-center justify-center">
                <div className="pt-6 relative w-1/2 flex items-center justify-center">
                    <img src='/cagristore/src/assets/img/homeContainerFluid/homeContainerFluid.png' className="h-full object-cover" />
                </div>
                <div className="p-6 text-white justify-start text-left w-1/2">
                    <p className="text-sm text-textColorH2">SUMMER 2020</p>
                    <h2 className="text-2xl font-bold mt-2 text-textColorDarkGray">Part of the Neural Universe</h2>
                    <p className="mt-6 text-textColorLightGray">We know how large objects will act, but things on a small scale.</p>

                    <div className=" pt-6 flex flex-row  items-center gap-3 text-white text-center">
                        <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            BUY NOW
                        </button>
                        <button className="text-green-500 border-[1px] border-green-500 hover:bg-green-500   font-bold py-2 px-4 rounded">
                            Learn More
                        </button>
                    </div>

                </div>



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
    )
}

export default HomeContainerFluid