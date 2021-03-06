import styled from "styled-components";
const Footer = () => {
  return (
    <FooterStyled>
      <p>e-mail：joe888777@gmail.com</p>
      <p>
        <a href={"https://github.com/joe888777"}>
          github：https://github.com/joe888777
        </a>
      </p>
      <p>Copyright © 2021 joe888777</p>
    </FooterStyled>
  );
};
const FooterStyled = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #000;
  padding: 2rem;
  p {
    margin: 0.5rem;
  }
  a {
    color: #fff;
  }
`;
export default Footer;
