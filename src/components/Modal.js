import React from 'react';
import CommentForm from './CommentForm';

const Modal = ({ clearState, imageData }) => {
  return (
    <div id='myModal' className='modal'>
      <div className='modal-content'>
        <CommentForm clearState={clearState} imageData={imageData} />
      </div>
    </div>
  );
};

export default Modal;
