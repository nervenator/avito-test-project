import React, { useState, useEffect } from 'react';

const Gallery = ({ clickHandler }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://boiling-refuge-66454.herokuapp.com/images')
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='gallery'>
      {images.map((image) => (
        <img
          onClick={clickHandler}
          src={image.url}
          alt={image.id}
          key={image.id}
          className='image'
        ></img>
      ))}
    </div>
  );
};

export default Gallery;
