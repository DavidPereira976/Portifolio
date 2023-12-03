import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export const Nav  = styled.ul`
/* border: solid green; */
width: 400px;
display: flex;
justify-content: space-between;
/* gap: 60px; */
`

export const Lista = styled.li`
display: inline;
margin-right: 20px;
transition: opacity 0.5s ease;

&:hover{
  opacity: 0.7;
}

/* Estilos do item selecionado */
${({ isSelected }) => isSelected && `
  > a {
    color: none; /* Cor do texto do item selecionado */
    border-bottom: 2px solid Blue
  }
`}
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: #fff;
font-size: 32px;
`

