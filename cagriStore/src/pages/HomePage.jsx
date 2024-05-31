import React from 'react'
import Header from '../layout/Header'
import EditorPick from '../layout/EditorPick'
import BestSellerProducts from '../layout/BestSellerProducts'
import Slider from '../components/Slider'
import HomeContainerFluid from '../layout/HomeContainerFluid'
import Footer from '../components/Footer'
import FeaturedPosts from '../layout/FeaturedPosts'

function HomePage() {

    return (
        <div>
            <div className="flex flex-col ">

                <Header />
                <EditorPick />
                <BestSellerProducts />
                <Slider />
                <HomeContainerFluid />
                <FeaturedPosts />
                <Footer />


            </div>

        </div>
    )
}

export default HomePage