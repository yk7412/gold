import {createSlice} from '@reduxjs/toolkit'

export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        list: []
    },
    reducers: {
        getArticleListReducer: (state, action) => {
            state.list = action.payload
        }
    }
})

export const { getArticleListReducer } = articleSlice.actions

export default articleSlice.reducer