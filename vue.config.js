const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 關閉eslint檢查
  lintOnSave: false, 
})
