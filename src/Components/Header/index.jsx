// import Inicio from "../../Pages/Inicio";
// import Projetos from "../../Pages/Projetos";
import NavBarMobile from "../NavBarMobile";
import { Link } from "react-router-dom";
import { Container, Alinhamento, LogoTipo } from "../Header/style";
import React, { useState, useEffect } from 'react';
import NavBarDesktop from "../NavBarDeskto";
import Logo from "../../assets/Imgs/Logo.svg"

function Header() {
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setLarguraTela(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Container>
      

        <Alinhamento>
        <LogoTipo src={Logo} alt="" />
        {/* <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
        </ul> */}
        {/* <NavBarDesktop/> */}
        {/* <NavBarMobile/> */}
        {larguraTela > 834 ? <NavBarDesktop /> : <NavBarMobile />}
        </Alinhamento>
      </Container>
    </>
  );
}

export default Header;
