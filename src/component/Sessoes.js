import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { BoxTitle } from "../styles/GlobalStyle";

import Topo from "./Topo";
import Footer from "./Footer";

const Sessoes = () => {
  const [diaSemana, setDiaSemana] = useState([]);

  useEffect(() => {
    const request = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies/ID_DO_FILME/showtimes"
    );

    request.then((res) => {
      setDiaSemana(res.data);
    });
  });
  return (
    <>
      <Topo />
      <BoxTitle className="flex">
        <h2>Selecione o horário</h2>
      </BoxTitle>
      <BoxDays className="flex">
        <p>Quinta-feira - 24/06/2021</p>
      </BoxDays>
      <BoxButtonsHours className="flex">
        <button>15:00</button>
        <button>19:00</button>
      </BoxButtonsHours>
      <BoxDays className="flex">
        <p>Sexta-feira - 25/06/2021</p>
      </BoxDays>
      <BoxButtonsHours className="flex">
        <button>15:00</button>
        <button>19:00</button>
      </BoxButtonsHours>
      <Footer />
    </>
  );
};

export default Sessoes;

const BoxDays = styled.div`
  justify-content: start;
  padding-left: 5%;
  p {
    font-size: 25px;
    letter-spacing: 1.5px;
  }
`;

const BoxButtonsHours = styled.div`
  justify-content: start;
  padding: 5%;
  gap: 10px;
  button {
    width: 133px;
    height: 63px;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-size: 22px;
  }
`;
