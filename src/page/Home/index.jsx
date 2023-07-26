import { useEffect } from "react"
import { getArticleDetail, getArticleList, getHidtoryToday } from "../../config/api"
import { getList } from '@/config/api'
import './index.less'
import ArticleList from "@/components/ArticleList"
import { useDispatch, useSelector } from "react-redux"
import { getArticleListReducer } from "@/redux/articleSlie"
import { useNavigate } from "react-router-dom"

const Home = () => {
    console.log(process.env.NODE_ENV, process.env.REACT_APP_TEST_ENV, 'env')

    const articleList = useSelector(state => state.article.list)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getArticleList().then(res => {
            res = {}
            console.log(res, '22222222')
            const option = { title: '15个用于开发的高级TypeScript技巧', name: 'fisjifies', id: 1, like: 31, look: 381, reply: 829, time: '123', creator: 'fisifsi', content: '快来免费体验ChatGpt plus版本的，我们出的钱 体验地址:chat.waixingyun.cn 可以加入网站底部技术群，一起找bug，另外新版作图神器已上线 cube.waixingyun.cn/home' }
            res.data = []
            for(let i = 1; i <= 10; i++) {
                res.data.push({...option, id: i})
            }
            dispatch(getArticleListReducer(res.data))
        })
    }, [])

    const onItem = (item) => {
        navigate(`/article/${item.id}`)
    }

    return <div className={'Home'} >
        <ArticleList
            list={articleList}
            onItem={onItem}
        />
    </div>
}

export default Home