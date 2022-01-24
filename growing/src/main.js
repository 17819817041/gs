import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from "@/router/router/router.js"
import store from "@/vuex/store.js"

import ModuleMin from "@/components/moduleMin/moduleMin.vue"
Vue.component("ModuleMin",ModuleMin)
import ModuleMin1 from "@/components/moduleMin/moduleMin1.vue"
Vue.component("ModuleMin1",ModuleMin1)
import Header from "@/components/header/header.vue"
Vue.component("Header",Header)

import ElementUI from "element-ui"
// import "@/assets/theme/index.css"
import 'element-ui/lib/theme-chalk/index.css'; 

import ElementLocale from 'element-ui/lib/locale'      //设置英文
import en from '@/assets/lang/en.js'
import zh from '@/assets/lang/zh.js'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

// Vue.use(ElementUI,{ locale })
Vue.use(ElementUI)

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: localStorage.getItem('locale') || 'zh-CN', // set locale，默认中文
	// messages // set locale messages。语言包
	messages:{
		'zh-CN':{
			...zh,
			...zhLocale
		},
		'en-US':{
			...en,
			...enLocale
		}
	},
	silentTranslationWarn: true
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

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

// getImage (e) {
//   this.dealImg(e.target.files[0],(img) => {
//       var formData = new FormData();
//       formData.append('file', img);
//       file(formData).then(res => {
//           if (res.data.rtnCode == 200) {
//               this.user.userImage = res.data.data
//           }
//       })
//   })
// }


new Vue({
	router,
	store,
	i18n,
	render: h => h(App),
}).$mount('#app')