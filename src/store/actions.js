import {
    ADD_COUNT,
    ADD_TO_CART
} from "./mutation-types"

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            //1、查找之前数组中是否有该商品
            let oldProduct = context.state.cartList.find(value => {
                return value.iid === payload.iid
            });
            //2、判断oldProduct
            if (oldProduct) { //数量加一
                context.commit(ADD_COUNT, oldProduct)
                resolve('商品数量加一了')
            } else { //添加新的商品
                context.commit(ADD_TO_CART, payload)
                resolve('添加新的商品了')
            }
        })

    }
}