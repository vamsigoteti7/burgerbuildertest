import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredient: ingredients
    };
};

export const addIngredients = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName: name
    };
};

export const removeIngredients = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: name
    };
};


export const initIngredients = () => {
    return dispatch =>{
        axios.get('http://my-json-server.typicode.com/vamsigoteti7/ReactAPI/ingredients')
            .then(response => {
                console.log(response.data);
               dispatch(setIngredients(response.data));
            })
            .catch(error => { });
        };
};