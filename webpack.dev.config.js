const path = require('path');
// 每次会自动把js插入到你的模板index.html里面去。
var HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  // mode:'none',
  //入口
  // chunkFilename是除了entry定义的入口js之外的js
  entry: ['react-hot-loader/patch', path.join(__dirname, 'src/index.js')],
  /*输出到dist文件夹，输出文件名字为bundle.js*/
  // webpack编译文件
  // 如果没有全局安装./node_modules/.bin/webpack --config webpack.dev.config.js
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash].js',
  },
  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src'),
      },
      {
        // css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能；
        // style - loader将所有的计算后的样式加入页面中； 二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
        //style-loader需要在前面
        // options limit 8192意思是，小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求。
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8092,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // 将 JS 字符串生成为 style 节点
          },
          {
            loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: 'sass-loader', // 将 Sass 编译成 CSS
          },
        ],
      },
    ],
  },
  // color（CLI only） console中打印彩色日志
  // historyApiFallback 任意的404响应都被替代为index.html。有什么用呢？你现在运行
  // npm start，然后打开浏览器，访问http://localhost:8080,然后点击Page1到链接http://localhost:8080/page1，
  // 然后刷新页面试试。是不是发现刷新后404了。为什么？dist文件夹里面并没有page1.html,当然会404了，所以我们需要配置
  // historyApiFallback，让所有的404定位到index.html。
  // host 指定一个host,默认是localhost。如果你希望服务器外部可以访问，指定如下：host: "0.0.0.0"。比如你用手机通过IP访问。
  // hot 启用Webpack的模块热替换特性。关于热模块替换，我下一小节专门讲解一下。
  // port 配置要监听的端口。默认就是我们现在使用的8080端口。
  // proxy 代理。比如在 localhost:3000 上有后端服务的话，你可以这样启用代理：
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8080,
    historyApiFallback: true,
    clientLogLevel: 'none',
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
      assets: path.join(__dirname, 'src/assets'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`编译成功`],
      },
    }),
  ],
  devtool: 'source-map',
};
