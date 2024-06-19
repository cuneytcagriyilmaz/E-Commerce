
// import ProductCard from '../components/shopPageComponents/shopDetailPageComponents/ProductCard';



// function BestSellerProducts({ products, title, subtitle, description, isInsideProductDescription }) {

//     function isInsideTrue() {

//         return (
//             <div className='bg-footerLightGray'>
//                 <div className="p-8 mx-auto ">
//                     {subtitle && <h1 className="text-xl sm:text-4xl text-textColorDarkGray md:text-start font-bold text-center md:ml-48 md:mr-48 mb-4 border-b-2">{subtitle}</h1>}
//                     <div className="flex flex-wrap justify-center gap-4">
//                         {products.map((product, index) => (
//                             <ProductCard key={index} product={product} isInsideProductDescription={true} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         );
//     };


//     function isInsideFalse() {
//         return (
//             <div className="p-8 mx-auto">
//                 {title && <h2 className="text-lg sm:text-2xl text-textColorLightGray text-center mb-2">{title}</h2>}
//                 {subtitle && <h1 className="text-xl sm:text-4xl text-textColorDarkGray font-bold text-center mb-4">{subtitle}</h1>}
//                 {(description || description === '') && <p className="text-sm sm:text-base text-center text-textColorLightGray mb-8">{description}</p>}
//                 <div className="flex flex-wrap justify-center gap-4">
//                     {products.map((product, index) => (
//                         <ProductCard key={index} product={product} />
//                     ))}
//                 </div>
//             </div>
//         );
//     };


//     return (
//         <div>
//             {isInsideProductDescription ? isInsideTrue() : isInsideFalse()}

//         </div>
//     );
// }



// export default BestSellerProducts;




import ProductCard from '../components/shopPageComponents/shopDetailPageComponents/ProductCard';

function BestSellerProducts({ products, title, subtitle, description, isInsideProductDescription }) {

    // Function to render when isInsideProductDescription is true
    const renderInsideTrue = () => (
        <div className='bg-footerLightGray'>
            <div className="p-8 mx-auto">
                {subtitle && <h1 className="text-xl sm:text-4xl text-textColorDarkGray md:text-start font-bold text-center md:ml-48 md:mr-48 mb-4 border-b-2">{subtitle}</h1>}
                <div className="flex flex-wrap justify-center gap-4">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} isInsideProductDescription={true} />
                    ))}
                </div>
            </div>
        </div>
    );

    // Function to render when isInsideProductDescription is false or undefined
    const renderInsideFalse = () => (
        <div className="p-8 mx-auto">
            {title && <h2 className="text-lg sm:text-2xl text-textColorLightGray text-center mb-2">{title}</h2>}
            {subtitle && <h1 className="text-xl sm:text-4xl text-textColorDarkGray font-bold text-center mb-4">{subtitle}</h1>}
            {(description || description === '') && <p className="text-sm sm:text-base text-center text-textColorLightGray mb-8">{description}</p>}
            <div className="flex flex-wrap justify-center gap-4">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );

    // Determine which layout to render based on isInsideProductDescription prop
    const renderContent = () => {
        if (isInsideProductDescription) {
            return renderInsideTrue();
        } else {
            return renderInsideFalse();
        }
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
}

export default BestSellerProducts;
