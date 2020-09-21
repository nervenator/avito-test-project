import React, { useState } from 'react';

const CommentInputForm = ({imageId}) => {
  const [comment, setComment] = useState({
    body: '',
    name: '',
  });

  const onChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
  };

  // Since api doesnt actually add a comment, there is only a status check

  const addComment = (comment) => {
    fetch(
      `https://boiling-refuge-66454.herokuapp.com/images/${imageId}/comments`,
      {
        method: 'POST',
        body: JSON.stringify({
          comment: comment.body,
          date: Date.now(),
          name: comment.name,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
  };

  return (    
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Ваше имя'
        onChange={onChange}
        value={comment.name}
        name='name'
      />
      <input
        type='text'
        placeholder='Ваш комментарий'
        onChange={onChange}
        value={comment.text}
        name='body'
      />
      <input type='submit' className='submitbut' value='Оставить комментарий' />
    </form>
  );
};

export default CommentInputForm;
