import { types } from "./types";

export function changeInputAction(inputValue)
{
    return {
        type: types.CHANGE_INPUT,
        payload: inputValue
    }
}
export function addNumberAction(number)
{
    return {
        type: types.ADD_NUMBER,
        payload: number
    }
}
export function clearAllAction()
{
    return {
        type: types.CLEAR_ALL
    }
}