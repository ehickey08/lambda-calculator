import React, {useState} from "react";
import {numbers_data} from '../../../data';
import {NumberButton} from './NumberButton'
import styles from './Numbers.module.css'
//import any components needed
//Import your array data to from the provided data file

export const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbers, setNumbers] = useState(numbers_data)
  return (
    <div className={styles.numbers_container}>
      {numbers.map((number, i) => <NumberButton getValue={props.getValue} number={number} key={i}/>)/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

