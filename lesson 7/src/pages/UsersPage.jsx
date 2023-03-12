import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../store/usersSlice";
import User from "../components/User";

export default function(){
    const {users,error,loading}=useSelector(state=>state.usersReducer)
    const dispacth=useDispatch();
    useEffect(()=>{
        dispacth(getUsers())
    },[])
    return (
        <>
            <h1>users list</h1>
            {
                error
                ?
                <p>{error}</p>
                :
                users.map(user=><User key={user.id} user={user.name}/>)
            }
        </>
    )
}