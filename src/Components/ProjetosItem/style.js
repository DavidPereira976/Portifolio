import styled from "styled-components";
import device from "../../assets/Styles/device";

export const ProjectContainer = styled.div`
  border: solid red;
  background-color: #357c8c;
  width: 300px;
  height: 450px;
  border-radius: 10px;
  /* overflow: hidden; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;

  @media ${device.tabletL} {
    width: 700px;
    height: 280px;
  }

  @media ${device.tabletS}{
  width: 650px;
  }

  @media ${device.mobileL}{
  width: 300px;
  height: 390px;
  }
`;

export const ContentAndImage = styled.div`
border: solid violet;

@media ${device.tabletL}{
display: flex;
padding: 5px;
}

@media ${device.mobileL}{
flex-direction: column;
}

`

export const ProjectImage = styled.img`
  /* border: solid yellow; */
  width: 100%;
  height: 175px;
  object-fit: scale-down;
`;

export const ProjectContent = styled.div`
  border: solid green;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;

  @media ${device.mobileL}{
    height: 120px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 22px;
  /* margin-bottom: 10px; */
  color: #fff;
`;

export const ProjectDescription = styled.p`
  font-size: 15px;
  color: #fff;
  /* margin-bottom: 15px; */

  @media ${device.mobileL}{
    font-size: 12px;
  
  }
`;

export const IconsSection = styled.div`
  border: solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 15px; */
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 5px; /* Espaçamento entre os ícones */
`;

export const ButtonSection = styled.div`
  border:  solid black;
  padding: 5px;

  @media ${device.tabletL}{
  display: flex;
  justify-content: end;
  }
`;

export const Button = styled.a`
  display: inline-block;
  padding: 8px 16px;
  margin-right: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &.github {
    background-color: #333;
  }

  &.website {
    background-color: #007bff;
  }
`;
