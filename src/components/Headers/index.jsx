import { Input, Menu } from 'antd'
import { menuList } from '@/config/menuList'
import {useNavigate} from 'react-router-dom'
import './index.less'
import { getArticleList } from '@/config/api'
import { useDispatch } from 'react-redux'
import { getArticleListReducer } from '@/redux/articleSlie'

const Headers = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const menuOnChange = ({key}) => {
        navigate(key)
    }

    const onSearch = async ({value}) => {
        // const res = await getArticleList({text: value})
        const res = {}
        res.data = [
            {title: '213', time: '222'},
            {title: '213', time: '222'},
            {title: '213', time: '222'},
            {title: '213', time: '222'},
        ]
        console.log(res,'ressssss')
        dispatch(getArticleListReducer(res.data))
    }

    return <div className="headers">
        <div className="logo"></div>
        <content>
            <Menu mode="horizontal" items={menuList.filter(item => item.menuDisplay !== false)} onClick={menuOnChange} />
        </content>
        <div className="search">
            <Input.Search onSearch={onSearch} />
        </div>
        <div className="user"></div>
    </div>
}

export default Headers