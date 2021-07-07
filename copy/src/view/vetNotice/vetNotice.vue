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
    <div class="vetNotice" v-loading="loading">
        <div class="vetNotice_content">
            <div class="vetNotice_content_wrap">
                <div class="explan al"><img src="@/assets/img/information.png" alt="">Notice</div>
                <div class="vetNotice_content_item flex">
                    <div v-if="vetNoticeList" style="width:100%">
                        <div class="vetNotice_item flex al cursor" v-for="(item,i) in vetNoticeList" :key="i" @click="checkNotice(item)">
                            <div class="state"> 
                                <div class="read tc" v-if="item.noticeState == 1">Have read</div>
                                <div class="unRead tc" v-else-if="item.noticeState == 2">Unread</div>
                            </div>
                            <div>
                                <img class="john" v-if="item.fromImage" :src="item.fromImage" alt="">
                                <i class="el-icon-picture-outline Icon" style="font-size: 30px;color:gray" v-else></i>
                            </div> 
                            <div class="vetNotice_information">
                                <div>{{item.fromName}} initiated an appointment with you</div>
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
import { updateNoticeState, notice } from "@/axios/request.js"
export default {
    data () {
        return {
            active: true,
        }
    },
    created () {
        // this.getNoticeList()
        this.message()
    },
    computed: {
        vetNoticeList: {
            get () { return this.$store.state.user.noticeList },
            set (val) {
                this.vetNoticeList = val
            }
        },
        loading () { return this.$store.state.user.n_loading },
    },
    methods: {
        message () {
            if (this.vetNoticeList.length == 0) {
                this.active = false
            }
        },
        checkNotice (item) {
            if (item.noticeState == 1) {
                this.$router.push('/appointment')
            } else if (item.noticeState == 2) {
                let data = {
                    noticeId: item.id
                }
                updateNoticeState(data).then(res => {
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
        },
        getNoticeList () {
            let data = {
                vm: this,
                pageNum: 1,
                pageSize: 100
            }
            notice(data).then(res => {
                console.log(res,'notice')
                if (res.data.rtnCode == 200) {
                    res.data.data.pageT.forEach(item => {
                        var time = item.createdAt
                        let a = time.split(' ')[0]
                        let b = time.split(' ')[1]
                        // let En = new Date(a).toDateString()
                        // let arr = En.split(' ')
                        // let bb = b.split(':')
                        // item.createdAt = arr[2] + ' ' + arr[1] + ','+ arr[3] + ' ' + bb[0] + ':' + bb[1]
                        let arr = a.split('-').join('/')
                        let bb = b.split(':')
                        item.createdAt = arr + ' ' + bb[0] + ':' + bb[1]
                    })
                    this.$store.commit('setUser',{
                        key: "noticeState",
                        value: (res.data.data.pageT.find(item => item.noticeState==2)) && (localStorage.getItem('platform') == 2)
                    })
                    this.vetNoticeList = res.data.data.pageT
                    this.loading = false
                } else if (res.data.rtnCode == 201) {
                    this.vetNoticeList = null
                    this.loading = false
                }
            }).catch(e => {
                console.log(e)
                this.loading = false
            })
        },
    }
}
</script>

