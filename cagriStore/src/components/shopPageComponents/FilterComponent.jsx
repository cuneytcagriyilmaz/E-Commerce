import React, { useState } from 'react';

const FilterComponent = ({ totalResults }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Popularity');
    const options = [
        'Price: Low to High',
        'Price: High to Low',
        'Newest Arrivals',
        'Best Sellers',
        'Customer Reviews'
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className="px-4 py-2 items-center w-[92%] mx-auto">
            <div className="flex flex-col  md:flex-row items-center justify-between p-4 bg-white space-y-2 md:space-y-0">
                <div className="flex text-gray-700 mb-4">Showing all {totalResults} results</div>
                <div className="flex flex-col md:flex-row  items-center space-y-2 md:space-y-0 space-x-0 md:space-x-4">
                    <div className="flex space-x-2 gap mb-4">
                        <button className="p-2 border rounded-md">
                            <i className="fas fa-th"></i>
                        </button>
                        <button className="p-2 border rounded-md">
                            <i className="fas fa-list"></i>
                        </button>
                    </div>
                    <div className="relative flex flex-row gap-2">
                        <button onClick={toggleDropdown} className="p-2 border rounded-md flex items-center">
                            {selectedOption}
                            <i className={`fas ml-2 ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                                {options.map(option => (
                                    <div
                                        key={option}
                                        onClick={() => handleOptionClick(option)}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                        <button className="p-2 border rounded-md bg-blue-500 text-white">Filter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
