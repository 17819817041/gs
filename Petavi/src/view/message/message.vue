<style lang="less" scoped>
@import "@/less/css.less";
.customerPage {
    // position: fixed;
    // top: 119px;
    // left: 0;
    // width: 202px !important;
    background: white;
}
    .customer_content {
        width: 100%;
        box-sizing: border-box;
        .present_message {
            width: 202px;
            transition: 0.1s;
            @media screen and (max-width:1300px) {
                background: white;
                position: fixed;
                top: 100px;
                left: 0;
                width: 167px !important;
                opacity: 0;
            }
        }
    }
    .opacity {
        opacity: 1 !important;
        // border: solid 1px;
        overflow: auto;
        height: calc(100% - 100px);
        overflow: auto;
    }
    .present_item {
        width: 90%;
        margin: auto;
        border: #EFEEEE solid 1px;
        margin-top: 50px;
        position: relative;
        .arrow {
            position: absolute;
            top: 4px;
            right: 6px;
        }
    }
    .myPet {
        position: relative;
        .pet_list {
            background: white;
            width: 150px;
            max-height: 0;
            position: absolute;
            left: 0;
            top: 100%;
            transition: 0.3s;
            overflow: hidden;
        }
        img {
            transition: 0.3s;
        }
    }
    .list_item {
        padding: 2px;
        margin: 15px 5px;
        color: #C9C9C9;
        border-bottom: solid 1px #C9C9C9;
    }
    .height {
        max-height: 200px !important;
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
    .pet_name {
        padding: 10px 0;
    }
    .more_message {
        text-align: end;
        margin-top: 20px;
    }
    .administrator {
        margin-top: 30%;
        width: 130px;
        color: #212121;
        font-size: 12px;
        // white-space: nowrap;
        .administrator_item {
            padding: 10px 0 12px 0px;
        }
        .administrator_item div img {
            width: 28px;
            padding-right: 3px;
        }
    }
    .LOGO {
        img {
            width: 108px;
            height: 123px;
        }
        padding: 15px 30px 0 62px;
    }
    .physical {
        width: 108px;
        margin-top: 60%;
    }
    .rotate {
        transform: rotateZ(180deg);
    }
    .Icon {
        font-size:50px;
        color:gray;
    }
</style>

<template>
    <div class="customerPage">
        <div class="customer_content flex">
            <div :class="['present_message', 'noBar', {opacity: showDeta}]">
                <div class="present_item">
                    <div class="arrow">
                        <div class="myPet">
                            <!-- <img @click="showPetList" :class="[ {rotate: rotate} ]" src="@/assets/img/arrow.png" alt="">
                            <div :class="['pet_list', {height:show}]">
                                <div class="list_item" v-for="(item,i) in petList" :key="i">{{item.name}}</div>
                            </div> -->
                        </div>
                    </div>
                    
                    <div class="pet_img mg ju al cursor">
                        <img :src="pet.image" alt="" v-if="pet.image" @click="petDetails">
                        <i class="el-icon-picture-outline Icon" v-else></i>
                    </div>
                    <div class="pet_name size21 tc">{{pet.name}}</div>
                    <div class="details size12 tc">
                        <div>Pet ID : {{pet.id}}</div>
                        <div>Age : {{pet.age}}</div>
                        <div>Breed : {{pet.breed}}</div>
                        <div>Sex : {{pet.gender}}</div>
                        <div>Neutered status : {{pet.petJueYu}}</div>
                        <div>Weight : {{pet.weight}}</div>
                    </div>
                    <div class="more_message size12 cursor">
                        More...
                    </div>
                </div>
                <div class="administrator mg">
                    <div class="administrator_item flex cursor al" @click="myDoctor">
                        <div><img src="@/assets/img/doctor.png" alt=""></div>
                        <div>My Doctors</div>
                    </div>
                    <div class="administrator_item flex al cursor" @click="myAppointment">
                        <div><img src="@/assets/img/date.png" alt=""></div>
                        <div>Appointments</div>
                    </div>
                    <div class="administrator_item flex al cursor"  @click="Record">
                        <div><img src="@/assets/img/message.png" alt=""></div>
                        <div>Medical Record</div>
                    </div>
                    <div class="administrator_item flex al cursor" @click="paymentHistory">
                        <div><img src="@/assets/img/wallet.png" alt=""></div>
                        <div>My Payments History</div>
                    </div>
                    <div class="administrator_item cursor flex al" @click="setting">
                        <div><img src="@/assets/img/profile.png" alt=""></div>
                        <div>Setting</div>
                    </div>
                    <div class="ju cursor">
                        <img class="physical" @click="firstDid" src="@/assets/img/physical.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUserPetForOne } from "@/axios/request.js"
export default {
    data () {
        return {
            petId:'0000001',
            age:"2 yrs S mo",
            breed:'Husky',
            sex:"M",
            neuteredStatus:'None',
            weight: "33.5kg",

            show: false,
            change:true,
            rotate: false,
            pet: {},
            pageNum: 1,
            pageSize: 100
        }
    },
    created () {
        this.getPetList()
    },
    watch: {
        petList: {
            handler (val) {
                if (val[0]) {
                    this.pet = val[0]
                } else {
                    this.pet = {}
                }
            },
            immediate: true
        }
    },
    computed: {
        petList: {
            get () {return this.$store.state.user.petList},
            set (val) {
                this.$store.commit("setUser", {
                    key: "petList",
                    value: val
                })
            },
        },
        showDeta () { return this.$store.state.user.rotate }
    },
    methods: {
        getPetList () {
            var data = {
                userId: localStorage.getItem("userId"),
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            this.$store.dispatch("getPetList",data)
        },
        edit () {
            this.change = !this.change
        },
        showPetList () {
            this.show = !this.show
            this.rotate = !this.rotate
        },
        setting () {
            setTimeout(() => {
                this.$router.push("/setting")
            })
        },
        petDetails () {
            this.$router.push("/petDetails")
        },
        myAppointment () {
            this.$router.push("/myAppointment")
        },
        myDoctor () {
            this.$router.push("/myDoctor")
        },
        Record () {
            this.$router.push("/record")
        },
        paymentHistory () {
            this.$router.push("/paymentHistory")
        },
        firstDid () {
            this.$router.push("/firstAid")
        }
    }
}
</script>

