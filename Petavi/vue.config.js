module.exports = {
    publicPath:"./",
    lintOnSave: false,
    devServer: {
        https: true,
        proxy: {
			"api": {
				target: "https://petavi.top/api",
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					"^/api": ""
				}
			},
			"db": {
				target: "https://douban.uieee.com",
				changeOrigin: true,
				pathRewrite: {
					"^/db": ""
				}
			}
		}
    }
}