import React from "react";

const Country = ({
  countries,
  modalIsOpen,
  toggleModalClose,
  toggleModalOpen
}) => {
  return (
    <div onClick={() => toggleModalOpen}>
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
    </div>
  );
};

export default Country;
