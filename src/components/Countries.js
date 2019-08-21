import React from "react";
import Country from "./Country";

const countries = ({ currentCountries, loading, toggleModalOpen, getObj }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="countryGroup">
      {currentCountries.map((countries, number) => (
        <ul className="country" key={number} onClick={() => getObj(countries)}>
          <Country countries={countries} toggleModalOpen={toggleModalOpen} />
        </ul>
      ))}
    </div>
  );
};

export default countries;
