import styled from "styled-components";
const Footer = () => {
  return (
    <FooterStyled>
      <p>e-mail：joe888777@gmail.com</p>
<<<<<<< HEAD
      <p>
        <a href={"https://github.com/joe888777"}>
          github：https://github.com/joe888777
        </a>
      </p>
=======
      <p>github：https://github.com/joe888777</p>
>>>>>>> dbc25797cf6c94fbb24f3ef89416e256927d6a56
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
<<<<<<< HEAD
  a {
    color: #fff;
  }
=======
>>>>>>> dbc25797cf6c94fbb24f3ef89416e256927d6a56
`;
export default Footer;
