<template>
  <div class="use-info">
      <div class="use-img">
          <img src="~assets/img/profile/useinfo.png" alt="">
      </div>
      <div>
          <div>登录/注册</div>
          <div class="phone">
              <img src="~assets/img/profile/phone.png" alt="">
              <span>暂无绑定手机号</span>
          </div>
      </div>
      <div class="jiantou">></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.use-info{
    position: relative;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    background-color: var(--color-tint);
    color: #fff;
    padding: 15px;
}
.use-img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
    margin-right: 5px;
}
.use-img img{
    width: 45px;
}

.phone{
    margin-top: 5px;
}
.phone img{
    width: 18px;
    vertical-align: top;
}

.jiantou{
    position: absolute;
    right: 15px;
}
</style>