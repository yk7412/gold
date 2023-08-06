
import { Button, Form, Input, message } from 'antd'
import './index.less'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '@/config/api'
import { ERROR, successCode } from '@/config/name'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { setUserInfoReducer } from '@/redux/articleSlie'

const Login = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const [btnLoading, setBtnLoading] = useState(false)
    
    const dispatch = useDispatch()
    return <div className="login">
        <div className="login-box">
            <h1>登录</h1>
            <Form
                form={form}
                onFinish={async value => {
                    setBtnLoading(true)
                    const loginRes = await login(value)
                    if (successCode.includes(loginRes.code)) {
                        Cookies.set('token', loginRes.data.token, { expires: 1 })
                        Cookies.set('userName', loginRes.data.userName, { expires: 1 })
                        Cookies.set('userId', loginRes.data.id, { expires: 1 })
                        dispatch(setUserInfoReducer(loginRes.data))
                        navigate('/')
                    } else {
                        message.error(loginRes.msg || ERROR)
                    }
                    setBtnLoading(false)
                }}
            >
                <Form.Item className='login-name' name={'account'} label='账户' required={true}>
                    <Input />
                </Form.Item>
                <Form.Item className='login-password' name={'password'} label='密码' required={true}>
                    <Input.Password />
                </Form.Item>
                <Button className='login-btn' loading={btnLoading} type='primary' onClick={() => form.submit()} >登录</Button>
                <div className="login-register">
                    <Button size='small' type='link' onClick={() => navigate('/register')} >注册</Button>
                </div>
            </Form>
        </div>
    </div>
}

export default Login