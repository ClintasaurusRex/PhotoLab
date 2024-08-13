import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';



const HomeRoute = (props) => {

  return (
    <div className="home-route">
      {/* Top Nav bar component */}
      <TopNavigationBar
        topics={props.topics}
        isFavPhotoExist={props.isFavPhotoExist}
        topicsButtons={props.topicsButtons}
      />

      {/* Main photo list component */}
      <PhotoList
        photos={props.photos}
        isFavorite={props.isFavorite}
        toggleFavorite={props.toggleFavorite}
        toggleModal={props.toggleModal}

      />

    </div>
  );
};

export default HomeRoute;
