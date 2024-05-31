import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedPostCard = ({ featuredData }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden m-2 flex flex-col border relative">
            <button className="bg-red-500 cursor-default text-white font-bold py-1 px-2 absolute top-2 left-2 rounded">New</button>
            <img className="w-[348px] h-[300px] object-cover" src={featuredData.image} alt={featuredData.title} />
            <div className='max-w-xs rounded overflow-hidden m-2 flex flex-col '>
                <div className='max-w-xs rounded overflow-hidden gap-3 m-2 flex flex-row'>
                    <div className='text-sm text-navbarLigthBlue'>{featuredData.company}</div>
                    <div className='text-sm text-textColorLightGray'>{featuredData.trending}</div>
                    <div className='text-sm text-textColorLightGray'>{featuredData.new}</div>
                </div>

                <div className='max-w-xs rounded overflow-hidden gap-3 m-2 flex flex-col'>
                    <h1 className='text-xl font-bold'>{featuredData.title}</h1>
                    <p className='text-sm text-textColorLightGray'>{featuredData.description}</p>
                </div>

                <div className='max-w-xs rounded overflow-hidden m-2 flex flex-row justify-between'>
                    <span className='text-sm'><i className="fa-solid fa-clock text-navbarLigthBlue mr-3"></i>{featuredData.date}</span>
                    <span className='text-sm'><i className="fa-solid text-sliderBgColorGreen fa-chart-line mr-1"></i>{featuredData.comments} Comments</span>
                </div>

         
                <div className='max-w-xs rounded overflow-hidden m-2 flex flex-row justify-between'>
                    <Link to="/more" className='text-textColorLightGray'>Learn More <i className="fa-solid fa-chevron-right text-navbarLigthBlue"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default FeaturedPostCard;
