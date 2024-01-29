import React, { useEffect, useState } from 'react';

const CapitalCard = () => {
  const [capitalData, setCapitalData] = useState(null);

  useEffect(() => {
    const fetchCapitalData = async () => {
      try {
        // Array di capitali da visualizzare
        const capitalCities = ['Roma, It', 'Parigi', 'Berlino', 'Londra', 'Tokyo', 'New York'];

        const fetchDataPromises = capitalCities.map(async (capital) => {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=034098922d7a5c9dd10bf1e73fbdd05d`
          );

          if (!response.ok) {
            throw new Error(`Errore nel recupero dei dati per ${capital}`);
          }

          const data = await response.json();

          // Estrae le informazioni necessarie e aggiungi l'icona corrispondente
          const temperature = data.main.temp - 273.15; // Conversione da Kelvin a Celsius
          const icon = data.weather.length > 0 ? `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` : null;

          return {
            capital,
            temperature: temperature.toFixed(1),
            icon,
          };
        });

        const capitalData = await Promise.all(fetchDataPromises);
        setCapitalData(capitalData);
      } catch (error) {
        console.error('Errore nel recupero dei dati delle capitali:', error);
      }
    };

    fetchCapitalData();
  }, []);

  console.log('Stato dei dati delle capitali:', capitalData);

  return (
    <div className="">
      
      {capitalData && (
        <div>
          {capitalData.map((city) => (
            <div
              key={city.capital}
              className="capital-info d-flex align-items-center justify-content-around border"
            >
              <p className="m-0">{city.capital}</p>
              {city.icon && <img src={city.icon} alt="Temperature Icon" className="mx-2" />}
              <p className="m-0">{`${city.temperature} °C`}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CapitalCard;
