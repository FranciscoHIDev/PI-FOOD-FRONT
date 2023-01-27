import React from "react";
import image from "../../img/icon-corazon.png";
import image2 from "../../img/icon-github.png";
import image3 from "../../img/icon-linkedin.png";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      Copyright © 2023 Coded with{" "}
      <CardImage2>
        <img src={image} alt="corazón" />
      </CardImage2>{" "}
      by FranciscoHIDev. All rights reserved
      <CardImage>
        <a href="https://github.com/FranciscoHIDev">
          <img src={image2} alt="icon-Github" />
        </a>
        <a href="https://www.linkedin.com/in/isidoro-francisco-613273242/">
          <img src={image3} alt="icon-Linkedin" />
        </a>
      </CardImage>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: flex;
  background-color: #d920dcda;
  padding: 40px;
  border-radius: 2em 2em 0 0;
  text-align: left;
  color: #fff;
  text-shadow: black 0.1em 0.1em 0.1em;
  position: relative;
  font-size: 22px;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const CardImage = styled.div`
  margin-left: 15px;
`;

const CardImage2 = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
export default Footer;
