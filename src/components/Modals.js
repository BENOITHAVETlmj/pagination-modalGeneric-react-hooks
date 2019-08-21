import React from "react";

const modals = ({ toggleModalClose, getObj }) => {
  return (
    <div className="pop-up-action">
      <i className="fas fa-window-close" onClick={() => toggleModalClose()} />
      <section>Country to display</section>
    </div>
  );
};

export default modals;
