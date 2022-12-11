import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import Init from "./Init";
import Sessoes from "./Sessoes";
import Assentos from "./Assentos";

const MainScrn = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/sessoes/:idMovie" element={<Sessoes />} />
          <Route path="/assentos/:idSessao" element={<Assentos />} />
        </Routes>
        {/* <Assentos /> */}
      </BrowserRouter>
    </>
  );
};

export default MainScrn;
