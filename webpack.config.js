const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
// モード値を production に設定すると最適化された状態で、
// development に設定するとソースマップ有効でJSファイルが出力される
mode: 'development', // "production" | "development" | "none"

experiments: {
    topLevelAwait: true,
},

// メインとなるJavaScriptファイル（エントリーポイント）
entry: {
    index: './ts/index.ts',
    debug: './ts/debug.ts',
    signin: './ts/signin.ts',
    signup: './ts/signup.ts',
    home: './ts/home.ts',
    profile: './ts/profile.ts',
    setting: './ts/setting.ts',
    post: './ts/post.ts'
},

optimization: {
    chunkIds: 'named',
    //optimization.splitChunks の設定
    splitChunks: {
        // 分離されて生成される chunk の名前（任意の名前）
        name: 'vendor',
        // 対象とするチャンク（chunk）に含めるモジュールの種類
        chunks: 'initial',   // または 'all'
    }
},

output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].bundle.js'
},

plugins: [
    new HtmlWebpackPlugin({
        chunks:['index'],
        hash: true,
        filename: "./html/index.html",
        template: "./html/index.ejs",
    }),
    new HtmlWebpackPlugin({
        chunks:['debug'],
        hash: true,
        filename: "./html/debug.html",
        template: "./html/debug.ejs",
    }),
    new HtmlWebpackPlugin({
        chunks:['signin'],
        hash: true,
        filename: "./html/signin.html",
        template: "./html/signin.ejs",
    }),
    new HtmlWebpackPlugin({
        chunks:['signup'],
        hash: true,
        filename: "./html/signup.html",
        template: "./html/signup.ejs",
    }),
    new HtmlWebpackPlugin({
        chunks:['home'],
        hash: true,
        filename: "./html/home.html",
        template: "./html/home.ejs",
    }),
    new HtmlWebpackPlugin({
        chunks:['profile'],
        hash: true,
        filename: "./html/profile.html",
        template: "./html/profile.ejs",
    }),
    new HtmlWebpackPlugin({
        chunks:['setting'],
        hash: true,
        filename: "./html/setting.html",
        template: "./html/setting.ejs",
    }),
    new HtmlWebpackPlugin({
        chunks:['post'],
        hash: true,
        filename: "./html/post.html",
        template: "./html/post.ejs",
    })
],

module: {
    rules: [
        {
            // 拡張子 .ts の場合
            test: /\.ts$/,
            // TypeScript をコンパイルする
            use: 'ts-loader'
        },
        {
            test: /\.ejs$/,
            use: [
                "html-loader", 
                "ejs-plain-loader"
            ],
        },
    ]
},
// import 文で .ts ファイルを解決するため
resolve: {
    modules: [
    "node_modules", // node_modules 内も対象とする
    ],
    extensions: [
    '.ts',
    '.js' // node_modulesのライブラリ読み込みに必要
    ],
    fallback: { 
        "path": require.resolve("path-browserify") 
    }
}
};