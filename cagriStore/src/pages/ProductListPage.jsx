
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../layout/Header';
import Footer from '../components/generalComponents/Footer';
import Breadcrumb from '../components/generalComponents/Breadcrumb';
import ShopCard from '../components/shopPageComponents/ShopCard';
import BestSellerProducts from '../layout/BestSellerProducts';
import FilterComponent from '../components/shopPageComponents/FilterComponent';
import Pagination from '../components/shopPageComponents/Pagination';
import BrandLogos from '../components/contactPageComponents/BrandLogos';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchProductsByCategoryId } from '../store/actions/productActions';

const ProductListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const location = useLocation();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.productList);
    const fetchState = useSelector((state) => state.product.fetchState);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const sortOption = searchParams.get('sort') || 'price:asc';
        const filterText = searchParams.get('filter') || '';

        const pathSegments = location.pathname.split('/');
        const lastSegment = pathSegments[pathSegments.length - 1];

        if (lastSegment && !isNaN(parseInt(lastSegment))) {
            const categoryId = parseInt(lastSegment);
            dispatch(fetchProductsByCategoryId(categoryId, sortOption, filterText));
        } else {
            dispatch(fetchProducts(sortOption, filterText));
        }
    }, [dispatch, location.pathname, location.search]);

    const totalPages = Math.ceil(products.length / productsPerPage);
    const displayedProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    return (
        <>
            <Header />
            <Breadcrumb />
            <ShopCard />
            <FilterComponent totalResults={products.length} />
            <BestSellerProducts products={displayedProducts} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            <BrandLogos />
            <Footer />
        </>
    );
};

export default ProductListPage;