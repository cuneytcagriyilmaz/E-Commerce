import React from 'react'

const stats = [
    { value: '15K', message: 'Happy Customers' },
    { value: '150K', message: 'Monthly Visitors' },
    { value: '15', message: 'Countries Worldwide' },
    { value: '100+', message: 'Top Partners' },
];

function AboutUsStat() {
    return (
        <div className="flex flex-col md:flex-row text-center md:text-start items-center justify-between p-8 mx-auto w-[92%] bg-white relative">
            {stats.map((stat, index) => (
                <div key={index} className="flex-1">
                    <h4 className="text-[58px] font-bold mb-4  text-textColorDarkGray pt-4">{stat.value}</h4>
                    <p className="text-[16px] text-textColorLightGray pt-10 pb-10">{stat.message}</p>
                </div>
            ))}
        </div>
    );
}

export default AboutUsStat;
