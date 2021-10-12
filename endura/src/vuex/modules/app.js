export default {
    state: {
        remoteStream: {},
        localStream: {},
    },
    mutations: {
        setApp (state,data) {
            state[data.key] = data.value
        }
    },
}