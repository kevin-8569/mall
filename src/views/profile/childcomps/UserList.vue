<template>
  <div class="user-list">
      <div :key="index" v-for="(item,index) in listData" class="list-item">
          <img :src="item.imgsrc" alt="">
          <span>{{item.info}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        listData:{
            type:Array,
            default(){
                return []
            }
            
        }
    }

}
</script>

<style scoped>
.list-item{
    border-bottom: 1px solid #eee;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
}
.list-item img{
    vertical-align: middle;
    margin: 0 5px;
    width: 25px;
    height: 25px;
}

</style>