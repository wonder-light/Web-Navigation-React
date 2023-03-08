import axios from "axios";
import env from "./env";

axios.defaults.baseURL = env.baseUrl;
axios.defaults.timeout = 3000;
axios.defaults.responseType = 'json';//'blob';

// * http request 拦截器
axios.interceptors.request.use(
    config => {
        // * 判断是否存在token，如果存在的话，则每个http header都加上token
        // * token会在登录之后存储在本地
        // @ts-ignore
        if (env.isDevelopment) console.log('http 请求 拦截器', config);
        return config;
    },
    err => {
        if (env.isDevelopment) console.log('http 请求 拦截器 失败', err);
        return Promise.reject(err);
    });

// * http response 拦截器
axios.interceptors.response.use(
    response => {
        if (env.isDevelopment) console.log('http 响应 拦截器', response);
        let data = response.data;
        // * 正常返回数据
        if (data.code === 0) {
            // * 返回data
            return response;
        }
        // * 如果code是20103 表示token未认证(后端定义的错误码)
        // * 跳转到login
        if (data.code === 20103) {
            //router.replace('/login');
            if (env.isDevelopment) console.log('token未认证 权限无效');
        }
        //return Promise.reject(data);
        return response;
    },
    error => {
        if (env.isDevelopment) console.log('http 响应 拦截器 失败', error);
        return Promise.reject(error);
    });


export default axios;