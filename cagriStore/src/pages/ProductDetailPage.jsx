import React from 'react'
import Header from '../layout/Header'
import Footer from '../components/generalComponents/Footer'
import Breadcrumb from '../components/generalComponents/Breadcrumb'
import BrandLogos from '../components/contactPageComponents/BrandLogos'
import ProductDescriptionCard from '../components/shopPageComponents/shopDetailPageComponents/ProductDescriptionCard'
import BestSellerProducts from '../layout/BestSellerProducts'
import ProductDetailSlider from '../components/shopPageComponents/shopDetailPageComponents/ProductDetailSlider'
import { useSelector } from "react-redux";


function ProductDetailPage() {

  const products = useSelector((store) => store.product.productList);
  console.log(products)





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