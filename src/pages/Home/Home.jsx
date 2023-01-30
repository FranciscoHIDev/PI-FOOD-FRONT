import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { getAllRecipes } from "../../redux/actions/actions";
import image from "../../img/loading.gif";
import styled from "styled-components";
import Paginated from "../../components/Paginated/Paginated";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";
function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  const [page, setPage] = useState(1);
  const recipesPerPage = 9;
  const lastRecipe = page * recipesPerPage;
  const firstRecipe = lastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(firstRecipe, lastRecipe);
  const paginated = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <>
      <div>
        <NavBar />
        <SideBar />
      </div>
      <PaginatedStyled>
        <Paginated
          recipesPerPage={recipesPerPage}
          recipes={recipes?.length}
          paginated={paginated}
        />
      </PaginatedStyled>
      <ContainerStyled>
        {currentRecipes.length !== 0 ? (
          currentRecipes.map((e) => {
            return (
              <Card
                key={e.id}
                id={e.id}
                name={e.name}
                image={e.image}
                healthScore={e.healthScore}
                // dishTypes={e.dishTypes}
                diets={e.diets}
              />
            );
          })
        ) : (
          <LoadingStyed>
            <ImageStyled src={image} alt={"cargando..."} Image></ImageStyled>
            <h1>Cargando recetas...</h1>
          </LoadingStyed>
        )}
      </ContainerStyled>

      <Footer />
    </>
  );
}
const PaginatedStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: OldLace;
  margin-top: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const LoadingStyed = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: center;
  color: #d920dcda;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const ImageStyled = styled.img`
  width: 200px;
`;

export default Home;
