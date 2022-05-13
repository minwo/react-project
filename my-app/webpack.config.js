const path = require("path");
module.exports = {
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".jsx","js"],
    },

    entry: {
        app: "/client",
    },

    module : { //모듈 연결 설정
        rules : [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        }],
    },

    output: {
        filename: "app.js",
        path: path.join(__dirname, "dist"),
    }
}