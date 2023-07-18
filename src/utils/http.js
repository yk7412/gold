import Axios from 'axios'

const HTTP = Axios.create({
    timeout: 1000 * 60 * 2
})

// HTTP.interceptors.request.use(config => {
//     // console.log('req', config)
//     return config
// })

HTTP.interceptors.response.use(config => {
    // console.log('res', config)
    return config.data
})

export default HTTP