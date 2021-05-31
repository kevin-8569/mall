<template>
  <div class="category-list">
    <div :key="index" v-for="(item, index) in subcategory" class="list">
      <div>
        <img :src="item.image" alt="" @load="cateimgload" />
      </div>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
import BetterScroll from "components/common/betterscroll/BetterScroll";

export default {
  props: {
    subcategory: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    BetterScroll,
  },
  methods: {
    cateimgload() {
      this.$emit("cateimgload");
    },
  },
};
</script>

<style scoped>
.category-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  font-size: 12px;
  margin-top: 10px;
}

.list {
  width: 70px;
  text-align: center;
  margin: 10px 0;
  
}
.list img {
  width: 90%;
}
</style>