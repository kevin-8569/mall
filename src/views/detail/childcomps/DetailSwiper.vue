<template>
  <div>
      <swiper class="detailSwiper">
          <swiper-item :key="index" v-for="(item,index) in topImages">
              <img :src="item" alt="">
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem,
    }

}
</script>

<style scoped>
.detailSwiper{
    height: 300px;
    overflow: hidden;
}
</style>>
