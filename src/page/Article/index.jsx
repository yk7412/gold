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
        params.id && getArticleDetail(params.id).then(res => {
            if(successCode.includes(res.code)) {
                setTitle(res.data.title)
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