<style lang="less" scoped>
    @import "@/less/css.less";
    .vetNotice {
        height: 100%;
        background: @content;
        padding-right: 10px;
        flex: 10;
    }
    .vetNotice_content {
        height: 100%;
    }
    .vetNotice_content_wrap {
        height: 100%;
        flex: 10;
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
        height: calc(100% - 59px);
        overflow: auto;
    }
    .vetNotice_content_item::-webkit-scrollbar {
        width: 8px;
    }
    .vetNotice_content_item::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: #5E5E5E;
    }
    .john {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        padding: 0 15px;
        img {
            height: 100%;
        }
    }
    .vetNotice_information {
        padding-left: 20px;
        .vetNotice_date {
            color: #60A1E0;
            margin-top: 5px;
        }
    }
    .acting {
        width: 100%;
        padding: 50px 0;
        // border: solid 1px;
    }
</style>

<template>
    <div class="vetNotice">
        <div class="vetNotice_content">
            <div class="vetNotice_content_wrap">
                <div class="explan al"><img src="@/assets/img/information.png" alt="">Notice</div>
                <div class="vetNotice_content_item flex" @scroll="docScroll" ref="doctorList">
                    <div v-if="vetNoticeList[0]" style="width:100%" ref="doctorList_height">
                        <div class="vetNotice_item flex al cursor" v-for="(item,i) in vetNoticeList" :key="i" @click="checkNotice(item,i)">
                            <div class="state"> 
                                <div class="read tc" v-if="item.noticeState == 1">Have read</div>
                                <div class="unRead tc" v-else-if="item.noticeState == 2">Unread</div>
                            </div>
                            <div class="john ju al">
                                <img v-if="item.fromImage" :src="item.fromImage" alt="">
                                <img style="height:100%;" v-else :src="default_img" alt="">
                                <!-- <i class="el-icon-picture-outline Icon" style="font-size: 30px;color:gray" v-else></i> -->
                            </div> 
                            <div class="vetNotice_information">
                                <div>{{item.fromName}} initiated an appointment with you</div>
                                <div class="vetNotice_date">{{item.createdAt}}</div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="tc size21 bold" style="width:100%;color:gray;margin-top:30px;">No New Message</div>
                </div>
                <div class="acting float ju al" v-if="l_loading">
                    <div class="loading" v-loading="true"></div>
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
            pageNum: 1,
            pageSize: 15
        }
    },
    created () {
        
    },
    computed: {
        vetNoticeList: {
            get () { return this.$store.state.user.noticeList },
            set (val) {
                this.$store.commit('setUser', { key: 'vetNoticeList', value: val })
            }
        },
        totalRecordsCount () { return this.$store.state.user.totalRecordsCount1 },
        l_loading () { return this.$store.state.user.loading },
        default_img () { return this.$store.state.user.default_img }
    },
    methods: {
        docScroll (e) {
            this.$store.commit('setUser',{ key: 'dom', value: 'vetNotice_content_item' })
            if (this.$refs.doctorList.scrollTop + this.$refs.doctorList.clientHeight-150 == this.$refs.doctorList_height.scrollHeight - 150) {
                if (this.vetNoticeList.length >= this.totalRecordsCount) {
                    
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
                    console.log(res)
                    if (res.data.rtnCode == 200) {
                        this.vetNoticeList[i].noticeState = 1
                    }
                })
                // this.$router.push('/appointment')
            }
            
        }
    }
}
</script>

