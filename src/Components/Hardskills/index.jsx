import Vnw from "../../assets/Icons/Vnw.svg";
import Descomplica from "../../assets/Icons/Descomplica.svg";
import Ada from "../../assets/Icons/Ada.svg";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Container, Title, ContainerCards, Cards, NameCard } from "./style";

function Hardskills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      <Container>
      <motion.div
          initial={{ opacity: 1, x: -500 }} // Inicia fora da tela à esquerda
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Anima para o centro
          transition={{ duration: 0.9 }}
          ref={ref}
        >
          <Title>Estudos & HardSkills</Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -600 }} // Inicia fora da tela à esquerda
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Anima para o centro
          transition={{ duration: 0.9 }}
          ref={ref}
        >
          <ContainerCards>
            <Cards>
              <img src={Vnw} alt="" />
              <NameCard>Desenvolvimento Front-End</NameCard>
              <div>
                <NameCard>04/2023 - 12/2023</NameCard>
                <NameCard>Completo ✔</NameCard>
              </div>
            </Cards>

            <Cards>
              <img src={Descomplica} alt="" />
              <div>
                <NameCard>Análise e Desenvolvimento</NameCard>
                <NameCard> de Sistemas</NameCard>
              </div>
              <NameCard>Cursando 3° Período</NameCard>
            </Cards>

            <Cards>
              <img src={Ada} alt="" />
              <NameCard>Versionamento Git/GitHub</NameCard>
              <div>
                <NameCard>5 Horas</NameCard>
                <NameCard>Completo ✔</NameCard>
              </div>
            </Cards>
          </ContainerCards>
        </motion.div>
      </Container>
    </>
  );
}

export default Hardskills;
