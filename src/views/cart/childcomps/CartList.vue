<template>
  <div class="cart-list">
      <cart-list-item :key="index" v-for="(item,index) in cartList" 
      :item-info="item" 
      @checkClick="checkClick(item)"></cart-list-item>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

import CartListItem from "./CartListItem"

export default {
    components:{
        CartListItem
    },
    computed:{
        ...mapGetters(['cartList'])
    },
    methods:{
        checkClick(item){
         item.checked = !item.checked
        }
    }

}
</script>

<style scoped>

</style>