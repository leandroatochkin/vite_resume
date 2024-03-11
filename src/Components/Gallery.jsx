import React, { useState, useEffect } from 'react';
import Image1 from '../images/image1.webp';
import Image2 from '../images/image2.jpeg';
import Image3 from '../images/image3.webp';

const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const images = [Image1, Image2, Image3];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setLoaded(false);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, [images]);
  
    const handleImageLoad = () => {
      setLoaded(true);
    };
  
    return (
      <div className="w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg relative">
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className={`w-full h-40 object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
        />
      </div>
    );
  };
  
  export default Gallery;