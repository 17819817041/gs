<style lang="less" scoped>
@import "@/less/css.less";
    .customer_content {
        box-sizing: border-box;
        .present_message {
            width: 202px;
            transition: 0.25s;
            height: 100%;
            @media screen and (max-width:1200px) {
                max-width: 0px;
                max-height: 0px;
                overflow: hidden;
            }
        }
    }
    .present_item {
        height: 374px;
    }
    .administrator {
        width: 167px;
        color: #212121;
        font-size: 12px;
        white-space: nowrap;
        .administrator_item {
            padding: 10px 0 12px 5px;
        }
        .administrator_item div img {
            width: 28px;
            padding-right: 3px;
        }
    }
    .physical {
        width: 108px;
        margin-top: 50px;
    }
</style>
<template>
    <div class="customerPage flex">
        <div class="customer_content flex">
            <div class="present_message">
                <div class="present_item">
                    
                </div>
                <div class="administrator mg">
                    <div class="administrator_item cursor flex al" @click="appointment">
                        <div><img src="@/assets/img/date.png" alt=""></div>
                        <div>Doctor Appointments</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="vetRecord">
                        <div><img src="@/assets/img/message.png" alt=""></div>
                        <div>Medical Record</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="myPaymentHistory">
                        <div><img src="@/assets/img/wallet.png" alt=""></div>
                        <div>Payments Record</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="setting">
                        <div><img src="@/assets/img/profile.png" alt=""></div>
                        <div>Setting</div>
                    </div>
                    <div>
                        <img class="physical" src="@/assets/img/chat.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    data () {
        return {
          
        }
    },
    mounted () {

    },
    created () {
        
    },
    
    methods: {
        setting () {
            this.$router.push("/vetSetting")
        },
        petDetails () {
            this.$router.push("/petDetails")
        },
        appointment () {
            this.$router.push("/appointment")
        },
        myCustomer () {
            this.$router.push("/myCustomer")
        },
        myPaymentHistory () {
            this.$router.push("/myPaymentHistory")
        },
        vetRecord () {
            this.$router.push("/vetRecord")
        }
    }
}
</script>

