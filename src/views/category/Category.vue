<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <better-scroll class="wrapper" ref="wrapper">
        <category-menu
          :categoryinfo="categoryinfo"
          @menuClick="menuClick"
        ></category-menu>
      </better-scroll>
      <better-scroll class="wrapper2" ref="wrapper2">
        <category-list
          class="lists"
          :subcategory="subcategory"
          @cateimgload="cateimgload"
        ></category-list>
      </better-scroll>
    </div>
  </div>
</template>

<script>
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";

import BetterScroll from "components/common/betterscroll/BetterScroll";

import NavBar from "components/common/navbar/NavBar";
import CategoryMenu from "./childcomps/CategoryMenu";
import CategoryList from "./childcomps/CategoryList";

export default {
  data() {
    return {
      currentIndex: 0,
      categoryinfo: [],
      subcategory: [],
    };
  },
  components: {
    NavBar,
    CategoryMenu,
    BetterScroll,
    CategoryList,
  },
  methods: {
    menuClick(index) {
      this._getSubcategories(index);
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const maitKey = this.categoryinfo[index].maitKey;
      // console.log(maitKey);
      getSubcategory(maitKey).then((res) => {
        this.subcategory = res.data.list;
      });
    },
    cateimgload() {
      this.$refs.wrapper2.refresh();
    },
  },
  created() {
    getCategory().then((res) => {
      console.log(res);
      const data = res.data.category.list;
      this.categoryinfo = data;
      // console.log(this.categoryinfo[this.currentIndex].maitKey)
      this._getSubcategories(this.currentIndex);
    });
  },
};
</script>

<style scoped>
.category {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.wrapper {
  width: 80px;
  height: 100%;
  overflow: hidden;
}

.wrapper2 {
  flex: 1;
  height: 100%;

  overflow: hidden;
}
</style>