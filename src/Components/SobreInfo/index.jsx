import { useState } from "react";
import { motion } from "framer-motion";
import FotoPerfil from "../../assets/Imgs/FotoPerfil.png";

import {
  FirstBoxContent,
  FirstBox,
  Photo,
  Title,
  BoxContent,
  FirstParagraph,
  SecondBox,
  SecondParagraph,
} from "./style";

function SobreInfos() {
  const Mesage = useState("<Sobre Mim/>");

  return (
    <>
      {" "}
      <FirstBoxContent>
        <motion.div
          initial={{ opacity: 0, y: -400 }} // Estilo inicial (opcional)
          animate={{ opacity: 1, y: 0 }} // Estilo animado
          transition={{ duration: 0.9 }} // Configuração de transição
        >
          <FirstBox>
            <figure>
              <Photo src={FotoPerfil} alt="" />
            </figure>
            <BoxContent>
              <Title>{Mesage}</Title>
              <FirstParagraph>
                E aí, pessoal! David aqui, do Rio de Janeiro, com meus 21 anos e
                um amor enorme por tecnologia e games. Fico ligado nas novidades
                tech e adoro explorar mundos virtuais através dos jogos. É assim
                que mantenho minha mente afiada e sempre em busca de desafios
                interessantes.
              </FirstParagraph>
            </BoxContent>
          </FirstBox>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -400 }} // Estilo inicial (opcional)
          animate={{ opacity: 1, y: 0 }} // Estilo animado
          transition={{ duration: 0.9 }} // Configuração de transição
        >
        <SecondBox>
          <SecondParagraph>
            Sou apaixonado por desenvolvimento web e estou mergulhando nesse
            universo na Faculdade Descomplica Digital, onde conquistei uma bolsa
            de estudos para o curso de Análise e Desenvolvimento de Sistemas.
            Atualmente, estou no 3º período, ansioso para colocar em prática
            todo o conhecimento adquirido
          </SecondParagraph>
          <SecondParagraph>
            Além disso, em 2023, completei um curso de Desenvolvimento Web que
            me proporcionou uma bagagem sólida em tecnologias essenciais como
            HTML, CSS, Javascript e React.js. Com um certificado em mãos, estou
            totalmente preparado para encarar desafios como Desenvolvedor
            Front-End e trazer criatividade e eficiência para cada projeto.
          </SecondParagraph>
        </SecondBox>
        </motion.div>
      </FirstBoxContent>
    </>
  );
}

export default SobreInfos;
