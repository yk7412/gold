import { useNavigate, useParams } from "react-router-dom"
import './index.less'
import { useEffect, useState } from "react"
import { getArticleDetail } from "@/config/api"
import { ERROR, successCode } from "@/config/name"
import { message } from "antd"
import 'react-markdown-editor-lite/lib/index.css';


const Article = () => {
    const navigate = useNavigate()
    const params = useParams()

    const [title, setTitle] = useState('')
    const [data, setData] = useState(<div></div>)

    useEffect(() => {
        params.id && getArticleDetail({}).then(res => {
            // res = {
            //     code: 10000,
            //     data: { title: '15个用于开发的高级TypeScript技巧', name: 'fisjifies', id: 1, like: 31, look: 381, reply: 829, time: '123', creator: 'fisifsi', content: '快来免费体验ChatGpt plus版本的，我们出的钱 体验地址:chat.waixingyun.cn 可以加入网站底部技术群，一起找bug，另外新版作图神器已上线 cube.waixingyun.cn/home' }
            // }
            if(successCode.includes(res.code)) {
                setTitle(res.data.title)
                // console.log(res.data.html)
                // debugger
                // const a = JSON.parse(res.data.html)
                    // debugger
                // setData(JSON.parse(res.data.html))
                setData(res.data.html)
                const dom = document.querySelector('.article-content')
                console.log(dom,'dom')
                if(dom) {
                    dom.innerHTML = res.data.html
                }
            }else {
                setTitle('')
                setData(<div></div>)
                message.error(res.msg || ERROR)
            }
        })
    }, [params.id])

    return <div className="article pageBox rc-md-editor">
        <div className="article-title">{title}</div>
        <div className="article-content custom-html-style"></div>
    </div>
}

export default Article