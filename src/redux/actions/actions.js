import axios from 'axios'
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
export const GET_RECIPE_ID = 'GET_RECIPE_ID'
export const GET_RECIPES_NAME = 'GET_RECIPES_NAME'
export const GET_ALL_DIETS = 'GET_ALL_DIETS'
export const POST_RECIPE = "POST_RECIPE"
export const SEARCH = "SEARCH"
export const FILTER_BY_DIETS = "FILTER_BY_DIETS"
export const FILTER_BY_SCORE = "FILTER_BY_SCORE"
export const FILTER_BY_NAME = "FILTER_BY_NAME"
export const CLEAR_DETAIL = "CLEAR_DETAIL"



export const getAllRecipes = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/recipes")
        dispatch({
            type: 'GET_ALL_RECIPES',
            payload: data.result
        })
    } catch (error) {
        return console.log(error)
    }
}

export const getRecipeById = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${"/recipes"}/${id}`)
        dispatch({
            type: 'GET_RECIPE_ID',
            payload: data
        })

    } catch (error) {
        return console.log(error)
    }
}

export const getRecipesName = (name) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/recipes?name=${name}`)
        dispatch({
            type: 'GET_RECIPES_NAME',
            payload: data
        })
    } catch (error) {
        return console.log(error)
    }
}

export const getAllDiets = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/diets")
        dispatch({
            type: 'GET_ALL_DIETS',
            payload: data
        })
    } catch (error) {
        return console.log(error)
    }
}

export const postRecipe = (payload) => async (dispatch) => {
    try {
        const created = await axios.post("/recipes", payload)
        return dispatch({
            type: "POST_RECIPE",
            payload: created
        })
    } catch (error) {
        console.log(error)
    }

}

export const setSearch = (payload) => {
    return {
        type: "SEARCH",
        payload
    }
}

export const filterByDiets = (payload) => {
    return {
        type: "FILTER_BY_DIETS",
        payload
    }
}

export const filterByScore = (payload) => {
    return {
        type: "FILTER_BY_SCORE",
        payload
    }
}

export const orderByName = (payload) => {
    return {
        type: "FILTER_BY_NAME",
        payload
    }
}

export const clearDetail = () => {
    return {
        type: "CLEAR_DETAIL"
    }
}