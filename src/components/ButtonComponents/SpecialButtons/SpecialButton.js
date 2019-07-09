import React from "react";
import styles from './Specials.module.css'
export const SpecialButton = (props) => {
  return (
    <>
        <button className={styles.special_button} onClick={() => props.doSpecial(props.special) }>{props.special}</button>
    </>
  );
};
