import React, {useState} from "react";
import {operators_data} from '../../../data'
import {OperatorButton} from './OperatorButton'
import styles from './Operators.module.css'

export  const Operators = (props) => {
  const [operators, setOperators] = useState(operators_data)
  return (
    <div className={styles.operators_container}>
      {operators.map((operator,i) => <OperatorButton key={i} getOperator={props.getOperator} display={operator.char} value={operator.value} />)}
    </div>
  );
};
