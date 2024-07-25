import React, { useState } from 'react';

const Gallery = () => {
  const [items, setItems] = useState([
    { type: 'photo', src: 'https://raisingchildren.net.au/__data/assets/image/0025/48724/activities-for-school-kids-2.jpg', alt: 'Students participating in various sports events.', category: 'Sports' },
    { type: 'photo', src: 'https://dq5pwpg1q8ru0.cloudfront.net/2021/03/08/10/23/23/aa3dc7f5-bf77-4636-b47c-104a7ea7846d/P1190619.JPG', alt: 'Students presenting their science projects.', category: 'Science' },
    { type: 'photo', src: 'https://ww1.prweb.com/prfiles/2014/05/05/11827315/HS1.jpeg', alt: 'Students performing in the cultural fest.', category: 'Cultural' },
    { type: 'photo', src: 'http://www.gettingsmart.com/wp-content/uploads/2012/11/Classroom.jpg', alt: 'A glimpse of our interactive classrooms.', category: 'Infrastructure' },
    { type: 'photo', src: 'https://www.sa-architects.com/_resources/common/images/photogalleries/60/photoalbums/64/images/Immaculate-Conception-007web.jpg', alt: 'Students reading and studying in the school library.', category: 'Infrastructure' },
    { type: 'video', src: 'https://www.youtube.com/embed/9YhD_Ezq6ZI?si=KdsEehQRK-mSkl_G', alt: 'Virtual tour of Springdale Public School.', category: 'Tour' },
    { type: 'video', src: 'https://www.youtube.com/embed/WSATloSoXwc?si=uNnkuz5mBi8hgmU9', alt: 'Highlights from the Annual Function 2023.', category: 'Event' }
  ]);

  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2 text-lg">Filter by Category:</label>
        <select 
          id="filter" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)} 
          className="border p-2 rounded bg-white"
        >
          <option value="All">All</option>
          <option value="Sports">Sports</option>
          <option value="Science">Science</option>
          <option value="Cultural">Cultural</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Tour">Tour</option>
          <option value="Event">Event</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <div key={index} className="relative border rounded overflow-hidden shadow-lg">
            {item.type === 'photo' ? (
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-48 object-cover"
              />
            ) : (
              <iframe 
                className="w-full h-48"
                src={item.src}
                title={item.alt}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <p className="absolute bottom-0 bg-gray-800 text-white p-2 w-full text-center">{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
