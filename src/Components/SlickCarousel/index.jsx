import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Html from "../../assets/Icons/Html.svg";
import Css from "../../assets/Icons/Css.svg";
import JavaScript from "../../assets/Icons/JavaScript.svg";
import React from "../../assets/Icons/React.svg";
import Sass from "../../assets/Icons/Sass.svg";
import Github from "../../assets/Icons/Github.svg";
import Vscode from "../../assets/Icons/Vscode.svg";
import Styled from "../../assets/Icons/Styled.svg";
import Figma from "../../assets/Icons/Figma.svg";

import { Title, CarouselContainer, CarouselStyle, CardsCarousel, Name, Span, Img  } from "./style";

function SlickCarousel({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    pauseOnHover: false,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'cubic-bezier(0.33, 1, 0.68, 1)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },  
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
        },  
      },
    ],
  };

  return (
    <CarouselContainer>
      <Title>Tecnologias</Title>
      <CarouselStyle>
        <Slider {...settings}>
          {children}

          <div>
            <CardsCarousel>
              <Name >HTML</Name>
              <Img src={Html} alt="" />
            </CardsCarousel>
          </div>

          <div>
            <CardsCarousel>
              <Name >CSS</Name>
              <Img src={Css} alt="" />
            </CardsCarousel>
          </div>

          <div>
            <CardsCarousel>
              <Name >JAVASCRIPT</Name>
              <Img src={JavaScript} alt="" />
            </CardsCarousel>
          </div>

          <div>
            <CardsCarousel>
              <Name >REACT.JS</Name>
              <Img src={React} alt="" />
            </CardsCarousel>
          </div>

          <div>
            <CardsCarousel>
              <Name >SASS</Name>
              <Img src={Sass} alt="" />
            </CardsCarousel>
          </div>

          <div>
            <CardsCarousel>
              <Name >GITHUB</Name>
              <Img src={Github} alt="" />
            </CardsCarousel>
          </div>

          <div>
            <CardsCarousel>
              <Name >VSCODE</Name>
              <Img src={Vscode} alt="" />
            </CardsCarousel>
          </div>

          <div>
            <CardsCarousel>
              <Span>
              <Name>COMPONENTS</Name>
              <Name>STYLED</Name>
              </Span>
              <Img src={Styled} alt="" />
            </CardsCarousel>
          </div>

          <div>
            <CardsCarousel>
              <Name >FIGMA</Name>
              <Img src={Figma} alt="" />
            </CardsCarousel>
          </div>
        </Slider>
      </CarouselStyle>
    </CarouselContainer>
  );
}

export default SlickCarousel;
