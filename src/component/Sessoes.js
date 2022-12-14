import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { BoxTitle } from "../styles/GlobalStyle";
import { Link, useParams } from "react-router-dom";

import Topo from "./Topo";
import Footer from "./Footer";

const Sessoes = () => {
  const { idMovie } = useParams();
  const [diaSemana, setDiaSemana] = useState([]);
  const [imgFooter, setImageFooter] = useState([]);
  const [titleFooter, setTitleFooter] = useState([]);

  useEffect(() => {
    const request = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`
    );
    request
      .then((res) => {
        setDiaSemana(res.data.days);
        setImageFooter(res.data.posterURL);
        setTitleFooter(res.data.title);
      })
      .catch((err) => alert(err.message));
  }, [idMovie]);

  if (diaSemana === []) {
    return <h2>Carregando as sessões do filme...</h2>;
  }
  return (
    <>
      <Topo />
      <BoxTitle className="flex">
        <h2>Selecione o horário</h2>
      </BoxTitle>
      <BoxDays data-test="movie-day">
        {diaSemana.map((sessao, index) => (
          <>
            <p key={index}>
              {sessao.weekday} - {sessao.date}
            </p>
            <div>
              {sessao.showtimes.map((showtimes, index) => (
                <Link data-test="showtime" to={`/assentos/${showtimes.id}`}>
                  <button key={index}>{showtimes.name}</button>
                </Link>
              ))}
            </div>
          </>
        ))}
      </BoxDays>

      <Footer imagem={imgFooter} titulo={titleFooter} />
    </>
  );
};

export default Sessoes;

const BoxDays = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: start;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 5%;
  gap: 10px;
  margin-bottom: 25%;
  p {
    font-size: 25px;
    letter-spacing: 1.5px;
    cursor: default;
  }
  button {
    width: 133px;
    height: 63px;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-size: 22px;
    margin: 10px 15px 20px 0;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 10px red;
    }
  }
`;


