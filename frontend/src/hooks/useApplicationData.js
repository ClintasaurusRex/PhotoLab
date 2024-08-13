import { useReducer, useEffect, useState } from "react";

const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
};

// Initial state for the application
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favorites: [],
  photoData: [],
  topicData: [],
};

// Reducer function to handle state updates
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL: // Handle modal toggle
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        selectedPhoto: action.photo || null,
      };
    case ACTIONS.TOGGLE_FAVORITE: // Handle favorite toggle
      return {
        ...state,
        favorites: state.favorites.includes(action.id)
          ? state.favorites.filter(favorite => favorite !== action.id)
          : [...state.favorites, action.id],
      };
    case ACTIONS.SET_PHOTO_DATA: // Set photo data
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:// Set topic data
      return {
        ...state,
        topicData: action.payload,
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:// Get photos by topics
      return {
        ...state,
        photoData: action.payload,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = function () {
  const [search, setSearch] = useState("") // use best practices says dont use complex state

  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch initial data on component mount
  useEffect(() => {

    const photoPromise = fetch('/api/photos');
    const topicsPromise = fetch('/api/topics');

    const promises = [photoPromise, topicsPromise];

    Promise.all(promises)
      .then((response) => {
        const promises = response.map((res) => {
          return res.json();
        });
        return Promise.all(promises);

      })
      .then(response => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response[0] });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response[1] });
      });

  }, []);

  // Function to toggle modal
  const toggleModal = (photo) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, photo });
  };

  // Function to check if a photo is favorited
  const isFavorite = (id) => {
    return state.favorites.includes(id);
  };

  // Function to toggle favorite status of a photo
  const toggleFavorite = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, id });
  };

  const topicsButtons = function(id) {
    fetch(`/api/topics/photos/${id}`)
    .then((res) => {
      return res.json()
    })
    .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data}))
    .catch(error => console.log(error))
  }

  // Return state and functions
  return {
    state: {
      ...state,
      hasFavorites: state.favorites.length > 0,
    },
    toggleModal,
    toggleFavorite,
    isFavorite,
    topicsButtons,
    search,
    setSearch
  };


};

export default useApplicationData;
