import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// hooks
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = (props) => {
  // Destructuring state and functions from the custom hook
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
        isFavPhotoExist={state.hasFavorites}
        photos={state.photoData}
        topics={state.topicData}
      />

      {state.isModalOpen && <PhotoDetailsModal
        toggleModal={toggleModal}
        photo={state.selectedPhoto}
        similarPhotos={state.similarPhotos}
        toggleFavorite={toggleFavorite}
        isFavPhotoExist={state.hasFavorites}
        isFavorite={isFavorite}

      />}
    </div>
  );
};

export default App;

