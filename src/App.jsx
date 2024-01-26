import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SearchCountries } from './services/SearchCountries';
import { CreateCountry } from './services/CreateCountry';
import { useCountryData } from './services/useCountryData';
import { UpdateCountry } from './services/UpdateCountry';
import './styles/App.css';  

const App = () => {
  const { country, setCode } = useCountryData();

  return (
    <Router>
      <div className="app-container">
       
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/create">Create Country</Link>
          <Link to="/update">Update Country</Link>
        </nav>

        {/* Contenido de las rutas */}
        <Routes>
          <Route path="/" element={<SearchCountries country={country} setCode={setCode} />} />
          <Route path="/create" element={<CreateCountry />} />
          <Route path="/update" element={<UpdateCountry />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

