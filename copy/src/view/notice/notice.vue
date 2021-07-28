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
        height: 100%;
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
    <div class="notice">
        <div class="notice_content">
            <div class="notice_content_wrap">
                <div class="explan al"><img src="@/assets/img/information.png" alt=""> Notice</div>
                <div class="notice_content_item" @scroll="docScroll" ref="doctorList">
                    <div v-if="noticeList[0]" class="notice_list" ref="doctorList_height">
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
                        <div class="acting float ju al" v-if="l_loading">
                            <div class="loading" v-loading="true"></div>
                        </div>
                    </div>
                    <!-- <div v-else-if="noticeList === null" class="noData">
                        <div class="ju"><img style="width:100px; margin: 15px" src="@/assets/img/info.png" alt=""></div>
                        <div class="tc " style="font-size: 20px;color:gray;">No notice</div>
                    </div> -->
                    <div v-else class="mg tc size21 bold" style="font-weight:bold;color:gray">No New Message</div>
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
            pageNum: 1,
            pageSize: 15
        }
    },
    created () {
        // this.message()
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
        message () {
            if (this.noticeList.length == 0) {
                this.active = false
            }
        },
        docScroll (e) {
            this.$store.commit('setUser',{ key: 'dom', value: 'notice_content_item' })
            if (this.$refs.doctorList.scrollTop + this.$refs.doctorList.clientHeight-150 == this.$refs.doctorList_height.scrollHeight - 150) {
                if (this.noticeList.length >= this.totalRecordsCount) {
                } else {
                    this.pageNum += 1
                    let page = {
                        vm: this,
                        pageNum: this.pageNum
                    }
                    this.$store.dispatch('getNoticeList', page)
                }
            }
            if ( this.$refs.doctorList.scrollTop > 300 ) {
                this.$store.commit('setUser', { key: 'scrollTop', value: true } )
            } else {
                this.$store.commit('setUser', { key: 'scrollTop', value: false } )
            }
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

