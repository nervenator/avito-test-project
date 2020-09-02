import React, { Fragment } from 'react';

const ImageItem = ({ url }) => {
  return (
    <Fragment>
      <img src={url} alt='' className='fullimg' />
    </Fragment>
  );
};

export default ImageItem;
