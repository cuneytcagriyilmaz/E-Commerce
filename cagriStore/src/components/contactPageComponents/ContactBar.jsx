import React from 'react'
import { Link } from 'react-router-dom';

function ContactBar() {

    return (
        <div className='bg-mainBackgroundWhite md:bg-white'>
            <div className="flex flex-col text-center  items-center md:items-stretch justify-between p-8 mx-auto gap-2 md:gap-44 w-[92%]  mb-10    ">


                <div className="relative  ">
                    <h4 className="font-bold mb-4 text-textColorDarkGray ">VISIT OUR OFFICE</h4>
                    <h2 className="text-4xl font-bold mb-4 text-textColorDarkGray ">We help small businesses with big ideas</h2>

                </div>

                <div className="flex-col flex md:flex-row gap-4 md:justify-between   text-textColorDarkGray font-semibold ">

                    <div className='flex flex-col bg-white p-8'>
                        <div className='flex flex-col'>
                            <i className="fa-solid fa-phone fa-2xl mb-8 text-navbarLigthBlue"> </i>
                            <p className=' mb-4'>georgia.young@example.com</p>
                            <p className='mb-4'>georgia.young@ple.com</p>


                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-bold'>Get Support</h1>
                            <button className=" md:rounded-full rounded-lg m-4 w-[157px] text-buttonFullBlue  border-2 border-buttonFullBlue  py-2 px-4  ">
                                Submit Request
                            </button>

                        </div>

                    </div>

                    <div className='flex flex-col bg-textColorDarkGray  p-8'>
                        <div className='flex flex-col'>
                            <i className="text-navbarLigthBlue mb-8 fa-solid fa-location-dot fa-2xl"></i>

                            <p className='mb-4 text-white'>georgia.young@example.com</p>
                            <p className='mb-4 text-white'>georgia.young@ple.com</p>


                        </div>
                        <div className='flex flex-col '>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className=' text-white font-bold'>Get Support</h1>
                                <button className=" md:rounded-full rounded-lg m-4 w-[157px]  text-buttonFullBlue  border-2 border-buttonFullBlue   py-2 px-4  ">
                                    Submit Request
                                </button>

                            </div>

                        </div> border-buttonFullBlue

                    </div>


                    <div className='flex flex-col   bg-white p-8'>
                        <div className='flex flex-col '>
                            <i className="md:fa-solid md:fa-envelope fa-regular fa-paper-plane fa-2xl text-navbarLigthBlue mb-8"></i>

                            <p className='mb-4'>georgia.young@example.com</p>
                            <p className='mb-4'>georgia.young@ple.com</p>


                        </div>
                        <div className='flex flex-col '>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='font-bold'>Get Support</h1>
                                <button className=" md:rounded-full rounded-lg  m-4 w-[157px]  text-buttonFullBlue  border-2 border-buttonFullBlue    py-2 px-4  ">
                                    Submit Request
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default ContactBar