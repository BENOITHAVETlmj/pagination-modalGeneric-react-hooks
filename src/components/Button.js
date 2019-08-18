import React from "react";

const Button = ({ isLogin, handleLogOut, handleLogIn }) => {
  return (
    <div>
      {isLogin === true ? (
        <>
          <button onClick={() => handleLogOut()}>Disconneting</button>
          <p>Bonjour, bienvenue</p>
        </>
      ) : (
        <button onClick={() => handleLogIn()}>Connect</button>
      )}
    </div>
  );
};

export default Button;
