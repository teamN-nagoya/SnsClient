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
    signin: './ts/signin.ts',
    signup: './ts/signup.ts',
    profile: './ts/profile.ts'
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
        filename: "./html/index.html",
        template: "./html/index.html",
    }),
    new HtmlWebpackPlugin({
        chunks:['signin'],
        filename: "./html/signin.html",
        template: "./html/signin.html",
    }),
    new HtmlWebpackPlugin({
        chunks:['signup'],
        filename: "./html/signup.html",
        template: "./html/signup.html",
    }),
    new HtmlWebpackPlugin({
        chunks:['profile'],
        filename: "./html/profile.html",
        template: "./html/profile.html",
    })
],

module: {
    rules: [{
    // 拡張子 .ts の場合
    test: /\.ts$/,
    // TypeScript をコンパイルする
    use: 'ts-loader'
    }]
},
// import 文で .ts ファイルを解決するため
resolve: {
    modules: [
    "node_modules", // node_modules 内も対象とする
    ],
    extensions: [
    '.ts',
    '.js' // node_modulesのライブラリ読み込みに必要
    ]
}
};