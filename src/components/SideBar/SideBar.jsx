import React from "react";
import {
  FilterDiets,
  FilterScore,
  FilterOrder,
  Reset,
} from "../../components/Filtros";
import styled from "styled-components";

function SideBar() {
  return (
    <ContainerStyled>
      <h3>Filtrar por:</h3>
      <FilterDiets />
      <FilterScore />
      <FilterOrder />
      <Reset />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  padding: 10px 60px;
  border: 2px dotted;
  border-radius: 5px;
  color: #d920dcda;
`;

export default SideBar;
