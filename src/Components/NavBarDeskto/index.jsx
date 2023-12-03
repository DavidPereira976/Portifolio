import { useLocation } from "react-router-dom";
import { Nav, Lista, StyledLink } from "./style";

function NavBarDesktop() {
  const location = useLocation();

  return (
    <>
      <Nav>
        <Lista isSelected={location.pathname === "/"}>
          <StyledLink to="/">Início</StyledLink>
        </Lista>

        <Lista isSelected={location.pathname === "/Sobre"}>
          <StyledLink to="/Sobre">Sobre</StyledLink>
        </Lista>

        <Lista isSelected={location.pathname === "/projetos"}>
          <StyledLink to="/projetos">Projetos</StyledLink>
        </Lista>
        
      </Nav>
    </>
  );
}

export default NavBarDesktop;
