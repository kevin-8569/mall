<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImages" alt="" @load="imgLoad" />
    <div class="goods-info">
      <p>{{ goodslist.title }}</p>
      <span class="price">{{ goodslist.price }}</span>
      <span class="collect">{{ goodslist.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodslist: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    showImages() {
      return this.goodslist.image || this.goodslist.show.img;
    },
  },

  methods: {
    imgLoad() {
      console.log("imgLoad");
      if (this.$route.path.includes("/home")) {
        this.$bus.$emit("homeItemImgLoad");
      } else if (this.$route.path.includes("/detail")) {
        this.$bus.$emit("detailItemImgLoad");
      }
    },
    itemClick() {
      if (this.goodslist.iid) {
        this.$router.push("/detail/" + this.goodslist.iid);
      }
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>

