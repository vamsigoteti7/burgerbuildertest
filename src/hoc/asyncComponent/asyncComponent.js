import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        };

        componentDidMount() {
            importComponent().then((cmp) => {
                this.setState({ component: cmp.default })
            }).catch((err) => {

            });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props}></C> : null;
        }
    }
};

export default asyncComponent;
