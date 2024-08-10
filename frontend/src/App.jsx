import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// import PhotoList from "./PhotoList";
import './App.scss';
import photos from 'mocks/photos';


// Note: Rendering a single component to build components in isolation
const App = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const fetchSimilarPhotos = function (selectedPhoto) {
    // console.log('Similar Photos:', similarPhotos);
    return photos.filter(photo => photo.id !== selectedPhoto.id);
  };

  const toggleModal = function (photo) {
    // console.log('Selected Photo:', photo);
    if (!isModalOpen) {
      setSelectedPhoto(photo);
      const similar = fetchSimilarPhotos(photo);
      setSimilarPhotos(similar);
    }
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className="App">
      <HomeRoute toggleModal={toggleModal} />
      {isModalOpen && <PhotoDetailsModal toggleModal={toggleModal}
        photo={selectedPhoto}
        similarPhotos={similarPhotos}

      />}
    </div>
  );
};

export default App;

