import Vue from "vue"
import Vuex from "vuex"

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

//1、安装插件
Vue.use(Vuex)

const state = {
    cartList: []
}

//2、创建vuex实例化对象
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

})

//4、导出，挂载Vue实例上
export default store