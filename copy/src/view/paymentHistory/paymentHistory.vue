<template>
    <div class="paymentHistory">
        <div class="explan al">
            <img src="@/assets/img/account.png" alt="">
            My Payment History
        </div>
        <div class="paymentHistory_content" v-if="orderList">
            <div class="paymentHistory_content_item sb mg" v-for="(item,i) in orderList" :key="i">
                <div class="flex al">
                    <div class="payment_man_img ju al">
                        <img :src="item.imageUrl" v-if="item.imageUrl" alt="">
                        <i class="el-icon-picture-outline" style="color: gray;font-size: 20px" v-else></i>
                    </div>
                    <div class="payment_details">
                        <div class="size17">
                            <span v-if="item.paymentUserName">{{item.paymentUserName}}</span>
                            <span v-else>No Name</span>
                        </div>
                        <div class="size16">{{item.paymentName}}</div>
                    </div>
                </div>
                <div class="much al">
                    <div>
                        <div class="flexEnd">$100</div>
                        <div>{{item.paymentTime}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="paymentHistory_content" v-else>
            <div class="tc noThing">No records!</div>
        </div>
    </div>
</template>

<script>
import { pay, updateUserDetails, file, allOrder } from "@/axios/request.js"
export default {
    data () {
        return {
            orderList: []
        }
    },
    created () {
        this.getAllOrder()
    },
    methods: {
        getAllOrder () {
            let data = {
                userId: localStorage.getItem('userId'),
                pageNum: 0,
                pageSize: 10
            }
            allOrder(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.orderList = res.data.data.pageT
                }
            })
        },
    }
}
</script>

<style lang="less" scoped>
    @import "@/less/css.less";
    .paymentHistory {
        width: 100%;
        height: 100%;
        background: @content;
        .paymentHistory_content {
            height: 100%;
            
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
</style>