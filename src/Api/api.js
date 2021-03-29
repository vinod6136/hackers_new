import axios from 'axios'
import baseurl from '../ConnectionPath/baseurl';
// import store from '../'

var get = (url, params = {}, headers = {}, extra = {}) => {
    let URL = baseurl['url'] + url
    return axios({
        headers: headers,
        method: 'get',
        // params:params,
        url: URL
        // url: getFullURL(URL)
    })
}

// var post = (url, data = {}, headers = {}, extra = {}) => {
//     // debugger
//     let URL = baseurl['url'] + url
//     return axios({
//         headers: headers,
//         method: 'post',
//         data: data,
//         url: URL
//     })

// }


export { get };
