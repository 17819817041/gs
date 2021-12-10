// import router from "@/router/router/router.js"
import { Message } from 'element-ui';
import { AddressList, typeList, incomePriceId } from '@/axios/request.js'
export default {
    state: {
        loading: false,
        addressList: [],   //地址列表
        typeList: [],      //類型列表
        incomePriceIdList: []
    },
    mutations: {
        setUser (state,data) {
            state[data.key] = data.value
        },
    },
    actions: {
        getAddress (store,vm) {      //獲取地址列表
            store.commit('setUser', { key: 'loading', value: true })
			AddressList().then(res => {
                store.commit('setUser', { key: 'loading', value: false })
				// console.log(res)
				if (res.data.rtnCode == 200) {
					store.commit('setUser', {
						key: 'addressList',
						value: res.data.data
					})
				} else {
                    Message({
                        type: 'error',
                        message: vm.$t('lang.addressLoadFail')
                    })
                }
			}).catch(e => {
                store.commit('setUser', { key: 'loading', value: true })
                Message({
                    type: 'error',
                    message: vm.$t('lang.addressLoadFail')
                })
            })
		},
        getTypeList (store,data) {
            store.commit('setUser', { key: 'loading', value: true })
            typeList().then(res => {
                store.commit('setUser', { key: 'loading', value: false })
                console.log(res)
                if (res.data.rtnCode == 200) {
					store.commit('setUser', {
						key: 'typeList',
						value: res.data.data
					})
				} else {
                    Message({
                        type: 'error',
                        message: vm.$t('lang.typeLoadFail')
                    })
                }
            })
        },
        incomePriceId (store,data) {
            incomePriceId().then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    store.commit('setUser', {
						key: 'incomePriceIdList',
						value: res.data.data
					})
                }
            })
        }
    }
}