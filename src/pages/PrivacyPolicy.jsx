import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 pt-20 pb-20 px-6">
      <div className="max-w-3xl w-full bg-white p-12 rounded-3xl shadow-xl border border-gray-100 text-center">
        <h1 className="text-4xl font-extrabold text-[#17745f] mb-6">Privacy Policy</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Our Privacy Policy is currently being updated to better serve you. 
          Please check back soon for the full document.
        </p>
        <div className="w-20 h-1 bg-[#f5b000] mx-auto rounded-full"></div>
        <p className="mt-8 text-gray-400 text-sm italic">
          Last updated: May 2026
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
