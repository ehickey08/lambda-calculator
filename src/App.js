import React, {useState} from "react";
import styles from  "./App.module.css";
import {Operators} from './components/ButtonComponents/OperatorButtons/Operators'
import {Numbers} from './components/ButtonComponents/NumberButtons/Numbers'
import {Specials} from './components/ButtonComponents/SpecialButtons/Specials'
import {Display} from './components/DisplayComponents/Display'
import Logo from "./components/DisplayComponents/Logo";


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
const [display, setDisplay] = useState(0)
const [operation, setOperation] = useState()
const [inputOne, setInputOne] = useState()
const [nextNumber, setNextNumber] = useState(false)
const [operatorClicked, setOperatorClicked] = useState(false)

function getValue(num) {
    setOperatorClicked(false)
    if(nextNumber){
        setDisplay(+num)
        setNextNumber(false)
    }
    else
        setDisplay(Number(`${display.toString()}${num}`))
}

function getOperator(op){
    if(operatorClicked){
        setOperation(op)
        return
    }
    if(operation){
        let result = doMath()
        setDisplay(result)
        setInputOne(result)
    }
    else{
        setInputOne(display)
    }
    setNextNumber(true)
    setOperation(op)
    setOperatorClicked(true)
    if(op==='=')
        setOperation(null)
}

function doMath(){
    switch(operation){
        case '+':
            return inputOne + display
        case '-':
            return inputOne - display
        case '*':
            return inputOne * display
        case '/':
            return inputOne/display
    }
}

function doSpecial(char){
    switch(char){
        case 'C':
            setDisplay(0)
            setNextNumber(false)
            setOperatorClicked(false)
            setOperation(null)
            setInputOne(null)
            break;
        case '+/-':
            setDisplay(0-display)
            break;
        case '%':
            setDisplay(display/100)
            break;
    }
}
    return (
        <div className={styles.container}>
            <Logo />
            <Display display={display}/>
            <div className={styles.button_container}>
                    <div className={styles.left_column}>
                        <Specials doSpecial={doSpecial}/>
                        <Numbers getValue={getValue}/>
                    </div>
                    <div className={styles.right_column}>
                        <Operators getOperator={getOperator}/>
                    </div>
            </div>
        </div>
  );
}

export default App;
