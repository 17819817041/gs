// import router from "@/router/router/router.js"
import { Message } from 'element-ui';
import { AddressList, typeList, incomePriceId, getShopList, getTimeIntervaDetailslList, getTimeIntervalList } from '@/axios/request.js'
export default {
    state: {
        loading: false,
        addressList: [],   //地址列表
        typeList: [],      //類型列表
        incomePriceIdList: [],//期望收入列表
        storeList: [],      //店鋪列表
        clockList: [],      //小時段列表
        busyTimeList: [],   //繁忙時段列表
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
                // console.log(res)
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
                if (res.data.rtnCode == 200) {
                    store.commit('setUser', {
						key: 'incomePriceIdList',
						value: res.data.data
					})
                }
            })
        },
        getShopList (store,data) {    //獲取店鋪列表
            getShopList(data).then(res => {
                // console.log(res)
                if (res.data.rtnCode == 200) {
                    store.commit('setUser', {
						key: 'storeList',
						value: res.data.data
					})
                }
            })
        },
        getTimeIntervaDetailslList (store,data) {
            getTimeIntervaDetailslList().then(res => {
                if (res.data.rtnCode == 200) {
                    res.data.data.forEach(item => {
                        item.timeIntervalList.forEach(child => {
                            child.num = 1
                        })
                    })
                    store.commit('setUser', {
						key: 'clockList',
						value: res.data.data
					})
                }
            })
        },
        getTimeIntervalList (store,data) {
            getTimeIntervalList().then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    store.commit('setUser', {
						key: 'busyTimeList',
						value: res.data.data
					})
                }
            })
        }
    }
}