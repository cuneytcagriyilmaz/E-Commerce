import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-full border-t-4 border-b-4 border-gray-500 h-12 w-12 animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
