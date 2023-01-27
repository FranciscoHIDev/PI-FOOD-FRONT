import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { orderByName } from "../../redux/actions/actions";
import styled from "styled-components";

function FilterOrder() {
  const dispatch = useDispatch();
  const setOrder = useState("");

  function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrder(e.target.value);
  }

  return (
    <ConteinerStyled>
      <select onChange={(e) => handleOrderName(e)}>
        <option disabled selected value=" ">
          ----Orden----
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </ConteinerStyled>
  );
}

const ConteinerStyled = styled.div`
  padding: 5px;
`;

export default FilterOrder;
