import react from 'react';
import {link} from "react-router-dom";
import CartWidget from './CartWidget'

function navbar() {
   return(
    <nav className="navbar bg-primary" data-bs-theme="dark">
        <ul>
            <li><link to ="/">inicio</link></li>
             <li><link to="/productos">productos</link></li>
             <li><link to="/nosotros">nosotros</link></li>
             <li><link to="/ayuda">ayuda</link></li>
        </ul>
        <img src='/img/logo.jpg' alt='logo' classsname="logo"/>
        <CartWidget/>
    </nav>
   ) ;
}
export default navbar;