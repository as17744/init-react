var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

var config = {
  entry: APP_DIR + '/index.jsx',	// 入口
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,	// 编译后缀为js和jsx格式文件
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"	// 使用babel-loader这个loader库
            }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/
        },
    ]
  },
  output: {
    path: BUILD_DIR,		// 出口
    filename: 'bundle.js'	// 出口文件名
  }
};

module.exports = config;
