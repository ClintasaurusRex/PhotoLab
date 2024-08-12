import { useReducer, useEffect } from "react";
import photos from "mocks/photos";
// import { response } from "express";

const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  favorites: [],
  photoData: [],
  topicData: [],
};



function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        selectedPhoto: action.photo || null,
        similarPhotos: action.photo ? fetchSimilarPhotos(action.photo) : [],
      };
    case ACTIONS.TOGGLE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.includes(action.id)
          ? state.favorites.filter(favorite => favorite !== action.id)
          : [...state.favorites, action.id],
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload,
      };


    //case SET_SIMILAR_PHOTOS:
    // return {
    //   ...state,
    //   similarPhotos: action.photo ? fetchSimilarPhotos(action.photo) : [],
    // };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const fetchSimilarPhotos = (selectedPhoto) => {
  return photos.filter(photo => photo.id !== selectedPhoto.id);
};

const useApplicationData = function () {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // fetch data
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    // fetch data
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);




  const toggleModal = (photo) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, photo });
    // dispatch({type: SET_SIMILAR_PHOTOS. similarPhotos})
  };

  const isFavorite = (id) => {
    return state.favorites.includes(id);
  };

  const toggleFavorite = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, id });
  };

  return {
    state: {
      ...state,
      hasFavorites: state.favorites.length > 0,
    },
    toggleModal,
    toggleFavorite,
    isFavorite,
  };


};

export default useApplicationData;
