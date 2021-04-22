// 获取配置地址
const baseURL = 'http://localhost:3000';

const axios = require('axios').create({
    baseURL: baseURL, //api请求的baseURL
    timeout: 0,
    withCredentials: true, // 允许跨域 cookie
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    maxContentLength: 2000,
});

// get
export const _get = req => {
    return axios.get(req.url, { params: req.data });
};
