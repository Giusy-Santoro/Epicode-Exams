
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (city) => {

    navigate(`/weather/${city}`);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="text-center">
        <h1>Devo portare l'ombrello?</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Home;