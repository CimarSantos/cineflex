import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import Init from "./Init";
import Sessoes from "./Sessoes";

const MainScrn = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/sessoes/:idMovie" element={<Sessoes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainScrn;
