import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from 'mocks/photos';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleModal = function (photo) {
    // console.log("Clicked photo ID:", photo);
    setSelectedPhoto(photo);
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className="App">
      <HomeRoute toggleModal={toggleModal} />
      {isModalOpen && <PhotoDetailsModal toggleModal={toggleModal}
        photo={selectedPhoto} />}
    </div>
  );
};

export default App;

