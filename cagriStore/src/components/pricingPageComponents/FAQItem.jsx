// FAQItem.jsx
import React from 'react';

const FAQItem = ({ question, answer }) => (
  <div className="flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-4 mb-6">
    <div className="flex-shrink-0">
      <i className="fas hidden md:block fa-chevron-right text-buttonFullBlue"></i>
    </div>
    <div>
      <h3 className="font-semibold text-lg text-textColorLightGray">{question}</h3>
      <p className="text-textColorLightGray mt-1">{answer}</p>
    </div>
  </div>
);

export default FAQItem;
