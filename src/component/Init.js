import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { BoxTitle } from "../styles/GlobalStyle";
import Topo from "./Topo";
import { Link } from "react-router-dom";

const Init = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const request = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );

    request.then((res) => {
      setMovies(res.data);
    });
  }, []);
  return (
    <>
      <Topo />
      <BoxTitle className="flex">
        <h2>Selecione o Filme</h2>
      </BoxTitle>
      <ContainerMovies className="flex">
        {movies.map((movie, index) => (
          <Link key={index} to={`/sessoes/${movie.id}`}>
            <BoxMovie data-test="movie" className="flex">
              <img src={movie.posterURL} alt="Poster Movie" />
            </BoxMovie>
          </Link>
        ))}
      </ContainerMovies>
    </>
  );
};

export default Init;

const ContainerMovies = styled.div`
  flex-wrap: wrap;
  margin-bottom: 10%;
`;

const BoxMovie = styled.div`
  width: 145px;
  height: 209px;
  box-shadow: 0 0 5px #000;
  border-radius: 3px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px red;
  }
  img {
    width: 129px;
    height: 193px;
  }
`;
