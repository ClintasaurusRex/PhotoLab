import { useReducer } from "react";
import photos from "mocks/photos";

const TOGGLE_MODAL = 'TOGGLE_MODAL';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const SET_SIMILAR_PHOTOS = 'SET_SIMILAR_PHOTOS';


const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  favorites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        selectedPhoto: action.photo || null,
        similarPhotos: action.photo ? fetchSimilarPhotos(action.photo) : [],
      };
    case TOGGLE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.includes(action.id)
          ? state.favorites.filter(favorite => favorite !== action.id)
          : [...state.favorites, action.id],
      };

      case SET_SIMILAR_PHOTOS:
  return {
    ...state,
    similarPhotos: action.photo ? fetchSimilarPhotos(action.photo) : [],
  };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const fetchSimilarPhotos = (selectedPhoto) => {
  return photos.filter(photo => photo.id !== selectedPhoto.id);
};

const useApplicationData = function() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = (photo) => {
    dispatch({ type: TOGGLE_MODAL, photo });
    // dispatch({type: SET_SIMILAR_PHOTOS. similarPhotos})
  };

  const isFavorite = (id) => {
    return state.favorites.includes(id);
  };

  const toggleFavorite = (id) => {
    dispatch({ type: TOGGLE_FAVORITE, id });
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
}

export default useApplicationData;
