import { useEffect } from "react"
import { getHidtoryToday } from "../../config/api"
import {getList} from '@/config/api'

const Home = () => {
    console.log(process.env.NODE_ENV, 'env')
    useEffect(() => {
        console.log(11111)
        getHidtoryToday().then(res => {
            console.log(res,'resssss')
        })
        // getList().then(res => {
        //     console.log(res,'22222222')
        // })
    },[])
    return <div>
        首页
    </div>
}

export default Home