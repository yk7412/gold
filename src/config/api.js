import HTTP from '../utils/http'
import { successCode } from './name'
import url from './url'

const publicFn = async (response) => {
    const res = await response
    // if(!successCode.includes(res.code)) {
    //     return res
    // }
    return res
}

/** 获取文章列表 */
export const getArticleList = async () => {
    try {
        const res = await HTTP.get(url.api.getArticeList)
        // return publicFn(res)
        const newRes = {
            code: 10000
        }
        console.log(newRes, '22222222')
        const option = { title: '15个用于开发的高级TypeScript技巧', name: 'fisjifies', id: 1, like: 31, look: 381, reply: 829, time: '123', creator: 'fisifsi', content: '快来免费体验ChatGpt plus版本的，我们出的钱 体验地址:chat.waixingyun.cn 可以加入网站底部技术群，一起找bug，另外新版作图神器已上线 cube.waixingyun.cn/home' }
        newRes.data = []
        for(let i = 1; i <= 10; i++) {
            newRes.data.push({...option, id: i})
        }
        return publicFn(newRes)
    } catch (error) {
        return {
            code: 40000,
            data: error,
            msg: 'error'
        }
    }
}

/** 获取文章详情 */
export const getArticleDetail = async () => {
    try {
        const res = await HTTP.get(url.api.getArticleDetail)
        // return publicFn(res)
        const newRes = {
            code: 10000,
            data: {
                title: '15个用于开发的高级TypeScript技巧',
                name: 'fisjifies',
                id: 1,
                like: 31,
                look: 381,
                reply: 829,
                time: '123',
                creator: 'fisifsi',
                content: '快来免费体验ChatGpt plus版本的，我们出的钱 体验地址:chat.waixingyun.cn 可以加入网站底部技术群，一起找bug，另外新版作图神器已上线 cube.waixingyun.cn/home',
                text: '#### 15个用于开发的高级TypeScript技巧\n> 快来免费体验ChatGpt plus版本的，我们出的钱 体验地址:chat.waixingyun.cn 可以加入网站底部技术群，一起找bug，另外新版作图神器已上线 cube.waixingyun.cn/home',
                html: '<h4>15个用于开发的高级TypeScript技巧</h4>\n<blockquote>\n<p>快来免费体验ChatGpt plus版本的，我们出的钱 体验地址:chat.waixingyun.cn 可以加入网站底部技术群，一起找bug，另外新版作图神器已上线 cube.waixingyun.cn/home</p>\n</blockquote>\n'
            }
        }
        return publicFn(newRes)
    } catch (error) {
        return {
            code: 40000,
            data: error,
            msg: 'error'
        }
    }
}

/** 发布文章 */
export const createArticle = async () => {
    try {
        const res = await HTTP.get(url.api.getArticleCreate)
        // return publicFn(res)
        const newRes = {
            code: 10000,
            data: null
        }
        return publicFn(newRes)
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
    try {
        const res = await HTTP.get(url.api.getHidtoryToday)
        return publicFn(res)
    } catch (error) {
        return {
            code: 40000,
            data: error,
            msg: 'error'
        }
    }
}
