import FotoPerfil from "../../assets/Imgs/FotoPerfil.png";
import Linkedin from "../../assets/Imgs/Linkedin.svg";
import Whatsapp from "../../assets/Imgs/Whatsapp.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Photo,
  BoxTitleButton,
  BoxTitle,
  FirstTitle,
  SecondTitle,
  ThirdTitle,
  FourthTitle,
  BoxButton,
  FirstButton,
  SecondButton,
  A,
  Moldura,
  Img,
  ImgZ,
} from "./style";

function Apresentacao() {
  const Mensage = useState("<Olá, Mundo/>");

  return (
    <>
      <Container>
        <figure>
          <Photo src={FotoPerfil} alt="" />
        </figure>

        <BoxTitleButton>
          <BoxTitle>
            <FirstTitle>{Mensage}</FirstTitle>
            <SecondTitle>
              Eu sou o <ThirdTitle>David Pereira</ThirdTitle>
            </SecondTitle>
            <FourthTitle>Programador Front-End & UI Designer</FourthTitle>
          </BoxTitle>

          <BoxButton>
            <Link to="/Sobre">
              <FirstButton>Saiba Mais</FirstButton>
            </Link>
            <SecondButton>
              <A href="/DavidPereira.pdf" target="_blank">
                Baixar Currículo
              </A>
            </SecondButton>
          </BoxButton>
        </BoxTitleButton>

        <Moldura>
          <a
            href="https://www.linkedin.com/in/david-pereira-b3939b274"
            target="_blank"
          >
            <Img src={Linkedin} alt="" />
          </a>

          <a href="https://wa.me/qr/KI5POXZM5HDRI1" target="_blank">
            <ImgZ src={Whatsapp} alt="" />
          </a>
        </Moldura>
      </Container>
    </>
  );
}

export default Apresentacao;
