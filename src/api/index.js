// 加载配置信息
import config from '../config';
// 加载路由
// import router from '@/router';

// 获取配置地址
const baseURL = config.baseURL;

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
// /playlist/highquality/tags
