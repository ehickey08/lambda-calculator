import React from "react";
import styles from './Operators.module.css'
export const OperatorButton = (props) => {
  return (
    <>
        <button className={styles.operator_button} onClick={() => props.getOperator(props.value)}>{props.display}</button>
    </>
  );
};
