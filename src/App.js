import React, {useState} from "react";
import styles from  "./App.module.css";
import {Operators} from './components/ButtonComponents/OperatorButtons/Operators'
import {Numbers} from './components/ButtonComponents/NumberButtons/Numbers'
import {Specials} from './components/ButtonComponents/SpecialButtons/Specials'
import {Display} from './components/DisplayComponents/Display'
import Logo from "./components/DisplayComponents/Logo";


function App() {

const [display, setDisplay] = useState(0)
const [operation, setOperation] = useState()
const [inputOne, setInputOne] = useState()
const [nextNumber, setNextNumber] = useState(true)
const [operatorClicked, setOperatorClicked] = useState(false)

function getValue(num) {
    setOperatorClicked(false)
    let toDisplay = ''
    if(nextNumber){
        toDisplay = num==='.' ? '0.' : +num
        setDisplay(toDisplay)
        setNextNumber(false)
    }
    else{
        toDisplay = num==='.' ? '.' : num
        let containsDecimal = /\./.test(display) 
        if(containsDecimal && toDisplay==='.')
            return
        setDisplay((`${display.toString()}${toDisplay}`))
    }
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
        setInputOne(+display)
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
            if(inputOne)
                setInputOne(0-inputOne)
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
