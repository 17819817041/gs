<template>
    <div class="myCustomer flex">
        <el-backtop target=".wrap"></el-backtop>
        <div class="animal">
            <div class="wrap" v-if="getDoctorMedicalLimitList !== null" @scroll="docScroll" ref="doctorList">
                <div class="clear" ref="doctorList_height">
                    <div class="wrap_item float" v-for="(item,i) in getDoctorMedicalLimitList" :key="i" @click="toPatients(item)">
                        <div class="flex al">
                            <div class="ju al Personal">
                                <img class="personal_img" style="height:100%;" v-if="item.image" :src="item.image? item.image: null " alt="">
                                <img style="height:100%;" v-else :src="default_img" alt="">
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
                <div class="acting ju al" v-if="loading">
                    <div style="height: 100px;" v-loading="true"></div>
                </div>
            </div>
            <div v-else>
                <div class="tc bold"  style="padding-top: 150px;color: gray;font-size: 23px">No treatment record!</div>
            </div>
        </div>
        <div class="personWithAnimal noBar">
            <div class="information_wrap" v-loading='p_loading'>
                <div class="petDetails">
                    <div class="petDetails_item">
                        <div class="Title sb">
                            <div class="size19">Pet Details</div>
                        </div>
                        <div class="ju mg al PET_IMG">
                            <img class="Img" :src="petAndUser.petHeadUrl" alt="" v-if="petAndUser.petHeadUrl">
                            <img style="height:75%;" v-else :src="d_img" alt="">
                            <!-- <i class=" el-icon-picture-outline Icon" style="font-size:60px;color:gray;" v-else></i> -->
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
                        <img style="height:100%;" v-else :src="default_img" alt="">
                        <!-- <i class=" el-icon-picture-outline Icon" style="font-size:40px;color:gray;" v-else></i> -->
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

        <el-drawer
            class="el_drawer_mobile"
            title="Customer Detail"
            :visible.sync="drawer"
            size='80%'>
            <div class="personWithAnimal_mobile noBar">
                <div class="information_wrap" v-loading='p_loading'>
                    <div class="petDetails">
                        <div class="petDetails_item">
                            <div class="Title sb">
                                <div class="size19">Pet Details</div>
                            </div>
                            <div class="ju mg al PET_IMG">
                                <img class="Img" :src="petAndUser.petHeadUrl" alt="" v-if="petAndUser.petHeadUrl">
                                <img style="height:75%;" v-else :src="d_img" alt="">
                                <!-- <i class=" el-icon-picture-outline Icon" style="font-size:60px;color:gray;" v-else></i> -->
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
                    <div style="height: 560px;">
                        <div class="guardianDetails mg size19">Guardian Details</div>
                        <div class="ju al patients_img_wrap mg">
                            <img class="patients_img" v-if="petAndUser.userHead" :src="petAndUser.userHead" alt="">
                            <img style="height:100%;" v-else :src="default_img" alt="">
                            <!-- <i class=" el-icon-picture-outline Icon" style="font-size:40px;color:gray;" v-else></i> -->
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
        </el-drawer>
    </div>
</template>

<script>
import { getUserByPetId, getPetMedicalRecord, s_online } from "@/axios/request.js"
import image from '@/assets/img/default.png'
export default {
    data () {
        return {
            pageNum: 1,
            petAndUser: {},
            changePage: {},
            drawer: false,
            totalRecordsCount: 0,
            p_loading: false,
            d_img: ''
        }
    },
    mounted () {
        let data = {
            userId: localStorage.getItem('userId'),
            platform: localStorage.getItem('platform')
        }
        s_online(data).then(res => {
            
        })
    },
    created () {
        this.$store.commit("setUser", {
            key: "getDoctorMedicalLimitList",
            value: []
        })
        this.PetMedicalRecord()
        this.d_img = image
    },
    beforeMount() {
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth <= 800) {
                this.drawer = false
            }
        })
    },
    watch: {
        getDoctorMedicalLimitList: {
            handler (val) {
                if (val) {
                    this.getDoctorMedicalLimitList = val
                }
            },
        },
        inp: {
            handler (val) {
                this.pageNum = 1
                if (!val) {
                    this.$store.commit("setUser", {
                        key: "getDoctorMedicalLimitList",
                        value: []
                    })
                    this.PetMedicalRecord()
                }
            }
        },
        loading: {
            handler (val) {
                if (val) {
                    this.loading = val
                }
            },
        },
    },
    computed: {
        getDoctorMedicalLimitList: {
            get () { return this.$store.state.user.getDoctorMedicalLimitList },
            set (val) {
                this.$store.commit("setUser", {
                    key: "getDoctorMedicalLimitList",
                    value: val
                })
            },
        },
        default_img () { return this.$store.state.user.default_img },
        inp: {
            get () {return this.$store.state.user.inp},
            set (val) {
                this.$store.commit("setUser", {
                    key: "inp",
                    value: val
                })
            },
        },
        loading: {
            get () { return this.$store.state.user.loading6 },
            set (val) {
                this.$store.commit("setUser", {
                    key: "loading6",
                    value: val
                })
            }
        },
    },
    methods: {
        docScroll () {
            if (this.inp) {
                return false
            }
            if (this.$refs.doctorList.scrollTop + this.$refs.doctorList.clientHeight-150 == this.$refs.doctorList_height.scrollHeight - 130) {
                if (this.getDoctorMedicalLimitList.length >= this.totalRecordsCount) {
                    
                } else {
                    if (!this.loading) {
                        this.pageNum += 1
                        this.PetMedicalRecord()
                    }
                }
            }
        },
        PetMedicalRecord () {
            let data = {
                doctorId: localStorage.getItem('userId'),
                pageNum: this.pageNum,
                pageSize: 10
            }
            if ((this.totalRecordsCount == this.getDoctorMedicalLimitList.length) && this.totalRecordsCount !=0 ) {
                this.$store.commit("setUser",{ key: "loading6", value: false })
                
            } else {
                this.loading = true
                getPetMedicalRecord(data).then(res => {
                    this.loading = false
                    if (res.data.rtnCode == 200) {
                        // this.getDoctorMedicalLimitList = res.data.data.pageT
                        this.totalRecordsCount = res.data.data.totalRecordsCount
                        this.$store.commit("medicalAdd", res.data.data.pageT)
                        let id = res.data.data.pageT[0].petId
                        this.getUserByPetId(id)
                    } else {
                        this.getDoctorMedicalLimitList = null
                    }
                    this.$nextTick(() => {
                        if (this.$refs.doctorList !== undefined) {
                            if (this.$refs.doctorList.scrollTop + this.$refs.doctorList.clientHeight >= this.$refs.doctorList_height.scrollHeight) {
                                if (this.getDoctorMedicalLimitList.length < this.totalRecordsCount) {
                                    this.pageNum +=1
                                    this.PetMedicalRecord()
                                } else {

                                }
                            } else {

                            }
                        } else {

                        }
                        
                    })
                }).catch(e => {
                    console.log(e)
                    this.loading = false
                })
            }
        },
        getUserByPetId (id) {
            let data = {
                petId: id
            }
            this.p_loading = true
            getUserByPetId(data).then(res => {
                this.p_loading = false
                if (res.data.rtnCode == 200) {
                    this.petAndUser = res.data.data
                } else {
                    this.p_loading = false
                    this.$message({
                        type: 'error',
                        message: 'Load the timeout!'
                    })
                }
            }).catch(e => {
                console.log(e)
                this.p_loading = false
                this.$message({
                    type: 'error',
                    message: 'Loading failed. Check whether the network is connected!'
                })
            })
        },
        toPatients (item,i) {
            this.getUserByPetId(item.petId)
            this.drawer = !this.drawer
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
    .myCustomer {
        height: 100%;
        width: 100%;
    }
    .animal {
        width: 74%;
        border: #F3F3F3 solid 1px;
        border-radius: 4px;
        @media screen and (max-width:1050px) {
            width: 100%;
        }
        .wrap {
            width: 102.5%;
            padding: 10px 1.3% 10px 1.3%;
            height: 100%;
            overflow: auto;
            @media screen and (max-width:800px) {
                width: 100%;
            }
        }
    }
    .wrap::-webkit-scrollbar {
        width: 8px;
    }
    .wrap::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: rgb(216, 216, 216);
    }
    .personal_name {
        padding: 10px 0;
    }
    .wrap_item {
        width: 30.33%;
        padding: 20px 0;
        box-shadow: 0 1px 2px 1px #D5D5D5;
        margin: 0 3% 10px 0%;
        transition: 0.2s;
        padding: 25px 20px;
        @media screen and (max-width:1100px) {
            width: 45%;
            margin: 0 1.5% 10px 2.5%;
        }
        @media screen and (max-width:1000px) {
            width: 45%;
            margin: 0 1.5% 10px 2%;
        }
        @media screen and (max-width:800px) {
            width: 45%;
            margin: 0 1.5% 10px 3%;
        }
        @media screen and (max-width:564px) {
            width: 95%;
            margin: 0 1.5% 10px 2%;
        }
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
        white-space: nowrap !important;
        min-width: 310px;
        height: 100%;
        overflow: auto;
        width: 26%;
        @media screen and (max-width:800px) {
            min-width: 0;
            display: none;
        }
        .information_wrap {
            width: 90%;
            margin: auto;
        }
    }
    .personWithAnimal_mobile {
        white-space: nowrap !important;
        min-width: 310px;
        height: 100%;
        overflow: auto;
        width: 95%;
        .information_wrap {
            width: 90%;
            margin: auto;
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
        @media screen and (max-width: 564px) {
            font-size: 17px;
        }
    }
    .size_14 {
        color: #9F9F9F;
        font-size: 14px;
        @media screen and (max-width: 564px) {
            font-size: 12px;
        }
    }
    .size13 {
        font-size: 13px;
        color: #9F9F9F;
        @media screen and (max-width: 564px) {
            font-size: 12px;
        }
    }
    .size15bl {
        font-size: 15px;
        @media screen and (max-width: 564px) {
            font-size: 12px;
        }
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
            @media screen and (max-width: 564px) {
                font-size: 13px;
            }
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
        @media screen and (max-width: 800px) {
			width: 100px;
            height: 100px;
		}
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
    .el_drawer_mobile {
        display: none;
        height: 100%;
        @media screen and (max-width: 800px) {
			display: block;
		}
    }
    .acting {
        width: 100%;
        padding: 40px 0;
        // border: solid 1px;
        @media screen and (max-width: 564px) {
            padding: 20px 0;
        }
    }
</style>