import React from "react";

const modals = ({ countries, toggleModalClose }) => {
  return (
    <div onClick={() => toggleModalClose()} className="pop-up-action">
      <i className="fas fa-window-close" />
      {countries.key}
      {countries.capital}
    </div>
  );
};

export default modals;
