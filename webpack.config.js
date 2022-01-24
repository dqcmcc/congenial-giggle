const path = require('path'); // 导入path模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //文件入口
    entry: './src/index.tsx',
    //文件出口

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/, // 排除 node_modules 目录
        },]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // 自动解析确定的扩展
    },
    //配置模板
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './template/index.html'), // 模板位置
            filename: 'index.html', // 输出后的文件名，路径是 output.path
            title: '标题', // 传给模板的变量
        })
    ],
    //运行
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port:8080,
        open:false,
        hot:true
    },
    //缓存
    cache:{
        type:'filesystem',
        buildDependencies:{
            config:[__filename] // 构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
        }
    },

    //打包dist
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
}
