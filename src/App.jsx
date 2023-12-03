import Header from "./Components/Header/index"

import Inicio from "./Pages/Inicio";
import Sobre from "./Pages/Sobre"
import Projetos from "./Pages/Projetos";
import { Globalstyle } from "./assets/Styles/GlobalStyle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/sobre" element={<Sobre />} />

          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </BrowserRouter>
      <Globalstyle/>
    </>
  );
}

export default App;
