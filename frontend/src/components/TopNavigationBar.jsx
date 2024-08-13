import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      {/* Application logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>

      {/* List of topics */}
      <TopicList topics={props.topics} topicsButtons={props.topicsButtons} />

      {/* Favorite badge component */}
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;