import Carousel from "nuka-carousel";
import Html from "../../assets/Icons/Html.svg";
import Css from "../../assets/Icons/Css.svg";
import JavaScipt from "../../assets/Icons/JavaScript.svg";
import React from "../../assets/Icons/React.svg";
import Sass from "../../assets/Icons/Sass.svg";
import Github from "../../assets/Icons/Github.svg";

import { ContainerCarousel, Container, Moldura, Img } from "./styles";

function Carrossel() {
  return (
    <>
      <Container>
        <ContainerCarousel>
          <h1>Tecnologias</h1>
          <Carousel
            autoplay={true}
            wrapAround={true}
            slidesToShow={2}
            cellSpacing={1}
            cellAlign="center"
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide}>Anterior</button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button onClick={nextSlide}>Próximo</button>
            )}
          >
            <Moldura>
              <Img src={Html} alt="" />
            </Moldura>
            <img src={Css} alt="" />
            <img src={JavaScipt} alt="" />
            <img src={React} alt="" />
            <img src={Sass} alt="" />
            <img src={Github} alt="" />
          </Carousel>
        </ContainerCarousel>
      </Container>
    </>
  );
}

export default Carrossel;
