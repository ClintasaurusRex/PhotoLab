import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
// hooks
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = (props) => {

  const {
    state,
    toggleModal,
    toggleFavorite,
    isFavorite,
  } = useApplicationData();



  return (
    <div className="App">
      <HomeRoute
        toggleModal={toggleModal}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        isFavPhotoExist={state.ifLiked}
        favoritedPhotos={state.favorites} />

      {state.isModalOpen && <PhotoDetailsModal
        toggleModal={toggleModal}
        photo={state.selectedPhoto}
        similarPhotos={state.similarPhotos}
        toggleFavorite={toggleFavorite}
        isFavPhotoExist={state.ifLiked}
        isFavorite={isFavorite}

      />}
    </div>
  );
};

export default App;

