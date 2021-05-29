//！这是封装home页面所有请求数据的js文件

import { request } from './request'

//请求首页的数据的函数
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

//请求首页的流行、新款、精选的数据
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}