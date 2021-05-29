<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
           <slot name="imag"></slot>
      </div>
     <div v-else>
         <slot name="imag-active"></slot>
     </div>
      <div :style="activeStyle">
          <slot name="text"></slot>
      </div>
  </div>
</template>

<script>
export default {
    // props:['path'],这种方法和下面的是一样的，都是接收父组件传过来的值，下面这是限制传过来的是字符串形式的
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive:'true',
           
        }
    },
    computed:{
        isActive(){
            return this.$route.path === this.path
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods:{
        itemClick(){
            // console.log(this); 这个this代表的是当前被点击的那个模板
            this.$router.replace(this.path).catch(err => err)          
        }
    }
}
</script>

<style scoped>
.tab-bar-item{
    height: 49px;
    flex: 1;
    font-size: 14px;
}

.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin: 2px 0;
  vertical-align: middle;
}

</style>