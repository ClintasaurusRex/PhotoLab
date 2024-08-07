import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  console.log('PROPSSSSS', props);
  return (
    <div key={props.id}>
      <img src={props.imageSource} alt="" />
      <div>
        <img src={props.profile} alt="" />
        <span>{props.username}</span>
        <span>`{props.location.city}, {props.location.country}`</span>
      </div>

    </div>
  )
};

export default PhotoListItem;
