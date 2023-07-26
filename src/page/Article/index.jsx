import { useNavigate, useParams } from "react-router-dom"
import './index.less'


const Article = () => {
    const navigate = useNavigate()
    const param = useParams()
    return <div className="article">
        文章详情 --- {param.id}
    </div>
}

export default Article