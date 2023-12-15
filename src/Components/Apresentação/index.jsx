import FotoPerfil from "../../assets/Imgs/FotoPerfil.png";
import Linkedin from "../../assets/Imgs/Linkedin.svg";
import Whatsapp from "../../assets/Imgs/Whatsapp.svg";
import { motion } from "framer-motion";
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
        {/* Animação */}
        <motion.div
          initial={{ opacity: 0, y: -400 }} // Estilo inicial (opcional)
          animate={{ opacity: 1, y: 0 }} // Estilo animado
          transition={{ duration: 0.9 }} // Configuração de transição
        >
          {/* Seu conteúdo aqui */}

          <figure>
            <Photo src={FotoPerfil} alt="" />
          </figure>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -400 }} // Estilo inicial (opcional)
          animate={{ opacity: 1, y: 0 }} // Estilo animado
          transition={{ duration: 0.9}} // Configuração de transição
        >
          <BoxTitleButton>
            <BoxTitle>
              <FirstTitle>{Mensage}</FirstTitle>
              <SecondTitle>
                Eu sou o 
                <motion.div
                  initial={{ opacity: 0, x: -200 }} // Começa fora da tela, à esquerda
                  animate={{ opacity: 1, x: 0 }} // Anima para a posição normal
                  transition={{ duration: 1 }} // Configuração da transição
                >
                  

                  <ThirdTitle>David Pereira</ThirdTitle>
                </motion.div>
              </SecondTitle>
              <FourthTitle>Desenvolvedor Front-End & UI Designer</FourthTitle>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -400 }} // Estilo inicial (opcional)
          animate={{ opacity: 1, y: 0 }} // Estilo animado
          transition={{ duration: 0.9 }} // Configuração de transição
        >
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
        </motion.div>
      </Container>
    </>
  );
}

export default Apresentacao;
