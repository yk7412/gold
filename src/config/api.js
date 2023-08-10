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
        return publicFn(res)
    } catch (error) {
        return {
            code: 40000,
            data: error,
            msg: 'error'
        }
    }
}

/** 获取文章详情 */
export const getArticleDetail = async (id) => {
    try {
        const res = await HTTP.get(`${url.api.getArticleDetail}/${id}`)
        return publicFn(res)
    } catch (error) {
        return {
            code: 40000,
            data: error,
            msg: 'error'
        }
    }
}

/** 发布文章 */
export const createArticle = async (params) => {
    try {
        const res = await HTTP.post(url.api.getArticleCreate, params)
        return publicFn(res)
    } catch (error) {
        return {
            code: 40000,
            data: error,
            msg: 'error'
        }
    }
}

/**
 * 文章点赞
 * @param {Object} params
 * @param {String | Number} params.id id 文章id
 * @returns {Promise<any>}
*/
export const articleLike = async (params) => {
    try {
        const res = await HTTP.post(url.api.articleLike, params)
        return publicFn(res)
    } catch (error) {
        return {
            code: 40000,
            data: error,
            msg: 'error'
        }
    }
}

/** 注册 */
export const register = async (params) => {
    try {
        const res = await HTTP.post(url.api.register, params)
        return publicFn(res)
    } catch (error) {
        return {
            code: 40000,
            data: error,
            msg: 'error'
        }
    }
}

/** 登录 */
export const login = async (params) => {
    try {
        const res = await HTTP.post(url.api.login, params)
        return publicFn(res)
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
