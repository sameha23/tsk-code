// CharacterList.js
import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList({ characters, toggleFavorite, favorites }) {
  return (
    <>
      <h2>All Characters</h2>
      <div id="all-characters" className="character-list">
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        ))}
      </div>
    </>
  );
}

export default CharacterList;
