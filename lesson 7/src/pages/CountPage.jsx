import { useDispatch,useSelector } from "react-redux"
import { decrement, increment } from "../store/countSlice"

function CountPage() {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state.countReducer)
    const {percent}=useSelector(state => state.percentReducer)
    return (
        <div>
            <h1>{percent} %</h1>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}

export default CountPage