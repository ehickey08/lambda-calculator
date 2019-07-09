import React from "react";
import styles from './Numbers.module.css'
export const NumberButton = (props) => {
    const zeroClass = props.number==='0' ? `${styles.zero_button}` : ''
    const classes = `${styles.number_button} ${zeroClass}` 
  return (
    <>
        <button className={classes} onClick={() => props.getValue(props.number)}>{props.number}</button>
    </>
  );
};
