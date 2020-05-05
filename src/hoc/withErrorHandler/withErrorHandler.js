import React, { Component } from 'react';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        render(){
            return(
                <WrappedComponent {...this.props}></WrappedComponent>
            );
        }
    }
};

export default withErrorHandler;