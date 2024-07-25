import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    { name: 'John Doe', role: 'Principal', qualifications: 'M.Ed', experience: '20 years of experience in educational administration' },
    { name: 'Jane Smith', role: 'Vice Principal', qualifications: 'M.Sc. in Physics', experience: '15 years of teaching experience' },
    { name: 'Emily Johnson', role: 'English Teacher', qualifications: 'M.A. in English', experience: '10 years of teaching experience' },
    { name: 'Michael Brown', role: 'Mathematics Teacher', qualifications: 'M.Sc. in Mathematics', experience: '8 years of teaching experience' },
    { name: 'Sophia Davis', role: 'Science Teacher', qualifications: 'M.Sc. in Chemistry', experience: '12 years of teaching experience' },
    { name: 'David Wilson', role: 'Computer Science Teacher', qualifications: 'B.Tech in Computer Science', experience: '5 years of teaching experience' },
  ];

  return (
    <div className="container mx-auto mt-10 px-4">
      <section className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Our Faculty</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-blue-200">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{member.name}</h3>
              <h4 className="text-xl font-semibold text-blue-600 mb-1">{member.role}</h4>
              <p className="text-gray-800 mb-2"><strong>Qualifications:</strong> {member.qualifications}</p>
              <p className="text-gray-700"><strong>Experience:</strong> {member.experience}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faculty;
