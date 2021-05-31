import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import toast from 'components/common/toast'

//导入fastclick
import FastClick from 'fastclick'
//导入vue-lazyload
import VueLazyLoad from 'vue-lazyload'

//安装toast插件
Vue.use(toast);
//添加事件总线对象
Vue.prototype.$bus = new Vue();
//解决移动端300ms延迟
// if ('addEventListener' in document) {
//     document.addEventListener('DOMContentLoaded', function() {
//         FastClick.attach(document.body);
//     }, false);
// }
FastClick.attach(document.body)

//使用图片懒加载插件
Vue.use(VueLazyLoad, {
    loading: require('assets/img/common/placeholder.png')
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')