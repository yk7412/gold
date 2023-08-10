import Axios from 'axios'
import Cookies from 'js-cookie'

const HTTP = Axios.create({
    timeout: 1000 * 60 * 2
})

HTTP.interceptors.request.use(config => {
    const token = Cookies.get('token')
    const userId = Cookies.get('userId')
    const newConfig = {...config, headers: {...config.headers, token: token, 'user-id': userId}}
    return newConfig
})

HTTP.interceptors.response.use(config => {
    // console.log('res', config)
    return config.data
})

export default HTTP