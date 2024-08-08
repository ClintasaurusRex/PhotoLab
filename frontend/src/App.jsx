import React from 'react';
// import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';


import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const sampleDataForPhotoListItem = {
  //   id: "1",
  //   location: {
  //     city: "Montreal",
  //     country: "Canada",
  //   },
  //   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  //   username: "Joe Example",
  //   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  // };
  // const photos = new Array(3).fill(sampleDataForPhotoListItem);

  //  const mappedPhotoList = photos.map((photo) => {
  //   return <PhotoListItem key={photo.id} photo={photo} />
  // });




  return (
    <div className="App">
      {/* { mappedPhotoList } */}

    <PhotoList />

    </div>
  );
};

export default App;


// {photos.map((photo, index) => (
//   <PhotoListItem key={index} photo={photo} />
// ))}