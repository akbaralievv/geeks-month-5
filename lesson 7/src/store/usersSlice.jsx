import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


export const getUsers=createAsyncThunk(
    'getUsers',
    async function(info=null, {dispatch, rejectWithValue}) {
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/users')
            if(response.status === 200){

                const users = await response.json()
                return users
            }
            else{
                throw Error(`error ${response.status}`)
            }
        }
        catch(error){
            return rejectWithValue(error.message)
        }

        }

)

export const createUser=createAsyncThunk(
    'createUser',
    async function(info=null, {dispatch, rejectWithValue}) {
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            })
            if(response.status === 201){
                const user = await response.json()
                return user
            }
            else {
                throw Error(`error ${response.status}`)
            }
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users:[],
        error:'',
        loading:false
    },
    extraReducers: builder=> {
        builder.addCase(createUser.fulfilled, (state,action)=>{
            state.loading=false;
            state.users=action.payload
        })
        builder.addCase(createUser.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload

        })
        builder.addCase(createUser.pending, state=>{
            state.loading=true
        })
    }
})
export default usersSlice.reducer