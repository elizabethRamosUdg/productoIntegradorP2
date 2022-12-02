import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import "../../pages/style/menu.css";

function Navbar() {
  return (
    <Nav className="navBar">
      <NavMenu>
      <NavBtn>
            <NavBtnLink to="/">Actividades realizadas en el curso </NavBtnLink>                
        </NavBtn>

        <NavBtn>
            <NavBtnLink to="/Sistema">Sistema implementado</NavBtnLink>                
        </NavBtn>

        <NavBtn>
            <NavBtnLink to="/Codigo">Código fuente</NavBtnLink>                
        </NavBtn>

        <NavBtn>
            <NavBtnLink to="/Reporte">Reporte de las modificaciones realizadas </NavBtnLink>                
        </NavBtn>
    </NavMenu> 
    </Nav>
  );
}


export default Navbar;