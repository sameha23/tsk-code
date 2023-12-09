// CharacterCard.js
import React from 'react';


function CharacterCard({ character, toggleFavorite, favorites }) {
  const { id, name, status, species, gender, origin, location, image } = character;

  const handleFavorite = () => {
    toggleFavorite(character);
  };

  const isFavorite = favorites.some((fav) => fav.id === id);

  const buttonStyle = {
    backgroundColor: isFavorite ? 'red' : 'green',
    padding: '10px 20px', // Adjust padding as needed
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontFamily: 'Titillium Web, sans-serif'
  };

  const buttonText = isFavorite ? 'Remove from Favorites' : 'Add to Favorites';

  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      {/* Display more character info as needed */}
      <button style={buttonStyle} onClick={handleFavorite}>
        {buttonText}
      </button>
    </div>
  );
}

export default CharacterCard;
