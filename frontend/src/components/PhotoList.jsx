import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = function (props) {
  // console.log('PhotoList Props', props);


  const mappedList = props.photos.map((photo) => {

    // const selected = props.isFavorite(photo.id);
    // console.log('Props received in PhotoList:', props);
    // console.log('isFavorite in PhotoList:', props.isFavorite);
    // console.log('toggleFavorite in PhotoList:', props.toggleFavorite);


    const selected = typeof props.isFavorite === 'function' ? props.isFavorite(photo.id) : false;

    // console.log('isFavorite', props.isFavorite);

    return <PhotoListItem photo={photo} key={photo.id} selected={selected}
      handleToggle={() => props.toggleFavorite(photo.id)}
      toggleModal={() => props.toggleModal(photo)}
    />;
  });



  return (
    <ul className="photo-list">
      {/* Insert React */}
      {mappedList}
    </ul>
  );
};

export default PhotoList;
