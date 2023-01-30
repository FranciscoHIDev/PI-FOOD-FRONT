import React from "react";
import styled from "styled-components";

function Paginated({ recipesPerPage, recipes, paginated }) {
  const pagesNumbers = [];
  const numberPages = Math.ceil(recipes / recipesPerPage);

  for (let i = 0; i < numberPages; i++) {
    pagesNumbers.push(i + 1);
  }

  return (
    <NavStyled>
      {pagesNumbers?.map((num) => (
        <ButtonStyled key={crypto.randomUUID()} onClick={() => paginated(num)}>
          {num}
        </ButtonStyled>
      ))}
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 350px;
  align-items: center;
  align-content: center;
  /* border: 1px solid #ee9fea; */
  width: 700px;
  border-radius: 15px;
  margin-top: 10px;
`;
const ButtonStyled = styled.button`
  background-color: #d920dcda;
  border: 1px solid transparent;
  border-radius: 20px;
  margin: 5px;
  border-color: white;
  cursor: pointer;
  color: rgb(247, 241, 241);
  min-height: 35px;
  max-height: 50px;
  min-width: 35px;
  max-width: 50px;
  :hover {
    background: #e6576e;
  }

  :active {
    background-color: black;
  }
`;
export default Paginated;
