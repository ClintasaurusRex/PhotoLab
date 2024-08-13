import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';


// User able to search for photos using any of the available photo data: username, location, country

// Consider having a search bar in the top navigation or just below the top navigation

// User can click on a Search button to query photos from the API with the search parameters and return the relevant photos

// Update the backend with an API endpoint to support the search functionality


const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      {/* Application logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div>
        <input type="text" placeholder='search' value={props.search}
          onChange={e => props.setSearch(e.target.value)} />
      </div>
      {/* List of topics */}
      <TopicList topics={props.topics} topicsButtons={props.topicsButtons} />

      {/* Favorite badge component */}
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;