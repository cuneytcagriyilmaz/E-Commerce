import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Breadcrumb = ({ fromProductDetailPage }) => {
    const location = useLocation();
    const path = location.pathname.split('/').filter((x) => x);

    const currentPage = path.length > 0 ? capitalizeFirstLetter(path[path.length - 1]) : 'Home';

    if (fromProductDetailPage && path[0] === 'shop') {
        path.length = 1;
    }

    return (
        <div className="flex flex-col items-center p-4 bg-mainBackgroundWhite rounded-md w-full md:flex-row md:justify-between">
            <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:w-[92%] mx-auto">
                {fromProductDetailPage ? null : (
                    <div className="text-xl font-bold text-gray-800 mb-2 md:mb-0">
                        {currentPage}
                    </div>
                )}
                <nav aria-label="breadcrumb" className="w-full md:w-auto">
                    <ol className="list-reset flex flex-row justify-center mt-10 md:mt-0 items-center  text-gray-500">
                        <li className="mb-2 md:mb-0">
                            <Link to="/" className="text-textColorDarkGray">
                                Home
                            </Link>
                        </li>
                        {path.map((value, index) => {
                            const to = `/${path.slice(0, index + 1).join('/')}`;
                            const isLast = index === path.length - 1;

                            return (
                                <li key={to} className="flex items-center mb-2 md:mb-0">
                                    <i className="fas fa-chevron-right mx-2"></i>
                                    {isLast ? (
                                        <span>{capitalizeFirstLetter(value)}</span>
                                    ) : (
                                        <Link to={to} className="text-textColorH2">
                                            {capitalizeFirstLetter(value)}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default Breadcrumb;
