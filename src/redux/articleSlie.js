import {createSlice} from '@reduxjs/toolkit'

export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        list: [],
        userInfo: {}
    },
    reducers: {
        setArticleListReducer: (state, action) => {
            state.list = action.payload
        },
        setUserInfoReducer: (state, action) => {
            state.userInfo = action.payload
        }
    }
})

export const { setArticleListReducer, setUserInfoReducer } = articleSlice.actions

export default articleSlice.reducer