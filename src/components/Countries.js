import React from "react";
import Country from "./Country";

const getObj = country => console.log(country); // get the full objet country

const countries = ({ currentCountries, loading, toggleModalOpen }) => {
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
