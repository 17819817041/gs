import Vue from 'vue'
import App from './App.vue'


import {conn, WebIM, rtcCall} from "@/assets/js/websdk.js"
Vue.prototype.$WebIM = WebIM
Vue.prototype.$conn = conn
Vue.prototype.$rtcCall = rtcCall

import Agora from "@/assets/js/Agora.js"
Vue.prototype.$V = Agora

import initRtc from './assets/js/rtcAgora'
initRtc(Agora)

import Header from "@/components/header/header.vue"
import Message from "@/components/message/message.vue"
Vue.component("Message",Message)
Vue.component('Header',Header)

Vue.prototype.dealImg = function (file, success, error) {
	// 图片小于0.5M不压缩
	if (file.size < Math.pow(512, 2)) {
		return success(file);
	}

	const name = file.name; //文件名
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = e => {
		const src = e.target.result;
		const img = new Image();
		img.src = src;
		img.onload = e => {
			const w = img.width;
			const h = img.height;
			const quality = 0.6;  // 默认图片质量为0.92
			// 生成canvas
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			// 创建属性节点
			const anw = document.createAttribute("width");
			anw.nodeValue = w;
			const anh = document.createAttribute("height");
			anh.nodeValue = h;
			canvas.setAttributeNode(anw);
			canvas.setAttributeNode(anh);

			// 铺底色 PNG转JPEG时透明区域会变黑色
			ctx.fillStyle = "#fff";
			ctx.fillRect(0, 0, w, h);

			ctx.drawImage(img, 0, 0, w, h);
			// quality值越小，所绘制出的图像越模糊
			const base64 = canvas.toDataURL('image/jpeg', quality); // 图片格式jpeg或webp可以选0-1质量区间

			// 返回base64转blob的值
			console.log(`原图${(src.length/1024).toFixed(2)}kb`, `新图${(base64.length/1024).toFixed(2)}kb`);
			// 去掉url的头，并转换为byte
			const bytes = window.atob(base64.split(',')[1]);
			// 处理异常,将ascii码小于0的转换为大于0
			const ab = new ArrayBuffer(bytes.length);
			const ia = new Uint8Array(ab);
			for (let i = 0; i < bytes.length; i++) {
				ia[i] = bytes.charCodeAt(i);
			}
			file = new Blob([ab], {type : 'image/jpeg'});
			file.name = name;

			const files = new window.File(
				[file],
				name,
				{ type: file.type }
			)
				
			success(files);
		}
		img.onerror = e => {
			error(e);
		}
	}
	reader.onerror = e => {
		error(e);
	}
}


Vue.config.productionTip = false
import router from "@/router/router.js"
import store from "@/vuex/store.js"

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


import element from "element-ui"
// import 'element-ui/lib/theme-chalk/index.css'; 
import "@/assets/theme/index.css"
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(element,{locale})