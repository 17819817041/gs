<template>
    <div class="agora flex">
        <div class="function"></div>
        <div class="mutual_video">
            <div class="mutual_video_item"></div>
            <div class="mutual_video_item"></div>
        </div>
    </div>
</template>

<script>
export default {
    mounted () {
        this.join()
    },
    methods: {
        async join () {
            var confr = localStorage.getItem('confr')
            // console.log(confr)
            if (confr) {
                confr = JSON.parse(confr)
                let params = {
                    // roomName: confr.userid,
                    roomName: '486A1',
                    password: "123456",
                    role: 3,
                    config:{ 
                        rec: false, 
                        recMerge:false, //是否开启合并录制
                        supportWechatMiniProgram: true //是否允许小程序加入会议
                    }
                }
                console.log("room",params)

                const user_room = await emedia.mgr.joinRoom(params);
                console.log("room",user_room,params)
                let constraints = { audio: true, video: true };
                const stream = await emedia.mgr.publish(constraints)
            }
           
        }
    }
}
</script>

<style lang="less" scoped>
    .agora {
        flex: 10;
        height: 100%;
        border: solid 1px;

    }
    .function {
        width: 40%;
        height: 100%;
        border: blue;
    }
    .mutual_video {
        width: 60%;
        border: solid 1px red;
        height: 100%;
        .mutual_video_item {
            width: 100%;
            height: 50%;
            border: solid 1px green;

        }
    }
</style>