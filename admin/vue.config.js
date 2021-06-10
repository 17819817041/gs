module.exports = {
    publicPath:"./",
    lintOnSave: false,
    devServer: {
        // https: true,
		// host: '192.168.1.105',
		hot:true,
        // proxy: {
		// 	"api": {
		// 		target: "https://petavi.top/api",
		// 		ws: true,
		// 		changeOrigin: true,
		// 		pathRewrite: {
		// 			"^/api": ""
		// 		}
		// 	},
		// 	"db": {
		// 		target: "https://douban.uieee.com",
		// 		changeOrigin: true,
		// 		pathRewrite: {
		// 			"^/db": ""
		// 		}
		// 	}
		// }
    }
}