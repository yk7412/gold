import { useNavigate, useParams } from "react-router-dom"
import './index.less'
import { useEffect, useRef, useState } from "react"
import { articleLike, getArticleDetail } from "@/config/api"
import { ERROR, successCode } from "@/config/name"
import { message } from "antd"
import 'react-markdown-editor-lite/lib/index.css';
import Operation from "@/components/Operation"
import { BackToTopIcon, LikeIcon, SaveIcon } from "@/components/Icons"
import Cookies from "js-cookie"


const Article = () => {
    const navigate = useNavigate()
    const params = useParams()

    const [title, setTitle] = useState('')
    const data = useRef({})

    const getDetail = (id) => {
        getArticleDetail(id).then(res => {
            if(successCode.includes(res.code)) {
                setTitle(res.data.title)
                data.current = res.data
                
                changeOptions('like', res.data)
                const dom = document.querySelector('.article-content')
                if(dom) {
                    dom.innerHTML = res.data.html
                }
            }else {
                setTitle('')
                data.current = {}
                message.error(res.msg || ERROR)
            }
        })
    }

    const changeOptions = (name, data) => {
        const userId = Cookies.get('userId')
        setOptions(list => list.map(item => {
            if(item.name === name) {
                const listList = data.likeIds.split(',')
                console.log(listList, userId,'listList')
                item.active = listList.includes(userId)
                item.number = listList.length
            }
            return item
        }))

    }

    useEffect(() => {
        params.id && getDetail(params.id)
    }, [params.id])

    const [options, setOptions] = useState([
        {
            name: 'like',
            icon: <LikeIcon size={36} />,
            number: 0,
            active: false,
            onClick: (name) => optionCallback(name)
        },
        {
            name: 'save',
            icon: <SaveIcon size={36} />,
            number: 0,
            active: false,
            onClick: () => {

            }
        }
    ])
    console.log(data,options,'data')

    const optionCallback = (name) => {
        if(name === 'like') {
            articleLike({id: data.current.id}).then(res => {
                console.log(res,'ress')
                if(successCode.includes(res.code)) {
                    changeOptions('like', res.data)
                }
            })
        }
    }

    return <div className="article pageBox rc-md-editor">
        <h2 className="article-title">{title}</h2>
        <div className="article-content custom-html-style"></div>
        <div className="operate"><Operation options={options} /></div>
        
        <div className="reply"></div>
    </div>
}

export default Article