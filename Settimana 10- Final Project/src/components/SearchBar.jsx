import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const fetchCitySuggestions = async (input) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${input}&type=like&sort=population&cnt=5&appid=034098922d7a5c9dd10bf1e73fbdd05d`
      );

      if (!response.ok) {
        console.error('Errore nel recupero dei suggerimenti sulla città');
        return;
      }

      const data = await response.json();
      const suggestions = data.list.map((item) => item.name);

      setSuggestions(suggestions);
    } catch (error) {
      console.error('Errore nel recupero dei suggerimenti sulla città:', error);
    }
  };

  const handleSearch = async () => {
    if (!city) {
      setErrorMessage('Inserisci una città');
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=034098922d7a5c9dd10bf1e73fbdd05d`
      );

      if (!response.ok) {
        setErrorMessage('Città non trovata. Inserisci una città valida.');
        return;
      }

      if (typeof onSearch === 'function') {
        onSearch(city);
      }

      navigate(`/weather/${city}`);
    } catch (error) {
      console.error('Errore nel recupero dei dati sulla città:', error);
      setErrorMessage('Errore nel recupero dei dati sulla città. Riprova più tardi.');
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCity(inputValue);

    if (inputValue.length >= 3) {
      fetchCitySuggestions(inputValue);
    } else {
      setSuggestions([]);
      setErrorMessage('');
    }
  };

  const handleSuggestionClick = (suggestedCity) => {
    setCity(suggestedCity);
    setSuggestions([]);
    setErrorMessage('');
  };

  return (
    <div className="mb-3 position-relative">
  
      <div className="input-group">
        <input
          type="text"
          id="cityInput"
          className="form-control"
          placeholder="Inserisci una città"
          value={city}
          onChange={handleInputChange}
        />
        <button className=" search-btn" onClick={handleSearch}>
          Cerca
        </button>
      </div>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      {suggestions.length > 0 && (
        <div className="suggestion-list position-absolute top-100 start-0 w-100">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
