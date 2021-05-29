<template>
  <div>
    <swiper>
      <swiper-item :key="index" v-for="(item, index) in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
//！这是封装home页面轮播图的组件

//导入轮播图组件
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      isLoad: true,
    };
  },

  components: {
    Swiper,
    SwiperItem,
  },

  methods: {
    imgLoad() {
      if (this.isLoad) {
        this.$emit("swiperImgLoad");
      }
      this.isLoad = false
    },
  },
};
</script>

<style scoped>
</style>