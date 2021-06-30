<template>
    <div class="conference">
        <div class="conference_item mg " v-for="(item,i) in room" :key="i" @click="agora(item)">
            {{item.confrid}}
        </div>
        <!-- <iframe src="http://www.google.com/calendar/embed?showTitle=0&amp;height=600&amp;wkst=1&amp;hl=en&amp;bgcolor=%23FFFFFF&amp;src=liangrenwei%40gmail.com&amp;color=%23BE6D00&amp;src=p%23weather%40group.v.calendar.google.com&amp;color=%23A32929&amp;ctz=America%2FToronto" style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe> -->
        <!-- <iframe src="https://calendar.google.com/calendar/r"></iframe> -->
    </div>
</template>

<script>
import { getMetting, addMetting, delMetting } from "@/axios/request.js"
export default {
    data () {
        return {
            room: []
        }
    },
    created () {
        this.getMetting()
        // this.addMetting()
        
    },
    methods: {
        agora (item) {
            this.$router.push({
                name: 'agora'
            })
            localStorage.setItem('confr',JSON.stringify(item))
        },
        addMetting () {
            let data = {
                "jo":[
                    {
                        "userId": 23132,
                        "doctorId": 12313,
                        "confrId": "12",
                        "password": "123"
                    }
                ]
            }
            addMetting(data).then(res => {
                console.log(res)
            })
        },
        getMetting () {
            getMetting().then(res => {
                console.log(res,'getMetting')
                this.room = res.data
                // this.room.forEach(item => {
                //     let data = {
                //         webId: item.id + 1
                //     }
                //     delMetting(data).then(res => {
                //         console.log(res,'删除')
                //     })
                // })
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .conference {
        background: @content;
        flex: 10;
        height: 100%;
        padding: 10px 0;
    }
    .conference_item {
        width: 95%;
        border-radius: 20px;
        background: white;
        height: 70px;
        box-shadow: 0 1px 2px 1px gray;
        margin-bottom: 20px;
    }
</style>