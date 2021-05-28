<style lang="less" scoped>
@import "@/less/css.less";
    .customer_content {
        width: 100%;
        box-sizing: border-box;
        .present_message {
            width: 202px;
            transition: 0.25s;
            @media screen and (max-width:1200px) {
                max-width: 0px;
                max-height: 0px;
                overflow: hidden;
            }
        }
    }
    .present_item {
        width: 90%;
        margin: auto;
        border: #EFEEEE solid 1px;
        margin-top: 60px;
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
        padding-top: 10px;
    }
    .pet_name {
        padding: 15px 0;
    }
    .more_message {
        text-align: end;
        margin-top: 20px;
    }
    .administrator {
        width: 138px;
        color: #212121;
        font-size: 12px;
        white-space: nowrap;
        .administrator_item {
            padding: 10px 0 12px 7px;
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
        margin-top: 50px;
    }
    .rotate {
        transform: rotateZ(180deg);
    }
</style>

<template>
    <div class="customerPage">
        <div class="customer_content flex">
            <div class="present_message">
                <div class="present_item">
                    <div class="arrow">
                        <div class="myPet">
                            <img @click="petList" :class="[ {rotate: rotate} ]" src="@/assets/img/arrow.png" alt="">
                            <div :class="['pet_list', {height:show}]">
                                <div class="list_item">666</div>
                                <div class="list_item">666</div>
                                <div class="list_item">666</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pet_img ju">
                        <img src="@/assets/img/petimg.png" alt="" @click="petDetails">
                    </div>
                    <div class="pet_name size21 tc">Daisy</div>
                    <div class="details size12 tc">
                        <div>Pet ID : {{petId}}</div>
                        <div>Age : {{age}}</div>
                        <div>Breed : {{breed}}</div>
                        <div>Sex : {{sex}}</div>
                        <div>Neutered status : {{neuteredStatus}}</div>
                        <div>Weight : {{weight}}</div>
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
import { petList } from "@/axios/request.js"
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
            data: {
                userId: localStorage.getItem("userId"),
                pageNum: 0,
                pageSize: 10
            }
        }
    },
    created () {
        this.getPetList()
    },
    methods: {
        getPetList () {
            petList(this.data).then(res => {
                console.log(res,"宠物列表")
            })
        },
        edit () {
            this.change = !this.change
        },
        petList () {
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

