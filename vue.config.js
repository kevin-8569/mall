module.exports = {
    configureWebpack: {
        resolve: {
            //起别名，在项目中更方便的找到某一个文件
            alias: {
                // '@':'src'  这是在webpack中已经自动配置了这个别名
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                //router和store是不需要起别名的，因为这两个在文件的其他地方用的少，只在main.js中引用就可以了，
                // 然后在其他的组件中通过this.$router和this.$store就可以使用了
            }
        }
    }

}