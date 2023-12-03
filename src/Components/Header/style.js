import styled from "styled-components";
import device from "../../assets/Styles/device";

export const Container = styled.section`
  height: 10vh;
  display: flex;
  justify-content: center;
  background-color: #011126;
  box-shadow: 0 0 20px 3px;
  align-items: center;
  color: #fff;
  /* border: solid pink; */
`;

export const Alinhamento = styled.div`
  /* border: solid gray; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;

  @media ${device.tabletL} {
    width: 92vw;
  }
`;

export const LogoTipo = styled.img`

  @media ${device.mobileL} {
    width: 140px;
    height: 60px;
    padding-right: 30px;
  }

  @media ${device.mobileN}{
  width: 110px;
  height: 70px;
  /* padding-right: 40px; */
  }
`;
