import React from "react";

const countries = ({ countries, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <ul className="countryGroup">
      {countries.map(countries => (
        <div className="country" key={countries.numericCode}>
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
    </ul>
  );
};

export default countries;
