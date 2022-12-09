import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BoxTitle } from "../styles/GlobalStyle";
import styled from "styled-components";
import axios from "axios";

import Topo from "./Topo";
import Footer from "./Footer";

const Assentos = () => {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    const request = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );
  }, []);
  return (
    <>
      <Topo />
      <BoxTitle className="flex">
        <h2>Selecione o(s) assento(s)</h2>
      </BoxTitle>
      <SeatsContainer className="flex">
        <div className="flex">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="flex">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="flex">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="flex">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="flex">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
      </SeatsContainer>
      <Legend className="flex">
        <div className="selecinado flex">
          <p>Selecionado</p>
        </div>
        <div className="disponivel flex">
          <p>Disponível</p>
        </div>
        <div className="indisponivel flex">
          <p>Indisponível</p>
        </div>
      </Legend>
      <Formulario onSubmit="">
        <label for="campoNome">Nome do Comprador:</label>
        <input
          id="campoNome"
          type="text"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="campoCPF">CPF do Comprador:</label>
        <input
          id="campoCPF"
          type="text"
          placeholder="Digite seu CPF..."
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <button type="submit">Reservar assento(s)</button>
      </Formulario>
      <Footer />
    </>
  );
};

export default Assentos;

const Formulario = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 30px;
  margin-top: 60px;
  gap: 3px;
  label {
    font-size: 18px;
  }
  input {
    width: 100%;
    height: 51px;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    margin-bottom: 20px;
    padding: 15px;
    font-size: 18px;
    color: #afafaf;
    font-style: italic;
  }

  button {
    width: 225px;
    height: 42px;
    font-size: 18px;
    color: #fff;
    background-color: #e8833a;
    border: 1px solid #e8833a;
    border-radius: 3px;
    margin: 20px 0 0 25%;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 5px red;
    }
  }
`;

const SeatsContainer = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  div {
    gap: 10px;
    margin-bottom: 7px;
  }
  .seat {
    width: 32px;
    height: 32px;
    color: #000;
    background-color: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 50%;
  }
`;

const Legend = styled.div`
  margin-top: 20px;
  justify-content: space-evenly;
  div {
    flex-direction: column;
    width: 32px;
    height: 32px;
    color: #000;
    background-color: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 50%;
  }
  p {
    margin-top: 70px;
  }
  .selecinado {
    border: 1px solid #0e7d71;
    background-color: #1aae9e;
  }
  .indisponivel {
    border: 1px solid #f7c52b;
    background-color: #fbe192;
  }
  .disponivel {
    border: 1px solid #808f9d;
    background-color: #c3cfd9;
  }
`;
