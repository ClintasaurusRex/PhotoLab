// import { useReducer } from "react";
// import photos from "mocks/photos";


// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
// };

// const intialState = {
//   photoData: [],
//   topicData: [],
//   selectedPhoto: null,
//   displayPhotoDetails: false,
//   favorites: []
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.FAV_PHOTO_ADDED:
//       return {...state, favorites: [...state.favorites, action.photoId]};

//     case ACTIONS.FAV_PHOTO_REMOVED:
//       return {...state, favorties:
//         [...state.filter(id => id !== action.      photoId)]};

//     case ACTIONS.SET_PHOTO_DATA:
//       return {...state, photoData: ACTIONS.photoData};

//     case ACTIONS.SET_TOPIC_DATA:
//       return {...state, topicData: action.topicData};

//     case ACTIONS.SELECT_PHOTO:
//       return {...state, selectedPhoto: action.photo};

//     case DISPLAY_PHOTO_DETAILS:
//       return {...state, displayPhotoDetails: action.display};

//     default:
//       throw new Error (
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }

// const useApplicationData = function() {
//   const [state, dispatch] = useReducer(reducer, intialState);

//   const fetchSimilarPhotos = (selectedPhoto) => {
//     return photos.filter(photo => photo.id !== selectedPhoto.id);
//   };

//   const toggleModal = function(photo) {
//     dispatch({type: ACTIONS.SELECT_PHOTO, photo});
//     dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS,
//       display: !state.displayPhotoDetails
//      });
//   };

//   const toggleFavorite = function(photoId) {
//     if (state.favorites.includes(photoId)) {
//       dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, photoId});
//     } else {
//       dispatch({type: ACTIONS.FAV_PHOTO_ADDED, photoId});
//     }
//   };

//   const setPhotoData = function(photoData) {
//     dispatch({type: ACTIONS.SET_PHOTO_DATA, photoData});
//   }

//   const setTopicData = function(topicData) {
//     dispatch({type: ACTIONS.SET_TOPIC_DATA, topicData});
//   }

//   return {
//     state,
//     toggleModal,
//     toggleFavorite,
//     setPhotoData,
//     setTopicData,
//     isFavorite: (id) => state.favorites.includes(id)
//   };

// }



// //-------------------------------------------------------------------------------------  THIS IS THE CUSTOM HOOK
// import { useState, useEffect } from "react";
// import photos from "mocks/photos";

// const useApplicationData = function() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [similarPhotos, setSimilarPhotos] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   const fetchSimilarPhotos = (selectedPhoto) => {
//     return photos.filter(photo => photo.id !== selectedPhoto.id)
//   };
//   const toggleModal = (photo) => {
//     if (!isModalOpen) {
//       setSelectedPhoto(photo);
//       const similar = fetchSimilarPhotos(photo);
//       setSimilarPhotos(similar);
//     }
//     setIsModalOpen(!isModalOpen);
//   };

//   const isFavorite = (id) => {
//     return favorites.includes(id);
//   };

//   const toggleFavorite = (id) => {
//     if (!favorites.includes(id)) {
//       setFavorites([...favorites, id]);
//       return;
//     }
//     setFavorites(favorites.filter(favorite => favorite !== id));
//   };
//   const state = {
//     isModalOpen,
//     selectedPhoto,
//     similarPhotos,
//     favorites,

//     ifLiked: favorites.length > 0,
//   };

//   return {
//     state,
//     toggleModal,
//     toggleFavorite,
//     isFavorite,

//   };
// }



// export default useApplicationData;


// //==================================================================
// import { useReducer } from "react";
// import photos from "mocks/photos";
// import { type } from "@testing-library/user-event/dist/type";


// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
//   TOGGLE_MODAL: 'TOGGLE_MODAL'
// };

// const intialState = {
//   photoData: [],
//   topicData: [],
//   selectedPhoto: null,
//   displayPhotoDetails: false,
//   favorites: []
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.FAV_PHOTO_ADDED:
//       return {...state, favorites: [...state.favorites, action.photoId]};

//     case ACTIONS.FAV_PHOTO_REMOVED:
//     return { ...state, favorites: state.favorites.filter(id => id !== action.photoId) };

//     case ACTIONS.TOGGLE_MODAL:
//       return {...state, isModalOpen: !state.isModalOpen};

//     case ACTIONS.SET_PHOTO_DATA:
//       return {...state, photoData: ACTIONS.photoData};

//     case ACTIONS.SET_TOPIC_DATA:
//       return {...state, topicData: action.topicData};

//     case ACTIONS.SELECT_PHOTO:
//       return {...state, selectedPhoto: action.photo};

//     case ACTIONS.DISPLAY_PHOTO_DETAILS:
//       return {...state, displayPhotoDetails: action.display};

//     default:
//       throw new Error (
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }

// const useApplicationData = function() {
//   const [state, dispatch] = useReducer(reducer, intialState);

//   const fetchSimilarPhotos = (selectedPhoto) => {
//     return photos.filter(photo => photo.id !== selectedPhoto.id);
//   };

//   const toggleModal = function(photo) {
//     dispatch({type: ACTIONS.TOGGLE_MODAL});
//   if (photo) {
//     dispatch({type: ACTIONS.SELECT_PHOTO, photo});
//   }

//   };

//   const toggleFavorite = function(photoId) {
//     if (state.favorites.includes(photoId)) {
//       dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, photoId});
//     } else {
//       dispatch({type: ACTIONS.FAV_PHOTO_ADDED, photoId});
//     }
//   };
import { useReducer } from "react";
// import photos from "mocks/photos";


// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
// };

// const intialState = {
//   photoData: [],
//   topicData: [],
//   selectedPhoto: null,
//   displayPhotoDetails: false,
//   favorites: []
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.FAV_PHOTO_ADDED:
//       return {...state, favorites: [...state.favorites, action.photoId]};

//     case ACTIONS.FAV_PHOTO_REMOVED:
//       return {...state, favorties:
//         [...state.filter(id => id !== action.      photoId)]};

//     case ACTIONS.SET_PHOTO_DATA:
//       return {...state, photoData: ACTIONS.photoData};

//     case ACTIONS.SET_TOPIC_DATA:
//       return {...state, topicData: action.topicData};

//     case ACTIONS.SELECT_PHOTO:
//       return {...state, selectedPhoto: action.photo};

//     case DISPLAY_PHOTO_DETAILS:
//       return {...state, displayPhotoDetails: action.display};

//     default:
//       throw new Error (
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }

// const useApplicationData = function() {
//   const [state, dispatch] = useReducer(reducer, intialState);

//   const fetchSimilarPhotos = (selectedPhoto) => {
//     return photos.filter(photo => photo.id !== selectedPhoto.id);
//   };

//   const toggleModal = function(photo) {
//     dispatch({type: ACTIONS.SELECT_PHOTO, photo});
//     dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS,
//       display: !state.displayPhotoDetails
//      });
//   };

//   const toggleFavorite = function(photoId) {
//     if (state.favorites.includes(photoId)) {
//       dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, photoId});
//     } else {
//       dispatch({type: ACTIONS.FAV_PHOTO_ADDED, photoId});
//     }
//   };

//   const setPhotoData = function(photoData) {
//     dispatch({type: ACTIONS.SET_PHOTO_DATA, photoData});
//   }

//   const setTopicData = function(topicData) {
//     dispatch({type: ACTIONS.SET_TOPIC_DATA, topicData});
//   }

//   return {
//     state,
//     toggleModal,
//     toggleFavorite,
//     setPhotoData,
//     setTopicData,
//     isFavorite: (id) => state.favorites.includes(id)
//   };

// }



// //-------------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import photos from "mocks/photos";

// const useApplicationData = function() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [similarPhotos, setSimilarPhotos] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   const fetchSimilarPhotos = (selectedPhoto) => {
//     return photos.filter(photo => photo.id !== selectedPhoto.id)
//   };
//   const toggleModal = (photo) => {
//     if (!isModalOpen) {
//       setSelectedPhoto(photo);
//       const similar = fetchSimilarPhotos(photo);
//       setSimilarPhotos(similar);
//     }
//     setIsModalOpen(!isModalOpen);
//   };

//   const isFavorite = (id) => {
//     return favorites.includes(id);
//   };

//   const toggleFavorite = (id) => {
//     if (!favorites.includes(id)) {
//       setFavorites([...favorites, id]);
//       return;
//     }
//     setFavorites(favorites.filter(favorite => favorite !== id));
//   };
//   const state = {
//     isModalOpen,
//     selectedPhoto,
//     similarPhotos,
//     favorites,

//     ifLiked: favorites.length > 0,
//   };

//   return {
//     state,
//     toggleModal,
//     toggleFavorite,
//     isFavorite,

//   };
// }



// export default useApplicationData;


// //==================================================================
// import { useReducer } from "react";
// import photos from "mocks/photos";
// import { type } from "@testing-library/user-event/dist/type";


// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
//   TOGGLE_MODAL: 'TOGGLE_MODAL'
// };

// const intialState = {
//   photoData: [],
//   topicData: [],
//   selectedPhoto: null,
//   displayPhotoDetails: false,
//   favorites: []
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.FAV_PHOTO_ADDED:
//       return {...state, favorites: [...state.favorites, action.photoId]};

//     case ACTIONS.FAV_PHOTO_REMOVED:
//     return { ...state, favorites: state.favorites.filter(id => id !== action.photoId) };

//     case ACTIONS.TOGGLE_MODAL:
//       return {...state, isModalOpen: !state.isModalOpen};

//     case ACTIONS.SET_PHOTO_DATA:
//       return {...state, photoData: ACTIONS.photoData};

//     case ACTIONS.SET_TOPIC_DATA:
//       return {...state, topicData: action.topicData};

//     case ACTIONS.SELECT_PHOTO:
//       return {...state, selectedPhoto: action.photo};

//     case ACTIONS.DISPLAY_PHOTO_DETAILS:
//       return {...state, displayPhotoDetails: action.display};
import { useReducer } from "react";
// import photos from "mocks/photos";


// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
// };

// const intialState = {
//   photoData: [],
//   topicData: [],
//   selectedPhoto: null,
//   displayPhotoDetails: false,
//   favorites: []
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.FAV_PHOTO_ADDED:
//       return {...state, favorites: [...state.favorites, action.photoId]};

//     case ACTIONS.FAV_PHOTO_REMOVED:
//       return {...state, favorties:
//         [...state.filter(id => id !== action.      photoId)]};

//     case ACTIONS.SET_PHOTO_DATA:
//       return {...state, photoData: ACTIONS.photoData};

//     case ACTIONS.SET_TOPIC_DATA:
//       return {...state, topicData: action.topicData};

//     case ACTIONS.SELECT_PHOTO:
//       return {...state, selectedPhoto: action.photo};

//     case DISPLAY_PHOTO_DETAILS:
//       return {...state, displayPhotoDetails: action.display};

//     default:
//       throw new Error (
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }

// const useApplicationData = function() {
//   const [state, dispatch] = useReducer(reducer, intialState);

//   const fetchSimilarPhotos = (selectedPhoto) => {
//     return photos.filter(photo => photo.id !== selectedPhoto.id);
//   };

//   const toggleModal = function(photo) {
//     dispatch({type: ACTIONS.SELECT_PHOTO, photo});
//     dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS,
//       display: !state.displayPhotoDetails
//      });
//   };

//   const toggleFavorite = function(photoId) {
//     if (state.favorites.includes(photoId)) {
//       dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, photoId});
//     } else {
//       dispatch({type: ACTIONS.FAV_PHOTO_ADDED, photoId});
//     }
//   };

//   const setPhotoData = function(photoData) {
//     dispatch({type: ACTIONS.SET_PHOTO_DATA, photoData});
//   }

//   const setTopicData = function(topicData) {
//     dispatch({type: ACTIONS.SET_TOPIC_DATA, topicData});
//   }

//   return {
//     state,
//     toggleModal,
//     toggleFavorite,
//     setPhotoData,
//     setTopicData,
//     isFavorite: (id) => state.favorites.includes(id)
//   };

// }



// //-------------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import photos from "mocks/photos";

// const useApplicationData = function() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [similarPhotos, setSimilarPhotos] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   const fetchSimilarPhotos = (selectedPhoto) => {
//     return photos.filter(photo => photo.id !== selectedPhoto.id)
//   };
//   const toggleModal = (photo) => {
//     if (!isModalOpen) {
//       setSelectedPhoto(photo);
//       const similar = fetchSimilarPhotos(photo);
//       setSimilarPhotos(similar);
//     }
//     setIsModalOpen(!isModalOpen);
//   };

//   const isFavorite = (id) => {
//     return favorites.includes(id);
//   };

//   const toggleFavorite = (id) => {
//     if (!favorites.includes(id)) {
//       setFavorites([...favorites, id]);
//       return;
//     }
//     setFavorites(favorites.filter(favorite => favorite !== id));
//   };
//   const state = {
//     isModalOpen,
//     selectedPhoto,
//     similarPhotos,
//     favorites,

//     ifLiked: favorites.length > 0,
//   };

//   return {
//     state,
//     toggleModal,
//     toggleFavorite,
//     isFavorite,

//   };
// }



// export default useApplicationData;


// //==================================================================
// import { useReducer } from "react";
// import photos from "mocks/photos";
// import { type } from "@testing-library/user-event/dist/type";


// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
//   TOGGLE_MODAL: 'TOGGLE_MODAL'
// };

// const intialState = {
//   photoData: [],
//   topicData: [],
//   selectedPhoto: null,
//   displayPhotoDetails: false,
//   favorites: []
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.FAV_PHOTO_ADDED:
//       return {...state, favorites: [...state.favorites, action.photoId]};

//     case ACTIONS.FAV_PHOTO_REMOVED:
//     return { ...state, favorites: state.favorites.filter(id => id !== action.photoId) };

//     case ACTIONS.TOGGLE_MODAL:
//       return {...state, isModalOpen: !state.isModalOpen};

//     case ACTIONS.SET_PHOTO_DATA:
//       return {...state, photoData: ACTIONS.photoData};

//     case ACTIONS.SET_TOPIC_DATA:
//       return {...state, topicData: action.topicData};

//     case ACTIONS.SELECT_PHOTO:
//       return {...state, selectedPhoto: action.photo};

//     case ACTIONS.DISPLAY_PHOTO_DETAILS:
//       return {...state, displayPhotoDetails: action.display};

//     default:
//       throw new Error (
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }

// const useApplicationData = function() {
//   const [state, dispatch] = useReducer(reducer, intialState);

//   const fetchSimilarPhotos = (selectedPhoto) => {
//     return photos.filter(photo => photo.id !== selectedPhoto.id);
//   };

//   const toggleModal = function(photo) {
//     dispatch({type: ACTIONS.TOGGLE_MODAL});
//   if (photo) {
//     dispatch({type: ACTIONS.SELECT_PHOTO, photo});
//   }

//   };

//   const toggleFavorite = function(photoId) {
//     if (state.favorites.includes(photoId)) {
//       dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, photoId});
//     } else {
//       dispatch({type: ACTIONS.FAV_PHOTO_ADDED, photoId});
//     }
//   };

//   const setPhotoData = function(photoData) {
//     dispatch({type: ACTIONS.SET_PHOTO_DATA, photoData});
//   }

//   const setTopicData = function(topicData) {
//     dispatch({type: ACTIONS.SET_TOPIC_DATA, topicData});
//   }

//   return {
//     state,
//     toggleModal,
//     toggleFavorite,
//     setPhotoData,
//     setTopicData,
//     fetchSimilarPhotos,
//     isFavorite: (id) => state.favorites.includes(id)
//   };

// }

// export default useApplicationData;
//     default:
//       throw new Error (
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }

// const useApplicationData = function() {
//   const [state, dispatch] = useReducer(reducer, intialState);

//   const fetchSimilarPhotos = (selectedPhoto) => {
//     return photos.filter(photo => photo.id !== selectedPhoto.id);
//   };

//   const toggleModal = function(photo) {
//     dispatch({type: ACTIONS.TOGGLE_MODAL});
//   if (photo) {
//     dispatch({type: ACTIONS.SELECT_PHOTO, photo});
//   }

//   };

//   const toggleFavorite = function(photoId) {
//     if (state.favorites.includes(photoId)) {
//       dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, photoId});
//     } else {
//       dispatch({type: ACTIONS.FAV_PHOTO_ADDED, photoId});
//     }
//   };

//   const setPhotoData = function(photoData) {
//     dispatch({type: ACTIONS.SET_PHOTO_DATA, photoData});
//   }

//   const setTopicData = function(topicData) {
//     dispatch({type: ACTIONS.SET_TOPIC_DATA, topicData});
//   }

//   return {
//     state,
//     toggleModal,
//     toggleFavorite,
//     setPhotoData,
//     setTopicData,
//     fetchSimilarPhotos,
//     isFavorite: (id) => state.favorites.includes(id)
//   };

// }

// export default useApplicationData;
//   const setPhotoData = function(photoData) {
//     dispatch({type: ACTIONS.SET_PHOTO_DATA, photoData});
//   }

//   const setTopicData = function(topicData) {
//     dispatch({type: ACTIONS.SET_TOPIC_DATA, topicData});
//   }

//   return {
//     state,
//     toggleModal,
//     toggleFavorite,
//     setPhotoData,
//     setTopicData,
//     fetchSimilarPhotos,
//     isFavorite: (id) => state.favorites.includes(id)
//   };

// }

import { useReducer } from "react";
import photos from "mocks/photos";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_SIMILAR_PHOTOS: 'SET_SIMILAR_PHOTOS'
};

const initialState = {
  photoData: [],
  topicData: [],
  selectedPhoto: null,
  displayPhotoDetails: false,
  favorites: [],
  similarPhotos: []
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, favorites: [...state.favorites, action.photoId]};

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, favorites: state.favorites.filter(id => id !== action.photoId)};

    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.photoData};

    case ACTIONS.SET_TOPIC_DATA:
      return {...state, topicData: action.topicData};

    case ACTIONS.SELECT_PHOTO:
      return {...state, selectedPhoto: action.photo};

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {...state, displayPhotoDetails: action.display};

    case ACTIONS.SET_SIMILAR_PHOTOS:
      return {...state, similarPhotos: action.similarPhotos};

    default:
      throw new Error (
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = function() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSimilarPhotos = (selectedPhoto) => {
    return photos.filter(photo => photo.id !== selectedPhoto.id);
  };

  const toggleModal = function(photo) {
    dispatch({type: ACTIONS.SELECT_PHOTO, photo});
    dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS, display: !state.displayPhotoDetails});
    if (photo) {
      const similarPhotos = fetchSimilarPhotos(photo);
      dispatch({type: ACTIONS.SET_SIMILAR_PHOTOS, similarPhotos});
    }
  };

  const toggleFavorite = function(photoId) {
    if (state.favorites.includes(photoId)) {
      dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, photoId});
    } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, photoId});
    }
  };

  const setPhotoData = function(photoData) {
    dispatch({type: ACTIONS.SET_PHOTO_DATA, photoData});
  };

  const setTopicData = function(topicData) {
    dispatch({type: ACTIONS.SET_TOPIC_DATA, topicData});
  };

  return {
    state,
    toggleModal,
    toggleFavorite,
    setPhotoData,
    setTopicData,
    fetchSimilarPhotos,
    isFavorite: (id) => state.favorites.includes(id)
  };
};

export default useApplicationData;

export default useApplicationData;