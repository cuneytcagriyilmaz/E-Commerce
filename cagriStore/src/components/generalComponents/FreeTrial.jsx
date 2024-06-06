import React from 'react'

function FreeTrial() {
    return (
        <div className=" bg-white mb-6">
            <div className="flex flex-col text-center items-center justify-between p-8 mx-auto w-[92%]  relative">
                <div className="text-center gap-6">
                    <div className="relative mb-4">
                        <div className=" mb-6">
                            <i className="fa-solid fa-arrow-turn-down fa-2xl text-navbarLigthBlue" ></i>
                        </div>
                        <h1 className="text-3xl font-bold text-textColorDarkGray mb-4">Start your 14 days free trial</h1>

                        <h2 className=" mt-6 text-sm font-semibold text-textColorLightGray">Met minim Mollie non desert Alamo est sit cliquey dolor
                            do met sent. RELIT official consequent.</h2>
                    </div>
                    <button className="bg-navbarLigthBlue text-white px-6 py-2 rounded-lg font-semibold">
                        Try it free now
                    </button>
                    <div className="flex pt-4 pb-8 text-2xl gap-3 mt-3 items-center justify-center">
                        <i className="fa-brands fa-twitter text-twitterIconBlue  cursor-pointer"></i>

                        <i className="fa-brands fa-square-facebook text-facebookIconBlue  cursor-pointer"></i>
                        <i className="fa-brands fa-instagram text-black cursor-pointer"></i>
                        <i className="fa-brands fa-linkedin text-linkedinIconBlue cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeTrial