import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Card({ id, image, name, healthScore, diets, dishTypes }) {
  return (
    <CardStyled>
      <TitleStyled>
        <h5>{name}</h5>
      </TitleStyled>

      <ImagenStyled src={image} alt={name}></ImagenStyled>
      <DetailStyled>
        <h5>healthScore: {healthScore}</h5>
        <h5>Diets: {diets.map((diet) => diet).join(", ")}</h5>
        {/* <p>Tipo de plato: {dishTypes.map((d) => d).join(", ")}</p> */}
        <Link to={`/details/${id}`}>
          <ButtonStyled>VER MÁS INFO</ButtonStyled>
        </Link>
      </DetailStyled>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 490px;
  margin: 1rem;
  margin-left: 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;
const TitleStyled = styled.div`
  border: 1px solid;
  border-radius: 10px 10px 0px 0px;
  text-align: center;
  border-color: #db94d7;
  color: #3c023dda;
  background: #db94d7;
`;
const DetailStyled = styled.div`
  border: 2px solid;
  border-color: #db94d7;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 3px;
  margin-right: 3px;
  height: 160px;
  text-align: center;
  color: #3c023dda;
`;
const ButtonStyled = styled.button`
  margin-bottom: 15px;
  border: 2px solid;
  border-radius: 7px;
  background-color: #d920dcda;
  color: white;
  border-color: #d920dcda;
  cursor: pointer;
  :hover {
    background-color: #e6576e;
    color: white;
    border-color: #e6576e;
  }
`;

const ImagenStyled = styled.img`
  /* border-radius: 0px 10px 0px 10px; */
`;
export default Card;
