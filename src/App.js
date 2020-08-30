import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Pagination from "./components/Pagination";
import Button from "./components/Button";
import Modals from "../src/components/Modals";
import useClickOutside from './components/useClickOutside';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(8);
  const [countryInModal, SetCountryInModal] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  //get the currents countries to display in page
  const indexLastCountries = currentPage * countriesPerPage;
  const indexFirstCountries = indexLastCountries - countriesPerPage;
  const currentCountries = countries.slice(
    indexFirstCountries,
    indexLastCountries
  );

  const paginate = number => setCurrentPage(number);

  const handleLogOut = () => setIsLogin(false);
  const handleLogIn = () => setIsLogin(true);
  const getObj = country => SetCountryInModal(country);
  const modalRef = useRef();

  useClickOutside(modalRef, () => { modalIsOpen && setModalIsOpen(false) });

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
          setModalIsOpen={setModalIsOpen}
          modalIsOpen={modalIsOpen}
          getObj={getObj}
          modalRef={modalRef}
        />

        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={countries.length}
          paginate={paginate}
        />
      </div>
      {modalIsOpen &&
        < Modals setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} country={countryInModal} />
      }
    </div>
  );
};

export default App;
