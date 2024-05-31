import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="bg-footerLightGray md:border-b-2 ">
                <div className="mx-auto px-14 py-5 md:container ">
                    <div className="flex flex-col items-start md:flex-row md:justify-between md:flex-1 md:items-end">
                        <div className="flex pt-6 w-full">
                            <h1 className="w-[108px] h-[32px] font-bold text-2xl leading-[32px]">Bandage</h1>
                        </div>
                        <div className="flex flex-row pt-2 gap-4">
                            <i className="fa-brands fa-instagram text-buttonFullBlue text-xl cursor-pointer"></i>
                            <i className="fa-brands fa-facebook text-buttonFullBlue text-xl cursor-pointer"></i>
                            <i className="fa-brands fa-twitter text-buttonFullBlue text-xl cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto px-14 py-6 md:container">
                    <div className="flex flex-col items-start justify-center  md:flex-row md:justify-between">
                        <div className="w-full gap-2 ">
                            <h2 className="font-bold">Company Info</h2>
                            <Link to="/about-us" className="text-textColorLightGray block">About Us</Link>
                            <Link to="/career" className="text-textColorLightGray block">Career</Link>
                            <Link to="/we-are-hiring" className="text-textColorLightGray block">We are hiring</Link>
                            <Link to="/blog" className="text-textColorLightGray block">Blog</Link>
                        </div>
                        <div className="w-full gap-2">
                            <h2 className="font-bold">Legal</h2>
                            <Link to="/about-us" className="text-textColorLightGray block">About Us</Link>
                            <Link to="/career" className="text-textColorLightGray block">Career</Link>
                            <Link to="/we-are-hiring" className="text-textColorLightGray block">We are hiring</Link>
                            <Link to="/blog" className="text-textColorLightGray block">Blog</Link>
                        </div>
                        <div className="w-full gap-2">
                            <h2 className="font-bold">Features</h2>
                            <Link to="/business-marketing" className="text-textColorLightGray block">Business Marketing</Link>
                            <Link to="/user-analytic" className="text-textColorLightGray block">User Analytic</Link>
                            <Link to="/live-chat" className="text-textColorLightGray block">Live Chat</Link>
                            <Link to="/unlimited-support" className="text-textColorLightGray block">Unlimited Support</Link>
                        </div>
                        <div className="w-full gap-2">
                            <h2 className="font-bold">Resources</h2>
                            <Link to="/ios-android" className="text-textColorLightGray block">IOS & Android</Link>
                            <Link to="/watch-a-demo" className="text-textColorLightGray block">Watch a Demo</Link>
                            <Link to="/customers" className="text-textColorLightGray block">Customers</Link>
                            <Link to="/api" className="text-textColorLightGray block">API</Link>
                        </div>
                        <div className="w-full gap-2">
                            <h2 className="font-bold">Get In Touch</h2>
                            <div className="flex flex-row ">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                />
                                <button className="bg-buttonFullBlue hover:bg-buttonFullBlueHover text-white font-bold py-2 px-4 rounded">
                                    Subscribe
                                </button>
                            </div>
                            <p className="pt-2 pb-4 text-textColorLightGray text-sm leading-[28px]">
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-full items-center justify-center pt-6 pb-6 text-center bg-footerLightGray md:text-start">
                <div className="md:mx-auto md:px-14 md:py-6 md:container">
                    <h1 className='text-textColorLightGray font-semibold md:hidden'>Made With Love By</h1>
                    <h1 className='text-textColorLightGray font-semibold md:hidden'>Finland All Right Reserved</h1>
                    <h1 className='hidden md:block text-textColorLightGray md:font-semibold'>Made With Love By Finland All Right Reserved</h1>
                </div>
            </div>
        </>
    );
}

export default Footer;
