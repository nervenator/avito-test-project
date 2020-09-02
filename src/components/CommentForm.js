import React from 'react';
import ImageItem from './ImageItem';
import CommentInputForm from './CommentInputForm';
import Comments from './Comments';

const CommentForm = ({ clearState, imageData }) => {
  return (
    <div>
      <div className='imgForm'>
        <ImageItem url={imageData.url} />
        <Comments comments={imageData.comments} clearState={clearState} />
        <CommentInputForm imageId={imageData.id} />
      </div>
    </div>
  );
};

export default CommentForm;
