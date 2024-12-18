// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
module.exports = {
  devServer: {
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      '/api': {
        // 要代理的服务器地址  这里不用写 api
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true // 是否跨域
      }
    },
    client: {
      overlay: {
        runtimeErrors: error => {
          const ignoreErrors = [
            'ResizeObserver loop completed with undelivered notifications.'
          ]
          return !ignoreErrors.includes(error.message)
        }
      }
    }
  },
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // 添加处理 .css 文件的规则
  },
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify')
      }
    }
  }
}
