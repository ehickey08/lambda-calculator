import React, {useState} from "react";
import {specials_data} from '../../../data'
import {SpecialButton} from './SpecialButton'

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
    const [specials, setSpecials] = useState(specials_data)
  return (
    <div>
      {specials.map((special, i) => <SpecialButton key ={i} special={special} />)/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
