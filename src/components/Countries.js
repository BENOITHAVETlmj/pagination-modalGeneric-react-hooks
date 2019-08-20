import React from "react";
import Country from "./Country";

const getObj = country => console.log(country); // get the full objet country

const countries = ({ currentCountries, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="countryGroup">
      {currentCountries.map((countries, number) => (
        <ul className="country" key={number} onClick={() => getObj(countries)}>
          <li className="list-group-item">
            <Country countries={countries} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default countries;
