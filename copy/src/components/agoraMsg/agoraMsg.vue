<style lang="less" scoped>
@import "@/less/css.less";
    .customer_content {
        box-sizing: border-box;
        .present_message {
            width: 202px;
            transition: 0.25s;
            height: 100%;
            @media screen and (max-width:1300px) {
                width: 167px;
            }
        }
    }
    .present_item {
        width: 90%;
        margin: auto;
        border: #EFEEEE solid 1px;
        margin-top: 50px;
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
    .Icon {
        font-size:50px;
        color:gray;
    }
    .pet_name {
        padding: 10px 0;
    }
    .more_message {
        text-align: end;
        margin: 20px 20px 20px 0;
    }
    .administrator {
        width: 167px;
        color: #212121;
        font-size: 12px;
        white-space: nowrap;
        margin-top: 30px;
        .administrator_item {
            padding: 10px 0 12px 5px;
        }
        .administrator_item div img {
            width: 28px;
            padding-right: 3px;
        }
    }
</style>

<template>
    <div class="customerPage flex">
        <!-- <div><myHeaderL></myHeaderL></div> -->
        <div class="customer_content flex">
            <div class="present_message">
                <!-- <div class="LOGO"><img src="@/assets/img/logo.png" alt=""></div> -->
                <div class="present_item">
                    
                    <div class="pet_img mg ju al">
                        <img :src="pet.petHeadUrl" alt="" v-if="pet.petHeadUrl">
                        <i class="el-icon-picture-outline Icon" v-else></i>
                    </div>
                    <div class="pet_name size21 tc">{{pet.petName}}</div>
                    <div class="details size12 tc">
                        <div>Pet ID : {{pet.petId}}</div>
                        <div>Age : {{pet.petAge}}</div>
                        <div>Breed : {{pet.breed}}</div>
                        <div>Sex :  {{pet.petGenderName}}</div>
                        <div>Neutered status : <span v-if="pet.neuteredState == 1">Sterilization</span><span v-else-if="pet.neuteredState == 2">Unneutered</span> </div>
                        <div>Weight : {{pet.petWeight}} kg</div>
                    </div>
                    <div class="more_message size12 cursor" @click="petDetails">
                        More...
                    </div>
                </div>
                <div class="administrator mg">
                    <div class="administrator_item cursor flex al" @click="myCustomer">
                        <div><img src="@/assets/img/doctor.png" alt=""></div>
                        <div>My Customer</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="appointment">
                        <div><img src="@/assets/img/date.png" alt=""></div>
                        <div>Appointments</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="vetRecord">
                        <div><img src="@/assets/img/message.png" alt=""></div>
                        <div>EHR Files</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="myPaymentHistory">
                        <div><img src="@/assets/img/wallet.png" alt=""></div>
                        <div>Payments</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="setting">
                        <div><img src="@/assets/img/profile.png" alt=""></div>
                        <div>Setting</div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import { getUserByPetId } from "@/axios/request.js"
export default {
    data () {
        return {
            showDetails: false,
            pet: {}
        }
    },
    mounted () {

    },
    created () {
        
    },
    watch: {
        petId: {
            handler (val) {
                if (val) {
                    this.getUserByPetId1()
                }
            },
            immediate: true
        }
    },
    computed: {
        // pet () { return this.$store.state.user.pet },
        petId () { return this.$store.state.user.petId },
    },
    methods: {
        getUserByPetId1 () {
            let data = {
                petId: this.petId
                // petId: 48
            }
            getUserByPetId(data).then(res => {
                console.log(res,'petAndUser')
                if (res.data.rtnCode == 200) {
                    this.pet = res.data.data
                }
            }).catch(e => {
                console.log(e)
            })
        },
        setting () {
            this.$router.push("/vetSetting")
        },
        petDetails () {
            // this.$router.push("/petDetails")
            this.showDetails = true
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

