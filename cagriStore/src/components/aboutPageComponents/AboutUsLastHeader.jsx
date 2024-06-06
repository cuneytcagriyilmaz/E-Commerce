import React from 'react'

function AboutUsLastHeader() {
    return (
        <div className="flex flex-col md:flex-row text-center md:text-start items-center justify-between m-8 mx-auto  bg-aboutUsLastHeaderColour relative">
            <div className="flex-1  ">
                <h4 className=" w-[92%] mx-auto font-bold mb-4 text-white  p-8 ">WORK WITH US</h4>
                <h2 className=" w-[92%] mx-auto text-4xl font-bold mb-4  p-8  text-white ">Now Let’s grow Yours</h2>
                <p className="  w-[92%] mx-auto mb-4  p-8  text-white">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>

                <div className="flex  w-[92%] mx-auto p-8 space-x-4   justify-center text-textColorDarkGray md:justify-start">
                    <button className=" text-white border-2 border-white px-6 py-2 rounded-lg font-semibold">

                        Button
                    </button>
                </div>
            </div>
            <div className="relative flex-1 hidden md:block">
                <img src="src/assets/img/aboutUs/aboutUsLastHeader.jpeg" className="w-full " />

            </div>
        </div>
    )
}

export default AboutUsLastHeader