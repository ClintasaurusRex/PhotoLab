import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(previsFavorite => !previsFavorite)
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite}  />
      </div>
    </div>
  );
}

export default PhotoFavButton;