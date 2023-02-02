import React, { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [value, setValue] = useState(0);

    function clickHandler(e: React.MouseEvent<HTMLButtonElement>){
        setValue(value + 1);
    }

    return (
        <div>
            <div className={classes.counter}>{value}</div>
            <button className={classes.btn} onClick={clickHandler}>click</button>
        </div>
    );
};

