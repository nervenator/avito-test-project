import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [imageId, setImageId] = useState('');
  const [imageData, setImageData] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (imageId) {
      fetch(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}`)
        .then((res) => res.json())
        .then((data) => {
          setImageData(data);
          setModal(true);          
        })
        .catch((err) => console.log(err));
    }
  }, [imageId]);

  const clickHandler = (e) => {
    setImageId(e.target.alt);
  };

  const clearState = () => {
    setModal(false);
    setImageId('');
    setImageData(null);
  };

  return (
    <div className='App'>
      <Header />
      {modal && (
        <Modal
          clearState={clearState}
          imageData={imageData}          
        />
      )}
      <Gallery clickHandler={clickHandler} />
      <Footer />
    </div>
  );
}

export default App;
