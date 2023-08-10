import { Button, Input, Menu } from 'antd'
import { menuList } from '@/config/menuList'
import {useNavigate} from 'react-router-dom'
import './index.less'
import { getArticleList } from '@/config/api'
import { useDispatch, useSelector } from 'react-redux'
import { setArticleListReducer } from '@/redux/articleSlie'
import jsCookie from 'js-cookie'
import { useEffect, useState } from 'react'

const Headers = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state)
    const [loginFlag, setLoginFlag] = useState(false)
    const [pageFlag, setPageFlag] = useState(false)

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

    const onLoginCancel = () => {
        jsCookie.remove('token')
        jsCookie.remove('userName')
        jsCookie.remove('userId')
        setPageFlag(flag => !flag)
    }

    useEffect(() => {
        setLoginFlag(Boolean(jsCookie.get('token')))
    },[pageFlag, jsCookie.get('token')])

    return <div className="headers">
        <div className="logo"></div>
        <content>
            <Menu mode="horizontal" items={menuList.filter(item => item.menuDisplay !== false)} onClick={menuOnChange} />
        </content>
        <div className="search">
            <Input.Search onSearch={onSearch} />
        </div>
        <div className={`btn ${loginFlag ? '' : 'displayNone'}`}>
            <Button type='primary' onClick={() => navigate('/article/create')} >写文章</Button>
        </div>
        <div className={`btn ${loginFlag ? 'displayNone' : ''}`}>
            <Button style={{color: '#89919f', fontSize: '12px'}} size='small' type='link' onClick={() => navigate('/register')} >注册</Button>
            <Button size='small' onClick={() => navigate('/login')} >登录</Button>
        </div>
        <div className="user">
            {jsCookie.get('userName')}
            <Button className={`${loginFlag ? '' : 'displayNone'}`} type='link' size='small' onClick={onLoginCancel} >退出登录</Button>
        </div>
        <div className={`btn ${loginFlag ? '' : 'displayNone'}`}>
        </div>
    </div>
}

export default Headers