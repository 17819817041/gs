module.exports = {
    publicPath:"./",
    lintOnSave: false,
    devServer: {
        // https: true,
		hot:true,
        proxy: {
			"api": {
				// target: "https://petavi.top/api",
				target: "http",
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
    }
}