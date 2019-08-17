import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Pagination from "./components/Pagination";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(8);

  useEffect(() => {
    const FetchCountries = async () => {
      setLoading(true);
      // response
      const res = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountries(res.data);
      setLoading(false);
    };
    FetchCountries();
  }, []); // [] avoid useEffect() to run and make an never ended loop at each updates

  //get the vurrents countries to display in da page
  const indexLastCountries = currentPage * countriesPerPage;
  const indexFirstCountries = indexLastCountries - countriesPerPage;
  const currentCountries = countries.slice(
    indexFirstCountries,
    indexLastCountries
  );

  const paginate = number => setCurrentPage(number);

  return (
    <div className="App">
      <header className="App-header" />
      <div className="container">
        <h1 className="text-primary">
          Countries of the World
          <i className="fas fa-globe-europe" />
        </h1>
        <Countries loading={loading} countries={currentCountries} />
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={countries.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default App;
