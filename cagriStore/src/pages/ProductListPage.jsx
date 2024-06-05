import React, { useState } from 'react'
import Header from '../layout/Header'
import Footer from '../components/generalComponents/Footer'
import Breadcrumb from '../components/generalComponents/Breadcrumb'
import ShopCard from '../components/shopPageComponents/ShopCard'
import BestSellerProducts from '../layout/BestSellerProducts'
import FilterComponent from '../components/shopPageComponents/FilterComponent'
import Pagination from '../components/shopPageComponents/Pagination'
import BrandLogos from '../components/contactPageComponents/BrandLogos'

function ProductListPage() {

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;



    const products = [
        {
            id: 1,
            image: "src/assets/img/productCardsShop/productCardsShop1.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            id: 2,
            image: "src/assets/img/productCardsShop/productCardsShop2.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            id: 3,
            image: "src/assets/img/productCardsShop/productCardsShop3.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            id: 4,
            image: "src/assets/img/productCardsShop/productCardsShop4.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            id: 5,
            image: "src/assets/img/productCardsShop/productCardsShop5.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            id: 6,
            image: "src/assets/img/productCardsShop/productCardsShop6.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            id: 7,
            image: "src/assets/img/productCardsShop/productCardsShop7.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            id: 8,
            image: "src/assets/img/productCardsShop/productCardsShop8.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            id: 9,
            image: "src/assets/img/productCardsShop/productCardsShop9.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            id: 10,
            image: "src/assets/img/productCardsShop/productCardsShop10.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            id: 11,
            image: "src/assets/img/productCardsShop/productCardsShop11.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            id: 12,
            image: "src/assets/img/productCardsShop/productCardsShop12.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        }

    ];

    const totalPages = Math.ceil(products.length / productsPerPage);
    const displayedProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);



    return (
        <>

            <Header />
            <Breadcrumb />
            <ShopCard />
            <FilterComponent totalResults={products.length} />
            <BestSellerProducts products={products} />
            <Pagination currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage} />
            <BrandLogos />
            <Footer />


        </>
    )
}

export default ProductListPage



