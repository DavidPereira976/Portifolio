import styled from "styled-components";
import device from "../../assets/Styles/device";

export const Container = styled.section`
  /* border: solid red; */
  background-color: #012e40;
  height: 60vh;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: #fff;

  @media ${device.tabletL} {
    height: 100vh;
  }
`;

export const ContainerCards = styled.section`
  /* border: solid pink; */
  height: 400px;
  width: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  @media ${device.laptopM} {
    width: 1000px;
  }

  @media ${device.tabletL} {
    flex-direction: column;
    width: 500px;
    height: 1000px;
  }

  @media ${device.tabletS} {
    height: 850px;
  }

  @media ${device.mobileL} {
    width: 350px;
    height: 750px;
  }

  @media ${device.mobileM} {
    width: 330px;
    height: 740px;
  }

  @media ${device.mobileA} {
    width: 320px;
    height: 670px;
  }

  @media ${device.mobileS} {
    width: 300px;
    height: 670px;
  }

  @media ${device.mobileN} {
    width: 250px;
    height: 450px;
  }
`;

export const Cards = styled.section`
  /* border: solid green; */
  background-color: #357c8c;
  border-radius: 40px;
  width: 300px;
  height: 380px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  @media ${device.laptopM} {
    width: 280px;
    height: 350px;
  }

  @media ${device.tabletL} {
    height: 320px;
  }

  @media ${device.tabletS} {
    height: 270px;
  }

  @media ${device.mobileL} {
    height: 240px;
    width: 250px;
  }

  @media ${device.mobileM} {
    height: 235px;
    width: 245px;
  }

  @media ${device.mobileA} {
    height: 215px;
    width: 240px;
  }

  @media ${device.mobileS} {
    height: 213px;
    width: 240px;
  }

  @media ${device.mobileN} {
    height: 140px;
    width: 240px;
  }
`;

export const Img = styled.img``;

export const NameCard = styled.h4`
  /* border: solid yellow; */
  width: 250px;
  font-weight: 300;
  text-align: center;
`;

export const Title = styled.h1`
@media ${device.mobileN}{
font-size: 15px;
}
`
