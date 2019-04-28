import {createStore} from "redux"

let initialState = {
    id: 1,
    recipeName: "",
    recipeCat: "",
    authorFirst: "",
    authorLast: "",
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_RECIPE = "UPDATE_RECIPE"
export const UPDATE_CAT = "UPDATE_CAT"
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST"
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST"
export const INGREDIENTS_LIST = "INGREDIENTS_LIST"
export const INSTRUCTIONS = "INSTRUCTIONS"
export const RECIPES = "RECIPES"
export const RESET = "RESET"
export const DELETE_RECIPE = "DELETE_RECIPE"


function reducer(state = initialState, action){
    console.log(state)
    switch(action.type){
        case UPDATE_RECIPE:
        
            return state = {...state, recipeName: action.payload}
        case UPDATE_CAT: 
        
            return state = {...state, recipeCat: action.payload}
        case UPDATE_AUTHOR_FIRST:
            return state = {...state, authorFirst: action.payload}
        case UPDATE_AUTHOR_LAST:
            return state = {...state, authorLast: action.payload}
        case INGREDIENTS_LIST:
            
            return state = {...state, ...initialState.ingredients.push(action.payload)}
        case INSTRUCTIONS:

            return state = {...state, ...state.instructions.push(action.payload)}
        case RECIPES:
        
        state = {...state, ...state.recipes.push(state)}
            return state
        case RESET:
            
            return initialState = {recipeName: "",
            recipeCat: "",
            authorFirst: "",
            authorLast: "",
            ingredients: [],
            instructions: [],
            recipes: [...initialState.recipes]
        }
        case DELETE_RECIPE:
            return initialState
        default:
            return state
    }
}

export default createStore(reducer)