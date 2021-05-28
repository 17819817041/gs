export default {
    state: {
        IMuser: {}
    },
    mutations: {
        setUser (state,data) {
            state[data.key] = data.value
        }
    }
}