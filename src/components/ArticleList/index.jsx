import { List } from "antd"
import {CommentOutlined, DislikeOutlined, EyeOutlined} from '@ant-design/icons'
import './index.less'

const ArticleList = ({
    list,
    onItem,
    onUser,
    onLike,
    onReply,
    ...otherProps
}) => {
    console.log(list,'list')
    const itemCallback = (item) => {
        onItem && onItem(item)
    }
    const userCallback = (item, event) => {
        event.stopPropagation()
        onUser?.(item)
    }
    const likeCallback = (item, event) => {
        event.stopPropagation()
        onLike?.(item)
    }
    const replyCallback = (item, event) => {
        event.stopPropagation()
        onReply?.(item)
    }

    return <div className="articleList">
        <List
            {...otherProps}
            header={<div></div>}
            footer={<div></div>}
            split={true}
            dataSource={list}
            renderItem={item => {
                return <div className="item" onClick={() => itemCallback(item)} >
                    <header>
                        <span className="name" onClick={(event) => userCallback(item, event)}>{item.name}</span>
                        <span className="divisionLine"></span>
                        <span className="time">{item.time}</span>
                    </header>
                    <content>
                        <div className="title" title={item.title} >{item.title}</div>
                        <div className="content">{item.content}</div>
                    </content>
                    <footer>
                        <div className="left">
                            <span><EyeOutlined /> {item.look}</span>
                            <span className="like" onClick={(event) => likeCallback(item, event)} ><DislikeOutlined rotate='180' /> {item.like}</span>
                            <span className="reply" onClick={(event) => replyCallback(item, event)} ><CommentOutlined /> {item.reply}</span>
                        </div>
                        <div className="right"></div>
                    </footer>
                </div>
            }}
        />
    </div>
}

export default ArticleList