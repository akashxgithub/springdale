import React from 'react';

const Admissions = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Admissions</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the admissions section of Springdale Public School. Below you will find the admission process, criteria, and important dates.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg mb-8 border border-blue-200">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Admission Process</h3>
        <p className="text-lg text-gray-700 mb-4">
          Admission forms are available for download. Submit the completed form along with required documents at the school office.
        </p>
        
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Admission Criteria</h3>
        <p className="text-lg text-gray-700 mb-4">
          Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
        </p>
        
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Important Dates</h3>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li className="mb-2">Admission Form Availability: <span className="font-semibold">March 1st</span></li>
          <li className="mb-2">Last Date for Submission: <span className="font-semibold">March 31st</span></li>
          <li className="mb-2">Entrance Test: <span className="font-semibold">April 15th</span></li>
          <li>Announcement of Results: <span className="font-semibold">April 30th</span></li>
        </ul>
        
        <div className="mt-6">
          <a href="/path-to-admission-form.pdf" download className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            Download Admission Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
