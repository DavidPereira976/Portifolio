import styled from "styled-components";
import device from "../../assets/Styles/device";

export const FirstAlignContainer = styled.div`
  /* border: solid blueviolet; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #012e40;

  @media ${device.mobileL}{
  height: 200vh;
  }

  @media ${device.mobileM}{
  height: 205vh;
  }

  @media ${device.mobileA}{
  height: 208vh;
  }

  @media ${device.mobileN}{
  height: 300vh;
  }
`;

export const Title = styled.h1`
  color: #fff;

  @media ${device.mobileN}{
  font-size: 15px;
  }
`;

export const FirstGradeContainer = styled.section`
  /* border: solid yellow; */
  height: 850px;
  width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;

  @media ${device.laptopM} {
    height: 650px;
    width: 1200px;
  }

  @media ${device.tabletL} {
    flex-direction: column;
    height: 1000px;
    width: 730px;
  }

  @media ${device.tabletS} {
    width: 680px;
  }

  @media ${device.mobileL} {
    width: 360px;
    height: 1360px;
  }

  @media ${device.mobileM}{
  width: 340px;
  height: 1300px;
  }

  @media ${device.mobileA}{
  width: 320px;
  height: 1300px;
  }

  @media ${device.mobileS}{
  width: 300px;
  }
`;

// SEGUNDA PARTE DO CÓDIGO

export const SecondAlignContainer = styled.div`
  /* border: solid pink; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #012e40;

  @media ${device.mobileL}{
  height: 130vh;
  }

  @media ${device.mobileN}{
  height: 180vh;
  }
`;

export const SecondGradeContainer = styled.section`
  /* border: solid blue; */
  height: 850px;
  width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;

  @media ${device.laptopM} {
    height: 650px;
    width: 1200px;
  }

  @media ${device.tabletL} {
    flex-direction: column;
    height: 1000px;
    width: 730px;
  }

  @media ${device.tabletS} {
    width: 680px;
  }

  @media ${device.mobileL} {
    width: 360px;
    height: 1500px;
  }

  @media ${device.mobileM}{
  width: 340px;
  height: 1400px;
  }

  @media ${device.mobileA}{
  width: 320px;
  height: 1300px;
  }

  @media ${device.mobileS}{
  width: 300px;
  }
`;
