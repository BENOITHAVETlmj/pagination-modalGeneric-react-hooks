import React from "react";
import Country from "./Country";
import Modals from "./Modals";

const countries = ({
  currentCountries,
  loading,
  modalIsOpen,
  toggleModalOpen,
  toggleModalClose
}) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="countryGroup">
      {currentCountries.map((countries, number) => (
        <ul className="country" key={number} onClick={() => toggleModalOpen()}>
          <li className="list-group-item">
            <Country
              countries={countries}
              index={number}
              modalIsOpen={modalIsOpen}
              toggleModalClose={toggleModalClose}
              toggleModalOpen={toggleModalOpen}
            />
          </li>
        </ul>
      ))}
      {modalIsOpen === true ? (
        <Modals countries={countries} toggleModalClose={toggleModalClose} />
      ) : null}
    </div>
  );
};

export default countries;
