import styled from "styled-components";
import { Link } from "react-router-dom";
import device from "../../assets/Styles/device";

export const Container = styled.div`
  position: relative;
`;

export const IconMenu = styled.button`
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: white;
`;

export const MenuLinks = styled.div`
  position: absolute;
  top: 0px; /* Ajuste conforme necessário */
  right: 0px;
  background-color: #012e40;
  padding: 2px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 900px;
  align-items: center;

  @media ${device.tabletL} {
    top: 76px;
    right: -33px;
    width: 100vw;
  }

  @media ${device.tabletM} {
    top: 81px;
    right: -32px;
  }

  @media ${device.tabletS} {
    top: 69px;
    right: -31px;
  }

  @media ${device.mobileL} {
    top: 58px;
    right: -16.9px;
  }

  @media ${device.mobileM} {
    top: 53.2px;
    right: -15.4px;
    padding: 4px;
  }

  @media ${device.mobileS} {
    top: 53.1px;
    right: -14.9px;
  }

  @media ${device.mobileN} {
    top: 44.7px;
    right: -13.3px;
    padding:10px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 26px;
  color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.59);

  @media ${device.tabletL} {
    width: 100vw;
    height: 5vh;
    display: block;
    padding: 10px 5%;
    text-align: center;
  }

  @media ${device.mobileL} {
    font-size: 22px;
    padding: 6px 5%;
  }

  @media ${device.mobileM} {
    padding: 4px 5%;
  }

  @media ${device.mobileN}{
  font-size: 18px;
  padding: 0px 5%;
  }
`;
