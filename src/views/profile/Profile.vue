<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的商城</div>
    </nav-bar>
    <user-info></user-info>
    <user-money></user-money>
    <user-list :list-data="orderList" class="userlist"></user-list>
    <user-list :list-data="serviceList" ></user-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import UserInfo from "./childcomps/UserInfo"
import UserMoney from "./childcomps/UserMoney"
import UserList from "./childcomps/UserList"

export default {
  data(){
    return {
       orderList: [
          {imgsrc:require('assets/img/profile/xin.png'), info: '我的消息'},
          {imgsrc:require('assets/img/profile/shang.png'), info: '积分商城'},
          {imgsrc:require('assets/img/profile/hui.png'), info: '会员卡'},
        ],
        serviceList: [
          {imgsrc:require('assets/img/profile/gou.png'), info: '我的购物车'},
          {imgsrc:require('assets/img/profile/xia.png'), info: '下载购物APP'},
        ]
    }
  },
  components:{
    NavBar,
    UserInfo,
    UserMoney,
    UserList
  }

}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
.userlist{
  border-bottom: 10px solid #eee;
}
</style>