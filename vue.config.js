const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 關閉eslint檢查
    lintOnSave: false,
    // build後須將dist放到伺服器啟動時需設定以下路徑
    // publicPath: process.env.NODE_ENV === 'production'
    //   ? '/test/dist'
    //   : '/'
})