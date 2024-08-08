import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar topics={props.topics} />
      <PhotoList photo={props.photo} />

    </div>
  );
};

export default HomeRoute;
