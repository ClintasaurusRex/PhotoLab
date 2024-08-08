import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";


const PhotoList = function(props)  {

  const mappedList = photos.map((photo) => {
    return <PhotoListItem photo={photo} key={photo.id}  />
  })



  return (
    <ul className="photo-list">
      {/* Insert React */}
      {mappedList}
    </ul>
  );
};

export default PhotoList;
