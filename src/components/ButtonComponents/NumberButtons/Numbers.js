import React, {useState} from "react";
import {numbers_data} from '../../../data';
import {NumberButton} from './NumberButton'
import styles from './Numbers.module.css'

export const Numbers = (props) => {
  
  const [numbers, setNumbers] = useState(numbers_data)
  return (
    <div className={styles.numbers_container}>
      {numbers.map((number, i) => <NumberButton getValue={props.getValue} number={number} key={i}/>)}
    </div>
  );
};

