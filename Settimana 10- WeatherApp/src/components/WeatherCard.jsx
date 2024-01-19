
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureLow, faTint, faWind, faEye, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const WeatherCard = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    name,
    weather,
    main,
    wind,
    visibility,
    sys: { country },
  } = data;

  // Funzione per convertire la temperatura da Kelvin a Celsius
  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

  // Mappa delle condizioni meteorologiche
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

  return (
    <div>
      <h2>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> {`${name}, ${country}`}
      </h2>
      <p>
        <FontAwesomeIcon icon={faTemperatureLow} /> {`Temperatura: ${kelvinToCelsius(main.temp)} °C`}
      </p>
      <p>
        <FontAwesomeIcon icon={faTint} /> {`Umidità: ${main.humidity}%`}
      </p>
      <p>
        <FontAwesomeIcon icon={faWind} /> {`Velocità del vento: ${wind.speed} m/s`}
      </p>
      <p>
        <FontAwesomeIcon icon={faEye} /> {`Visibilità: ${visibility} metri`}
      </p>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> {`Condizione: ${conditionInItalian}`}
      </p>
    </div>
  );
};

export default WeatherCard;
