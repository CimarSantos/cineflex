import Topo from "./Topo";

import { BoxTitle } from "../styles/GlobalStyle";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sucesso = ({ pedido }) => {
  return (
    <>
      <Topo />
      <BoxTitle className="flex ">
        <h2 className="sucesso">
          Pedido feito <br /> com sucesso!
        </h2>
      </BoxTitle>
      <SeatsInfo data-test="movie-info" className="flex">
        <h2>Filme e Sessão</h2>
        <p>{pedido.filme}</p>
      </SeatsInfo>
      <SeatsInfo data-test="seats-info" className="flex">
        <h2>Ingressos</h2>
        {pedido.assentos.map((assento) => (
          <p>Assento {assento.number}</p>
        ))}
      </SeatsInfo>
      <SeatsInfo data-test="client-info" className="flex">
        <h2>Comprador</h2>
        <p>Nome: {pedido.name}</p>
        <p>CPF: {pedido.cpf}</p>
      </SeatsInfo>
      <Backhome>
        <Link to="/">
          <button>Voltar para Home</button>
        </Link>
      </Backhome>
    </>
  );
};

export default Sucesso;

const Backhome = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 30px;
  margin-top: 60px;
  gap: 3px;

  button {
    width: 250px;
    height: 50px;
    font-size: 22px;
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

const SeatsInfo = styled.div`
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px;
  h2,
  p {
    font-size: 24px;
    font-weight: 700;
  }
  h2 {
    margin-bottom: 15px;
  }

  p {
    font-weight: 400;
  }
`;
