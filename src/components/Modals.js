import React from "react";

const modals = ({ toggleModalClose, country }) => {
  return (
    <div className="pop-up-action">
      <i className="fas fa-window-close" onClick={() => toggleModalClose()} />
      <section>
        <h2>Name of the country: {country.name}</h2>
        <div>Native name : {country.nativeName}</div>
        <div>Capital: {country.capital}</div>
        <div>Language: {country.languages[0].name}</div>
        <div>Population : {country.population} people</div>
        <div>Region : {country.region}</div>
        <div>Subregion : {country.subregion}</div>
        <div>Timezones: {country.timezones[0]}</div>
        <div>Currencies: {country.currencies[0].name}</div>
      </section>
    </div>
  );
};

export default modals;
