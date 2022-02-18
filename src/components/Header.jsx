import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import AppContext from '../context/AppContext';
import "../styles/components/Header.css";

const Header = () => {
  const {state}=useContext(AppContext);
  const {cart}= state;
  return (
    <div className="Header">
    <h1 className="Header-title">
      <Link to="/">PlatziConf Merch</Link>
    </h1>
    <div className="Header-checkout">
      <Link to="/checkout">
      <i class="fa-solid fa-cart-shopping"></i>
      </Link>
      {cart.lenght > 0 && <div className='Header-alert'>{cart.lenght} </div>}
    </div>
  </div>
  )
}

export default Header