import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  console.log('PROPSSSSS', props);
  return (
    <div key={props.photo.id}>
      <img src={props.photo.imageSource} alt="" />
      <div>
        <img src={props.photo.profile} alt="" />
        <span>{props.photo.username}</span>
        <span>{props.photo.location.city}, {props.photo.location.country}</span>
      </div>

    </div>
  )
};

export default PhotoListItem;
