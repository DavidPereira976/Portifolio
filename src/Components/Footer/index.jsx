import { useState } from "react";
import {Container, Img} from "./style"

import GithubWhite from "../../assets/Icons/GithubWhite.svg"
function Footer() {

    const Mesage = useState("<David/>")
  return (
    <>
      <Container>
        <h5>Desenvolvido Por <span>{Mesage}</span></h5>
        <a href="https://github.com/DavidPereira976" target="_blank">
          <Img src={GithubWhite} alt="" />
        </a>
      </Container>
    </>
  );
}

export default Footer;
