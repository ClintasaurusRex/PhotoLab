import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  // console.log('PROPSSSSS', props);

  // const {id, location, urls, user, profile} = props.photo;
  const photo = props.photo;
  const user = photo.user;
  const location = photo.location;


  return (
    <div className="photo-list__item" >
        <PhotoFavButton />
      <img className="photo-list__image" src={photo.urls.regular}  alt="" />
      <div>
        <img className="photo-list__user-profile" src={user.profile} alt="" />
          <div className="photo-list__user-info">
          <span className="photo-list__user-details" >{user.name}</span>
          <span className="photo-list__user-location" >{location.city}, {location.country}</span>
        </div>
      </div>

    </div>
  )
};

export default PhotoListItem;
