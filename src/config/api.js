import HTTP from '../utils/http'
import url from './url'

const publicFn = async () => {
    try {
        return await HTTP.get(url.tenapi.getHidtoryToday)
    } catch (error) {
        return {
            code: 40000,
            data: error,
            msg: 'error'
        }
    }
}

/** 获取历史上的今天 */
export const getHidtoryToday = async () => {
    return publicFn(HTTP.get(url.tenapi.getHidtoryToday))
}

export const getList = async () => {
    return publicFn(HTTP.post('https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=6999914043851900431&spider=0', {"id_type":2,"client_type":2608,"sort_type":200,"cursor":"0","limit":20}))
}