import React from "react";
import styled from "styled-components";

function Reset() {
  function handleReset(e) {
    e.preventDefault();
    window.location.reload();
  }

  return <ButtonStyled onClick={(e) => handleReset(e)}>Reset</ButtonStyled>;
}

const ButtonStyled = styled.button`
  border-radius: 5px;
  border-color: #d920dcda;
  border: 1px solid;
  background-color: #d920dcda;
  color: white;
  margin: 6px;
  padding: 10px;
  cursor: pointer;
  :hover {
    background-color: #e6576e;
    color: white;
    border-color: #e6576e;
  }
`;
export default Reset;
