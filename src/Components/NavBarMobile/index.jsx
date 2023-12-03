import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import {Container, IconMenu, MenuLinks, StyledLink } from "./style"


const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [menu, setMenu] = useState("☰")

  const toggleMenu = () => {
    setIsOpen(!isOpen); 

    if (menu === "☰") {
      setMenu("✕")
    } else {
      setMenu("☰")
    }
  }; 


  return (
    <Container>
      <IconMenu onClick={toggleMenu}>
        {menu} {/* Ícone do menu hamburguer */}
      </IconMenu>
      {isOpen && (
        <MenuLinks>
          {/* Aqui você pode adicionar links ou itens do menu */}
          
          <StyledLink to="/" >Inicio</StyledLink>
          

          
          <StyledLink to="/Sobre" >Sobre</StyledLink>
        

          
          <StyledLink to="/projetos">Projetos</StyledLink>
          
         
        </MenuLinks>
      )}
    </Container>
  );
};

export default NavBarMobile;