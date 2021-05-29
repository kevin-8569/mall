<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick($event)" ref="navbar"></detail-nav-bar>
    <better-scroll class="wrapper" ref="wrapper"
    :probe-type="3"
    @scrollPosition="scrollPosition($event)">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imgLoad="detailImgload"
      ></detail-goods-info>
      <detail-params-info :param-info="paramInfo" ref="params"></detail-params-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommendInfo" ref="recommend"></goods-list>
    </better-scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top v-show="isShowBackTop" @backClick="backTop"></back-top>
  </div>
</template>

<script>
//导入混入函数
import {backTopMaxin} from "common/mixin.js"
//导入封装的防抖函数
import { debounce } from "common/utils.js";
//导入映射的action
import {mapActions} from "vuex"

import BetterScroll from "components/common/betterscroll/BetterScroll";
import BackTop from "components/content/backtop/BackTop";


import DetailNavBar from "./childcomps/DetailNavBar";
import DetailSwiper from "./childcomps/DetailSwiper";
import DetailBaseInfo from "./childcomps/DetailBaseInfo";
import DetailShopInfo from "./childcomps/DetailShopInfo";
import DetailGoodsInfo from "./childcomps/DetailGoodsInfo";
import DetailParamsInfo from "./childcomps/DetailParamInfo";
import DetailCommentInfo from "./childcomps/DetailCommentInfo";
import GoodsList from "components/content/goodslist/GoodsList";
import DetailBottomBar from "./childcomps/DetailBottomBar"

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendInfo: [],
      themeTops:[],
    //   isShowBackTop: false,

    };
  },
  components: {
    BetterScroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  methods: {
    ...mapActions(['addCart']),

    detailImgload() {
      this.$refs.wrapper.refresh();
      
      this.themeTops.push(0)
      this.themeTops.push(this.$refs.params.$el.offsetTop)
      this.themeTops.push(this.$refs.comment.$el.offsetTop)
      this.themeTops.push(this.$refs.recommend.$el.offsetTop)
      this.themeTops.push(Number.MAX_VALUE)

    },
    titleClick(index){
        this.$refs.wrapper.scrollTo(0,-this.themeTops[index]+44,100)
    },
    scrollPosition(positiony){
        //方法一
        // if(-positiony < this.themeTops[1]-44){
        //     this.$refs.navbar.currentIndex = 0
        // }else if(-positiony > this.themeTops[1]-44 && -positiony < this.themeTops[2]-44){
        //     this.$refs.navbar.currentIndex = 1
        // }else if(-positiony > this.themeTops[2]-44 && -positiony < this.themeTops[3]-44){
        //     this.$refs.navbar.currentIndex = 2
        // }else if(-positiony > this.themeTops[3]-44){
        //     this.$refs.navbar.currentIndex = 3
        // }

        //方法二
        let length = this.themeTops.length;
        for (let i = 0; i < length; i++) {
          if (-positiony >= this.themeTops[i] -44 && -positiony < this.themeTops[i+1] -44) {
            if (this.$refs.navbar.currentIndex !== i) {
              this.$refs.navbar.currentIndex = i;
            }
            break;
          }
        }

      this.isShowBackTop = positiony < -1000 ? true : false;

    },
    // backTop() {
    //   this.$refs.wrapper.scrollTo(0, 0);
    // }

    addToCart(){
        //1、获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid
        product.count = 1

        //2、将商品数据添加到购物车里
        // this.$store.commit('addCart',product)
        //方式一：普通方法
        // this.$store.dispatch('addCart',product).then(res => {
        //   console.log(res)
        // })

        //方式二：映射方法
        this.addCart(product).then(res => {
          console.log(res)
        })
    }
  },

    //这里用混入代替了回到顶部的方法，抽取了两个组件里相同的部分
    mixins:[backTopMaxin],

  created() {
    //1、保存获取的iid
    this.iid = this.$route.params.iid;

    //2、根据iid请求数据
    getDetail(this.iid).then((res) => {
      //1、获取顶部的轮播图片数据
      this.topImages = res.result.itemInfo.topImages;
      console.log(res);
      //2、将请求到的商品信息数据都整合到一个对象里面
      const data = res.result;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //3、创建店铺信息数据的对象
      this.shop = new Shop(data.shopInfo);
      //4、获取商品的详情信息
      this.detailInfo = data.detailInfo;
      //5、获取商品的参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //6、获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    }),
      //7、获取推荐栏的数据
      getRecommend().then((res) => {
        this.recommendInfo = res.data.list;
      }); 
  },

  mounted() {
    // this.$bus.$on("detailItemImgLoad", () => {
    //   this.$refs.wrapper.refresh();
    // });
    //监听item中图片加载完成,使用防抖函数减少refresh触发次数
    const refresh = debounce(this.$refs.wrapper.refresh, 50);
    this.$bus.$on("detailItemImgLoad", () => {
      refresh();
    });
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 19;
  height: 100vh;
  background-color: #fff;
}

.wrapper {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>>
