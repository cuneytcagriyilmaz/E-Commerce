import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

function ProductDescriptionCard() {

    const products = useSelector((state) => state.product.productList);
    const params = useParams();
    console.log(params);
    const productId = Number(params.id);
    console.log(productId);
    const product = products.find(item => item.id === productId);
    console.log(product.image)



    return (
        <div className="bg-white ">

            <div className="  py-2 flex-col justify-between flex items-center md:border-t-2 w-[92%]    mx-auto ">

                <div className='flex flex-row gap-2 text-sm text-textColorLightGray mb-4 '>
                    <div className='underline md:text-lg'>Description</div>
                    <div className='font-semibold md:text-lg'>Additional Info </div>
                    <div className='font-semibold md:text-lg'>Reviews</div>
                    <span className='text-sliderBgColorGreen md:text-lg'> (0)</span>

                </div>

                <div className='flex flex-col md:flex-row gap-4 w-[92%]   '>

                    <div className='flex flex-col md:flex-row gap-4    '>
                        <div className="p-4 items-end justify-end">
                            <img src={product.image} className="border-none shadow-product-description-image-shadow rounded-md object-cover h-[85%] w-auto" />
                        </div>
                    </div>




                    <div className="mt-4 md:items-end justify-end md:w-1/3">
                        <h2 className="text-xl font-bold mb-2 ">the quick fox jumps over </h2>
                        <p className="text-textColorLightGray mb-2">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p className="text-textColorLightGray mb-2">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p className="text-textColorLightGray mb-2">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>

                    <div className="mt-4 flex flex-col md:items-end md:w-1/3">
                        <div className="mt-4 flex flex-col">
                            <h1 className='text-3xl text-black font-bold mb-2'>the quick fox jumps over </h1>
                            <div className=' text-textColorLightGray mb-2 font-semibold'>  <i className="fa-solid fa-chevron-right"></i> the quick fox jumps over the lazy dog</div>
                            <div className=' text-textColorLightGray mb-2 font-semibold'> <i className="fa-solid fa-chevron-right"></i> the quick fox jumps over the lazy dog</div>
                            <div className=' text-textColorLightGray mb-2 font-semibold'> <i className="fa-solid fa-chevron-right"></i> the quick fox jumps over the lazy dog</div>
                            <div className=' text-textColorLightGray mb-2 font-semibold'> <i className="fa-solid fa-chevron-right"></i> the quick fox jumps over the lazy dog</div>
                        </div>
                        <div className="mt-4 flex flex-col ">
                            <h1 className='text-3xl text-black font-bold mb-2'>the quick fox jumps over </h1>
                            <div className=' text-textColorLightGray mb-2 font-semibold'> <i className="fa-solid fa-chevron-right"></i> the quick fox jumps over the lazy dog</div>
                            <div className=' text-textColorLightGray mb-2 font-semibold'> <i className="fa-solid fa-chevron-right"></i> the quick fox jumps over the lazy dog</div>
                            <div className=' text-textColorLightGray mb-2 font-semibold'> <i className="fa-solid fa-chevron-right"></i>  the quick fox jumps over the lazy dog</div>
                        </div>
                    </div>

                </div>




            </div>


        </div>
    );
}

export default ProductDescriptionCard;
