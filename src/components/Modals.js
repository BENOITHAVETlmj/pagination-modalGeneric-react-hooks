import React from "react";

const modals = ({ countries, toggleModalClose }) => {
  return (
    <div className="pop-up-action">
      <i className="fas fa-window-close" onClick={() => toggleModalClose()} />
      {countries.region}
    </div>
  );
};

export default modals;
