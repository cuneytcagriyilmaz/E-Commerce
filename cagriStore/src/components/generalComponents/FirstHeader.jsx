import React, { useState } from 'react';

function FirstHeader() {
    return (
        <header className="bg-gray-800 hidden lg:block">

            <div className="px-4 py-2 justify-between flex items-center w-[92%] mx-auto">
                <div className="flex items-center space-x-4">
                    <span className="text-white text-sm">
                        <i className="fa-solid fa-phone text-white"></i>
                        <span className="text-white text-sm"> (225) 555-0118</span>
                    </span>
                    <span className="mr-6">
                        <i className="fa-solid fa-envelope cursor-pointer text-white"></i>
                        <span className="text-white text-sm"> michelle.rivera@example.com</span>
                    </span>
                </div>

                <div className="flex items-center space-x-4 text-white text-sm">
                    Follow Us and get a chance to win 80% off
                </div>
                <div className="flex items-center space-x-4 text-white text-sm">
                    <span className="flex items-center">
                        <span className="mr-6">Follow Us:</span>
                        <span className="mr-6">
                            <i className="fa-brands fa-instagram text-white cursor-pointer"></i>
                        </span>
                        <span className="mr-6">
                            <i className="fa-brands fa-youtube text-white cursor-pointer"></i>
                        </span>
                        <span className="mr-6">
                            <i className="fa-brands fa-facebook text-white cursor-pointer"></i>
                        </span>
                        <span className="">
                            <i className="fa-brands fa-twitter text-blue-50 cursor-pointer"></i>
                        </span>
                    </span>
                </div>
                <i className="fas fa-bars text-white md:hidden cursor-pointer"></i>
            </div>
        </header>
    )
}
export default FirstHeader