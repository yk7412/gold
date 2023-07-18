import { useEffect } from "react"
import { getHidtoryToday, getList } from "../../config/api"

const Home = () => {
    useEffect(() => {
        console.log(11111)
        getHidtoryToday().then(res => {
            console.log(res,'resssss')
        })
        getList().then(res => {
            console.log(res,'22222222')
        })
    },[])
    return <div>
        首页
    </div>
}

export default Home