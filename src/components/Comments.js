import React from 'react';

const Comments = ({ comments, clearState }) => {
  return (
    <div className='comments'>
      <span className='close' onClick={clearState}>
        &times;
      </span>
      {comments.map((comment) => (
        <p className='comment' key={comment.id}>
          {' '}
          <span className='date'>
            {new Date(comment.date).toLocaleDateString('ru')}
          </span>{' '}
          <br /> <span>{comment.text}</span>
        </p>
      ))}
    </div>
  );
};

export default Comments;
