import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Pagination from "./components/Pagination";
import Button from "./components/Button";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(8);
  const [isLogin, setIsLogin] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const FetchCountries = async () => {
      setLoading(true);
      // response
      const res = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountries(res.data);
      setLoading(false);
      console.log(res.data);
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

  const handleLogOut = () => setIsLogin(false);
  const handleLogIn = () => setIsLogin(true);
  const toggleModalOpen = () => setModalIsOpen(true);
  const toggleModalClose = () => setModalIsOpen(false);
  console.log(modalIsOpen);

  return (
    <div className="App">
      <header className="App-header" />
      <div className="container">
        <h1 className="text-primary">
          Countries of the World
          <i className="fas fa-globe-europe" />
        </h1>
        <Button
          isLogin={isLogin}
          handleLogIn={handleLogIn}
          handleLogOut={handleLogOut}
        />
        <Countries
          loading={loading}
          currentCountries={currentCountries}
          modalIsOpen={modalIsOpen}
          toggleModalOpen={toggleModalOpen}
          toggleModalClose={toggleModalClose}
        />
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
