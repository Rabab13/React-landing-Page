import React from "react";
import { NavLink } from "react-router-dom"
//  import './App.css'


const Navbar = () => {
return (
<>
    <nav className="nav">
    <div className="nav-wrapper"> 
    <div class="col-3 col-s-3 menu">
    <ul className="menu">
    <li><span className="logo">ST<span className="v">v&#772;</span>DY</span></li>
        <li className="link"><NavLink to="/" >Browser</NavLink></li>
        <li className="link"><NavLink to="/Boot">BootCamps</NavLink></li>
        <li className="link"><NavLink to="/How" >How It Works</NavLink></li>
        <li className="link"><NavLink to="/Test" >Testemanial</NavLink></li>
        <li className="link"><button className='about' >About Us</button></li>  
	</ul>
    </div>
    </div>
    </nav>
    </>

);
};

export default Navbar;
