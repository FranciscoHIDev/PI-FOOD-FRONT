import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById,clearDetail } from "../../redux/actions/actions";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import image from "../../img/loading.gif";

function Details() {
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipeId);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getRecipeById(id));
    return() => dispatch(clearDetail())
  }, [dispatch, id]);

  return (
    <>
      <NavBar />
      <CardStyled>
        {recipe ? (
          <div>
            <Link to={"/home"}>
              <ButtonStyled>regresar a Home</ButtonStyled>
            </Link>
            <CardsStyled>
              <h2>{recipe[0]?.name} </h2>
            </CardsStyled>
            <CardsStyled>
              <h3>Resumen:</h3>
              {recipe[0]?.summary?.replace(/<[^>]*>/g, "")}
            </CardsStyled>
            <ContainerStyled>
              <ImagenStyled
                src={recipe[0]?.image}
                alt={recipe[0]?.name}
              ></ImagenStyled>
              <CardInfo>
                <h3>Puntaje de salud:</h3>
                {recipe[0]?.healthScore}
                <h3>Tipos de dietas:</h3>{" "}
                {recipe[0]?.diets.map((diet) => diet).join(", ")}
                <h3>Tipo de plato:</h3>
                {Array.isArray(recipe[0].dishTypes) ? (
                  recipe[0]?.dishTypes.map((d) => {
                    return <p key={crypto.randomUUID()}>{d}</p>;
                  })
                ) : (
                  <p>---------------------------------------------------</p>
                )}
              </CardInfo>
            </ContainerStyled>
            <CardssStyled>
              <h3>Pasos de preparación:</h3>
              {Array.isArray(recipe[0].steps) ? (
                recipe[0]?.steps.map((s) => {
                  return (
                    <ul key={crypto.randomUUID()}>
                      <li key={crypto.randomUUID()}>{s.step}</li>
                    </ul>
                  );
                })
              ) : (
                <ul key={crypto.randomUUID()}>
                  <li key={crypto.randomUUID()}>{recipe[0].steps}</li>
                </ul>
              )}
            </CardssStyled>
          </div>
        ) : (
          <ImageStyled src={image} alt="loading"></ImageStyled>
        )}
      </CardStyled>
      <Footer />
    </>
  );
}
const ButtonStyled = styled.button`
  background-color: #d920dcda;
  border: 1px solid #d920dcda;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  :hover {
    background-color: #e6576e;
    border-color: #e6576e;
  }
`;
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 1300px;
  margin: 40px auto;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
`;

const CardsStyled = styled.div`
  border: 1px solid #d17b89;
  padding: 10px;
  background: #d17b89;
  border-radius: 20px;
  margin: 20px;
  text-align: center;
`;
const CardssStyled = styled.div`
  border: 1px solid #d17b89;
  padding: 10px;
  background: #d17b89;
  border-radius: 20px;
  margin: 20px;
`;
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
const CardInfo = styled.div`
  border: 1px solid #d17b89;
  padding: 10px;
  background: #d17b89;
  border-radius: 20px;
  width: 400px;
  text-align: center;
`;

const ImageStyled = styled.img`
  width: 360px;
`;
const ImagenStyled = styled.img`
  width: 390px;
  margin: 19px;
  border-radius: 15px;
  border: 3px solid #d17b89;
`;

export default Details;
