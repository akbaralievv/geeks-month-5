import { useDispatch,useSelector } from "react-redux"
import { useState } from "react"
import { createUser } from "../store/usersSlice"
export default function(){
    const [name,setName]=useState ('')
    const [email,setEmail]=useState ('')
    const [message,setMessage]=useState ('')
    const {users,error,loading}=useSelector(state=>state.usersReducer)
    const dispatch = useDispatch()
    const onSubmit = (e)=>{
        e.preventDefault()
        loading?
        setMessage('loading...'):
        error?
        setMessage('error'):
        users ? 
        dispatch (createUser({name,email}),setMessage('success')) :
        alert('пусто')
    }
    return(
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <button type="submit">create user</button>
            <p>{message}</p>
        </form>
    )
}