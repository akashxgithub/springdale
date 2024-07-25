import React from 'react';

const Students = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Student Life at Springdale</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200 mb-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Extracurricular Activities</h3>
            <ul className="list-disc pl-5 text-gray-800">
              <li>Music</li>
              <li>Dance</li>
              <li>Drama</li>
              <li>Art</li>
              <li>Sports</li>
              <li>Robotics</li>
              <li>Debate Club</li>
              <li>Science Club</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200 mb-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Clubs and Societies</h3>
            <ul className="list-disc pl-5 text-gray-800">
              <li>Literary Society</li>
              <li>Environmental Club</li>
              <li>Astronomy Club</li>
              <li>Coding Club</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-200 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-700 mb-4">Achievements</h3>
            <ul className="list-disc pl-5 text-gray-800">
              <li>John Smith - National Level Math Olympiad Winner</li>
              <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
              <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-200">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Student Council</h3>
            <ul className="text-gray-800">
              <li><strong>President:</strong> Amy Parker, Grade 12</li>
              <li><strong>Vice President:</strong> Rajiv Mehta, Grade 11</li>
              <li><strong>Secretary:</strong> Lisa Wong, Grade 10</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
