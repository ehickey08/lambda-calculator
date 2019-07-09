import React from "react";
import styles from './Display.module.css'
export const Display = (props) => {
    let display = props.display
    if(props.display.toString().split('').length>8)
        display=props.display.toPrecision(8)
  return <div className={styles.display}>{display}</div>;
};
