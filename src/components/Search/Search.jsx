import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/actions/actions";
import styled from "styled-components";

function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setSearch(input));
    setInput("");
  }

  return (
    <>
      <InputStyled
        type="text"
        placeholder="Buscar recetas..."
        onChange={(e) => handleInput(e)}
      ></InputStyled>

      <ButtonStyled type="submit" onClick={(e) => handleSubmit(e)}>
        🔍
      </ButtonStyled>
    </>
  );
}

const InputStyled = styled.input`
  border: 1px solid;
  border-radius: 3px;
  border-color: #d920dcda;
  padding: 3px;
`;
const ButtonStyled = styled.button`
  background-color: #d920dcda;
  border: 1px solid #d920dcda;
  outline: none;
  border-radius: 3px;
  margin: 3px;
  cursor: pointer;
  :hover {
    background-color: #e6576e;
    border-color: #e6576e;
  }
`;
export default Search;
