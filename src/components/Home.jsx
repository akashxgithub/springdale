import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import logo from '/logo.webp'; 

const Home = () => {
  return (
    <div className="container mx-auto mt-3 px-4">
      <div className="text-center font-sans mb-10">
        <img src={logo} alt="Springdale Public School Logo" className="mx-auto mb-4 w-24 h-24 object-cover" />
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Springdale Public School</h1>
        <p className="text-lg text-gray-600">
          Welcome to Springdale Public School, where we nurture young minds for a brighter future.
        </p>
      </div>

      <div className="mb-10">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-full h-64 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg" 
              alt="Annual Sports Day"
            />
            <Carousel.Caption>
              <h3 className="text-lg font-semibold text-white">Annual Sports Day</h3>
              <p className="text-white">Celebrating Excellence in Sports</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full h-64 object-cover"
              src="https://media.timeout.com/images/102315831/750/422/image.jpg" 
              alt="Science Exhibition"
            />
            <Carousel.Caption>
              <h3 className="text-lg font-semibold text-white">Science Exhibition</h3>
              <p className="text-white">Showcasing Student Innovations</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="text-center mb-10">
        <Link to="/about">
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition">About Us</button>
        </Link>
        <Link to="/admissions">
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition mx-4">Admissions</button>
        </Link>
        <Link to="/contact">
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
