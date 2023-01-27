import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiets, filterByDiets } from "../../redux/actions/actions";
import styled from "styled-components";

function FilterDiets() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  React.useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  function handleDiets(e) {
    e.preventDefault();
    dispatch(filterByDiets(e.target.value));
  }
  return (
    <ContainerStyled>
      <select onChange={(e) => handleDiets(e)}>
        <option disabled selected value="">
          ----Dietas----
        </option>
        {diets?.map((d) => {
          return (
            <option key={d.id} value={d.name}>
              {d.name}
            </option>
          );
        })}
      </select>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  padding: 5px;
`;

export default FilterDiets;
