import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateInput, calculateResult } from './redux/action'
import NumberInput from './components/NumberInput'

const App = () => {
    const dispatch = useDispatch()
    const { num1, num2, result } = useSelector(state => state)

    const handleUpdateInput = (name, value) => {
        dispatch(updateInput(name, value))
    }

    const handleCalculateResult = (operator) => {
        dispatch(calculateResult(operator))
    }

    return (
        <div>
            <NumberInput name="num1" value={num1} onChange={handleUpdateInput} />
            <button onClick={() => handleCalculateResult('+')}>+</button>
            <button onClick={() => handleCalculateResult('-')}>-</button>
            <button onClick={() => handleCalculateResult('*')}>*</button>
            <button onClick={() => handleCalculateResult('/')}>/</button>
            <NumberInput name="num2" value={num2} onChange={handleUpdateInput} />
            <div>Result: {result}</div>
        </div>
    )
}

export default App
