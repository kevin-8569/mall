<template>
  <div class="shop-info">
    <!-- 店铺图标和名字 -->
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <!-- 中间部分 -->
    <div class="shop-middle">
      <!-- 中间左边部分 -->
      <div class="shop-middle-item shop-middle-left">
        <!-- 总销量部分 -->
        <div class="info-sells">
          <div class="sells-count">{{ shop.sells | sellCountFilter }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <!-- 全部宝贝部分 -->
        <div class="info-goods">
          <div class="goods-count">{{ shop.goodsCount }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <!-- 中间的右边部分 -->
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 底下部分 -->
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) {
        return value;
      }
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
}

.shop-top {
  line-height: 45px;
}
.shop-top img {
  width: 45px;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-top span {
  margin-left: 10px;
}

.shop-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.shop-middle-left {
  display: flex;
  justify-content: space-around;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  padding-right: 10px;
}

.shop-middle-item {
  flex: 1;
}

.sells-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}

.shop-middle-right {
  margin-left: 30px;
  font-size: 13px;
  color: #333;
  width: 120px;
}

.shop-middle-right table td {
  padding: 5px ;
}

.shop-middle-right .score {
  color: #5ea732;
}

.shop-middle-right .score-better {
  color: #f13e3a;
}

.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.shop-middle-right .better-more span {
  background-color: #f13e3a;
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>>

