// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import CharacterList from './CharacterList';
import FavoriteCharacters from './FavoriteCharacters';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const fetchCharacters = (page) => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((error) => console.log(error));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleFavorite = (character) => {
    const index = favorites.findIndex(fav => fav.id === character.id);
    if (index === -1) {
      setFavorites([...favorites, character]);
    } else {
      const updatedFavorites = favorites.filter(fav => fav.id !== character.id);
      setFavorites(updatedFavorites);
    }
  };

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="active" exact>All Characters</NavLink>

              </li>
              <li>
                <NavLink to="/favorite-characters" activeClassName="active">Favorite Characters</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <CharacterList
                  characters={characters}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
                <div className="pagination">
                  <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                  </button>
                  <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                  </button>
                </div>
              </div>
            }
          />
          <Route
            path="/favorite-characters"
            element={<FavoriteCharacters favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
