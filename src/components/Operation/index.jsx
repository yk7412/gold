
import './index.less'

/** 文章操作栏 */
const Operation = ({
    options = [],
    /** 模式 默认横向 横向-line 纵向-vertical */
    mode = 'line'
}) => {
    return <div className={`operation operation-${mode}`}>
        {
            options && options.map(item => {
                return <div className={`operation-item ${item.active ? 'operation-item-active' : ''}`} onClick={() => item?.onClick(item.name)} >
                    <span className="operation-item-box">
                        <span className="operation-item-icon">{item.icon}</span>
                        <span className="operation-item-num">{item.number}</span>
                    </span>
                </div>
            })
        }
    </div>
}

export default Operation