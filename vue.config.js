const webpack = require('webpack')
// const CompressionPlugin = require('compression-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    proxy: {
      '/(dispatch)-api': {
        target: 'http://172.16.25.52',
        changeOrigin: true
        // pathRewrite: {
        //   '^/eventFlows': '/eventFlows'
        // }
      }
    }
  },
  configureWebpack: config => {
    require('@vux/loader').merge(config, {
      plugins: ['vux-ui']
    })
    // return {
    //   plugins: [
    //     new CompressionPlugin({
    //       test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
    //       threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
    //       deleteOriginalAssets: false // 是否删除原文件
    //     }),
    //     new webpack.ProvidePlugin({
    //       _: 'lodash'
    //     }),
    //     new HtmlWebpackPlugin({
    //       template: './public/index.html',
    //       hash: true
    //     })
    //   ]
    // }
  }
}
