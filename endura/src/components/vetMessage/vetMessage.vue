<style lang="less" scoped>
@import "@/less/css.less";
    .customerPage {
        height: 100%;
    }
    .customer_content {
        box-sizing: border-box;
        .present_message {
            width: 202px;
            transition: 0.25s;
            height: 100%;
            @media screen and (max-width:1300px) {
                width: 180px;
            }
        }
    }
    .present_item {
        height: calc(100% - 470.88px);
        // height: calc(100% - 425.88px);
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
        <!-- <div><myHeaderL></myHeaderL></div> -->
        <div class="customer_content flex">
            <div class="present_message">
                <!-- <div class="LOGO"><img src="@/assets/img/logo.png" alt=""></div> -->
                <div class="present_item">
                    
                </div>
                <div class="administrator mg">
                    <div class="administrator_item cursor flex al" @click="myCustomer">
                        <div><img src="@/assets/img/doctor.png" alt=""></div>
                        <div>My Patients</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="appointment">
                        <div><img src="@/assets/img/date.png" alt=""></div>
                        <div>Appointments</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="vetRecord">
                        <div><img src="@/assets/img/message.png" alt=""></div>
                        <div>Medical Record</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="myPaymentHistory">
                        <div><img src="@/assets/img/wallet.png" alt=""></div>
                        <div>My Payments History</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="Training">
                        <div><img src="@/assets/img/train.png" alt=""></div>
                        <div>Training</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="setting">
                        <div><img src="@/assets/img/profile.png" alt=""></div>
                        <div>Setting</div>
                    </div>
                    <div class="ju">
                        <img class="physical" src="@/assets/img/physical3.png" alt="">
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
            this.$router.push("/medical")
        },
        Training () {
            this.$router.push('/Training')
        }
    }
}
</script>

