import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import './index.less'
import { useRef, useState } from 'react';
import { Button, Input, message } from 'antd';
import { createArticle } from '@/config/api';
import { ERROR, successCode } from '@/config/name';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate = useNavigate()
    const mdParser = new MarkdownIt()
    const mdEditor = useRef({})
    const [title, setTitle] = useState('')

    const editorChange = ({text, html}) => {
        // console.log(text, html, 'proooo')
    }

    const onSubmit = async () => {
        if(!title) {
            message.error('请输入文章标题')
            return
        }
        const text = mdEditor.current?.getMdValue()
        const html = mdEditor.current?.getHtmlValue()

        if(text) {
            const params = {
                title,
                content: text,
                html
            }
            console.log(params)
            const res = await createArticle(params)
            if(successCode.includes(res.code)) {
                navigate('/')
            }else {
                message.error(res.msg || ERROR)
            }
        }else {
            message.error('请输入文章内容')
        }
    }

    const onBackHome = () => {
        navigate('/')
    }

    return <div className="create">
        <div className="create-title">
            <Input placeholder='输入文章标题' size='large' value={title} onChange={event => setTitle(event.target.value)} />
            <Button size='large' onClick={onSubmit} >发布</Button>
            <Button size='small' type='link' onClick={onBackHome} >返回首页</Button>
        </div>
        <MdEditor ref={node => mdEditor.current = node} style={{ height: '100%' }} renderHTML={text => mdParser.render(text)} onChange={editorChange} />
    </div>
}

export default Create