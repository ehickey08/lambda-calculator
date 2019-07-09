import React from "react";
import styles from './Numbers.module.css'
export const NumberButton = (props) => {
  return (
    <>
        <button className={styles.number_button}>{props.number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
