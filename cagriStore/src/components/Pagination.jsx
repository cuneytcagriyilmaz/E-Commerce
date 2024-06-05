import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex items-center justify-center space-x-2 mt-4 mb-6">
            <div className="flex border rounded-md">
                <button
                    className={`p-4 border ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                >
                    First
                </button>
                {pages.map(page => (
                    <button
                        key={page}
                        className={`p-4 border ${currentPage === page ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className={`p-4 border  text-blue-500 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
