import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from "@/router/router/router.js"
import store from "@/vuex/store.js"

import Menu from "@/components/menu/menu.vue"
import Header from "@/components/header/header.vue"
import Module from "@/components/module/module.vue"
import Modules from "@/components/module/modules.vue"
Vue.component("Module",Module)
Vue.component("Modules",Modules)
Vue.component("Menu",Menu)
Vue.component("Header",Header)



import element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'; 
import locale from 'element-ui/lib/locale/lang/en'         //设置英文
Vue.use(element,{locale})

// Vue.prototype.dealImg = function (file, success, error) {
// 	// 图片小于0.5M不压缩
// 	if (file.size < Math.pow(512, 2)) {
// 		return success(file);
// 	}
// 	const name = file.name; //文件名
// 	const reader = new FileReader();
// 	reader.readAsDataURL(file);
// 	reader.onload = e => {
// 		const src = e.target.result;
// 		const img = new Image();
// 		img.src = src;
// 		img.onload = e => {
// 			const w = img.width;
// 			const h = img.height;
// 			const quality = 0.6;  // 默认图片质量为0.92
// 			// 生成canvas
// 			const canvas = document.createElement('canvas');
// 			const ctx = canvas.getContext('2d');
// 			// 创建属性节点
// 			const anw = document.createAttribute("width");
// 			anw.nodeValue = w;
// 			const anh = document.createAttribute("height");
// 			anh.nodeValue = h;
// 			canvas.setAttributeNode(anw);
// 			canvas.setAttributeNode(anh);

// 			// 铺底色 PNG转JPEG时透明区域会变黑色
// 			ctx.fillStyle = "#fff";
// 			ctx.fillRect(0, 0, w, h);

// 			ctx.drawImage(img, 0, 0, w, h);
// 			// quality值越小，所绘制出的图像越模糊
// 			const base64 = canvas.toDataURL('image/jpeg', quality); // 图片格式jpeg或webp可以选0-1质量区间

// 			// 返回base64转blob的值
// 			console.log(`原图${(src.length/1024).toFixed(2)}kb`, `新图${(base64.length/1024).toFixed(2)}kb`);
// 			// 去掉url的头，并转换为byte
// 			const bytes = window.atob(base64.split(',')[1]);
// 			// 处理异常,将ascii码小于0的转换为大于0
// 			const ab = new ArrayBuffer(bytes.length);
// 			const ia = new Uint8Array(ab);
// 			for (let i = 0; i < bytes.length; i++) {
// 				ia[i] = bytes.charCodeAt(i);
// 			}
// 			file = new Blob([ab], {type : 'image/jpeg'});
// 			file.name = name;

// 			const files = new window.File(
// 				[file],
// 				name,
// 				{ type: file.type }
// 			)
				
// 			success(files);
// 		}
// 		img.onerror = e => {
// 			error(e);
// 		}
// 	}
// 	reader.onerror = e => {
// 		error(e);
// 	}
// }

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

//div拖拽
Vue.directive("drag", function(el) {
	el.onmousedown = function(e) {
		//获取鼠标点击处分别与div左边和上边的距离：鼠标位置-div位置
		var divx = e.clientX - el.offsetLeft;
		var divy = e.clientY - el.offsetTop;
		//包含在onmousedown里，表示点击后才移动，为防止鼠标移出div，使用document.onmousemove
		document.onmousemove = function(e) {
			//获取移动后div的位置：鼠标位置-divx/divy
			var l = e.clientX - divx;
			var t = e.clientY - divy;
			el.style.left = l + "px";
			el.style.top = t + "px";
			el.style.right = "auto";
		};
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		};
	};
})
// 然后在需要用的组件上加上v-drag
// <div class="drag" v-drag></div>


import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'en-US', // 通过切换locale的值来实现语言切换,this.$i18n.locale
  messages: {
    'zh-CN': require('@/assets/lang/zh'), // 中文语言包
    'en-US': require('@/assets/lang/en') // 英文语言包
  }
})


new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')