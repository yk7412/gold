import { List } from "antd"
import {CommentOutlined, DislikeOutlined, EyeOutlined} from '@ant-design/icons'
import moment from 'moment'
import Cookies from "js-cookie"
import './index.less'

const ArticleList = ({
    list,
    onItem,
    onUser,
    onLike,
    onReply,
    ...otherProps
}) => {
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
                return <div id={item.id} key={item.id} className="item" onClick={() => itemCallback(item)} >
                    <header>
                        <span className="name" onClick={(event) => userCallback(item, event)}>{item.ownerName}</span>
                        <span className="divisionLine"></span>
                        <span className="time">{moment(item.createTime).format('YYYY-MM-DD')}</span>
                    </header>
                    <content>
                        <div className="title" title={item.title} >{item.title}</div>
                        <div className="content">{typeof item.content === 'string' ? item.content.replace(/[#>`*-]/g, '') : item.content}</div>
                    </content>
                    <footer>
                        <div className="left">
                            <span><EyeOutlined /> {item.look}</span>
                            <span className={`like ${(item.likeIds || '')?.split(',')?.includes(Cookies.get('userId')) ? 'active' : ''}`} onClick={(event) => likeCallback(item, event)} ><DislikeOutlined rotate='180' /> {(typeof item.likeIds === 'string' && item.likeIds?.length > 0) &&item.likeIds.split(',')?.length}</span>
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