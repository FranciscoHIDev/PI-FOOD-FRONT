import {
    GET_ALL_RECIPES,
    GET_RECIPE_ID,
    GET_RECIPES_NAME,
    GET_ALL_DIETS,
    POST_RECIPE,
    CLEAR_DETAIL,
    SEARCH,
    FILTER_BY_DIETS, FILTER_BY_SCORE, FILTER_BY_NAME
} from '../actions/actions.js'

const initialState = {
    recipes: [],
    allRecipes: [],
    recipeId: {},
    diets: [],

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload

            }
        case GET_RECIPE_ID:
            return {
                ...state,
                recipeId: action.payload
            }
        case GET_RECIPES_NAME:
            return {
                ...state,
                recipes: action.payload
            }
        case GET_ALL_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        case POST_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case SEARCH:
            let search = []
            search = state.allRecipes?.filter((r) => r.name.toLowerCase().includes(action.payload.toLowerCase()))
            return {
                ...state,
                recipes: [...search]


            }

        case FILTER_BY_SCORE:
            let filtrado = [];

            if (action.payload === "min") {
                filtrado = state.recipes.sort((a, b) => {
                    if (a.healthScore < b.healthScore) return -1;
                    if (a.healthScore > b.healthScore) return 1;
                    return 0;
                });
            } else {
                filtrado = state.recipes.sort((a, b) => {
                    if (a.healthScore > b.healthScore) return -1;
                    if (a.healthScore < b.healthScore) return 1;
                    return 0;
                });
            }
            return {
                ...state,
                recipes: [...filtrado],
            };

        case FILTER_BY_DIETS:
            const filterDiet = state.recipes.filter((r) => r.diets.includes(action.payload))
            return {
                ...state,
                recipes: filterDiet,
            }
        case FILTER_BY_NAME:
            let order = [];

            if (action.payload === "asc") {
                order = state.recipes.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });
            } else {
                order = state.recipes.sort((a, b) => {
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                });
            }
            return {
                ...state,
                recipes: [...order],
            };
            case CLEAR_DETAIL:
                return{
                    ...state,
                    recipeId:initialState.recipeId
                };
        default:
            return state;
    }
}


export default rootReducer