import React from 'react'
import Header from '../layout/Header'
import Footer from '../components/generalComponents/Footer'
import Breadcrumb from '../components/generalComponents/Breadcrumb'
import BrandLogos from '../components/contactPageComponents/BrandLogos'
import ProductDescriptionCard from '../components/shopPageComponents/shopDetailPageComponents/ProductDescriptionCard'
import BestSellerProducts from '../layout/BestSellerProducts'
import ProductDetailSlider from '../components/shopPageComponents/shopDetailPageComponents/ProductDetailSlider'

function ProductDetailPage() {
  const products = [
    {
      id: 1,
      image: "/src/assets/img/productCardsShop/productCardsShop1.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 2,
      image: "/src/assets/img/productCardsShop/productCardsShop2.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 3,
      image: "/src/assets/img/productCardsShop/productCardsShop3.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 4,
      image: "/src/assets/img/productCardsShop/productCardsShop4.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 5,
      image: "/src/assets/img/productCardsShop/productCardsShop5.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 6,
      image: "/src/assets/img/productCardsShop/productCardsShop6.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 7,
      image: "/src/assets/img/productCardsShop/productCardsShop7.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 8,
      image: "/src/assets/img/productCardsShop/productCardsShop8.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 9,
      image: "/src/assets/img/productCardsShop/productCardsShop9.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 10,
      image: "/src/assets/img/productCardsShop/productCardsShop10.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 11,
      image: "/src/assets/img/productCardsShop/productCardsShop11.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 12,
      image: "/src/assets/img/productCardsShop/productCardsShop12.jpeg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    }

  ];

  return (
    <div>
      <Header />
      <Breadcrumb fromProductDetailPage />
      <ProductDetailSlider />
      <ProductDescriptionCard />
      <BestSellerProducts products={products} title="Featured Products" subtitle="BESTSELLER PRODUCTS" description="Problems trying to resolve the conflict between" isInsideProductDescription={true} />
      <BrandLogos />
      <Footer />
    </div>
  )
}

export default ProductDetailPage