
const api = {
    /** 获取文章列表 */
    getArticeList: '/article/list',
    /** 获取文章详情 */
    getArticleDetail: '/article/detail',
    /** 新建文章 */
    getArticleCreate: '/article/create',
    /** 文章点赞 */
    articleLike: '/article/like',
    /** 注册 */
    register: '/user/register',
    /** 登录 */
    login: '/user/login',
}


const tenapi = {
    /** 获取历史上的今天 */
    getHidtoryToday: '/v2/history'
}

const publicFn = (baseUrl, obj) => {
    Object.keys(obj).forEach(key => {
        obj[key] = baseUrl + obj[key]
        // if(baseUrl === 'http://localhost:3000') {
        //     obj[key] = 'https://tenapi.cn' + '/v2/history'
        // }
    })
    return obj
}

export default {
    tenapi: publicFn('https://tenapi.cn', tenapi),
    api: publicFn('http://139.84.134.223:4000', api)
}