<template>
    <div class="myCustomer flex" v-loading="loading">
        <div class="animal">
            <div class="wrap noBar clear" v-if="getDoctorMedicalLimitList[0]">
                <div class="wrap_item float" v-for="(item,i) in getDoctorMedicalLimitList" :key="i" @click="toPatients(item)">
                    <div class="flex al">
                        <div class="ju al Personal">
                            <img class="personal_img" style="height:100%;" v-if="item.image" :src="item.image? item.image: null " alt="">
                            <i class="el-icon-picture-outline" style="font-size:25px;color:gray" v-else></i>
                        </div>
                        <div class="name">
                            <div class="size18 petName flex" v-if="item.name">
                                <div class="address_img"></div>
                                <div>{{item.name? item.name: "No Name"}}</div>
                            </div>
                            <div class="size18 flex" v-else>
                                <div class="address_img"></div>
                                <div>No Name</div>
                            </div>
                            <div class="size_14 flex">
                                <div class="address_img"></div>
                                <div>{{item.petId? item.petId: 'No Id'}}</div>
                            </div>
                            <div class="address flex">
                                <div><img class="address_img" src="@/assets/img/location.png" alt=""></div>
                                <div class="size_14 address_name">{{item.address? item.address: "No Address"}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="tc bold"  style="padding-top: 150px;color:gray;font-size:23px">No treatment record!</div>
            </div>
        </div>
        <div class="personWithAnimal noBar">
            <div class="information_wrap">
                <div class="petDetails">
                    <div class="petDetails_item">
                        <div class="Title sb">
                            <div class="size19">Pet Details</div>
                        </div>
                        <div class="ju mg al PET_IMG">
                            <img class="Img" :src="petAndUser.petHeadUrl" alt="" v-if="petAndUser.petHeadUrl">
                            <i class=" el-icon-picture-outline Icon" style="font-size:60px;color:gray;" v-else></i>
                        </div>
                        <div class="pet_information">
                            <div class="pet_name size19" v-if="petAndUser.petName">{{petAndUser.petName}}</div>
                            <div class="pet_name size19" v-else>No Name</div>
                            <div class="size15bl">Pet ID : {{petAndUser.petId}}</div>
                            <div class="size15bl">Age : {{petAndUser.petAge}}</div>
                            <div class="size15bl">Sex : {{petAndUser.petGenderName}}</div>
                            <div class="size15bl">neutered status : 
                                <span v-if="petAndUser.neuteredState == 1">Sterilization</span> 
                                <span v-else-if="petAndUser.neuteredState == 2">Unneutered</span> 
                            </div>
                            <div class="size15bl">Weight : {{petAndUser.petWeight}}kg</div>
                        </div>
                        <!-- <div class="petMore te cursor"><span>More...</span></div> -->
                    </div>
                </div>
                <div>
                    <div class="guardianDetails mg size19">Guardian Details</div>
                    <div class="ju al patients_img_wrap mg">
                        <img class="patients_img" v-if="petAndUser.userHead" :src="petAndUser.userHead" alt="">
                        <i class=" el-icon-picture-outline Icon" style="font-size:40px;color:gray;" v-else></i>
                    </div>
                    <div class="size19 tc personal_name">{{petAndUser.userName}}</div>
                    <div class="address ju">
                        <div>
                            <img class="address_img" src="@/assets/img/location.png" alt="">
                        </div>
                        <div class="size13">
                            <span v-if="petAndUser.address">{{petAndUser.address}}</span>
                            <span v-else>No Address</span>
                        </div>
                    </div>
                    <div class="ju CHAT">
                        <div class="ju al"><img class="relationWay cursor" src="@/assets/img/videoWay.png" alt=""></div>
                    </div>
                    <div class="message_list size15bl">
                        <div style="width:100%" class="flex al ts">
                            <div class="const">User ID</div>
                            <div class="event">{{petAndUser.userId}}</div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Name</div>
                            <div class="event">{{petAndUser.userName}}</div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Age</div>
                            <div class="event">{{petAndUser.age}}</div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Location</div>
                            <div class="event">
                                <span v-if="petAndUser.address">{{petAndUser.address}}</span>
                                <span v-else>No Address</span>
                            </div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Mobile</div>
                            <div class="event">{{petAndUser.moble}}</div>
                        </div>
                    </div>
                    <div class="personMore mg te cursor"><span @click="moreDetail">More...</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUserByPetId, delPetMedicalRecordById, getPetMedicalRecord } from "@/axios/request.js"
export default {
    data () {
        return {
            pageNum: 0,
            pageSize: 100,
            petAndUser: {},
            changePage: {},
            getDoctorMedicalLimitListStatus: true,
            getDoctorMedicalLimitList: [],
            pageNum_m: 1,
            pageSize_m: 100,
            loading: true
        }
    },
    mounted () {
        
    },
    created () {
        this.PetMedicalRecord()
    },
    watch: {
        
    },
    computed: {
        
    },
    methods: {
        PetMedicalRecord () {
            let data = {
                doctorId: localStorage.getItem('userId'),
                pageNum: this.pageNum_m,
                pageSize: this.pageSize_m
            }
            getPetMedicalRecord(data).then(res => {
                console.log(res,'PetMedicalRecord')
                if (res.data.rtnCode == 200) {
                    this.getDoctorMedicalLimitList = res.data.data.pageT
                    let id = res.data.data.pageT[0].petId
                    this.getUserByPetId(id)
                    this.loading = false
                } else if (res.data.rtnCode == 201) {
                    this.getDoctorMedicalLimitListStatus = false
                    this.loading = false
                }
            }).catch(e => {
                console.log(e)
                this.loading = false
            })
        },
        first (val) {
            let data = {
                petId: this.petList[0].id
            }
            getUserByPetId(data).then(res => {
                console.log(res,'petAndUser')
                if (res.data.rtnCode == 200) {
                    this.petAndUser = res.data.data
                }
            }).catch(e => {
                console.log(e)
            })
        },
        getUserByPetId (id) {
            let data = {
                petId: id
            }
            getUserByPetId(data).then(res => {
                if (res.data.rtnCode == 200) {
                    this.petAndUser = res.data.data
                }
            }).catch(e => {
                console.log(e)
            })
        },
        toPatients (item,i) {
            this.getUserByPetId(item.petId)
            // let data = {
            //     petMedicalRecordId: item.id
            // }
            // delPetMedicalRecordById (data).then(res => {
            //     console.log(res)
            // })
        },
        moreDetail () {
            if (this.changePage) {
                this.$router.push("/patients?id=" + this.petAndUser.petId)
            } else {

            }
        }
    }
}
</script>

<style lang="less" scoped>
    @import "@/less/css.less";
    #player1 {
        z-index: 100;
        width: 200px;
        height: 200px;
        border: solid 1px;
    }
    .player {
        width: 98%;
        height: 600px;
        border: solid 1px;
    }
    .myCustomer {
        height: 100%;
        width: 100%;
    }
    .animal {
        width: 74%;
        border: #F3F3F3 solid 1px;
        border-radius: 4px;
        // margin-top: 10px;
        @media screen and (max-width:1000px) {
            width: 60%;
        }
        .wrap {
            width: 102.5%;
            padding: 1.8% 1.3% 1.8% 1.8%;
            height: 100%;
            overflow: auto;
        }
    }
    .personal_name {
        padding: 10px 0;
    }
    .wrap_item {
        width: 30.33%;
        padding: 20px 0;
        box-shadow: 0 2px 1px 1px #D5D5D5;
        margin: 0 3% 10px 0%;
        transition: 0.2s;
        padding: 25px 20px;
        @media screen and (max-width:1100px) {
            width: 45%;
            margin: 0 1.5% 5px 3.5%;
        }
        // @media screen and (max-width:1620px) {
        //     width: 46%;
        //     margin: 0 3.5% 5px 0.5%;
        // }
        // @media screen and (max-width:1000px) {
        //     width: 80%;
        //     margin: 0 3.5% 5px 8.5%;
        // }
    }
    .patients_img_wrap {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        margin-top: 5px;
        border: solid 1px rgb(211, 208, 208);
    }
    .Personal {
        width: 65px;
        height: 65px;
        overflow: hidden;
        border: solid 1px rgb(228, 223, 223);
        border-radius: 50%;
        margin-right: 10px;
    }
    .personal_img {
        height: 70px;
    }
    .personWithAnimal {
        height: 100%;
        overflow: auto;
        width: 26%;
        .information_wrap {
            width: 90%;
            margin: auto;
            height: 100%;
        }
    }
    .name {
        width: 60%;
    }
    .address_name {
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 2;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }
    .size18 {
        font-size: 18px;
    }
    .petName {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    // .address {
    //     border: solid 1px;
    // }
    .address_img {
        width: 14px;
        height: 19px;
        margin-right: 8px;
    }
    .size19 {
        font-size: 19px;
    }
    .size_14 {
        color: #9F9F9F;
        font-size: 14px;
    }
    .size13 {
        font-size: 13px;
        color: #9F9F9F;
    }
    .size15bl {
        font-size: 15px;
    }
    .patients_img {
        height: 100%;
    }
    .message_list {
        width: 65%;
        margin: 20px auto;
    }
    .const {
        width: 35%;
        padding-bottom: 11px;
    }
    .event {
        width: 65%;
        padding-bottom: 11px;
    }
    .petDetails {
        width: 100%;
        .petDetails_item {
            width: 80%;
            margin: auto;
        }
    }
    .Title {
        padding: 10px 0;
    }
    .Img {
        height: 100%;
    }
    .pet_information {
        width: 70%;
        margin: auto;
        div {
            padding-bottom: 11px;
        }
    }
    .petMore {
        // margin-top: 40px;
        span{
            color: #1976D2;
            font-size: 16px;
            text-decoration: underline;
        }
    }
    .guardianDetails {
        width: 80%;
    }

    .personMore {
        width: 80%;
        span{
            color: #1976D2;
            font-size: 16px;
            text-decoration: underline;
        }
    }
    .relationWay {
        padding: 0 15px;
    }
    .Icon {
        font-size:35px;
        color:gray;
    }
    .PET_IMG {
        width: 150px;
        height: 150px;
        border: solid 1px rgb(218, 210, 210);
        border-radius: 50%;
        overflow: hidden;
    }
    .CHAT {
        div {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            margin: 0 5px;
            img {
                height: 100%;
            }
        }
    }
</style>