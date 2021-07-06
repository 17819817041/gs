<style lang="less" scoped>
    @import "@/less/css.less";
    .vetNotice {
        flex: 10;
        .vetNotice_content {
            height: 100%;
        }
    }
    .vetNotice_content_wrap {
        flex: 10;
        height: 100%;
        background: @content;
    }
    .vetNotice_item {
        width: 98%;
        margin: auto;
        margin-bottom: 15px;
        padding: 10px 10px;
        background: white;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 2px 2px 1px rgb(192, 191, 191);
        position: relative;
        .state {
            position: absolute;
            right: -69px;
            top: 23px;
            transform: rotateZ(45deg);
            width: 200px;
        }
    }
    .read {
        width: 100%;
        background: gray;
        color: white;
        font-size: 12px;
    }
    .unRead {
        width: 100%;
        background: @denger;
        color: white;
        font-size: 12px;
    }
    .vetNotice_content_item {
        height: 100%;
    }
    .john {
        width: 50px;
        height: 50px;
        padding: 0 15px;
    }
    .vetNotice_information {
        padding-left: 20px;
        .vetNotice_date {
            color: #60A1E0;
            margin-top: 5px;
        }
    }
</style>

<template>
    <div class="vetNotice">
        <div class="vetNotice_content">
            <div class="vetNotice_content_wrap">
                <div class="explan al"><img src="@/assets/img/information.png" alt="">Notice</div>
                <div class="vetNotice_content_item flex">
                    <div v-if="vetNoticeList" style="width:100%">
                        <div class="vetNotice_item flex al" v-for="(item,i) in vetNoticeList" :key="i" @click="checkNotice(item)">
                            <div class="state"> 
                                <div class="read tc" v-if="item.noticeState == 1">Have read</div>
                                <div class="unRead tc" v-else-if="item.noticeState == 2">Unread</div>
                            </div>
                            <div><img class="john" :src="item.fromImage" alt=""></div> 
                            <div class="vetNotice_information">
                                <div v-if="item.noticeType == 1">{{item.fromName}} initiated an appointment with you</div>
                                <div class="vetNotice_date">{{item.createdAt}}</div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="mg size21">No New Message</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { updateNoticeState } from "@/axios/request.js"
export default {
    data () {
        return {
            active: true,
            noticeList: []
        }
    },
    created () {
        this.message()
    },
    computed: {
        vetNoticeList: {
            get () { return this.$store.state.user.vetNoticeList },
            set (val) {
                this.vetNoticeList = val
            }
        }
    },
    methods: {
        message () {
            if (this.vetNoticeList.length == 0) {
                this.active = false
            }
        },
        
        checkNotice (item) {
            if (item.noticeType == 1) {
                let data = {
                    noticeId: item.id
                }
                updateNoticeState(data).then(res => {
                    console.log(res)
                    let that = this
                    let page = {
                        vm: that,
                        pageNum: 1,
                        pageSize: 100
                    }
                    this.$store.dispatch('getNoticeList', page)
                })
                this.$router.push('/appointment')
            }
            
        }
    }
}
</script>

