
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

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

  const fetchCitySuggestions = async (input) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${input}&type=like&sort=population&cnt=5&appid=034098922d7a5c9dd10bf1e73fbdd05d`
      );

      if (response.ok) {
        const data = await response.json();
        const suggestedCities = data.list.map((city) => city.name);
        setSuggestions(suggestedCities);
        setErrorMessage('');
      } else {
        setSuggestions([]);
        setErrorMessage('Nessuna corrispondenza trovata. Inserisci una città valida.');
      }
    } catch (error) {
      console.error('Errore nella richiesta di suggerimenti:', error);
      setSuggestions([]);
      setErrorMessage('Errore nel recupero dei suggerimenti. Riprova più tardi.');
    }
  };

  const handleSuggestionClick = (suggestedCity) => {
    setCity(suggestedCity);
    setSuggestions([]);
    setErrorMessage('');
  };

  return (
    <div className="mb-3">
      <label htmlFor="cityInput" className="form-label">
        Inserisci una città
      </label>
      <input
        type="text"
        id="cityInput"
        className="form-control"
        placeholder="Es. Roma"
        value={city}
        onChange={handleInputChange}
      />
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <div className="suggestion-list">
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
      <button className="btn btn-primary mt-2" onClick={handleSearch}>
        Cerca
      </button>
    </div>
  );
};

export default SearchBar;
