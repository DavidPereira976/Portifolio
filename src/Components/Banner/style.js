import styled from "styled-components";
import backgroudImg from "../../assets/Imgs/Banner.gif"

export const BackGroud = styled.section`
 position: relative;
  width: 100%;
  height: 40vh;
  overflow: hidden;
  background-image: url(${backgroudImg});
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroudImg});
    background-size: cover;
    background-position: center;
    filter: blur(6px); /* Aplica o efeito de desfoque */
    z-index: 1; /* Define a posição em relação ao elemento pai */
  }
  
  > * {
    position: relative;
    z-index: 1; /* Coloca o conteúdo acima do pseudo-elemento com blur */
  }
`

export const Acima = styled.div`

    position: relative; /* Garante que o conteúdo apareça acima do blur */
    z-index: 2;
    color: white;
`

export const Titulo = styled.h1`
   /* position: relative; /* Garante que o conteúdo apareça acima do blur */
    z-index: 2;
    color: white; 
`