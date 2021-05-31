<template>
  <div class="user-money">
      <div class="yuan">
          <span>0.00</span>元
          <div>我的余额</div>
      </div>
      <div class="ge">
          <span>0</span>个
          <div>我的优惠</div>
      </div>
      <div class="fen">
          <span>0</span>分
          <div>我的积分</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user-money{
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 10px solid#eee;
    font-size: 8px;
}
.user-money span{
    font-size: 18px;
    font-weight: 600;
    color: orange;
}
.yuan,
.ge,
.fen{
    text-align: center;
    flex: 1;
}
.yuan,
.ge{
    border-right: 1px solid #eee;
}
.yuan div{
    margin-top: 5px;
}
.ge div{
    margin-top: 5px;
}
.fen div{
   margin-top: 5px;
}

</style>