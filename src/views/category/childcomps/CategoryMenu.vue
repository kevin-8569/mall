<template>
  <div class="category-menu">
      <div :key="index" v-for="(item, index) in categoryinfo" 
      class="menu-item" 
      :class="{active:index == currentIndex}" 
      @click="menuClick(index)">
        {{ item.title }}
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
            currentIndex:0
        }
    },
  props: {
    categoryinfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
      menuClick(index){
          this.currentIndex = index
          this.$emit('menuClick',index)
      }
  }

};
</script>

<style scoped>
.category-menu{
    width: 80px;
}
.menu-item {
  width: 80px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  background-color: #eee;
}
.active{
    background-color: #fff;
    color: var(--color-high-text);
}
</style>