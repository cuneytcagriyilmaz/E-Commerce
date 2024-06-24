// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const FilterComponent = ({ totalResults }) => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('price:asc');
//     const options = [
//         { label: 'Price: Low to High', value: 'price:asc' },
//         { label: 'Price: High to Low', value: 'price:desc' },
//         { label: 'Rating: Low to High', value: 'rating:asc' },
//         { label: 'Rating: High to Low', value: 'rating:desc' },
//     ];

//     const history = useHistory();

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     const handleOptionClick = (option) => {
//         setSelectedOption(option.value);
//         setIsDropdownOpen(false);
//     };

//     const handleFilterClick = () => {
//         history.push(`?sort=${selectedOption}`);
//     };

//     return (
//         <div className="px-4 py-2 items-center w-[92%] mx-auto">
//             <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white space-y-2 md:space-y-0">
//                 <div className="flex text-gray-700 mb-4">Showing all {totalResults} results</div>
//                 <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-4">
//                     <div className="flex space-x-2 gap mb-4">
//                         <button className="p-2 border rounded-md">
//                             <i className="fas fa-th"></i>
//                         </button>
//                         <button className="p-2 border rounded-md">
//                             <i className="fas fa-list"></i>
//                         </button>
//                     </div>
//                     <div className="relative flex flex-row gap-2">
//                         <button onClick={toggleDropdown} className="p-2 border rounded-md flex items-center">
//                             {options.find(option => option.value === selectedOption).label}
//                             <i className={`fas ml-2 ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
//                         </button>
//                         {isDropdownOpen && (
//                             <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
//                                 {options.map(option => (
//                                     <div
//                                         key={option.value}
//                                         onClick={() => handleOptionClick(option)}
//                                         className="p-2 hover:bg-gray-100 cursor-pointer"
//                                     >
//                                         {option.label}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                         <button onClick={handleFilterClick} className="p-2 border rounded-md bg-blue-500 text-white">Filter</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FilterComponent;


import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const FilterComponent = ({ totalResults }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('price:asc');
    const [filterText, setFilterText] = useState('');
    const options = [
        { label: 'Price: Low to High', value: 'price:asc' },
        { label: 'Price: High to Low', value: 'price:desc' },
        { label: 'Rating: Low to High', value: 'rating:asc' },
        { label: 'Rating: High to Low', value: 'rating:desc' },
    ];

    const history = useHistory();
    const location = useLocation();

    const updateURL = (sort, filter) => {
        const searchParams = new URLSearchParams(location.search);
        if (sort) searchParams.set('sort', sort);
        if (filter) searchParams.set('filter', filter);
        history.push({ search: searchParams.toString() });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option.value);
        setIsDropdownOpen(false);
        updateURL(option.value, filterText);
    };

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const handleFilterClick = () => {
        updateURL(selectedOption, filterText);
    };

    return (
        <div className="px-4 py-2 items-center w-[92%] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white space-y-2 md:space-y-0">
                <div className="flex text-gray-700 mb-4">Showing all {totalResults} results</div>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-4">
                    <input
                        type="text"
                        placeholder="Filter products..."
                        value={filterText}
                        onChange={handleFilterChange}
                        className="p-2 border rounded-md"
                    />
                    <div className="relative flex flex-row gap-2">
                        <button onClick={toggleDropdown} className="p-2 border rounded-md flex items-center">
                            {options.find(option => option.value === selectedOption).label}
                            <i className={`fas ml-2 ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                                {options.map(option => (
                                    <div
                                        key={option.value}
                                        onClick={() => handleOptionClick(option)}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        )}
                        <button onClick={handleFilterClick} className="p-2 border rounded-md bg-blue-500 text-white">Filter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
