import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}
                onClick={props.children[3]}>Less</button>
            <button className={classes.More}
                onClick={props.children[1]}>More</button>
        </div>
    );
};

export default buildControl;