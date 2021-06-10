export default {
    state: {
        login: false,
    },
    mutations: {
        setUser (state,data) {
            state[data.key] = data.value
        }
    },
    actions: {

    }
        
}