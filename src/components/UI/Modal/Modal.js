import React, { Component } from "react";
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {

    }

    render() {
        return (
            <div>
                <Backdrop />
                <div className={classes.Modal}>
                </div>
            </div>);
    }
}

export default Modal;