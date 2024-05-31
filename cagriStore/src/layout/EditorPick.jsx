import React from 'react';

const EditorPick = () => {
  const editorPickImages = [
    '/cagristore/src/assets/img/editorPick/editorPickMenCategory.jpeg',
    '/cagristoresrc/assets/img/editorPick/editorPickWomenCategory.jpeg',
    '/cagristore/src/assets/img/editorPick/editorPickAccessoriesCategory.jpeg',
    '/cagristore/src/assets/img/editorPick/editorPickKidsCategory.jpeg'
  ];

  return (
    <div className="flex items-center flex-col justify-center pt-6 bg-mainBackgroundWhite">
      <h1 className="text-2xl font-bold mb-1 text-gray-800">EDITOR'S PICK</h1>
      <p className="text-gray-600 mb-4">Problems trying to resolve the conflict between</p>
      <div className="flex w-3/4 gap-4 px-4 flex-col md:flex-row">
        <div className="relative p-4 w-full md:w-1/2">
          <img src={editorPickImages[0]} className="w-full h-auto md:h-full object-cover" alt="Men" />
          <button className="absolute bottom-8 left-8 pl-10 pr-10 bg-white text-black px-4 py-2">MEN</button>
        </div>
        <div className="p-4 w-full md:w-1/2 flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-1/2">
            <img src={editorPickImages[1]} className="w-full h-auto md:h-full object-cover" alt="Women" />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2">WOMEN</button>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="relative w-full flex-1">
              <img src={editorPickImages[2]} className="w-full h-auto md:h-full object-cover" alt="Accessories" />
              <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2">ACCESSORIES</button>
            </div>
            <div className="relative w-full flex-1">
              <img src={editorPickImages[3]} className="w-full h-auto md:h-full object-cover" alt="Kids" />
              <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2">KIDS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPick;
