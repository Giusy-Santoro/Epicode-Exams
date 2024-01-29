import Navbar from '../components/Navbar'; 
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer'; 

// Utilizza direttamente l'URL dell'immagine
const gifImageURL = 'https://cdn.dribbble.com/users/1897998/screenshots/4267737/media/224d46db9bb481945829ec26b034f34c.gif';

const Home = () => {
  const handleSearch = (city) => {
    console.log(`Ricerca della città: ${city}`);
  };

  return (
    <div className="vh-100 d-flex flex-column">
      <Navbar />
      <div className="flex-grow-1 container d-flex align-items-center justify-content-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-start">
            <h1>Devo portare l'ombrello?</h1>
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="col-md-6 text-center">
            {/* Usa direttamente l'URL nell'elemento img */}
            <img src={gifImageURL} alt="GIF" className="img-fluid max-width-100 gif" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
