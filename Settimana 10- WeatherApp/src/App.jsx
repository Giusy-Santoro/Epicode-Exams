import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./components/Home.jsx";
import Weather from './components/Weather';
import MapCard from './components/MapCard';  
import CapitalCard from './components/CapitalCard';  
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<Weather />} />
        <Route path="/map/:city" element={<MapCard />} />
        <Route path="/capitals" element={<CapitalCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
