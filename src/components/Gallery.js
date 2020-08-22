import React from 'react'

const Gallery = ({images, clickHandler}) => {
  const onClick = clickHandler;

  return (
    <div className='gallery'>
      {images.map(image=> <img onClick={onClick} src={image.url} alt={image.id} key={image.id} className='image'></img>)}
    </div>
  )
}

export default Gallery
