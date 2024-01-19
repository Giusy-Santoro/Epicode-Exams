
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";

import Weather from './components/Weather';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
