<template>
   <tab-bar>
      <tab-bar-item path="/home" >
        <img slot="imag" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="imag-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="imag" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="imag-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="imag" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="imag-active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="imag" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="imag-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar.vue'
import tabBarItem from 'components/common/tabbar/tabBarItem.vue'
export default {
    components:{
        tabBar,
        tabBarItem
    }
}
</script>

<style>

</style>