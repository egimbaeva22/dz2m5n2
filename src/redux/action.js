export const UPDATE_INPUT = 'UPDATE_INPUT'
export const CALCULATE_RESULT = 'CALCULATE_RESULT'

export const updateInput = (name, value) => ({
    type: UPDATE_INPUT,
    payload: { name, value }
})

export const calculateResult = (operator) => ({
    type: CALCULATE_RESULT,
    payload: { operator }
})
