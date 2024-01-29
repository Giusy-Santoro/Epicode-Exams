
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useParams } from 'react-router-dom';

const MapCard = () => {
  const { city } = useParams();
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`
        );

        if (!response.ok) {
          throw new Error(`Errore nella ricerca del luogo: ${response.statusText}`);
        }

        const data = await response.json();

        if (data && data.length > 0) {
          setCoordinates({ latitude: data[0].lat, longitude: data[0].lon });
        } else {
          throw new Error('Nessun risultato trovato per la ricerca');
        }
      } catch (error) {
        console.error(`Errore nella ricerca del luogo: ${error.message}`);
      }
    };

    // Resetta le coordinate ogni volta che cambia la città
    setCoordinates({ latitude: null, longitude: null });

    // Chiamata alla funzione asincrona solo se city è definito
    if (city) {
      fetchCoordinates();
    }
  }, [city]);

  return (
    <div >
      {coordinates.latitude !== null && coordinates.longitude !== null && (
        <MapContainer
          center={[coordinates.latitude, coordinates.longitude]}
          zoom={13}
          
          className='map-container'
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[coordinates.latitude, coordinates.longitude]}>
            <Popup>La tua posizione</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default MapCard;
