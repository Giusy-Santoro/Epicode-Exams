import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { format } from 'date-fns';
import itLocale from 'date-fns/locale/it';

const WeeklyForecast = (props) => {
  const [dailyData, setDailyData] = useState(null);

  useEffect(() => {
    const fetchDailyData = async () => {
      try {
        if (!props.data || !props.data.list) {
          console.error('Dati settimanali non disponibili.');
          setDailyData(null);
          return;
        }

        const dailyData = props.data.list.filter(entry => {
          const hour = new Date(entry.dt_txt).getHours();
          // serve per filtrare le ore da mezzanotte, mezzogiorno e poi di nuovo mezzanotte
          return [0, 12, 24].includes(hour);
        }).map(entry => ({
          ...entry,
          main: {
            ...entry.main,
            temp: entry.main.temp - 273.15, // Conversione da Kelvin a Celsius
          },
          dt_txt: format(new Date(entry.dt_txt), 'eee HH:mm', { locale: itLocale }),
        }));

        console.log('Previsioni giornaliere recuperate:', dailyData);
        setDailyData(dailyData);
      } catch (error) {
        console.error('Errore nel recupero delle previsioni giornaliere:', error);
      }
    };

    fetchDailyData();
  }, [props.data]);

  console.log('Stato delle previsioni giornaliere:', dailyData);
  return (
    <div className='forecast-card container'>
      {dailyData && (
        <div className='col'>
          <LineChart width={810} height={250} data={dailyData}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="dt_txt" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="main.temp" name="Temperatura (°C)" stroke="#8884d8" dot={false} />
          </LineChart>
        </div>
      )}
    </div>
  );
};


export default WeeklyForecast;
