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
    .pet_name {
        padding: 10px 0;
    }
    .pet_img {
        margin-top: 30px;
        width: 100px;
        height: 100px;
        border: solid 1px rgb(230, 223, 223);
        border-radius: 50%;
        overflow: hidden;
        img {
            height: 100%;
        }
    }
    .present_item {
        height: 321px;
        margin: 45px 0;
        .present_item_i {
            width: 90%;
            padding: 10px 0;
            border: #dbdbdb solid 1px;
        }
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
                    <div v-show="active" class="mg present_item_i">
                        <div class="pet_img mg ju al">
                            <img :src="agoraPet.petHeadUrl" alt="" v-if="agoraPet.petHeadUrl">
                            <i class="el-icon-picture-outline Icon" style="font-size: 40px;color:gray" v-else></i>
                        </div>
                        <div class="pet_name size21 tc" v-if="agoraPet.petName">{{agoraPet.petName}}</div>
                        <div class="pet_name size21 tc" v-else>No Name</div>
                        <div class="details size12 tc">
                            <div>Pet ID : {{agoraPet.petId}}</div>
                            <div>Pet Owner : {{agoraPet.userName}}</div>
                            <div>Age : {{agoraPet.petAge}}</div>
                            <div>Breed : {{agoraPet.breed}}</div>
                            <div>Sex :  {{agoraPet.petGenderName}} </div>
                            <div>Neutered status :  
                                <span v-if="agoraPet.neuteredState == 1">Sterilization</span> 
                                <span v-else-if="agoraPet.neuteredState == 2">Unneutered</span> 
                            </div>
                            <div>Weight : {{agoraPet.petWeight}}</div>
                        </div>
                        <div class="more_message te size12 cursor">
                            More...
                        </div>
                    </div>
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
                        <img class="physical cursor" src="@/assets/img/chatLogo.png" alt="" @click="adminChat">
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
            active: false
        }
    },
    mounted () {

    },
    created () {
        
    },
    watch: {
        agoraPet: {
            handler (val) {
                this.user = JSON.parse(JSON.stringify(this.agoraPet))
            },
            immediate: true
        },
        '$route': {
            handler (val) {
                if (val.name == 'agora') {
                    this.active = true
                } else {
                    this.active = false
                }
            },
            immediate: true
        }
    },
    computed: {
        agoraPet: {
            get () { return this.$store.state.user.agoraPet },
            set (val) {
                this.$store.commit("setUser", {
                    key: "agoraPet",
                    value: val
                })
            },
        }
    },
    methods: {
        adminChat () {
            this.$router.push('/chatRoom')
        },
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

