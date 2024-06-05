import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsContent = () => {
    return (
        <div className="flex flex-col md:flex-row text-center md:text-start items-center justify-between p-8 mx-auto w-[92%] bg-white relative">
            <div className="flex-1  ">

                <p className="mb-4 pt-4 font-semibold text-aboutRed">Problems trying</p>

                <h4 className="  font-bold mb-4 text-xl text-textColorDarkGray pt-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h4>


            </div>
            <div className="relative flex-1">
                <p className="mb-4 pt-4 text-textColorLightGray">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>


            </div>
        </div>
    );
};

export default AboutUsContent;
