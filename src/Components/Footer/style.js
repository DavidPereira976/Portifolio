import styled from "styled-components";
import device from "../../assets/Styles/device";

export const Container = styled.div`
  /* border: solid green; */
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242329;
  color: #fff;
  gap: 15px;

  @media ${device.mobileN} {
    height: 7vh;
    gap: 2px;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;

  @media ${device.laptopM} {
    height: 37px;
  }

  @media ${device.mobileM} {
    height: 35px;
  }

  @media ${device.mobileA} {
    height: 32px;
  }

  @media ${device.mobileN} {
    height: 24px;
  }
`;
