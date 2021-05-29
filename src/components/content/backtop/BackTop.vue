<template>
  <div class="back-top" @click="backClick">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    methods:{
        backClick(){
            this.$emit('backClick')
        }
    }
}
</script>

<style scoped>
.back-top{
    position: fixed;
    right: 8px;
    bottom: 55px;
}

.back-top img{
    width: 43px;
}
</style>