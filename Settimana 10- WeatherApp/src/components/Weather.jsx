
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';
import WeeklyForecast from '../components/WeeklyForecast';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const { city } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (!city) {
          setWeatherData(null);
          setWeeklyForecast(null);
          return;
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=034098922d7a5c9dd10bf1e73fbdd05d`
        );

        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati meteorologici');
        }

        const data = await response.json();
        console.log('Dati meteorologici recuperati:', data);
        setWeatherData(data);

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=034098922d7a5c9dd10bf1e73fbdd05d`
        );

        if (forecastResponse.ok) {
          const forecastData = await forecastResponse.json();
          console.log('Previsioni settimanali recuperate:', forecastData);
          setWeeklyForecast(forecastData);
        }
      } catch (error) {
        console.error('Errore nel recupero dei dati meteorologici:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  useEffect(() => {
    // Pulisci i dati quando il componente si monta
    setWeatherData(null);
    setWeeklyForecast(null);
  }, []); // Dipendenza vuota, quindi si verifica solo al montaggio del componente

  console.log('Stato dei dati meteorologici:', weatherData);
  console.log('Stato delle previsioni settimanali:', weeklyForecast);

  return (
    <div>
      <SearchBar />
      {loading && <p>Caricamento...</p>}
      {!loading && weatherData && <WeatherCard data={weatherData} />}
      {!loading && weeklyForecast && <WeeklyForecast data={weeklyForecast} />}
      
      {/* Aggiungi un link per tornare alla home */}
      <Link to="/" className="btn btn-secondary mt-2">
        Torna alla Home
      </Link>
    </div>
  );
};

export default Weather;
