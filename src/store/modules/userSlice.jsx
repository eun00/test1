import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async() => {
        const url ='https://jsonplaceholder.typicode.com/users'
        try {
            const res  = await axios.get(url)
            return res.data
        }catch(error) {
            console.log(error)
        }
    }
)

const initialState = { 
    users:[],
    loading : true ,
    error : null 
}
const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase( getUsers.pending , (state, action) => {
            state.loading = true 
            state.error = null 
        })
        .addCase( getUsers.fulfilled , (state, action) => {
            state.loading = false 
            state.error = null
            state.users = action.payload 
        })
        .addCase( getUsers.rejected , (state, action) => {
            state.loading = true 
            state.error = '에러메세지'
            state.users = []
        })
    } 
})
// export const {} = usersSlice.actions
export default usersSlice.reducer