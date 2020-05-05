import React, { Component } from "react";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { connect } from "react-redux";

class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount() {
        this.props.onInitIngredients();
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredient };
        updatedIngredients[type] = updatedCount;
        this.setState({ ingredient: updatedIngredients });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    render() {
        let burger = this.props.error;
        if (this.props.ings) {
            burger = (<div>
                <Burger ingredients={this.props.ings}></Burger>
                <BuildControls
                    ingriendentAdded={this.props.onIngredientsAdded}
                    ingriendentRemoved={this.props.onIngredientsRemoved}
                    price={this.props.price}
                    ordered={this.purchaseHandler}
                >
                </BuildControls>
            </div>);
        }
        return (
            <div>{burger}</div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientsAdded: (ingName) => {
            dispatch(actions.addIngredients(ingName));
        },
        onIngredientsRemoved: (ingName) => {
            dispatch(actions.removeIngredients(ingName));
        },
        onInitIngredients: () => {
            dispatch(actions.initIngredients());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));