<template>
    <div class="paymentHistory paymentHistory_cus" v-loading="loading">
        <div class="explan al sb">
            <div class="al">
                <img src="@/assets/img/account.png" alt="">
                My Payment History
            </div>
            <div class="sort_booking">
                <el-select v-model="sort_m" placeholder="Classification" @change="sort_t">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="paymentHistory_content" v-if="orderList">   
            <div>
                <div class="paymentHistory_content_item sb mg" v-for="(item,i) in orderList" :key="i">
                    <div class="flex al" v-if="item.orderType == 'Recharge'">
                        <div class="payment_man_img ju al" >
                            <img style="height: 60%;" src="@/assets/img/Paypal.png" v-if="item.paymentRecord.paymentTypeId == 5" alt="">
                            <img style="height: 60%;" src="@/assets/img/stripe.png" v-else-if="item.paymentRecord.paymentTypeId == 2" alt="">
                            <img style="height: 60%;" src="@/assets/img/alipay.png" v-else-if="item.paymentRecord.paymentTypeId == 3" alt="">
                            <img style="height: 60%;" src="@/assets/img/chatpay.png" v-else-if="item.paymentRecord.paymentTypeId == 4" alt="">
                        </div>
                        <div class="payment_details">
                            <div class="size17">
                                <span v-if="item.paymentRecord.paymentTypeId == 5">Paypal</span>
                                <span v-else-if="item.paymentRecord.paymentTypeId == 4">Wechat_Pay</span>
                                <span v-else-if="item.paymentRecord.paymentTypeId == 3">Alipay</span>
                                <span v-else-if="item.paymentRecord.paymentTypeId == 2">stripe</span>
                            </div>
                            <div class="size16">{{item.orderType}}</div>
                        </div>
                    </div>
                    <div class="flex al" v-else>
                        <div class="payment_man_img ju al">
                            <img :src="item.userImage" v-if="item.userImage" alt="">
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
                        <div class="size16">
                            <div :class="[ 'te', {'COLOR': item.paymentRecord.orderTypeId == 1}, {'COLOR1': item.paymentRecord.orderTypeId == 4}]">
                                <span v-if="item.consumeType == 0">-</span>
                                <span v-else-if="item.consumeType == 1">+</span>
                                ${{item.paymentRecord.price}}</div>
                            <div>{{item.paymentRecord.createAt}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="paymentHistory_content" v-else-if="orderList === null">
            <div class="tc noThing">No records!</div>
        </div>
        <div class="ju">
            <el-pagination
                :small="small"
                :pager-count='7'
                :page-size= '15'
                layout="prev, pager, next"
                :total="totalRecordsCount"
                @current-change='pageCut'>
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { getPaymentRecordAll } from "@/axios/request.js"
export default {
    data () {
        return {
            orderList: [],
            pageNum: 1,
            pageSize: 15,
            totalRecordsCount: 0,
            small: false,
            userType: 1,       // 1：用户 2：医生
            loading: false,
            options: [{
                value: 1,
                label: 'Customer'
                }, {
                value: 2,
                label: 'Doctor'
            }],
            value: 1,
            undone_totalRecordsCount: 0,
            completed_totalRecordsCount: 0,
            small: false,
            sort_m: 1
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
        default_img () { return this.$store.state.user.default_img }
    },
    created () {
        this.paymentRecord()
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
    methods: {
        sort_t (val) {
            this.pageNum = 1
            this.userType = val
            this.orderList = []
            this.paymentRecord()
        },
        paymentRecord () {
            let data = {
                userType: this.userType,
                pageNum: this.pageNum,
                pageSize: 15
            }
            this.loading = true
            getPaymentRecordAll(data).then(res => {
                console.log(res)
                this.loading = false
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
                    // this.orderList = this.orderList.concat(res.data.data.pageT)
                    this.orderList = res.data.data.pageT
                    this.loading = false
                } else {
                    this.loading = false
                    this.orderList = null
                }
            }).catch(e => {
                console.log(e)
                this.loading = false
                this.orderList = null
            })
        },
        pageCut (val) {
            this.pageNum = val
            this.paymentRecord()
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
        @media screen and (max-width: 371px) {
            padding: 0;
        }
        .paymentHistory_content {
            height: calc(100% - 109px);
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
        @media screen and (max-width: 397px) {
            width: 45px;
            height: 45px;
            min-width: 45px;
            min-height: 45px;
            overflow: hidden;
            border-radius: 50%;
            margin: 10px 10px;
        }
        img {
            height: 100%;
        }
    }
    .much {
        margin: 0 20px;
        white-space: nowrap;
    }
    .size16 {
        color: #9F9F9F;
        font-size: 16px;
        @media screen and (max-width: 564px) {
            font-size: 12px;
        }
    }
    .size17 {
        font-size: 17px;
        @media screen and (max-width: 564px) {
            font-size: 13px;
        }
    }
    .payment_details {
        white-space: nowrap;
        @media screen and (max-width: 340px) {
            white-space: normal;
            // word-wrap: break-word !important;
        }
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
        @media screen and (max-width: 564px) {
            width: 100%;
            padding: 20px 0;
        }
    }
    .sort_booking {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        border: solid 2px rgb(199, 199, 199);
        margin-left: 7px;
        width: 150px;
        @media screen and (max-width: 1020px) {
            display: none;
        }
    }
</style>