import React from 'react';

const Academics = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Academics</h2>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8 border border-gray-200">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Curriculum</h3>
          <div className="space-y-4">
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-yellow-800">Primary (Grades 1-5)</h4>
              <p className="text-gray-700">English, Mathematics, Science, Social Studies, Art, Physical Education</p>
            </div>
            <div className="bg-red-200 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-red-800">Secondary (Grades 6-10)</h4>
              <p className="text-gray-700">English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
            </div>
            <div className="bg-blue-200 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-800">Senior Secondary (Grades 11-12)</h4>
              <div className="mt-2">
                <h5 className="font-semibold text-blue-700">Science Stream</h5>
                <p className="text-gray-700">Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
              </div>
              <div className="mt-2">
                <h5 className="font-semibold text-blue-700">Commerce Stream</h5>
                <p className="text-gray-700">Accountancy, Business Studies, Economics, Mathematics, English</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Teaching Methodologies</h3>
          <p className="text-gray-700">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Educational Resources</h3>
          <p className="text-gray-700">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
