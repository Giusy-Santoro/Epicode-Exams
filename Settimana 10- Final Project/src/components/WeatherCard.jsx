import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureLow, faTint, faWind, faEye, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const WeatherCard = ({ data }) => {
  if (!data) {
    return null;
  }

  const getCurrentTime = () => {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: false };
    return new Intl.DateTimeFormat('it-IT', options).format(now);
  };

  const {
    name,
    weather,
    main,
    wind,
    visibility,
    sys: { country, sunrise },
  } = data;

  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

  const weatherConditions = {
    'Clear': 'Sereno',
    'Clouds': 'Nuvoloso',
    'Rain': 'Pioggia',
    'Drizzle': 'Pioggerella',
    'Thunderstorm': 'Temporale',
    'Snow': 'Neve',
    'Mist': 'Nebbia',
  };

  const conditionInItalian = weatherConditions[weather[0].main] || weather[0].description;

  const weatherIcon = weather[0].icon
    ? `http://openweathermap.org/img/wn/${weather[0].icon}.png`
    : null;

  const getFormattedDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('it-IT', options).format(date);
  };

  return (
    <div className="weather-card">
      <div className="weather-head">
        <h2>{name}</h2>
        <p>{getFormattedDate(sunrise)}</p>
        <p>{getCurrentTime()}</p>
      </div>
      <div className="weather-condition">
        <img src={weatherIcon} alt="Weather Icon" className='condition-icon'/>
        <div className="temperature">{kelvinToCelsius(main.temp)}°C</div>
      </div>
      <div className="details ">
        <div className="detail">
          <FontAwesomeIcon icon={faWind} />
          <span>{wind.speed} m/s</span>
        </div>
        <div className="detail">
          <FontAwesomeIcon icon={faTint} />
          <span>{main.humidity}%</span>
        </div>
        <div className="detail">
          <FontAwesomeIcon icon={faEye} />
          <span>{visibility / 1000} km</span>
        </div>
      </div>
      <div className="weather-gif">
        <img src="https://i.pinimg.com/originals/01/87/93/018793bb6fd3e5ac98f630a559adb464.gif" className='gif' alt="GIF" />
      </div>
    </div>
  );
};

export default WeatherCard;
