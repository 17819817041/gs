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
            height: 100%;
            @media screen and (max-width:1300px) {
                background: white;
                // position: fixed;
                // top: 100px;
                // left: 0;
                width: 180px !important;
                // opacity: 0;
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
        margin-top: 20%;
        width: 130px;
        color: #212121;
        font-size: 12px;
        white-space: nowrap;
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
        margin-top: 30%;
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
            <div :class="['present_message', 'noBar' ]" @scroll="scroll">
                <div class="present_item">
                    
                    <div class="pet_img mg ju al">
                        <img v-if="pet.familyMember.headImg" :src="pet.familyMember.headImg" alt="">
                        <img style="height: 100%;" v-else src="@/assets/img/defaultimg.jpg" alt="">
                        
                    </div>
                    <div class="pet_name size21 tc" v-if="pet.familyMember.name">{{pet.familyMember.name}}</div>
                    <div class="pet_name size21 tc" v-else>No Name</div>
                    <div class="details size12 tc">
                        <div>User ID : {{pet.familyMember.id}}</div>
                        <div>Age : {{pet.familyMember.age}}</div>
                        <div>Relation : {{pet.familyMember.familyRelations}}</div>
                        <div>Sex :  <span v-if="pet.familyMember.sex == 1">Male</span> <span v-else-if="pet.familyMember.sex == 2">Female</span> </div>
                        <div>Height : {{pet.familyMember.height}} cm</div>
                        <div>Weight : {{pet.familyMember.weight}} kg</div>
                    </div>
                    <div class="more_message size12 flexEnd">
                        <span @click="petDetails" class="cursor"> More...</span>
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
                    <div class="ju ">
                        <img class="physical cursor" @click="firstDid" src="@/assets/img/physical.png" alt="">
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
            show: false,
            change:true,
            rotate: false,
            pageNum: 1,
            timer: null,
            pageSize: 100,
            options: []
        }
    },
    created () {
        this.getPetList()
        if (this.pet) {
            this.$store.commit("setUser",{ key: "petId", value: this.pet.id })
            this.$store.commit("setUser",{ key: "pet", value: this.pet })
        }
    },
    mounted () {
       
    },
    watch: {
        petList: {
            handler (val) {
                // if (val[0]) {
                //     this.pet = val[0]
                // } else {
                //     this.pet = {}
                // }
            },
            immediate: true
        },
        petId1: {
            handler (val) {
                if (val) {
                    this.getPetType()
                }
            }
        },
        pet: {
            handler (val) {
                if (val) {
                    this.pet = val
                }
            }
        },
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
        petId1: {
            get () {return this.$store.state.user.petId},
            set (val) {
                this.$store.commit("setUser", {
                    key: "petId",
                    value: val
                })
            },
        },
        pet: {
            get () {return this.$store.state.user.pet},
            set (val) {
                this.$store.commit("setUser", {
                    key: "pet",
                    value: val
                })
            },
        },
    },
    methods: {
        scroll (val) {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                console.log(val)
                if (val.target.scrollTop >= 30) {
                    this.$store.commit("setUser", { key: "nameList",value: false })
                } else {
                    this.$store.commit("setUser", { key: "nameList",value: true })
                }   
            },10)
        },
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
            this.$router.push({
                name: 'allRecord',
                // query: {
                //     pet: this.petId1
                // }
            })
        },
        paymentHistory () {
            this.$router.push("/paymentHistory")
        },
        firstDid () {
            // this.$message({
            //     type: 'error',
            //     message: 'The function is not yet perfect!'
            // })
            this.$router.push("/firstAid")
        }
    }
}
</script>

