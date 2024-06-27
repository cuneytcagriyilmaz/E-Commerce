import React from 'react'
import Header from '../layout/Header'
import Footer from '../components/generalComponents/Footer'
import ShoppingCart from '../components/shoppingCartComponent/ShoppingCart'

function ShoppingCartPages() {
    return (
        <div>
            <Header />
            <ShoppingCart />
            <Footer />
        </div>
    )
}

export default ShoppingCartPages