import React from "react";

const Button = ({ isLogin, handleLogOut, handleLogIn }) => {
  return (
    <div>
      {isLogin ? (
        <>
          <button onClick={() => handleLogOut()}>Disconneting</button>
          <p>Bonjour, bienvenue</p>
        </>
      ) : (
        <>
          <button onClick={() => handleLogIn()}>Connect</button>
          <p>Bonjour, Veuillez vous connecter</p>
        </>
      )}
    </div>
  );
};

export default Button;
