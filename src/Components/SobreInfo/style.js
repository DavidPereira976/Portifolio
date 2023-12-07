import styled from "styled-components";
import device from "../../assets/Styles/device";

export const FirstBoxContent = styled.section`
  /* border: solid black; */
  background-color: #012e40;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tabletL} {
    height: 100vh;
  }

  @media ${device.mobileL} {
    /* padding-top: 50px; */
  }
`;

export const FirstBox = styled.section`
  /* border: solid red; */
  height: 500px;
  width: 70vw;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;

  @media ${device.laptopM} {
    width: 80vw;
    height: 600px;
  }

  @media ${device.tabletL} {
    flex-direction: column;
    height: 600px;
  }

  @media ${device.tabletS} {
    height: 480px;
  }

  @media ${device.mobileL} {
    height: 380px;
  }

  @media ${device.mobileM} {
    height: 360px;
  }

  @media ${device.mobileS} {
    height: 330px;
  }

  @media ${device.mobileN}{
    height:220px;
  }
`;

export const Photo = styled.img`
  width: 400px;
  height: 350px;

  @media ${device.laptopM} {
    width: 320px;
    height: 270px;
  }

  @media ${device.tabletS} {
    width: 300px;
    height: 250px;
  }

  @media ${device.mobileL} {
    width: 250px;
    height: 230px;
  }

  @media ${device.mobileM} {
    width: 230px;
    height: 210px;
  }

  @media ${device.mobileS} {
    width: 210px;
    height: 190px;
  }

  @media ${device.mobileN} {
    width: 160px;
    height: 140px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #fff;

  @media ${device.mobileL} {
    font-size: 24px;
  }

  @media ${device.mobileM} {
    font-size: 22px;
  }

  @media ${device.mobileS} {
    font-size: 20px;
  }

  @media ${device.mobileN} {
    font-size: 15px;
  }
`;

export const BoxContent = styled.div`
  /* border: solid gray; */
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${device.mobileL} {
    width: 345px;
  }

  @media ${device.mobileS} {
    /* font-size: 13px; */
    width: 310px;
  }

  @media ${device.mobileN} {
    width: 290px;
  }
`;

export const FirstParagraph = styled.p`
  /* border: solid green; */
  width: 550px;
  font-size: 22px;
  color: #fff;

  @media ${device.laptopM} {
    font-size: 20px;
  }

  @media ${device.tabletL} {
    font-size: 22px;
  }

  @media ${device.mobileL} {
    font-size: 15px;
    width: 350px;
  }

  @media ${device.mobileM} {
    font-size: 14px;
  }

  @media ${device.mobileS} {
    font-size: 13px;
    width: 320px;
  }

  @media ${device.mobileN}{
  font-size: 10px;
  width: 280px;
  }
`;

export const SecondBox = styled.div`
  /* border: solid blue; */
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;

  @media ${device.tabletL} {
    width: 80vw;
  }

  @media ${device.mobileL} {
    height: 290px;
  }

  @media ${device.mobileM} {
    height: 240px;
  }

  @media ${device.mobileN}{
 height: 190px;
  }
`;

export const SecondParagraph = styled.p`
  /* border: solid green; */
  width: 60vw;
  font-size: 22px;
  color: #fff;

  @media ${device.laptopM} {
    font-size: 20px;
  }

  @media ${device.tabletL} {
    font-size: 22px;
    width: 66vw;
  }

  @media ${device.tabletM} {
    width: 69vw;
  }

  @media ${device.tabletS} {
    width: 71vw;
  }

  @media ${device.mobileL} {
    font-size: 15px;
    width: 80vw;
  }

  @media ${device.mobileM} {
    font-size: 14px;
    width: 86vw;
  }

  @media ${device.mobileS} {
    font-size: 13px;
    width: 86vw;
  }

  @media ${device.mobileN}{
  font-size: 11px;
  width: 90vw ;
  }
`;
