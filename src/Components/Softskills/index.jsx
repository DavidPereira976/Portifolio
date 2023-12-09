import Comunicacao from "../../assets/Imgs/Comunicacao.svg";
import Adaptabilidade from "../../assets/Imgs/Adaptabilidade.svg";
import Aprendizado from "../../assets/Imgs/Aprendizado.svg";
import Equipe from "../../assets/Imgs/Equipe.svg";

import { Container, Title, ContainerImg, Moldura, Img  } from "./style";

function SoftSkills() {
  return (
    <>
      <Container>
        <Title>SoftSkills</Title>
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
      </Container>
    </>
  );
}

export default SoftSkills;
