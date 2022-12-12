import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useState } from "react";
import Init from "./Init";
import Sessoes from "./Sessoes";
import Assentos from "./Assentos";
import Sucesso from "./Sucesso";

const MainScrn = () => {
  const [pedido, setPedido] = useState({});
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/sessoes/:idMovie" element={<Sessoes />} />
          <Route
            path="/assentos/:idSessao"
            element={<Assentos pedido={pedido} setPedido={setPedido} />}
          />
          <Route path="/sucesso" element={<Sucesso pedido={pedido} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainScrn;
