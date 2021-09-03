module.exports = {
    publicPath:"./",
    lintOnSave: false,
    devServer: {
        // https: true,
		hot:true,
        proxy: {
			"api": {
				target: "",
				// target: "https://petavi.top/api",
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
    }
}