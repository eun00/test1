import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios' 

 
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async(text) => {
        const url =`https://hn.algolia.com/api/v1/search?query=${text}`
        const res = await axios.get(url)
        return res.data.hits
    }
)

const initialState = {
    text:'css',
    posts:[],
    loading:true,
    error:null    
}

 

const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
         onSearch : ( state , action ) => {
            state.text  = action.payload
         }
    },
    extraReducers:(builder) => {
        builder.addCase( getPosts.fulfilled , (state, action) => {
            state.error = null 
            state.posts = action.payload
            state.loading = false 
        })
    }    
})

export const {  onSearch } = postSlice.actions
export default postSlice.reducer