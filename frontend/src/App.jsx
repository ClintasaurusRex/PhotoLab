import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from 'mocks/photos';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = function () {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className="App">
      <HomeRoute openModal={toggleModal} />
      {isModalOpen && <PhotoDetailsModal closeModal={toggleModal} />}
    </div>
  );
};

export default App;

