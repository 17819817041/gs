// const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    publicPath:"./",
    lintOnSave: false,
    devServer: {
        // https: true,
		hot:true,
        proxy: {
			"api": {
				// target: "https://petavi.top/api",
				target: 'https://endura.fun/api',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
    }
}

