
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const WeeklyForecast = (props) => {
  const [weeklyData, setWeeklyData] = useState(null);

  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        if (!props.data || !props.data.list) {
          console.error('Dati settimanali non disponibili.');
          setWeeklyData(null);
          return;
        }

        const weeklyData = props.data.list.map(entry => ({
          ...entry,
          main: {
            ...entry.main,
            temp: entry.main.temp - 273.15, // Conversione da Kelvin a Celsius
          },
        }));

        console.log('Previsioni settimanali recuperate:', weeklyData);
        setWeeklyData(weeklyData);
      } catch (error) {
        console.error('Errore nel recupero delle previsioni settimanali:', error);
      }
    };

    fetchWeeklyData();
  }, [props.data]);

  console.log('Stato delle previsioni settimanali:', weeklyData);

  return (
    <div>
      {weeklyData && (
        <LineChart width={800} height={300} data={weeklyData}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="dt_txt" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="main.temp" name="Temperatura (°C)" stroke="#8884d8" dot={false} />
          {/* Aggiungi altre Linee se necessario per altri dati */}
        </LineChart>
      )}
    </div>
  );
};

export default WeeklyForecast;
