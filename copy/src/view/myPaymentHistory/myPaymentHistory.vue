<template>
    <div class="myPaymentHistory">
        <div class="explan al">
            <img src="@/assets/img/account.png" alt="">
            My Payment History
        </div>
        <div class="myPaymentHistory_content">
            <div class="myPaymentHistory_content_item sb mg">
                <div class="flex al">
                    <div class="payment_man_img"><img src="@/assets/img/john.png" alt=""></div>
                    <div class="payment_details">
                        <div class="size17">Mukesh Raut</div>
                        <div class="size16">Money recieved - Pending</div>
                    </div>
                </div>
                <div class="much al">
                    +666
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    

}
</script>

<style lang="less" scoped>
    @import "@/less/css.less";
    .myPaymentHistory {
        width: 100%;
        height: 100%;
        background: @content;
        .myPaymentHistory_content {
            height: 100%;
            
        }
    }
    .myPaymentHistory_content_item {
        width: 98%;
        background: white;
        border-radius: 7px;
        box-shadow: 0 2px 2px 1px rgb(207, 206, 206);
    }
    .payment_man_img {
        width: 50px;
        height: 50px;
        margin: 10px 20px;
        img {
            width: 100%;
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
</style>