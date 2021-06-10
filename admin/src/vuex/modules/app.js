export default {
    state: {
        
    },
    mutations: {
        setApp (state,data) {
            state[data.key] = data.value
        }
    },
}