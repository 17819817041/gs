<template>
    <div class="paymentHistory" v-loading="loading">
        <div class="explan al">
            <img src="@/assets/img/account.png" alt="">
            My Payment History
        </div>
        <div class="paymentHistory_content" @scroll="docScroll" ref="doctorList" v-if="orderList.length !== 0">   
            <div ref="doctorList_height">
                <div class="paymentHistory_content_item sb mg" v-for="(item,i) in orderList" :key="i">
                    <div class="flex al">
                        <div class="payment_man_img ju al">
                            <img :src="item.userImage" v-if="item.userImage" alt="">
                            <!-- <i class="el-icon-picture-outline" style="color: gray;font-size: 20px" v-else></i> -->
                            <img :src="AllDetail.userImage" v-else-if="item.userImage === null" alt="">
                        </div>
                        <div class="payment_details">
                            <div class="size17">
                                <span v-if="item.userName">{{item.userName}}</span>
                                <span v-else>{{AllDetail.userName}}</span>
                            </div>
                            <div class="size16">{{item.orderType}}</div>
                        </div>
                    </div>
                    <div class="much al">
                        <div>
                            <div :class="[ 'te', {'COLOR': item.paymentRecord.orderTypeId == 1}, {'COLOR1': item.paymentRecord.orderTypeId == 4}]">
                                <span v-if="item.consumeType == 0">-</span>
                                <span v-else-if="item.consumeType == 1">+</span>
                                ${{item.paymentRecord.price}}</div>
                            <div>{{item.paymentRecord.createAt}}</div>
                        </div>
                    </div>
                </div>
                <div class="acting float ju al" v-if="l_loading">
                    <div class="loading" v-loading="true"></div>
                </div>
            </div>
        </div>
        <div class="paymentHistory_content" v-else>
            <div class="tc noThing">No records!</div>
        </div>
    </div>
</template>

<script>
import { pay, updateUserDetails, file, allOrder, paymentRecord } from "@/axios/request.js"
export default {
    data () {
        return {
            orderList: [],
            loading: true,
            pageNum: 1,
            pageSize: 15,
            totalRecordsCount: 0
        }
    },
    computed: {
        AllDetail: {
            get () { return this.$store.state.user.userDetail },
            set (val) {
                this.$store.commit("setUser", {
                    key: "userDetail",
                    value: val
                })
            },
        },
        l_loading: {
            get () { return this.$store.state.user.loading },
            set (val) {
                this.$store.commit("setUser", {
                    key: "loading",
                    value: val
                })
            },
        },
    },
    created () {
        this.paymentRecord()
    },
    methods: {
        paymentRecord () {
            let data = {
                userId: localStorage.getItem('userId'),
                pageNum: this.pageNum,
                pageSize: 15
            }
            if ((this.totalRecordsCount == this.orderList.length) && this.totalRecordsCount !=0 ) {
                this.$store.commit("setUser",{ key: "loading", value: false })
                
            } else {
                paymentRecord(data).then(res => {
                    console.log(res,'paymentRecord')
                    if (res.data.rtnCode == 200) {
                        var D = new Date()
                        let a = new Date().toLocaleDateString()
                        var k = new Date(a).getTime()
                        // var b = new Date(res.data.data.pageT[11].paymentRecord.createAt.split(' ')[0].split('-').join('/')).getTime()
                        res.data.data.pageT.forEach(item => {
                            if (new Date( item.paymentRecord.createAt.split(' ')[0].split('-').join('/')).getTime() == k) {
                                item.paymentRecord.createAt = 'Today'
                            } else {
                                var D = new Date(item.paymentRecord.createAt.split(' ')[0]).toDateString()

                                item.paymentRecord.createAt = D.split(' ')[0] + ',' + D.split(' ')[2] + ' ' + D.split(' ')[1] + ' ' + D.split(' ')[3]
                            }
                        })
                        this.totalRecordsCount = res.data.data.totalRecordsCount
                        this.orderList = this.orderList.concat(res.data.data.pageT)
                        this.loading = false
                        console.log(this.totalRecordsCount, this.orderList.length, this.totalRecordsCount !=0)
                        if ((this.totalRecordsCount == this.orderList.length) && this.totalRecordsCount !=0 ) {
                            this.$store.commit("setUser",{ key: "loading", value: false })
                        }
                    } else {
                        this.loading = false
                    }
                }).catch(e => {
                    console.log(e)
                    this.loading = false
                })
            }
            
        },
        docScroll (e) {
            this.$store.commit('setUser',{ key: 'dom', value: 'paymentHistory_content' })
            if (this.$refs.doctorList.scrollTop + this.$refs.doctorList.clientHeight-150 == this.$refs.doctorList_height.scrollHeight - 150) {
                if (this.orderList.length >= this.totalRecordsCount) {
                } else {
                    this.pageNum += 1
                    this.paymentRecord()
                }
            }
            if ( this.$refs.doctorList.scrollTop > 300 ) {
                this.$store.commit('setUser', { key: 'scrollTop', value: true } )
            } else {
                this.$store.commit('setUser', { key: 'scrollTop', value: false } )
            }
        },
    },
}
</script>

<style lang="less" scoped>
    @import "@/less/css.less";
    .paymentHistory {
        width: 100%;
        height: 100%;
        background: @content;
        padding: 0 15px;
        .paymentHistory_content {
            height: calc(100% - 59px);
            overflow: auto;
        }
        .paymentHistory_content::-webkit-scrollbar {
            width: 8px;
        }
        .paymentHistory_content::-webkit-scrollbar-thumb {
            border-radius: 15px;
            background: rgb(94, 94, 94);
        }
    }
    .paymentHistory_content_item {
        width: 98%;
        background: white;
        border-radius: 7px;
        box-shadow: 0 2px 2px 1px rgb(207, 206, 206);
        margin-bottom: 12px;
    }
    .payment_man_img {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        margin: 10px 20px;
        img {
            height: 100%;
        }
    }
    .much {
        margin: 0 20px;
    }
    .size16 {
        color: #9F9F9F;
        font-size: 16px;
    }
    .size17 {
        font-size: 17px;
    }
    .noThing {
        font-size: 19px;
        color: gray;
        font-weight: bold;
        margin-top: 30px;
    }
    .COLOR {
        color: #FF970F;
    }
    .COLOR1 {
        color: #FF3E61;
    }
    .acting {
        width: 100%;
        padding: 50px 0;
        // border: solid 1px;
    }
</style>