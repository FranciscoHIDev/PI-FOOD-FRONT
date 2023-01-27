import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from "./../Search/Search";

function NavBar() {
  return (
    <ContainerNavStyled>
      <NavStyled>
        <ListStyled to={"/home"}>Home</ListStyled>
        <ListStyled to={"/about"}>About</ListStyled>
        <ListStyled to={"/create"}>Create</ListStyled>
        <Search />
      </NavStyled>
    </ContainerNavStyled>
  );
}

const ContainerNavStyled = styled.div`
  height: 64px;
  background: #1d1c1d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavStyled = styled.nav`
  height: 100%;
  padding-right: 40px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ListStyled = styled(NavLink)`
  padding-left: 15px;
  padding-right: 20px;
  color: #d920dcda;
  text-decoration: none;
  :hover {
    background: #e6576e;
    border-radius: 5px;
    color: white;
  }
`;

export default NavBar;
