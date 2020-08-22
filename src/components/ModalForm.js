import React from 'react';

const ModalForm = ({
  clearState,
  imageData,
  modal,
  onSubmit,
  comment,
  setComment,
  name,
  setName,
}) => {
  const onClick = () => {
    document.getElementById('myModal').style.display = 'none';
    clearState();
  };
  const onChange = (e) => {
    if (e.target.name === 'comment') {
      setComment(e.target.value);
    } else if (e.target.name === 'name') {
      setName(e.target.value);
    }
  };

  return (
    <div id='myModal' className='modal'>
      {modal && (
        <div className='modal-content'>
          <div className='imgForm'>
            <img src={imageData.url} alt='' className='fullimg'/>
            <div className='comments'>
              <span className='close' onClick={onClick}>
                &times;
              </span>
              {imageData.comments.map((comment) => (
                <p className='comment' key={comment.id}>
                  {' '}
                  <span className='date'>
                    {new Date(comment.date).toLocaleDateString('ru')}
                  </span>{' '}
                  <br /> <span>{comment.text}</span>
                </p>
              ))}
            </div>
            <form onSubmit={onSubmit}>
              <input
                type='text'
                placeholder='Ваше имя'
                onChange={onChange}
                value={name}
                name='name'
              />
              <input
                type='text'
                placeholder='Ваш комментарий'
                onChange={onChange}
                value={comment}
                name='comment'
              />
              <input
                type='submit'
                className='submitbut'
                value='Оставить комментарий'
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
