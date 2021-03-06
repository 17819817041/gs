module.exports = {
    publicPath:"./",
    lintOnSave: false,
    devServer: {
        // https: true,
		hot:true,
        proxy: {
			"api": {
				// target: "https://compoundeyes.hk",
				target: "http",
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
    },
	configureWebpack: {
 
		externals: {
		  google: 'google'
		}
	}
}