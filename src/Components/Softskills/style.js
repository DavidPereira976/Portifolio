import styled from "styled-components";
import device from "../../assets/Styles/device";

export const Container = styled.section`
  background-color: #012e40;
  border-bottom: solid 0.1px #9ca3af;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  justify-content: space-around;
  color: #fff;

  @media ${device.mobileL} {
    height: 35vh;
  }

`;

export const Title = styled.h1`
 @media ${device.mobileN} {
    font-size: 15px;
    
  }
`

export const ContainerImg = styled.section`
  border: solid red;
  width: 1500px;
  display: flex;
  justify-content: space-around;

  @media ${device.laptopM} {
    width: 1100px;
  }

  @media ${device.tabletL} {
    width: 750px;
  }

  @media ${device.mobileL} {
    width: 350px;
    flex-wrap: wrap;
  }

  @media ${device.mobileM} {
    width: 340px;
    
  }

  @media ${device.mobileA} {
    width: 330px;
    
  }

  @media ${device.mobileS} {
    width: 300px;
    height: 190px;
    
  }

  @media ${device.mobileN} {
    width: 280px;
    height: 140px;
    
  }

  
`;

export const Img = styled.img`

  @media ${device.tabletL} {
    width: 70px;
    height: 70px;
  }

  @media ${device.tabletL} {
    height: 60px;
    width: 60px;
  }

  @media ${device.mobileS} {
    width: 55px;
    height: 55px;
  }

  @media ${device.mobileN} {
    width: 40px;
    height: 40px;
  }
`;

export const Moldura = styled.figure`
  /* border: solid green; */
  height: 150px;
  width: 250px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #9ca3af;
  font-size: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media ${device.laptopM} {
    height: 130px;
    width: 230px;
  }

  @media ${device.tabletL} {
    height: 120px;
    width: 200px;
  }

  @media ${device.tabletS} {
    height: 120px;
    width: 170px;
  }

  @media ${device.mobileL} {
    height: 100px;
    width: 160px;
  }

  @media ${device.mobileM} {
    width: 150px;
  }

  @media ${device.mobileA} {
    width: 145px;
    font-size: 14px;
  }

  @media ${device.mobileS} {
    width: 140px;
    font-size: 13px;
    
  }

  @media ${device.mobileN} {
    width: 130px;
    height: 70px;
    font-size: 12px;
    
  }
`;
