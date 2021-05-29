<template>
  <div class="bottom-bar">
    <div class="check-range">
      <check-button class="check-button" :ischecked="ischecked" @click.native="allChecked"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
        合计：{{totalPrice}}
    </div>
    <div class="total-count">
        去计算({{totalCount}})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkbutton/CheckButton";

export default {
  components: {
    CheckButton,
  },

  computed:{
      totalPrice(){
          return '￥' + this.$store.state.cartList.filter(value => 
          value.checked).reduce((preValue,item) => {
              return preValue + item.price*item.count
          },0).toFixed(2)
      },
      totalCount(){
          return this.$store.state.cartList.filter(value => value.checked).length
      },
      //这是判断全选按钮是否选中
      //如果商品总数和选中的商品总数相等，并且选中的商品不为0时，才让全选按钮选中
      ischecked(){
          if(this.totalCount == this.$store.getters.cartLength && this.totalCount !== 0){
              return true
          }else{
              return false
          }
      }
  },

  methods:{
      //这是点击全选按钮,可通过上面的计算属性知道有没有被全选
      //如果购物车中有未被勾选的商品，那么点击全选后就让所有商品的checked都为true，即都被选中
      //如果购物车中的商品都被勾选了，那么点击全选后就让所有的商品的checked都为false，即都不被选中
      allChecked(){
          if(this.ischecked){
               this.$store.state.cartList.forEach(val => {val.checked = false})
          }else{
              this.$store.state.cartList.forEach(val => {val.checked = true})
          }

        //这里这样简化是不行的，因为每次遍历的时候都把cartList里面的数据改了，但是在计算属性里面用到了cartList
        //这样就会影响计算属性的值了，这样两个地方就会相互影响了，这种就不行。计算属性是不能被改变的
        // this.$store.state.cartList.forEach(val => {val.checked = !this.ischecked})

       
       }
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  border-top: 1px solid #eee;
  font-size: 14px;
}

.check-range{
    width: 70px;
    display: flex;
    align-items: center;
}

.check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin:0 8px;
}

.price{
    flex: 1;
    text-align: center;

}
.total-count{
    width: 90px;
    text-align: center;
    background-color: deeppink;
}
</style>