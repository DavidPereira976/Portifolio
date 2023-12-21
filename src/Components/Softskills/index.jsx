import Comunicacao from "../../assets/Imgs/Comunicacao.svg";
import Adaptabilidade from "../../assets/Imgs/Adaptabilidade.svg";
import Aprendizado from "../../assets/Imgs/Aprendizado.svg";
import Equipe from "../../assets/Imgs/Equipe.svg";
import { motion } from "framer-motion";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { Container, Title, ContainerImg, Moldura, Img } from "./style";

function SoftSkills() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      <Container>
      <motion.div
          initial={{ opacity: 0, x: -2200 }} // Inicia fora da tela à esquerda
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Anima para o centro
          transition={{ duration: 0.9 }}
          ref={ref}
        >
        <Title>SoftSkills</Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -2200 }} // Inicia fora da tela à esquerda
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Anima para o centro
          transition={{ duration: 0.9 }}
          ref={ref}
        >
        <ContainerImg>
          <Moldura>
            <Img src={Comunicacao} alt="" />
            <figcaption>Comunicação</figcaption>
          </Moldura>

          <Moldura>
            <Img src={Adaptabilidade} alt="" />
            <figcaption>Adaptabilidade</figcaption>
          </Moldura>

          <Moldura>
            <Img src={Aprendizado} alt="" />
            <figcaption>Aprendizado Continuo</figcaption>
          </Moldura>

          <Moldura>
            <Img src={Equipe} alt="" />
            <figcaption>Trabalho em Equipe</figcaption>
          </Moldura>
        </ContainerImg>
        </motion.div>
       
      </Container>
    </>
  );
}

export default SoftSkills;
