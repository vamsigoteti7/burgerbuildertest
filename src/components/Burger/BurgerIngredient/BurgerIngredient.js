import React, { Component } from "react";
import classes from './BurgerIngredient.css';

class BurgerIngriedient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingredient = (
                    <div id="bread-top" className={classes.BreadTop}>
                        <div id="seed1" className={classes.Seeds1}></div>
                        <div id="seed2" className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            default:
                ingredient = null;
                break;
        }
        return ingredient;
    }
}

export default BurgerIngriedient;