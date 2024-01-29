import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  // Stato dei film, inizialmente vuoto
  const [moviesLOTR, setMoviesLOTR] = useState([]); // Il Signore degli Anelli
  const [moviesPirates, setMoviesPirates] = useState([]); // Pirati dei Caraibi
  const [moviesHungerGames, setMoviesHungerGames] = useState([]); // Hunger Games

  // Funzione per ottenere i film de Il Signore degli Anelli
  const getMoviesLOTR = async () => {
    const urlSeriesLOTR = 'https://www.omdbapi.com/?apikey=3dd63da1&s=lord of the rings&type=movie';
    const response = await fetch(urlSeriesLOTR);
    const responseJson = await response.json();
    setMoviesLOTR(responseJson.Search);
  };

  useEffect(() => {
    getMoviesLOTR();
  }, []);

  // Funzione per ottenere i film di Pirati dei Caraibi
  const getMoviesPirates = async () => {
    const urlSeriesPirates = 'https://www.omdbapi.com/?apikey=3dd63da1&s=pirates of the caribbean&type=movie';
    const response = await fetch(urlSeriesPirates);
    const responseJson = await response.json();
    setMoviesPirates(responseJson.Search);
  };

  useEffect(() => {
    getMoviesPirates();
  }, []);

  // Funzione per ottenere i film di Hunger Games
  const getMoviesHungerGames = async () => {
    const urlSeriesHungerGames = 'https://www.omdbapi.com/?apikey=3dd63da1&s=hunger games&type=movie';
    const response = await fetch(urlSeriesHungerGames);
    const responseJson = await response.json();
    setMoviesHungerGames(responseJson.Search);
  };

  useEffect(() => {
    getMoviesHungerGames();
  }, []);

  return (
    <>
      <div>
        <NavBar />
        
        <h2>Trending Now</h2>
        <div className='gallery'>
          <Movies movies={moviesLOTR} />
        </div>

        <h2>Watch it Again</h2>
        <div className='gallery'>
          <Movies movies={moviesPirates} />
        </div>

        <h2>New Releases</h2>
        <div className='gallery'>
          <Movies movies={moviesHungerGames} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
