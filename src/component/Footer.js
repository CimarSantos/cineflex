import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox className="flex">
      <BoxPoster>
        <img src="" alt="Poster Movie" />
      </BoxPoster>
      <h2>Enola Holmes</h2>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 117px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  justify-content: start;
  padding: 0 5%;
  gap: 30px;
  h2 {
    font-size: 26px;
    letter-spacing: 1px;
  }
`;

const BoxPoster = styled.div`
  width: 64px;
  height: 89px;
  background-color: #fff;
  box-shadow: 0 0 4px #fff;
  border-radius: 2px;
  img {
    width: 48px;
    height: 72px;
  }
`;