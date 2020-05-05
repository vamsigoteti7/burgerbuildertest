import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredients = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState);
};

const removeIngredients = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState);
};

const setIngredients = (state, action) => {
    try {
        return updateObject(state, {
            ingredients: {
                salad: action.ingredient[0].salad,
                bacon: action.ingredient[0].bacon,
                cheese: action.ingredient[0].cheese,
                meat: action.ingredient[0].meat
            },
            totalPrice: 4,
            error: false,
            building: false
        });
    } catch (error) {
        console.log(error);
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.ADD_INGREDIENTS:
            return addIngredients(state, action);
        case actionTypes.REMOVE_INGREDIENTS:
            return removeIngredients(state, action);
        default: return state;
    }
};

export default reducer;