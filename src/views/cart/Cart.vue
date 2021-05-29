<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <better-scroll class="wrapper" ref="wrapper">
      <cart-list></cart-list>
    </better-scroll>
    <!-- 底部汇总栏 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
//mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
import {mapGetters} from "vuex"

import NavBar from "components/common/navbar/NavBar"
import BetterScroll from "components/common/betterscroll/BetterScroll"

import CartList from "./childcomps/CartList"
import CartBottomBar from "./childcomps/CartBottomBar"

export default {
  components:{
    NavBar,
    BetterScroll,
    CartList,
    CartBottomBar
  },
  computed:{
     // 把 `this.cartLength` 映射为 `this.$store.getters.cartLength`
     // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(['cartLength'])

    //如果你想将一个 getter 属性另取一个名字，使用对象形式：
    // ...mapGetters({
    //   length:'cartLength',
    //   list:'cartList'
    // })
  },
  activated(){
    this.$refs.wrapper.refresh()
  }

}
</script>

<style scoped>
.cart{
  height: 100vh;
}

.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}

.wrapper{
  height: calc(100% - 44px - 49px - 44px);
  overflow: hidden;
}
</style>