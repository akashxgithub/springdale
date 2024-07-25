import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <section className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">About Us</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">History</h3>
            <p className="text-gray-800">
              Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Vision</h3>
            <p className="text-gray-800">
              To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Mission</h3>
            <p className="text-gray-800">
              To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Principal's Message</h3>
            <p className="text-gray-800">
              ''At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.''
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Infrastructure and Facilities</h3>
            <ul className="list-disc pl-5 text-gray-800">
              <li>State-of-the-art science and computer labs</li>
              <li>Spacious and well-equipped classrooms</li>
              <li>Library with a vast collection of books and digital resources</li>
              <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
