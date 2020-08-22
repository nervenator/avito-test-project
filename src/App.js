import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import ModalForm from './components/ModalForm';

function App() {
  const [images, setImages] = useState([]);
  const [imageId, setImageId] = useState('');
  const [imageData, setImageData] = useState(null);
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    fetch('https://boiling-refuge-66454.herokuapp.com/images')
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (imageId) {
      fetch(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}`)
        .then((res) => res.json())
        .then((data) => {
          setImageData(data);
        })
        .catch((err) => console.log(err));
    }
  }, [imageId, setImageData]);

  useEffect(() => {
    if (imageData) {
      document.getElementById('myModal').style.display = 'block';
      setModal(true);
      console.log(imageData);
    }
  }, [imageData]);

  const clickHandler = (e) => {
    setImageId(e.target.alt);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
  };

  const clearState = () => {
    setModal(false);
    setImageId('');
    setImageData(null);
  };

  const addComment = (comment) => {
    fetch(
      `https://boiling-refuge-66454.herokuapp.com/images/${imageId}/comments`,
      {
        method: 'POST',
        body: JSON.stringify({
          comment: comment,
          date: Date.now(),
          name: name,
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
    <div className='App'>
      <Header />
      <ModalForm
        imageId={imageId}
        clearState={clearState}
        setData={setImageData}
        imageData={imageData}
        modal={modal}
        onSubmit={onSubmit}
        comment={comment}
        setComment={setComment}
        name={name}
        setName={setName}
      />
      <Gallery images={images} clickHandler={clickHandler} />
      <Footer />
    </div>
  );
}

export default App;
