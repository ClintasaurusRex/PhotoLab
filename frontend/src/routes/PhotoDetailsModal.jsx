import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  // console.log('Selected Photos Here:', props.photo);
  // const { photo, similarPhotos, toggleModal } = props;
  const photo = props.photo;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button"
        onClick={props.toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='.photo-details-modal__image'>
        <img src={photo.urls.regular} alt="" />
      </div>
      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <PhotoList photos={props.similarPhotos}
          toggleModal={props.toggleModal} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
