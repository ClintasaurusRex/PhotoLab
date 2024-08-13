import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = function (props) {
  const filteredList = props.photos.filter((photo) => {
    return !props.search || photo.user.name.includes(props.search) || photo.location.city.includes(props.search);
  });
  // Map through photos and create PhotoListItem components
  const mappedList = filteredList.map((photo) => {
    // Determine if the photo is favorited
    const selected = typeof props.isFavorite === 'function' ? props.isFavorite(photo.id) : false;

    return <PhotoListItem photo={photo} key={photo.id} selected={selected}
      handleToggle={() => props.toggleFavorite(photo.id)}
      toggleModal={() => props.toggleModal(photo)}
    />;
  });


  // Render the list of photos
  return (
    <ul className="photo-list">
      {/* The mapped list rendered*/}
      {mappedList}
    </ul>
  );
};

export default PhotoList;
