import { useState, useEffect } from "react";
import photos from "mocks/photos";

const useApplicationData = function() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchSimilarPhotos = (selectedPhoto) => {
    return photos.filter(photo => photo.id !== selectedPhoto.id)
  };
  const toggleModal = (photo) => {
    if (!isModalOpen) {
      setSelectedPhoto(photo);
      const similar = fetchSimilarPhotos(photo);
      setSimilarPhotos(similar);
    }
    setIsModalOpen(!isModalOpen);
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  const toggleFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
      return;
    }
    setFavorites(favorites.filter(favorite => favorite !== id));
  };
  const state = {
    isModalOpen,
    selectedPhoto,
    similarPhotos,
    favorites,

    ifLiked: favorites.length > 0,
  };

  return {
    state,
    toggleModal,
    toggleFavorite,
    isFavorite,

  };
}



export default useApplicationData;