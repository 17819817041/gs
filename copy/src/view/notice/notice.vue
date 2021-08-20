<style lang="less" scoped>
    @import "@/less/css.less";
    .notice {
        flex: 10;
        height: calc(100%);
        background: @content;
        padding: 0 10px;
        .notice_content {
            height: 100%;
        }
    }
    .notice_content_wrap {
        height: calc(100% - 32px);
        flex: 10;
    }
    .notice_item {
        width: 98%;
        margin: auto;
        margin-bottom: 15px;
        padding: 10px 10px;
        background: white;
        border-radius: 10px;
        overflow: hidden;
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
    .notice_content_item {
        height: calc(100% - 59px);
        overflow: auto;
    }
    .notice_content_item::-webkit-scrollbar {
        width: 8px;
    }
    .notice_content_item::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: #5E5E5E;
    }
    .john {
        height: 100%;
    }
    .notice_information {
        padding-left: 20px;
        .notice_date {
            color: #60A1E0;
        }
    }
    .noData {
        width: 100%;
        height: 100%;
        background: white;
    }
    .notice_list {
        width:100%;
        height: calc(100%);
    }
    .header_i {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin: 10px 5px;
    }
    .acting {
        width: 100%;
        padding: 50px 0;
        // border: solid 1px;
    }
</style>

<template>
    <div class="notice" v-loading='l_loading'>
        <div class="notice_content">
            <div class="notice_content_wrap">
                <div class="explan bold al"><img src="@/assets/img/information.png" alt=""> Notice</div>
                <div class="notice_content_item">
                    <div v-if="noticeList" class="notice_list">
                        <div class="notice_item flex al" @click="checkNotice(item,i)" v-for="(item,i) in noticeList" :key="i">
                            <div class="state"> 
                                <div class="read tc" v-if="item.noticeState == 1">Have read</div>
                                <div class="unRead tc" v-else-if="item.noticeState == 2">Unread</div>
                            </div>
                            <div class="header_i ju al">
                                <img class="john" v-if="item.fromImage" :src="item.fromImage" alt="">
                                <img style="height:100%;" v-else :src="default_img" alt="">
                                <!-- <i class="el-icon-picture-outline Icon" style="font-size: 30px;color:gray" v-else></i> -->
                            </div> 
                            <div class="notice_information">
                                <div>{{item.sketch}}</div>
                                <div class="notice_date">{{item.createdAt}}</div>
                            </div>
                        </div>
                    </div>
                    <!-- <div v-else-if="noticeList === null" class="noData">
                        <div class="ju"><img style="width:100px; margin: 15px" src="@/assets/img/info.png" alt=""></div>
                        <div class="tc " style="font-size: 20px;color:gray;">No notice</div>
                    </div> -->
                    <div v-else-if="noticeList === null" class="mg tc size21 bold" style="font-weight:bold;color:gray">No New Message</div>
                </div>
            </div>
            <div class="ju">
                <el-pagination
                    :small="small"
                    :pager-count='7'
                    layout="prev, pager, next"
                    :total="totalRecordsCount"
                    @current-change='pageCut'>
                </el-pagination>
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
            pageNum: 1,
            small: false
        }
    },
    created () {
        this.$store.commit('setUser',{ 
            key: 'noticeList', 
            value: [] 
        })
        let page = {
            pageNum: 1
        }
        this.$store.dispatch('getNoticeList', page)
    },
    beforeMount() {
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth <= 564) {
                this.small = true
            } else {
                this.small = false
            }
        })
    },
    watch: {
        // noticeList: {
        //     handler (val) {
        //         if (val) {
        //             console.log(val)
        //             this.noticeList = val
        //         }
        //     },
        //     deep: true
        // }
    },
    computed: {
        noticeList: {
            get () { return this.$store.state.user.noticeList },
            set (val) {
                this.$store.commit('setUser',{ 
                    key: 'noticeList', 
                    value: val 
                })
            }
        },
        l_loading () { return this.$store.state.user.n_loading },
        default_img () { return this.$store.state.user.default_img },
        totalRecordsCount () { return this.$store.state.user.totalRecordsCount1 }
    },
    methods: {
        pageCut (val) {
            let page = {
                vm: this,
                pageNum: val
            }
            this.$store.dispatch('getNoticeList', page)
        },
        checkNotice (item,i) {
            if (item.noticeState == 1) {
                // this.$router.push('/appointment')
            } else if (item.noticeState == 2) {
                let data = {
                    noticeId: item.id
                }
                updateNoticeState(data).then(res => {
                    if (res.data.rtnCode == 200) {
                        this.noticeList[i].noticeState = 1
                    }
                })
                // this.$router.push('/appointment')
            }
        }
    }
}
</script>

