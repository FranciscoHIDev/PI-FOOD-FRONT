import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAllDiets, postRecipe } from "../../redux/actions/actions";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import image from "../../img/cooking.gif";
import styled from "styled-components";
import validate from "./validate.js";

function Create() {
  const initialState = {
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: "",
    diets: [],
  };

  
  const [diets, setDiets] = useState([]);
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.diets);

  React.useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  function handleOnChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleOnBlur(e) {
    let objErrors = validate(input);
    setErrors(objErrors);
  }

  function handleSelect(e) {
    if (!diets.includes(e.target.value)) {
      if (diets.length > 0) {
        setDiets([...diets, e.target.value]);
      } else {
        setDiets([...diets, e.target.value]);
      }
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    setDiets(diets.filter((d) => d !== e.target.value));
  }

  function handleSubmit(e) {
    const newRecipe = {
      name: input.name,
      summary: input.summary,
      healthScore: input.healthScore,
      steps: input.steps,
      diets: diets,
    };
    e.preventDefault();
    dispatch(postRecipe(newRecipe));
    alert("¡Tu nueva receta se creo con éxito!");
    setInput(initialState);
    setDiets([]);
  }

  return (
    <>
      <NavBar />
      <ContenedorStyled>
        <CardStyled>
          <h3>
            Crea tu receta favorita solo ingresa los datos en el siguiente
            formulario.
          </h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            <InputStyled
              type="text"
              placeholder="name"
              name="name"
              value={input.name}
              onChange={(e) => handleOnChange(e)}
              onBlur={(e) => handleOnBlur(e)}
            ></InputStyled>
            <ErrorStyled>{errors.name && <p>{errors.name}</p>}</ErrorStyled>
            <InputSummary
              type="text"
              placeholder="summary"
              name="summary"
              value={input.summary}
              onChange={(e) => handleOnChange(e)}
              onBlur={(e) => handleOnBlur(e)}
            ></InputSummary>
            <ErrorStyled>
              {errors.summary && <p>{errors.summary}</p>}
            </ErrorStyled>
            <InputStyled
              type="number"
              placeholder="health score"
              name="healthScore"
              value={input.healthScore}
              onChange={(e) => handleOnChange(e)}
              onBlur={(e) => handleOnBlur(e)}
            ></InputStyled>
            <ErrorStyled>
              {errors.healthScore && <p>{errors.healthScore}</p>}
            </ErrorStyled>
            <InputSteps
              type="text"
              placeholder="steps"
              name="steps"
              value={input.steps}
              onChange={(e) => handleOnChange(e)}
              onBlur={(e) => handleOnBlur(e)}
            ></InputSteps>
            <ErrorStyled>{errors.steps && <p>{errors.steps}</p>}</ErrorStyled>

            <select
              name="diets"
              placeholder="diets"
              onChange={(e) => handleSelect(e)}
            >
              <option value="--Seleccionar--">--Tipo de dieta--</option>
              {allDiets?.map((diet, id) => (
                <option key={id} value={null}>
                  {diet.name}
                </option>
              ))}
            </select>
            {diets?.map((diet, id) => {
              return (
                <React.Fragment key={id}>
                  {""}
                  {diet}
                  <Button2Styled value={diet} onClick={(e) => handleDelete(e)}>
                    X
                  </Button2Styled>
                </React.Fragment>
              );
            })}
            <ButtonStyled
              type="submit"
              disabled={
                !input.name ||
                !input.summary ||
                !input.healthScore ||
                !input.steps ||
                Object.keys(errors).length > 0
              }
            >
              {" "}
              CREAR RECETA
            </ButtonStyled>
          </form>
        </CardStyled>

        <ContainerStyled>
          <img src={image} alt={"imagendog"} />
          <h3>¡Estamos creando tu receta!</h3>
          {<p>Nombre: {input.name}</p>}
          {<p>Resumen: {input.summary}</p>}
          {<p>Nivel de comida: {input.healthScore}</p>}
          {<p>Pasos: {input.steps}</p>}
        </ContainerStyled>
      </ContenedorStyled>
      <Footer />
    </>
  );
}
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #db94d7;
  border-radius: 5px;
  margin: 7px;
  width: 400px;
  height: 500px;
  align-content: center;
  justify-content: center;
  text-align: center;
`;
const InputStyled = styled.input`
  padding: 5px;
  margin: 7px;
  width: 350px;
`;
const InputSummary = styled.input`
  padding: 5px;
  margin: 7px;
  width: 350px;
  height: 100px;
`;
const InputSteps = styled.input`
  padding: 5px;
  margin: 7px;
  width: 350px;
  height: 100px;
`;
const ErrorStyled = styled.div`
  color: red;
`;
const ButtonStyled = styled.button`
  background-color: #d920dcda;
  border: 2px solid #d920dcda;
  color: white;
  border-radius: 5px;
  margin: 10px;
  padding: 8px;
  cursor: pointer;
  :hover {
    background-color: #e6576e;
    color: white;
    border-color: #e6576e;
  }
`;
const Button2Styled = styled.button`
  margin: 5px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: red;
    border: 1px solid red;
    border-radius: 5px;
    margin: 5px;
    color: white;
  }
`;
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #db94d7;
  border-radius: 5px;
  margin-left: 150px;
  width: 400px;
  align-content: center;
  justify-content: center;
  text-align: center;
`;
const ContenedorStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export default Create;
