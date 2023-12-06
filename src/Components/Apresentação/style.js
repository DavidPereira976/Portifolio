import styled from "styled-components";
import device from "../../assets/Styles/device";

export const Container = styled.div`
  /* border: solid red; */
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: #012e40;
  font-family: "Archivo", sans-serif;
  border-bottom: solid 0.1px #9CA3AF  ;

  @media ${device.tabletL} {
    height: 95vh;
    flex-direction: column;
  }
`;

export const Photo = styled.img`
  width: 400px;
  height: 350px;

  @media ${device.mobileL} {
    width: 300px;
    height: 260px;
  }

  @media ${device.mobileS} {
    width: 260px;
    height: 240px;
  }

  @media ${device.mobileM}{
    width: 250px;
    height: 230px;
}

  @media ${device.mobileN}{
  width: 200px;
  height: 170px;
  }
`;

export const BoxTitleButton = styled.div`
  /* border: solid gray; */
  height: 205px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.tabletL} {
    height: 250px;
  }

  @media ${device.mobileL}{
  height: 200px;
  }

  @media ${device.mobileN}{
  height: 140px;
  }
`;

export const BoxTitle = styled.div`
  /* border: solid green; */
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.tabletL} {
    height: 170px;
  }

  @media ${device.mobileL}{
    height: 130px;
  }

  @media ${device.mobileN}{
  height: 80px;
  }
`;
export const FirstTitle = styled.h3`
  font-size: 32px;
  color: #fff;

  @media ${device.mobileL} {
    font-size: 24px;
  }

  @media ${device.mobileS} {
    font-size: 22px;
  }

  @media ${device.mobileN}{
  font-size: 18px;
  }
`;

export const SecondTitle = styled.h2`
  font-size: 42px;
  color: #fff;
  font-weight: 700;

  @media ${device.mobileL} {
    font-size: 26px;
  }

  @media ${device.mobileS} {
    font-size: 24px;
  }

  @media ${device.mobileN}{
  font-size: 20px;
  }
`;

export const ThirdTitle = styled.span`
  font-size: 46px;
  color: #00c1fe;
  font-weight: 800;

  @media ${device.mobileL} {
    font-size: 32px;
  }

  @media ${device.mobileS} {
    font-size: 30px;
  }

  @media ${device.mobileN}{
  font-size: 26px;
  }
`;

export const FourthTitle = styled.h4`
  font-size: 20px;
  color: #9ca3af;
  font-weight: 400;

  @media ${device.mobileL} {
    font-size: 18px;
  }

  @media ${device.mobileS} {
    font-size: 17px;
  }

  @media ${device.mobileN}{
  font-size: 16px;
  }
`;

export const BoxButton = styled.div`
  /* border: solid #409EFF ; */
  width: 420px;
  display: flex;
  justify-content: space-around;

  @media ${device.mobileL} {
    width: 340px;
  }

  @media ${device.mobileM} {
    width: 320px;
  }

  @media ${device.mobileS} {
    width: 270px;
  }

  @media ${device.mobileN}{
  width: 280px;
  }
`;

export const FirstButton = styled.button`
  font-family: "Archivo", sans-serif;
  width: 200px;
  border-radius: 30px;
  border: none;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  font-size: 16px;
  font-weight: 500;
  color: #011126;
  background-color: #00c1fe;
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(0.9);
  }

  @media ${device.mobileL} {
    width: 150px;
    height: 45px;
  }

  @media ${device.mobileM} {
    width: 130px;
    height: 42px;
  }

  @media ${device.mobileS}{
  width: 110px;
  height: 40px;
  font-size: 14px;
  }

  @media ${device.mobileN}{
  width: 100px;
  height: 40px;
  font-size: 13px;
  }
`;

export const SecondButton = styled.button`
  font-family: "Archivo", sans-serif;
  width: 200px;
  border-radius: 30px;
  border: none;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  font-size: 16px;
  font-weight: 500;
  color: #011126;
  background-color: #d9d9d9;
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(0.9);
  }

  @media ${device.mobileL} {
    width: 150px;
    height: 45px;
  }

  @media ${device.mobileM} {
    width: 130px;
    height: 42px;
  }

  @media ${device.mobileS}{
  width: 110px;
  height: 40px;
  font-size: 14px;
  }

  @media ${device.mobileN}{
  width: 100px;
  height: 40px;
  font-size: 13px;
  }
`;

export const Moldura = styled.figure`
  /* border: solid green; */
  width: 200px;
  height: 70vh;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: end;

  @media ${device.tabletL} {
    height: 10vh;
    width: 240px;
  }

  @media ${device.mobileL} {
    width: 150px;
  }

  @media ${device.mobileM}{
   height: 15vh;
}

  @media ${device.mobileS} {
    height: 18vh;
  }
`;

export const Img = styled.img`
  /* width: 120px;
 height: 100px; */

  &:hover {
    transform: scale(1.1);
  }

  @media ${device.mobileL} {
    width: 60px;
    height: 70px;
  }

  @media ${device.mobileN}{
  width: 50px;
  height: 50px;
  }
`;
