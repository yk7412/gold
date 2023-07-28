import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import './index.less'
import { useRef } from 'react';
import { Button, message } from 'antd';
import { createArticle } from '@/config/api';
import { ERROR, successCode } from '@/config/name';

const Create = () => {

    const mdParser = new MarkdownIt()
    const mdEditor = useRef({})

    const editorChange = ({text, html}) => {
        // console.log(text, html, 'proooo')
    }

    const getText = () => {
        const text = mdEditor.current?.getMdValue()
        console.log(text)
    }

    const getHtml = () => {
        const html = mdEditor.current?.getHtmlValue()
        console.log(html)
    }

    const onSubmit = async () => {
        const text = mdEditor.current?.getMdValue()
        const html = mdEditor.current?.getHtmlValue()

        if(text) {
            const params = {
                text,
                html
            }
            console.log(params)
            const res = await createArticle(params)
            if(!successCode.includes(res.code)) {
                message.error(res.msg || ERROR)
            }
        }
    }

    return <div className="create">
        <Button onClick={getText} >获取原文</Button>
        <Button onClick={getHtml} >获取获取Html</Button>
        <Button onClick={onSubmit} >发布</Button>
        <MdEditor ref={node => mdEditor.current = node} style={{ height: '100%' }} renderHTML={text => mdParser.render(text)} onChange={editorChange} />
    </div>
}

export default Create