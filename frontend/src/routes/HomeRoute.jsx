import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import '../styles/HomeRoute.scss';



const HomeRoute = (props) => {

  const [favorites, setFavorites] = useState([]);

  const isFavorite = function (id) {// interface functions
    return favorites.includes(id);
  };

  const toggleFavorite = function (id) {
    // if not in array add.
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
      return;
    }
    //otherwise remove the id.
    setFavorites(favorites.filter(favorite => favorite !== id));
  };

  const ifLiked = favorites.length > 0;

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar topics={topics} isFavPhotoExist={ifLiked} favoritedPhotos={favorites} />
      <PhotoList photos={photos} isFavorite={isFavorite}
        toggleFavorite={toggleFavorite} toggleModal={props.toggleModal}
      />

    </div>
  );
};

export default HomeRoute;
