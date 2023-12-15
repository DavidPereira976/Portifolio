import Comunicacao from "../../assets/Imgs/Comunicacao.svg";
import Adaptabilidade from "../../assets/Imgs/Adaptabilidade.svg";
import Aprendizado from "../../assets/Imgs/Aprendizado.svg";
import Equipe from "../../assets/Imgs/Equipe.svg";
import { motion } from "framer-motion";

import { Container, Title, ContainerImg, Moldura, Img } from "./style";

function SoftSkills() {
  return (
    <>
      <Container>
      <motion.div
          initial={{ opacity: 0, y: -400 }} // Estilo inicial (opcional)
          animate={{ opacity: 1, y: 0 }} // Estilo animado
          transition={{ duration: 0.9 }} // Configuração de transição
        >
        <Title>SoftSkills</Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -400 }} // Estilo inicial (opcional)
          animate={{ opacity: 1, y: 0 }} // Estilo animado
          transition={{ duration: 0.9 }} // Configuração de transição
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
