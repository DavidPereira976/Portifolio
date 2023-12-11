import Vnw from "../../assets/Icons/Vnw.svg";
import Descomplica from "../../assets/Icons/Descomplica.svg";
import Ada from "../../assets/Icons/Ada.svg";

import { Container, Title, ContainerCards, Cards, NameCard } from "./style";

function Hardskills() {
  return (
    <>
      <Container>
        <Title >Estudos e HardSkills</Title>
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
            <NameCard>Versionamento Git/GiHub</NameCard>
            <div>
            <NameCard>5 Horas</NameCard>
            <NameCard>Completo ✔</NameCard>
            </div>
          </Cards>
        </ContainerCards>
      </Container>
    </>
  );
}

export default Hardskills;
