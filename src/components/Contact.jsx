import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700">Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p className="text-lg text-gray-700">Phone: +1 (123) 456-7890</p>
        <p className="text-lg text-gray-700">Email: info@springdale.edu</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg mb-8 border border-blue-200">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold text-blue-600 mb-2">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-blue-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-blue-600 mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="mb-8">
        <iframe
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091223!2d144.95373531550463!3d-37.81627974273965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57748a0b55637d8!2sEducation+Lane%2C+Cityville%2C+State%2C+ZIP+Code!5e0!3m2!1sen!2sus!4v1532588040978"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
