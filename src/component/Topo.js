import styled from "styled-components";

const Topo = () => {
  return (
    <>
      <BoxTop>
        <h1>CINEFLEX</h1>
      </BoxTop>
    </>
  );
};

export default Topo;

const BoxTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 67px;
  background-color: #c3cfd9;
  h1 {
    font-size: 34px;
    color: #e8833a;
  }
`;
