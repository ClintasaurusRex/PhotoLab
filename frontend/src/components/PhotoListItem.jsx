import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  // console.log('PROPSSSSS', props);

  const {id, location, imageSource, username, profile} = props.photo;

  return (
    <div className="photo-list__item" key={id}>
      <img className="photo-list__image" src={imageSource} alt="" />
      <div>
        <img className="photo-list__user-profile" src={profile} alt="" />
        <div className="photo-list__user-info">
          <span className="photo-list__user-details" >{username}</span>
          <span className="photo-list__user-location" >{location.city}, {location.country}</span>
        </div>
      </div>

    </div>
  )
};

export default PhotoListItem;
