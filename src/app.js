import styles from './App.module.css';
import { useState } from "react";


const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '=', 'C'];

export default function App() {

    const [operand1, setOperand1] = useState('0')
    const [operand2, setOperand2] = useState('')
    const [operator, setOperator] = useState('')
    const [isFinish, setIsFinish] = useState(false)
    const displayValue = [operand1, operator, operand2]

    const handleClick = (item) => {
        if (operator) {
            setOperand2((prevState) => prevState + item)
        } else if (operand1 === '0') {
            setOperand1(item)
            
        } else {
            setOperand1((prevState) => prevState + item)
            
            
        }
    }

    const handleButtonOperand = (op) => {
        switch (op) {
            case '+':
                setOperator('+')
                break
            case '-':
                setOperator('-')
                break
        }

    };
    const handleSet = () => {
        switch (operator) {
            case '+':
                setOperand1(Number(operand1) + Number(operand2))
                setOperand2('')
                setOperator('')
                setIsFinish(true)
                break
            case '-':
                setOperand1(Number(operand1) - Number(operand2))
                setOperand2('')
                setOperator('')
                setIsFinish(true)
                break
        }
    };

    const checkValue = (value) => {
    if (value === '+' || value === '-') {
        setIsFinish(false)
        handleButtonOperand(value);
    } else if (value === '=') {
        handleSet();
    } else if (value === 'C') {
        setIsFinish(false)
        setOperand1('0')
        setOperand2('')
        setOperator('')
    } else {
        setIsFinish(false)
        handleClick(value);
    }
    }

    return (
        <div className='App'>
            <div className={styles.Wrapper}>
                <div className={`${styles.Display} ${isFinish ? styles.Finish : ''} `}>{displayValue}</div>
                <div className={styles.Buttons}>
                    {buttons.map((button, index) => (
                        <button className={styles.Button} onClick={() => checkValue(button)}
                                key={index}>{button}</button>
                    ))}

                </div>
            </div>
        </div>
    );
}


