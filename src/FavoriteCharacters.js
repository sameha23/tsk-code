// FavoriteCharacters.js
import React from 'react';
import CharacterCard from './CharacterCard';

function FavoriteCharacters({ favorites, toggleFavorite }) {
  return (
    <div id="favorite-characters" className="favorite-characters">
      <h2>Favorite Characters</h2>
      <div className="favorite-characters-list">
        {favorites.map(favorite => (
          <CharacterCard
            key={favorite.id}
            character={favorite}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoriteCharacters;
