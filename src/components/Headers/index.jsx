import { Button, Input, Menu } from 'antd'
import { menuList } from '@/config/menuList'
import {useNavigate} from 'react-router-dom'
import './index.less'
import { getArticleList } from '@/config/api'
import { useDispatch, useSelector } from 'react-redux'
import { setArticleListReducer } from '@/redux/articleSlie'

const Headers = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state)
    console.log(userInfo,'userInfo')

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
        dispatch(setArticleListReducer(res.data))
    }

    return <div className="headers">
        <div className="logo"></div>
        <content>
            <Menu mode="horizontal" items={menuList.filter(item => item.menuDisplay !== false)} onClick={menuOnChange} />
        </content>
        <div className="search">
            <Input.Search onSearch={onSearch} />
        </div>
        <div className="btn">
            <Button type='primary' onClick={() => navigate('/article/create')} >写文章</Button>
        </div>
        <div className="btn">
            <Button style={{color: '#89919f', fontSize: '12px'}} size='small' type='link' onClick={() => navigate('/register')} >注册</Button>
            <Button size='small' onClick={() => navigate('/login')} >登录</Button>
        </div>
        <div className="user">
            姓名
        </div>
    </div>
}

export default Headers