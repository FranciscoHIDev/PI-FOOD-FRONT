import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";

function About() {
  return (
    <>
      <NavBar />
      <CardStyled>
        <CardTitle>
          <h1>Acerca de esta página</h1>
        </CardTitle>
        <CardInfo>
          <p>
            Esta página es un Proyecto para el bootcamp de Henry. Es una
            aplicación donde podras encontrar información sobre distintas
            recetas de comida. Para el proyecto utilicé una API externa de
            spoonacular....
          </p>
        </CardInfo>
      </CardStyled>

      <Footer />
    </>
  );
}
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-radius: 10px;
  margin: 40px;
  height: 400px;
`;

const CardTitle = styled.div`
  border: 1px solid;
  border-radius: 10px;
  margin: 5px;
  padding-left: 5px;
  text-align: center;
`;

const CardInfo = styled.div`
  border: 1px solid;
  border-radius: 10px;
  margin: 5px;
  padding-left: 10px;
  font-size: 18px;
`;

export default About;
