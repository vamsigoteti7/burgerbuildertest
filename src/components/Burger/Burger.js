import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';

const burger = (props) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return(
        <div id="burger" className={classes.Burger}>
           <BurgerIngredient type="bread-top"></BurgerIngredient> 
           {transformedIngredients}
           <BurgerIngredient type="bread-bottom"></BurgerIngredient> 
        </div>
    );
};

export default burger;