import { useEffect } from "react"
import { articleLike, getArticleDetail, getArticleList, getHidtoryToday } from "../../config/api"
import { getList } from '@/config/api'
import './index.less'
import ArticleList from "@/components/ArticleList"
import { useDispatch, useSelector } from "react-redux"
import { setArticleListReducer } from "@/redux/articleSlie"
import { useNavigate } from "react-router-dom"
import { ERROR, successCode } from "@/config/name"
import { message } from "antd"
import {cloneDeep} from 'lodash'

const Home = () => {
    // console.log(process.env.NODE_ENV, process.env.REACT_APP_TEST_ENV, 'env')

    const articleList = useSelector(state => state.article.list)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getArticleList().then(res => {
            if(successCode.includes(res.code)) {
                dispatch(setArticleListReducer(res.data))
            }else {
                message.error(res.msg || ERROR)
            }
        })
    }, [])

    const onItem = (item) => {
        navigate(`/article/${item.id}`)
    }

    const onLike = item => {
        console.log(item)
        articleLike({id: item.id}).then(res => {
            if(successCode.includes(res.code)) {
                const list = cloneDeep(articleList)
                list.map(item => {
                    if(String(item.id) === String(res.data.id)) {
                        item.likeIds = res.data.likeIds
                    }
                    return item
                })
                dispatch(setArticleListReducer(list))
            }
        })
    }

    return <div className={'Home pageBox'} >
        <ArticleList
            list={articleList}
            onItem={onItem}
            onLike={onLike}
        />
    </div>
}

export default Home