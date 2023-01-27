import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../img/landingPage.jpg";

function LandingPage() {
  return (
    <LandingStyled>
      <CardStyled>
        <h1>Food App Henry</h1>
        <Link to={"/home"}>
          <ButtonStyled>START</ButtonStyled>
        </Link>
      </CardStyled>
    </LandingStyled>
  );
}

export const LandingStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${img});
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 1366px;
  height: 649px;
`;

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: white;
  border: 2px solid #cf7fd1da;
  border-radius: 10px;
  background: #cf7fd1da;
  width: 400px;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding-bottom: 10px;
`;
const ButtonStyled = styled.button`
  background-color: #d920dcda;
  border: 2px solid #d920dcda;
  color: white;
  border-radius: 5px;
  margin: 10px;
  padding: 8px;
  cursor: pointer;
  :hover {
    background-color: #e6576e;
    color: white;
    border-color: #e6576e;
  }
`;
export default LandingPage;
