import React from "react";
import { NavLink, Link } from "react-router-dom"
//  import './App.css'


const Navbar = () => {
return (
<>
    <nav className="nav">
    <div className="nav-wrapper"> 
    <a className="icon" href='/'>STv&#772;DY</a>
    <input className="menu-btn" type="checkbox" id="menu-btn"/>
    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
    <ul className="menu">
        <li className="a"><NavLink to="/" >Browser</NavLink></li>
        <li className="a"><NavLink to="/Boot">BootCamps</NavLink></li>
        <li className="a" ><NavLink to="/How" >How It Works</NavLink></li>
        <li className="a"><NavLink to="/Test" >Testemanial</NavLink></li>
        <li><a  className='about-link' href="/About"><button className='about' >About Us</button></a></li>
  	</ul>
    </div>
    </nav>
    </>

);
};

export default Navbar;
