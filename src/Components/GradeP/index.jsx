import ProjetosItem from "../ProjetosItem";
// IMG de sites
import Sitedabliu from "../../assets/Imgs/Sitedabliu.svg";
import Sitekhris from "../../assets/Imgs/Sitekhris.svg";
import SiteFantastika from "../../assets/Imgs/Sitefantastika.svg";
import SiteNetflix from "../../assets/Imgs/Sitenetflix.svg";
import SiteCalculadora from "../../assets/Imgs/Sitecalculadora.svg";

// Icons
import React from "../../assets/Icons/React.svg";
import Styled from "../../assets/Icons/Styled.svg";
import Html from "../../assets/Icons/Html.svg";
import Css from "../../assets/Icons/Css.svg";
import JavaScript from "../../assets/Icons/JavaScript.svg";

import { motion } from "framer-motion";

import {
  FirstAlignContainer,
  Title,
  GradeContainer,
  //   SecondAlignContainer,
  //   SecondGradeContainer,
} from "./style";

function GradeP() {
  const projectDabliu = {
    imageUrl: Sitedabliu,
    title: "Dabliu",
    description:
      "Dabliu, um projeto colaborativo em freelancer, é a ponte digital dos advogados. Utilizando React.js, JavaScript e styled-components, trabalhei para criar uma plataforma inovadora para simplificar o trabalho jurídico, unindo tecnologia e expertise legal.",
    icons: [React, Styled, JavaScript],
    githubLink: "https://github.com/DavidPereira976/dabliu",
    websiteLink: "https://dabliu-smoky.vercel.app/",
  };

  const projectKhris = {
    imageUrl: Sitekhris,
    title: "Khris Erreiro",
    description:
      "Colaborei como freelancer em equipe para criar um projeto de design de interiores. Utilizei HTML, CSS e JavaScript para desenvolver uma plataforma inovadora, combinando estética e funcionalidade.",
    icons: [Html, Css, JavaScript],
    githubLink: "https://github.com/DavidPereira976/khris-herreiro",
    websiteLink: "https://khrisdecora.com.br/",
  };

  const projectFantastika = {
    imageUrl: SiteFantastika,
    title: "Fantastika",
    description:
      "Projeto feito como desafio de conclusão do Primeiro Módulo do Curso de Front-End. Este foi um dos meus primeiros projetos, foi feito quando eu havia aprendido o básico e estava treinando os conceitos de responsividade em dispositivos mobile.",
    icons: [Html, Css],
    githubLink: "https://github.com/DavidPereira976/ProjetovnwM1_final",
    websiteLink: "https://projetovnw-m1-final.vercel.app/",
  };

  const projectNetflix = {
    imageUrl: SiteNetflix,
    title: "Netflix",
    description:
      "Um dos meus primeiros projetos, nele explorei a replicação de interfaces e usei propriedades de posicionamento para resolver desafios de layout. Apesar de não ser responsivo para dispositivos móveis, essa experiência foi muito valiosa na minha jornada de aprendizado.",
    icons: [Html, Css],
    githubLink: "https://github.com/DavidPereira976/project_netflix",
    websiteLink: "https://project-netflix-smoky.vercel.app/",
  };

  const projectCalculadora = {
    imageUrl: SiteCalculadora,
    title: "Calculadora React",
    description:
      "Desenvolvi um projeto simples de Calculadora em React.js, aproveitando uma variedade de hooks do React para realizar cálculos com operações matemáticas, incluindo useState, useEffect, setTimeout, entre outros. Além disso, utilizei o styled-components para estilizar e tornar o projeto responsivo.",
    icons: [React, Styled, JavaScript],
    githubLink: "https://github.com/DavidPereira976/Calculadora-React",
    websiteLink: "https://calculadora-react-peach.vercel.app/",
  };
  return (
    <>
      <FirstAlignContainer>
        <motion.div
          initial={{ opacity: 0, x: -400 }} // Inicia fora da tela à esquerda
          animate={{ opacity: 1, x: 0 }} // Anima para a posição à direita
          transition={{ duration: 1 }}
        >
          <Title>Meus Projetos</Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -400 }} // Inicia fora da tela à esquerda
          animate={{ opacity: 1, x: 0 }} // Anima para a posição à direita
          transition={{ duration: 1 }}
        >
          <GradeContainer>
            <ProjetosItem
              imageUrl={projectDabliu.imageUrl}
              title={projectDabliu.title}
              description={projectDabliu.description}
              icons={projectDabliu.icons}
              githubLink={projectDabliu.githubLink}
              websiteLink={projectDabliu.websiteLink}
            />

            <ProjetosItem
              imageUrl={projectKhris.imageUrl}
              title={projectKhris.title}
              description={projectKhris.description}
              icons={projectKhris.icons}
              githubLink={projectKhris.githubLink}
              websiteLink={projectKhris.websiteLink}
            />

            <ProjetosItem
              imageUrl={projectFantastika.imageUrl}
              title={projectFantastika.title}
              description={projectFantastika.description}
              icons={projectFantastika.icons}
              githubLink={projectFantastika.githubLink}
              websiteLink={projectFantastika.websiteLink}
            />
          </GradeContainer>

          <GradeContainer>
            <ProjetosItem
              imageUrl={projectNetflix.imageUrl}
              title={projectNetflix.title}
              description={projectNetflix.description}
              icons={projectNetflix.icons}
              githubLink={projectNetflix.githubLink}
              websiteLink={projectNetflix.websiteLink}
            />

            <ProjetosItem
              imageUrl={projectCalculadora.imageUrl}
              title={projectCalculadora.title}
              description={projectCalculadora.description}
              icons={projectCalculadora.icons}
              githubLink={projectCalculadora.githubLink}
              websiteLink={projectCalculadora.websiteLink}
            />
          </GradeContainer>
        </motion.div>
      </FirstAlignContainer>

      {/* <SecondAlignContainer>
        <SecondGradeContainer>
          <ProjetosItem
            imageUrl={projectNetflix.imageUrl}
            title={projectNetflix.title}
            description={projectNetflix.description}
            icons={projectNetflix.icons}
            githubLink={projectNetflix.githubLink}
            websiteLink={projectNetflix.websiteLink}
          />

          <ProjetosItem
            imageUrl={projectCalculadora.imageUrl}
            title={projectCalculadora.title}
            description={projectCalculadora.description}
            icons={projectCalculadora.icons}
            githubLink={projectCalculadora.githubLink}
            websiteLink={projectCalculadora.websiteLink}
          />

          <ProjetosItem
            imageUrl={projectFantastika.imageUrl}
            title={projectFantastika.title}
            description={projectFantastika.description}
            icons={projectFantastika.icons}
            githubLink={projectFantastika.githubLink}
            websiteLink={projectFantastika.websiteLink}
          />
        </SecondGradeContainer>
      </SecondAlignContainer> */}
    </>
  );
}

export default GradeP;
