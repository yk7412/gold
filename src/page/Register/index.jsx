import { Form, Input, Button, message } from 'antd'
import './index.less'
import { login, register } from '@/config/api'
import { ERROR, successCode } from '@/config/name'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Cookies from 'js-cookie'

const Register = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const [btnLoading, setBtnLoading] = useState(false)
    return <div className="register">
        <div className="register-box">
            <h1>注册</h1>
            <Form
                form={form}
                onFinish={async value => {
                    setBtnLoading(true)
                    const registerRes = await register(value)
                    if(successCode.includes(registerRes.code)) {
                        const loginRes = await login(value)
                        if(successCode.includes(loginRes.code)) {
                            Cookies.set('token', loginRes.data.token, { expires: 1 })
                            Cookies.set('userName', loginRes.data.userName, { expires: 1 })
                            Cookies.set('userId', loginRes.data.id, { expires: 1 })
                            navigate('/')
                        }else {
                            message.error(loginRes.msg || ERROR)
                        }
                    }else {
                        message.error(registerRes.msg || ERROR)
                    }
                    setBtnLoading(false)
                }}
            >
                <Form.Item className='register-name' name={'account'} label='账户' required={true}>
                    <Input/>
                </Form.Item>
                <Form.Item className='register-password' name={'password'} label='密码' required={true}>
                    <Input.Password/>
                </Form.Item>
                <Button className='register-btn' loading={btnLoading} onClick={() => form.submit()} >注册</Button>
                <div className="register-login">
                    <Button size='small' type='link' onClick={() => navigate('/login')} >登录</Button>
                </div>
            </Form>
        </div>
    </div>
}

export default Register