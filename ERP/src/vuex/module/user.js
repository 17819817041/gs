// import router from "@/router/router/router.js"
// import { Message } from 'element-ui';
export default {
    state: {
        title: '',
        text: '',
        backBtn: false
    },
    mutations: {
        setUser (state,data) {
            state[data.key] = data.value
        }
    },
    actions: {
        
    }
}