import React from "react";

const Country = ({ countries, setModalIsOpen, modalIsOpen, modalRef }) => {
  return (
    <div onClick={() => setModalIsOpen(!modalIsOpen)} ref={modalRef} className="list-group-item">
      <div>
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
    </div>
  );
};

export default Country;
