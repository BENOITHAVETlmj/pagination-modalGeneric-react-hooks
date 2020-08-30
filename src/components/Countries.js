import React from "react";
import Country from "./Country";
import BeatLoader from "react-spinners/BeatLoader";

const countries = ({ currentCountries, loading, setModalIsOpen, modalIsOpen, getObj, modalRef }) => {
  if (loading) {
    return <BeatLoader
      size={150}
      color={"#123abc"}
    />;
  }
  return (
    <div className="countryGroup">
      {currentCountries.map((countries, number) => (
        <ul className="country" key={number} onClick={() => getObj(countries)}>
          <Country countries={countries} setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} modalRef={modalRef} />
        </ul>
      ))}
    </div>
  );
};

export default countries;
