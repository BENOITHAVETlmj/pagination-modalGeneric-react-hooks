import React from "react";

const modals = ({ toggleModalClose }) => {
  return (
    <div className="pop-up-action">
      <i className="fas fa-window-close" onClick={() => toggleModalClose()} />
    </div>
  );
};

export default modals;
