import React, {useState} from "react";
import {operators_data} from '../../../data'
import {OperatorButton} from './OperatorButton'
import styles from './Operators.module.css'
//import any components needed

//Import your array data to from the provided data file

export  const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operators, setOperators] = useState(operators_data)
  return (
    <div className={styles.operators_container}>
      {operators.map((operator,i) => <OperatorButton key={i} display={operator.char} value={operator.value} />)/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
