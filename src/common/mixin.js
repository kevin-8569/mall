import { debounce } from "./utils"

export const itemListenMaxin = {
    mounted() {
        //监听item中图片加载完成,使用防抖函数减少refresh触发次数
        const refresh = debounce(this.$refs.wrapper.refresh, 50)
        this.$bus.$on("homeItemImgLoad", () => {
            refresh();
        })
    }
}

export const backTopMaxin = {
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backTop() {
            this.$refs.wrapper.scrollTo(0, 0);
        },
    }
}