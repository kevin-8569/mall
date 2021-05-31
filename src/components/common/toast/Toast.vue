<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            message:'',
            isShow:false
        }
    },
    methods:{
        show(mes,duration=2000){
            this.isShow = true;
            this.message = mes;
            setTimeout(() => {
                this.isShow = false;
                this.message = ''
            }, duration);
        }
    }

}
</script>

<style scoped>
.toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, .8);
    color: #fff;
    padding: 8px 10px;
    z-index: 999;
}

</style>