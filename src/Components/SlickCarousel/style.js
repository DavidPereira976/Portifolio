import styled from "styled-components";
import device from "../../assets/Styles/device"


export const CarouselContainer = styled.article`
  /* border: solid green; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 20vh;
  padding: 20px 0px;
  background: #012e40;
`;

export const CarouselStyle = styled.section`
  /* border: solid #fff; */
  margin: 40px 0;
  max-width: 95%;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #fff;
  }

  @media ${device.tabletL}{
  width: 85%;
  }

  @media ${device.mobileL}{
  width: 80%;
  }
`;

export const CardsCarousel = styled.span`
  /* border: solid red; */
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-evenly;
  width: 350px;
  height: 180px;
  margin-right: 40px;
  background: #012e40;

  @media ${device.tabletL} {
    width: 130px;
    height: 150px;
  
  }

  @media ${device.mobileL}{
  width: 100px;
  height: 120px;
  }

`;

export const Img = styled.img`
width: 100px;
height: 100px;

@media ${device.tabletL} {
    width: 80px;
    height: 80px;
  
  }

  @media ${device.mobileL}{
  width: 55px;
  height: 55px;
  }
`
export const Title = styled.h1`
color: #fff;
`


export const Name = styled.h3`
color: #91A2AD;
font-size: 16px;
font-weight: 400;

@media ${device.mobileL}{
font-size: 12px;
}

`;

export const Span = styled.div`
display: flex;
flex-direction: column-reverse;
align-items: center;
`
