import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";





const PhotoListItem = (props) => {
  // destructuring for props
  const photo = props.photo;
  const user = photo.user;
  const location = photo.location;



  return (
    <div className="photo-list__item" >
      {/* Favorite button component */}
      <PhotoFavButton selected={props.selected} onClick={props.handleToggle} />

      {/* Main photo display */}
      <img className="photo-list__image" src={photo.urls.full} alt=""
        onClick={() => props.toggleModal(props.photo)} />

      {/* User information section */}
      <div>
        <img className="photo-list__user-profile" src={user.profile} alt="" />
        <div className="photo-list__user-info">
          <span className="photo-list__user-details" >{user.name}</span>
          <span className="photo-list__user-location" >{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
