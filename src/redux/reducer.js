import { UPDATE_INPUT, CALCULATE_RESULT } from '../redux/action'

const initialState = {
    num1: '',
    num2: '',
    result: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT:
            return { ...state, [action.payload.name]: action.payload.value }
        case CALCULATE_RESULT:
            const { num1, num2 } = state
            if (num1 === '' || num2 === '') {
                alert('Одно из полей пустое')
                return state
            }
            const result = eval(`${num1} ${action.payload.operator} ${num2}`)
            return { ...state, result }
        default:
            return state
    }
}

export default reducer
