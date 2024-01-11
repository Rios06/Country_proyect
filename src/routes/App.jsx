
import { useState } from "react";
import { useCountryData } from "../services/useCountryData";
import "../styles/App.css";

import videoz from "../assets/planeta.mp4";

function App() {
  const { country, setCode } = useCountryData();

  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setCode(inputValue.toUpperCase());
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="app-container">
      <video id="videoBackground" autoPlay loop muted>
        <source src={videoz} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Search country by code</h1>
        <input
          id="searchCountry"
          type="text"
          onBlur={handleChange}
          maxLength={2}
        />
        <br />
        <button onClick={() => handleClick()}>Search country</button>
        {country == null ? (
          <p>There is no country with that code</p>
        ) : (
          <article>
            <ul id="dataCountry">
              <li>Code: {country.code}</li>
              <li>Name: {country.name}</li>
              <li>Capital: {country.capital}</li>
              <li>Continent: {country.continent && country.continent.name}</li>
            </ul>
          </article>
        )}
      </div>
    </div>
  );
}

export default App;



