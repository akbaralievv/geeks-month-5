import { types } from "../types"
const newInitialState = {
    inputValue: '',
    numbers: []
}

function reduser(state = newInitialState, action)
{
    switch (action.type) {
        case types.CHANGE_INPUT:
            return { ...state, inputValue: action.payload }
        
        case types.ADD_NUMBER:
            let id = 1
            let number = Number(state.inputValue)
            if (state.numbers.length > 0) {
                id = +state.numbers[state.numbers.length - 1].id + 1
                number += Number(state.numbers[state.numbers.length - 1].number)
            }
            return { ...state, numbers: [...state.numbers, { id, number }], inputValue: '' }
        
        case types.CLEAR_ALL:
            return { ...state, numbers: [], inputValue: '' }
        
        default: return state
    }
}

export default reduser