import React from "react";
import Modals from "./Modals";

const countries = ({
  countries,
  loading,
  modalIsOpen,
  toggleModalOpen,
  toggleModalClose
}) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <ul className="countryGroup">
      {countries.map((countries, key) => (
        <div className="country" key={key} onClick={() => toggleModalOpen()}>
          <li className="list-group-item">
            {countries.name}
            <p>Capital: {countries.capital} </p>
            <a
              href={countries.flag}
              target="_blank"
              rel="noopener noreferrer"
              key={countries.alpha3Code}
              className="list-flag"
            >
              <img src={countries.flag} alt="country flag" className="flag" />
            </a>
          </li>
        </div>
      ))}
      {modalIsOpen === true ? (
        <Modals
          countries={countries}
          toggleModalOpen={toggleModalOpen}
          toggleModalClose={toggleModalClose}
        />
      ) : null}{" "}
    </ul>
  );
};

export default countries;
