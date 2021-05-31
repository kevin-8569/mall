<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      bs: null,
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    refresh() {
      this.bs && this.bs.refresh();
    },

    scrollTo(x,y,time = 300){

      this.bs && this.bs.scrollTo(x,y,time)

    },

    onScroll(){
      this.bs.on('scroll',(position) => {
      this.bs && this.$emit('scrollPosition',position.y)
      })
    },

    onPullingUp(){
      this.bs.on('pullingUp', () => {
        this.$emit('pullingUp')
        setTimeout(() => {
        this.bs && this.bs.finishPullUp()
        }, 2000);
      })
    }
  },

  mounted() {
    //1、创建betterscroll对象
    this.bs = new BScroll(this.$refs.wrapper, {
      probeType:this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      observeDOM: true, 
      observeImage:true
    });

    //监听scroll方法
    this.onScroll()

    //调用上拉加载方法
    if(this.pullUpLoad){
      this.onPullingUp()
    }
    
  }
}
</script>

<style scoped>
</style>

