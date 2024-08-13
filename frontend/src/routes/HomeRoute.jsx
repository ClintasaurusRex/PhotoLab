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
        search={props.search}
        setSearch={props.setSearch}
      />

      {/* Main photo list component */}
      <PhotoList
        photos={props.photos}
        isFavorite={props.isFavorite}
        toggleFavorite={props.toggleFavorite}
        toggleModal={props.toggleModal}
        search={props.search}
      />

    </div>
  );
};

export default HomeRoute;
