import React from "react";
import navImg from '../../assets/logo.png';
import coinImg from '../../assets/dollar.png';

const Navbar = () => {
  return (
    <div className="navbar max-w-300 mx-auto">
      <div className="flex-1">
        <a className="btn  text-xl"><img className="w-15 h-15" src={navImg} alt="Logo" /></a>
      </div>
      <div className="flex items-center gap-2">
       <span>6000000000</span>
       <span>Coin</span>
       <img src={coinImg} alt="Coin" />
      </div>
    </div>
  );
};

export default Navbar;
