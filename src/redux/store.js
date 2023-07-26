import {configureStore} from '@reduxjs/toolkit'
import articleReducer from './articleSlie'

export default configureStore({
    reducer: {
        article: articleReducer
    }
})