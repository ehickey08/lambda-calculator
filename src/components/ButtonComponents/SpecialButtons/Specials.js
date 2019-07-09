import React, {useState} from "react";
import {specials_data} from '../../../data'
import {SpecialButton} from './SpecialButton'
import styles from './Specials.module.css'

export const Specials = (props) => {
const [specials, setSpecials] = useState(specials_data)
  return (
    <div className={styles.specials_container}>
      {specials.map((special, i) => <SpecialButton doSpecial={props.doSpecial} key ={i} special={special} />)}
    </div>
  );
};
