<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control
      ref="tabControl1"
      :titles="['流行', '新款', '精选']"
      @tabClick="changeGoodsList($event)"
      class="tab-control"
      v-show="isxidi"
    ></tab-control>

    <better-scroll
      class="wrapper"
      ref="wrapper"
      :probe-type="3"
      @scrollPosition="contentScroll($event)"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>

      <home-recommend-view :recommend="recommend"></home-recommend-view>

      <feature-view></feature-view>

      <tab-control
        ref="tabControl2"
        :titles="['流行', '新款', '精选']"
        @tabClick="changeGoodsList($event)"
      ></tab-control>

      <goods-list :goods="showGoods"></goods-list>
    </better-scroll>

    <back-top v-show="isShowBackTop" @backClick="backTop"></back-top>
  </div>
</template>

<script>
//将导入的组件和请求的数据分开来写，组件也按公共组件和页面组件分开写

//导入导航栏组件
import NavBar from "components/common/navbar/NavBar";
//导入控制栏组件
import TabControl from "components/content/tabcontrol/TabControl";
//导入商品列表组件
import GoodsList from "components/content/goodslist/GoodsList";
//导入滑动栏组件
import BetterScroll from "components/common/betterscroll/BetterScroll";
//导入回到顶部组件
import BackTop from "components/content/backtop/BackTop";

//导入封装好的轮播图组件
import HomeSwiper from "./childcomps/HomeSwiper";
//导入推荐栏组件
import HomeRecommendView from "./childcomps/HomeRecommendView";
//导入特点栏组件
import FeatureView from "./childcomps/FeatureView";

//导入network中home组件请求数据的函数
import { getHomeMultidata, getHomeGoods } from "network/home";

//导入封装的防抖函数
import { debounce } from "common/utils.js";
//导入混入函数
import {itemListenMaxin} from "common/mixin.js"

export default {
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",

      isShowBackTop: false,

      controlTop: 0,

      isxidi: false,

      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,

    HomeSwiper,
    HomeRecommendView,
    FeatureView,

    BetterScroll,
    BackTop,
  },
  methods: {
    /*
    防抖函数
    */

    /*
    事件监听相关的方法
    */
    changeGoodsList(index) {
      this.currentType = Object.keys(this.goods)[index];
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;

      this.$refs.wrapper.refresh();
      this.$refs.wrapper.scrollTo(0, -this.controlTop, 10);
    },

    contentScroll(positionY) {
      //1、判断backtop是否显示
      this.isShowBackTop = positionY < -1000 ? true : false;

      //2、判断tabcontrol是否到了指定位置
      this.isxidi = positionY < -this.controlTop ? true : false;
    },

    backTop() {
      this.$refs.wrapper.scrollTo(0, 0);
    },

    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    //通过监听轮播图的图片加载完成，来得到控制栏的元素位置
    //$el是拿到组件里面的元素
    swiperImgLoad() {
      this.controlTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /*
    网络请求相关的方法
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
  created() {
    //1、请求多个数据
    this.getHomeMultidata();

    //2、请求goods数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

//这两种方法都可以，用混入可以避免在多个组件内使用重复代码
  mounted() {
    //监听item中图片加载完成,使用防抖函数减少refresh触发次数
    // const refresh = debounce(this.$refs.wrapper.refresh, 50);
    // this.$bus.$on("homeItemImgLoad", () => {
    //   refresh();
    // });
  },
  //混入
  mixins:[itemListenMaxin],

  destroyed() {
    console.log("destroyed");
  },

  activated() {
    this.$refs.wrapper.scrollTo(0, this.saveY, 10);
    this.$refs.wrapper.refresh();
  },

  deactivated() {
    //保存滚动到的y值
    this.saveY = this.$refs.wrapper.bs.y;
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  /* padding-top: 44px; */
}

.nav-bar {
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999; */
  background-color: var(--color-tint);
  color: #fff;
}

.tab-control {
  position: relative;
  z-index: 999;
}
.wrapper {
  /*样式方案一*/
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;

  /* 样式方案二 */
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px; */
}
</style>

