import React from 'react';
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';


const PhotoDetailsModal = (props) => {

  const { photo, similarPhotos, toggleModal } = props;
  const selected = typeof props.isFavorite === 'function' ? props.isFavorite(photo.id) : false;

  return (
    <div className='photo-details-modal'>
      <div className='photo-details-modal__top-bar'>
        <button className='photo-details-modal__top-bar' onClick={toggleModal} >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className='photo-details-modal__images'>
        <PhotoFavButton className='photo-details-modal__fav-icon-svg'
          isModal={true}
          selected={selected} onClick={() => props.toggleFavorite(photo.id)} />
        <img className='photo-details-modal__image' src={photo.urls.regular} alt="" />
      </div>

      <div className='photo-details-modal__header'>
        <div className='photo-details-modal__photographer-details'>
          <img
            className='photo-details-modal__photographer-profile'
            src={photo.user.profile}
            alt={photo.user.username}
          />
          <div className='photo-details-modal__photographer-info'>
            <div>{photo.user.username}</div>
            <div className='photo-details-modal__photographer-location'>
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__similar-photos">
        <h3 className="photo-details-modal__header">Similar Photos</h3>
        <PhotoList
          photos={similarPhotos}
          toggleModal={toggleModal}
          toggleFavorite={props.toggleFavorite}
          isFavorite={props.isFavorite}
          favorites={props.favorites}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
