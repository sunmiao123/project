
const path = require('path')
const htmlWebPlugin = require('html-webpack-plugin')
module.exports={
    mode:'development',//模式 'development' or 'production'
    entry:'./src/main.js',//可以相对路径，也可以时绝对路径,但入口
    // entry:{//对入口
    //     main:'./src/main.js',
    //     home:'./src/home.js'
    // },
    output:{
        filename:'bundle.js',
        // filename:'[name]-[hash].js',
        path:path.resolve(__dirname,'dist')  //必须是路径
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']//执行顺序从右往左，style与css顺序不能反
            },{
                test:/\.(png|jpeg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:1000
                    }
                }]
            }
        ]
    },
    plugins:[
        new htmlWebPlugin({
            title:'这是一个demo',
            filename:'index.html',
            template:path.resolve(__dirname,'index.html')
        }) //实例化一个插件
    ]
}