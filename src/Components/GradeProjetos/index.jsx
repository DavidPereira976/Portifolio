import ProjetosItem from "../ProjetosItem";
// IMG de sites
import Sitedabliu from "../../assets/Imgs/Sitedabliu.svg";
import Sitekhris from "../../assets/Imgs/Sitekhris.svg";
import SiteFantastika from "../../assets/Imgs/Sitefantastika.svg";

// Icons
import React from "../../assets/Icons/React.svg";
import Styled from "../../assets/Icons/Styled.svg";
import Html from "../../assets/Icons/Html.svg";
import Css from "../../assets/Icons/Css.svg";
import JavaScript from "../../assets/Icons/JavaScript.svg";

import {
  FirstAlignContainer,
  Title,
  FirstGradeContainer,
  SecondAlignContainer,
  SecondGradeContainer,
} from "./style";

function GradeProjetos() {
  
  const projectDabliu = {

    imageUrl: Sitedabliu,
    title: "Dabliu",
    description:
      "Dabliu, um projeto colaborativo em freelancer, é a ponte digital dos advogados. Utilizando React.js, JavaScript e styled-components, trabalhei para criar uma plataforma inovadora para simplificar o trabalho jurídico, unindo tecnologia e expertise legal.",
    icons: [React, Styled, JavaScript],
    githubLink: "url_do_repositorio_github",
    websiteLink: "url_do_website",
  };

  const projectKhris = {
    
    imageUrl: Sitekhris,
    title: "Khris Erreiro",
    description:
      "Colaborei como freelancer em equipe para criar um projeto de design de interiores. Utilizei HTML, CSS e JavaScript para desenvolver uma plataforma inovadora, combinando estética e funcionalidade.",
    icons: [Html, Css, JavaScript],
    githubLink: "url_do_repositorio_github",
    websiteLink: "https://khrisdecora.com.br/",
  };

  const projectFantastika = {
    
    imageUrl: SiteFantastika,
    title: "Fantastika",
    description:
      "Projeto feito como desafio de conclusão do Primeiro Módulo do Curso de Front-End. Esse foi um dos meus primeiros projetos, é de quando eu tinha aprendido o basico e estava treinando os conceitos de responsividade em dispositivos Mobile.",
    icons: [Html, Css],
    githubLink: "https://github.com/DavidPereira976/ProjetovnwM1_final",
    websiteLink: "https://projetovnw-m1-final.vercel.app/",
  };
  return (
    <>
      <FirstAlignContainer>
        <Title>Meus Projetos</Title>
        <FirstGradeContainer>
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
        </FirstGradeContainer>
      </FirstAlignContainer>
      {/* <SecondAlignContainer>
        <SecondGradeContainer>
          <h1>Hello world</h1>
        </SecondGradeContainer>
      </SecondAlignContainer> */}
    </>
  );
}

export default GradeProjetos;
