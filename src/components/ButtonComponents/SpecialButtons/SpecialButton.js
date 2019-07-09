import React from "react";
import styles from './Specials.module.css'
export const SpecialButton = (props) => {
  return (
    <>
        <button className={styles.special_button}>{props.special}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
