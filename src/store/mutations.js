import {
    ADD_COUNT,
    ADD_TO_CART
} from "./mutation-types"

export default {

    //mutations唯一的目的就是修改state中的状态
    //mutations中的每个方法完成的事件尽可能地单一一点

    //数量加一
    [ADD_COUNT](state, payload) {
        payload.count += 1
    },
    //添加新的商品
    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    }
}