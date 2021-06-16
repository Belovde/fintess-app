/* 
webpack   打包配置文件

author：zcl  2021-06-12


*/
const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
//引入 提取js中的css代码的插件
const  MiniCssExtractPlugin = require('mini-css-extract-plugin');  
//将css文件及代码进行极致压缩s
const  OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
//自动清除dist 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports={
// 五大概念导出
//  入口
entry:{
    commonCss:'./src/js/commonCss.js',
    home:'./src/js/home.js',
    login:'./src/js/login.js',
    advertPage:'./src/js/advertPage.js',
    registerPage:'./src/js/registerPage.js',
},
// 出口
output:{
    // 出口文件的放置位置   绝对路径
    // 出口文件的文件名
    path:path.resolve(__dirname,'dist'),
    filename:'js/[name].js',
    publicPath:'./'
},
// loader 解释器
module:{
    rules:[
        // 使用什么loader  对什么格式的文件 进行解释
        {test:/\.css$/,use:[{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
        },'css-loader']},
        {test:/\.less$/,use:[{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
        },'css-loader','less-loader']},
        {
            test:/\.(png|jpg|gif)$/,
            loader:'url-loader',
            options:{
                name:'[hash:16].[ext]',
                limit:20*1024,
                esModule: false,
                outputPath:'img'
            }
        },
        {test:/\.html$/,loader:'html-loader'},
        { test:/\.(eot|svg|ttf|woff|woff2)$/, loader:'file-loader',options:{
            outputPath:'fonts'   //输出的目录
        }},
        {
            test: /\.js$/,
            loader: 'babel-loader',    // loader 编译es6为es5
            exclude: /node_modules/  // 排除
      }
    ]
},
// 插件  plugins
plugins:[
    new HtmlWebpackPlugin({
       template: './src/page/home.html',
       filename:'home.html',
       chunks:['home','commonCss']
    }),
    new HtmlWebpackPlugin({
       template: './src/page/login.html',
       filename:'login.html',
       chunks:['login','commonCss']
    }),
    new HtmlWebpackPlugin({
       template: './src/page/advertPage.html',
       filename:'advertPage.html',
       chunks:['advertPage','commonCss']
    }),
    new HtmlWebpackPlugin({
       template: './src/page/registerPage.html',
       filename:'registerPage.html',
       chunks:['registerPage','commonCss']
    }),
    new MiniCssExtractPlugin({  
        filename: 'css/[name].css' // 输出到css文件夹里
  }),
  new OptimizeCssAssetsWebpackPlugin(),
  new CleanWebpackPlugin() 
],
// mode 环境
// development 本地开发环境
// production 线上生产环境
mode:'development',
// 开发服务器 配置【】
devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // 启动服务器目录
    compress: true, // 启动gzip
    port: 666,  // 端口  8080 80  8081 8082
    open: true, // 自动打开服务
    publicPath: '/', // 静态资源查找路径
    openPage: 'home.html', // 打开的页面
  },
  target: 'web', // 目标是浏览器
}