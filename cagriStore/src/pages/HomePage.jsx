import React from 'react'
import Header from '../layout/Header'
import EditorPick from '../layout/EditorPick'
import BestSellerProducts from '../layout/BestSellerProducts'
import Slider from '../components/generalComponents/Slider'
import HomeContainerFluid from '../layout/HomeContainerFluid'
import Footer from '../components/generalComponents/Footer'
import FeaturedPosts from '../layout/FeaturedPosts'
import Carousel from '../components/HomePageComponents/Carousel'
import { useSelector } from 'react-redux'

function HomePage() {
    const products = useSelector((store) => store.product.productList);


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