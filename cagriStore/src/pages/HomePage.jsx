import React from 'react'
import Header from '../layout/Header'
import EditorPick from '../layout/EditorPick'
import BestSellerProducts from '../layout/BestSellerProducts'
import Slider from '../components/Slider'
import HomeContainerFluid from '../layout/HomeContainerFluid'
import Footer from '../components/Footer'
import FeaturedPosts from '../layout/FeaturedPosts'
import Carousel from '../components/Carousel'

function HomePage() {
    const products = [
        {
            image: "/src/assets/img/bestSellerProduct/1.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            image: "/src/assets/img/bestSellerProduct/2.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            image: "/src/assets/img/bestSellerProduct/3.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            image: "/src/assets/img/bestSellerProduct/4.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            image: "/src/assets/img/bestSellerProduct/5.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            image: "/src/assets/img/bestSellerProduct/6.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            image: "/src/assets/img/bestSellerProduct/7.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        },
        {
            image: "/src/assets/img/bestSellerProduct/8.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
            colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
        }

    ];

    return (
        <div>
            <div className="flex flex-col ">

                <Header />
                <Carousel />
                <EditorPick />
                <BestSellerProducts products={products} title="Featured Products" subtitle="BESTSELLER PRODUCTS" description="Problems trying to resolve the conflict between" isInsideProductDescription={false} />
                <Slider />
                <HomeContainerFluid />
                <FeaturedPosts />
                <Footer />


            </div>

        </div>
    )
}

export default HomePage