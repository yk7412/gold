
const tenapi = {
    /** 获取历史上的今天 */
    getHidtoryToday: '/v2/history'
}

const publicFn = (baseUrl, obj) => {
    Object.keys(obj).forEach(key => {
        obj[key] = baseUrl + obj[key]
    })
    return obj
}

export default {
    tenapi: publicFn('https://tenapi.cn', tenapi)
}