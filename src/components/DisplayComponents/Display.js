import React from "react";
import styles from './Display.module.css'
export const Display = (props) => {
    let display = props.display
    if(props.display.toString().split('').length>10)
        display=props.display.toExponential(5)
  return <div className={styles.display}>{display}{/* Display any props data here */}</div>;
};
