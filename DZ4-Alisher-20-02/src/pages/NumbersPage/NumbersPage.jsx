import { useDispatch, useSelector } from "react-redux"
import { addNumberAction, changeInputAction, clearAllAction} from "../../redux/actions"
import Number from '../../components/Number/Number'


function NumbersPage()
{
    const dispatch = useDispatch()
    const { inputValue, numbers } = useSelector(state => state)


    const changeInput = (e) =>
    {
        dispatch(changeInputAction(e.target.value))
    }
    const addNumber = () =>
    {
        if(inputValue) dispatch(addNumberAction(inputValue))
    }
    const clearAll = () =>
    {
        dispatch(clearAllAction())
    }
  return (
    <>
        <input type="number" placeholder="123" onChange={changeInput} value={inputValue} />      
        <button onClick={addNumber}>add number</button>
        <button className="clear" onClick={clearAll}>clear</button>
        {  
            numbers.length > 0
                ? numbers.map(num => <Number key={num.id} numberInfo={num} />) 
                : ''
        }
    </>
  )
}

export default NumbersPage