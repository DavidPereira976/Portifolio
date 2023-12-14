import { useState } from "react";
import {Container} from "./style"
function Footer() {

    const Mesage = useState("<David/>")
  return (
    <>
      <Container>
        <h5>Desenvolvido Por <span>{Mesage}</span></h5>
      </Container>
    </>
  );
}

export default Footer;
