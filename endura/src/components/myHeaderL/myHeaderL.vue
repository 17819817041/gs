<style lang="less" scoped>
@import "@/less/css.less";
    .headerLogoPage {
        width: 100%;
        height: 109px;
        background: @hdColor;
        position: relative;
        margin-bottom: 10px;
        transition: 0.25s;
        @media screen and (max-width: 1300px) {
            height: 80px;
        }
        // @media screen and (max-width: 564px) {
        //     height: 75px;
        // }
        .logo {
            background: rgb(255, 255, 255);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 600;
            padding: 15px 10px 15px 10px;
            transition: 0.2s;
            @media screen and (max-width: 564px) {
                padding: 15px 20px 0 42px;
            }
        }
        .logo .logo_IMG {
            height: 80px;
            transition: 0.2s;
            z-index: 500;
            @media screen and (max-width: 1300px) {
                width: 160px;
                height: auto;
            }
            @media screen and (max-width: 564px) {
                width: 70px;
                height: auto;
            }
        }
        .helpBtn {
            padding: 0 3px;
            width: 120px;
            height: 40px;
            border-radius: 30px;
            background: @helpBtn;
            position: relative;
            @media screen and (max-width: 564px) {
                transform: scale(0.8);
            }
            span {
                position: absolute;
                right: -1px;
                top: -3px;
                overflow: hidden;
                border-radius: 50%;
                .dot_h {
                    width: 16px;
                    height: 16px;
                }
            }
        }
        .h_support {
            background: #f1cf9f;
            border-radius: 30px;
        }
        .logout {
            width: 120px;
            height: 40px;
            border-radius: 30px;
            margin: 0 10px;
            overflow: hidden;
            background: #67b0f8;
        }
        .userName {
            // width: 250px;
            height: 40px;
        }
    }
    .i_logout {
        background: @logout;
    }
    .mobile_logo {
        @media screen and (max-width:950px) {
            transform: translate(-180px,0);
        }
        @media screen and (max-width:800px) {
            display: none;
        }
        @media screen and (max-width: 564px) {
            height: 70px;
            padding: 10px 10px 0 10px;
        }
    }
    .logo_width {
        transform: translate(0px,0) !important;
    }
    .homeImg {
        padding-left: 17px;
        img {
            width: 25px;
            height: 25px;
        }
    }
    .myMessage {
        flex: 10;
    }
    .input {
        border: solid 1px white;
        background: white;
        border-radius: 30px;
        overflow: hidden;
        width: 307px;
        position: relative;
        .search_btn {
            position: absolute;
            right: 0px;
            top: 0;
            height: 100%;
            color: white;
            font-size: 13px;
            padding: 0 5px;
            border-radius: 0 30px 30px 0;
            background: @hdColor;
            z-index: 400;
        }
    }
    .oicq_inp {
        border: solid 1px white;
        background: white;
        border-radius: 30px;
        overflow: hidden;
        width: 100%;
        position: relative;
        .search_btn {
            position: absolute;
            right: 0px;
            top: 0;
            height: 100%;
            color: white;
            font-size: 13px;
            padding: 0 5px;
            border-radius: 0 30px 30px 0;
            background: @hdColor;
            z-index: 400;
        }
    }
    .select {
        padding: 0 15px;
    }
    .oicq_select {
        padding: 0 5px;
    }
    .label_img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        border: solid gray 1px;
        margin-right:5px;
        overflow: hidden;
        transition: 0.2s;
        @media screen and (max-width: 1220px) {
            width: 50px;
            height: 50px;
        }
    }
    .top {
        margin-top: 10px;
        white-space: nowrap;
    }
    .informationImg {
        margin-top: 3px;
        position: relative;
        .noticeDot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            top: 0;
            right: -1px;
            background: turquoise;
        }
    }
    .mobile_s {
        position: absolute;
        width: 100%;
        height: 77px;
        bottom: 3px;
        left: 0;
        padding: 0 15px;
        display: none;
        @media screen and (max-width: 800px) {
            display: block;
        }
    }
    .div {
        position: absolute;
        width: calc(100% - 240px);
        height: 55px;
        right: 25px;
        bottom: 9px;
        transition: 0.25s;
        @media screen and (max-width: 1300px) {
            position: absolute;
            transform: scale(0.7);
            width: 118%;
            bottom: 0px;
            right: -207px;
        }
        @media screen and (max-width: 1200px) {
            width: 106%;
            right: -150px;
        }
        @media screen and (max-width: 960px) {
            width: 106%;
            right: -125px;
        }
        @media screen and (max-width:800px) {
            display: none;
        }
    }
    .div .search {
        @media screen and (max-width:1200px) {
            width: 50%;
        }
    }
    .div .function {
        @media screen and (max-width:564px) {
            width: 37%;
        }
    }
    .div div {
        @media screen and (max-width: 1300px) {
            transition: 0.25s;
            // transform: scale(0.9);
        }
    }
    .dropimg {
        padding-left: 5px;
        width: 11px;
        // height: 12px;
        margin-top: 2px;
        @media screen and (max-width: 800px) {
            width: 11px;
            height: 12px;
        }
    }
    .category {
        color: rgb(255, 255, 255) !important;
        font-size: 12px;
    }
    .category1 {
        color: rgb(255, 255, 255) !important;
        font-size: 12px;
    }
    .rotate {
        transform: rotateZ(90deg);
    }
    .drawer_list_wrap {
        position: relative;
        .drawer_list {
            position: absolute;
            width: 22.5px;
            height: 22.5px;
            top: 30px;
            left: 125px;
            visibility: hidden;
            transition: 0.2s;
            @media screen and (min-width:800px) and (max-width:950px) {
                visibility: initial !important;
            }
        }
    }
    .oicq {
        padding: 5px 0;
    }
    .oicq_img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
    }
    .oicq_name {
        font-size: 14px;
        padding: 0 5px;
    }
    .more_fun {
        width: 30px;
        height: 30px;
        position: relative;
        z-index: 890;
        img {
            transition: 0.2s;
            height: 100%;
        }
        
    }
    .mobile_expand {
        position: absolute;
        right: 16px;
        top: 45px;
        width: 135px;
        transition: 0.2s;
        opacity: 0;
        z-index: 1000;
        // border: solid 1px;
    }
    .mobile_opacity{
        opacity: 1 !important;
    }
    .m_arrow {
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: transparent transparent rgb(255, 255, 255) transparent;
        margin: 0 25px;
        transform: translate(0,-10px);
    }
    .expand_content{
        width: 100%;
        height: 100%;
        padding: 15px 5px;
        background: rgb(255, 255, 255);
        border-radius: 10px;
        transform: translate(0,-10px);
        .expand_content_item {
            padding: 8px;
            font-size: 13px;
            // border-bottom: solid gray 1px;
            
        }
    }
    .more_fun_rotate {
        transform: rotateZ(90deg);
    }
    .fade-enter-active, .fade-leave-active {
		transition: opacity 0.1s;
	}
	.fade-enter, .leave-active {
		opacity: 0;
	}

    .present_item {
        width: 90%;
        margin: auto;
        margin-top: 20px;
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

    .el-carousel__item:nth-child(2n) {
        background-color: #ffffff;
        cursor: none !important;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #e4e9ee;
        cursor: none !important;
    }
    .car_petImage {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
    }
    .size16_P {
        font-size: 14px;
        padding: 5px 0;
    }
    .d_pet {
        padding: 5px 0;
        color: gray;
        border-bottom: solid 1px rgb(180, 180, 180);
    }
    .drawer_wrap {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: auto;
        .physical_H {
            position: absolute;
            left: 50%;
            bottom: 5px;
            transform: translate(-50%, 0);
        }
    }
    .physical_img {
        padding-right: 5px;
    }
    .mobile_s1 {
        position: relative;
        .mobile_s_item {
            position: absolute;
            bottom: 0px;
            right: 10px;
        }
    }
    .i_notice {
        width: 25px;
        height: 25px;
    }
    .cursor1 {
		cursor: pointer;
		user-select: none;
		@media screen and (max-width: 800px) {
			cursor: none;
		}
	}
</style>

<template>
    <div>
        <el-drawer
            title="Pet"
            :visible.sync="drawer"
            :direction="direction"
            size='70%'>
            <div class="drawer_wrap noBar">
                <el-carousel type="card" height="100px" arrow='never' 
                indicator-position='none' :autoplay='false' @change="cutPet">
                    <el-carousel-item v-for="item in petList" :key="item.id">
                        <div class="car_petImage ju al mg">
                            <img style="height: 100%;" v-if="item.image" :src="item.image" alt="">
                            <img style="height:100%;" v-else :src="default_img" alt="">
                        </div>
                    </el-carousel-item>
                </el-carousel>
                <div class="present_item">
                    <div class="pet_name size21 bold" v-if="pet.name">{{pet.name}}</div>
                    <div class="pet_name size21 bold" v-else>No Name</div>
                    <div class="details size16_P">
                        <div class="sb d_pet">
                            <div>Pet ID : </div>
                            <div>{{pet.id}}</div>
                        </div>
                        <div class="sb d_pet">
                            <div>Age : </div>
                            <div>{{pet.age}}</div>
                        </div>
                        <div class="sb d_pet">
                            <div>Breed : </div>
                            <div>{{breed}}</div>
                        </div>
                        <div class="sb d_pet">
                            <div>Sex :</div>   
                            <div><span v-if="pet.gender == 1">Male</span> <span v-else-if="pet.gender == 2">Female</span></div>
                        </div>
                        <div class="sb d_pet">
                            <div>Neutered status : </div>
                            <div><span v-if="pet.petJueYue == 1">Sterilization</span> 
                            <span v-else-if="pet.petJueYu == 2">Unneutered</span> </div>
                        </div>
                        <div class="sb d_pet">
                            <div>Weight : </div>
                            <div>{{pet.weight}} kg</div>
                        </div>
                    </div>
                    <div class="more_message size12 cursor" @click="petDetails">
                        More...
                    </div>
                </div>
                <div class="physical_H">
                    <img class="physical_img" @click="firstDid" src="@/assets/img/physical.png" alt="">
                </div>
            </div>
        </el-drawer>
        <div class="headerLogoPage">
            <transition name="fade">
                <div :class="['mobile_expand',{ 'mobile_opacity': head_mobile_extand }]" v-show="head_mobile_extand">
                    <div class="flexEnd" style="overflow:hidden;"><div class="m_arrow"></div></div>
                    <div class="expand_content">
                        <div  class="expand_content_item" @click="home">Home</div>
                        <div class="expand_content_item" @click="myAppointment">Appointments</div>
                        <div class="expand_content_item"  @click="Record">Medical Record</div>
                        <div class="expand_content_item" @click="paymentHistory" >Payments History</div>
                        <div class="expand_content_item" @click="setting">Setting</div>
                        <div class="expand_content_item" @click="support">Support</div>
                        <div  class="expand_content_item" @click="logout">Logout</div>
                    </div>
                </div>
            </transition>
            <div :class="['logo',{ logo_width: rotate, 'mobile_logo': login }]">
                <div class="drawer_list_wrap">
                    <img class="logo_IMG al" @click="home" src="@/assets/img/ENDURA.png" alt="">
                    <div :class="['drawer_list',{rotate: rotate}]" v-show="login">
                        <img style="height:100%;transition:0.2s." src="@/assets/img/list.png" alt="" @click="showDetails">
                    </div>  <!-- //抽屉 -->
                </div>
            </div>
            <div class="div sb al">
                <div class="search al sa" v-if="login">
                    <div class="top cursor1 white" v-if="identity" @click="doctor">
                        <span v-if="platform == 1">All Doctors</span>
                        <span v-else-if="platform == 2">All Patients</span>
                    </div>
                    <div class="top cursor white" v-else @click="patient">All Doctors</div>
                    <div class="select top" >
                        <el-dropdown trigger="click">
                            <div class="category al cursor1">
                                Category<img class="dropimg" src="@/assets/img/arrow_white.png" alt="">
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">SPECIALIST CATEGORY</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-plus">GENERAL DOCTOR</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="input" >
                        <div class="search_btn al ju cursor" @click="search">
                            Search
                        </div>
                        <el-input style="transform:scale(1);border:none;" v-model="inp" @keyup.enter.native="search"
                        prefix-icon="el-icon-search" size="small" placeholder="Search Doctors, Clinics, Hospitals etc."></el-input>
                    </div>
                </div>
                <div v-else></div>
                <div class="function al">
                    <div class="al sb function_item" v-if="login">
                        <div class="userName al sb">
                            <div class="myMessage al">
                                <label for="ava" class="cursor label_img ju al">
                                    <!-- <input id="ava" v-show="false" type="file" @change="getImage" />   -->
                                    <div class="ju al" style="height:55px;overflow:hidden;border-radius:50%;transform:scale(1)">
                                        <img style="height:100%;" v-if="userDetails.userImage" :src="userDetails.userImage" alt="" @click="getImage">
                                        <img style="height:100%;" v-else :src="default_img" alt="" @click="getImage">
                                        <!-- <i class="el-icon-picture-outline" v-else style="font-size:30px;color:gray"></i> -->
                                    </div>
                                </label>
                                <div class="name al white">{{userDetails.userName}}</div>
                            </div>
                            <div class="sa" style="padding-left:20px;">
                                <div class="informationImg cursor top al" @click="notice">
                                    <div class="noticeDot" v-show="noticeState" style="width: 10px;height: 10px; border-radius: 50%;;" alt=""></div>
                                    <!-- <img class="noticeDot" v-show="noticeState" src="@/assets/img/dot.png" alt=""> -->
                                    <img class="i_notice" src="@/assets/img/notice.png" alt="">
                                </div>
                                <div class="homeImg al cursor" @click="home">
                                    <img src="@/assets/img/home.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="logout bold tc white al ju" @click="logout">
                            <div class="cursor i_logout ju al" style="width: 100%; height: 100%">Logout</div>     
                        </div>
                    </div>
                    <div class="h_support">
                        <div class="helpBtn cursor al ju" @click="support">
                            <span v-if="newMsg_dot !== null">
                                <img class="dot_h" v-show="newMsg_dot.boo && newMsg_dot.user == T_userId" src="@/assets/img/dot.png" alt="">
                            </span>
                            <span v-else><img class="dot_h" v-show="false" src="@/assets/img/dot.png" alt=""></span>
                            <div class="al">
                                <img src="@/assets/img/what.png" alt="">
                            </div>
                            <div class="suppot size12"> Help & Support </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile_s" v-show="login">
                <div class="sb al">
                    <div class="oicq flex white">
                        <div class="oicq_img ju al">
                            <img style="height:100%;" v-if="userDetails.userImage" :src="userDetails.userImage" alt="" @click="drawer_s">
                            <img style="height:100%;" v-else :src="default_img" alt="">
                        </div>
                        <div>
                            <div class="oicq_name" >{{userDetails.userName}}</div>
                            <div class="oicq_select" >
                                <div class="search al sa" v-if="login">
                                    <div style="font-size:13px;" v-if="identity" @click="doctor">All Doctors</div>
                                    <div style="font-size:13px;" v-else @click="patient">All Patients</div>
                                    <div class="select" >
                                        <div class="category1 al">
                                            Category
                                            <img class="dropimg" src="@/assets/img/arrow_white.png" alt="">
                                            <!-- <img class="dropimg" src="@/assets/img/drop.png" alt=""> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="more_fun">
                            <img :class="[{ 'more_fun_rotate': head_mobile_extand }]" @click="top_up" src="@/assets/img/more_fun.png" alt="">
                        </div>
                        <div>
                            <div class="informationImg cursor top al" @click="notice">
                                <img class="noticeDot" v-show="noticeState" src="@/assets/img/dot.png" alt="">
                                <img style="width: 22px;height:22px" src="@/assets/img/notice.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="oicq_inp mg" style="height: 25px;">
                    <div class="search_btn al ju cursor" @click="search">
                        Search
                    </div>
                    <el-input style="transform:scale(1);border:none;" v-model="inp" @keyup.enter.native="search"
                    prefix-icon="el-icon-search" size="small" placeholder="Search Doctors, Clinics, Hospitals etc."></el-input>
                </div>
            </div>
            <div class="mobile_s mobile_s1" v-show="!login">
                <div class="mobile_s_item">
                    <div class="helpBtn cursor al ju" @click="support">
                        <div class="al">
                            <img src="@/assets/img/what.png" alt="">
                        </div>
                        <div class="suppot size12"> Help & Support </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { searchDoc, updateUserDetails, file, petType, updateVetDetails } from "@/axios/request.js"
export default {
    data () {
        return {
            identity: true,
            userDetails: {},
            rotate: false,
            doctorID: -1,
            petOrDoc: 2,
            head_mobile_extand: false,
            T_userId: localStorage.getItem('userId'),
            drawer: false,
            direction: 'rtl',
            breed: '',
            options: [],
            platform: localStorage.getItem('platform')
        }
    },
    created () {
        this.getUser()
        this.getPetType()
        if (localStorage.getItem('platform') == 2) {
            if (this.$route.name == 'vetDoctor') {
                this.identity = false
                this.petOrDoc = 1
            }
        }
    },
    mounted () {
        gapi.load('auth2', function(){
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            var auth2 = gapi.auth2.init({
                client_id: '628942639023-6eghdtqbgk8vvdj20tuc7l2708mshmd8.apps.googleusercontent.com', //客户端ID
                cookiepolicy: 'single_host_origin',
                scope: 'profile' //可以请求除了默认的'profile' and 'email'之外的数据
            });
		});
    },
    watch: {
        login: {
            handler (val) {
                if (val) {
                    this.login = val
                }
            },
        },
        AllDetail: {
            handler (val) {
                this.userDetails = JSON.parse(JSON.stringify(this.AllDetail))
            },
            immediate: true
        },
        top_up_mask: {
            handler (val) {
                if (val) {
                    this.top_up_mask = val
                } else {
                    this.head_mobile_extand = false
                }
            },
            deep:true
        },
        newMsg_dot: {
            handler (val) {
                if (val) {
                    this.newMsg_dot = val
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
        petId1: {
            handler (val) {
                if (val) {
                    this.getPetType()
                }
            }
        },
    },
    computed: {
        noticeState: {
            get () { return this.$store.state.user.noticeState },
            set (val) {
                this.$store.commit("setUser", {
                    key: "noticeState",
                    value: val
                })
            },
        },
        login: {
            get () { return this.$store.state.user.login },
            set (val) {
                this.$store.commit("setUser", {
                    key: "login",
                    value: val
                })
            },
        },
        AllDetail: {
            get () { return this.$store.state.user.userDetail },
            set (val) {
                this.$store.commit("setUser", {
                    key: "userDetail",
                    value: val
                })
            },
        },
        inp: {
            get () {return this.$store.state.user.inp},
            set (val) {
                this.$store.commit("setUser", {
                    key: "inp",
                    value: val
                })
            },
        },
        default_img () { return this.$store.state.user.default_img },
        top_up_mask: {
            get () { return this.$store.state.user.mobile_b },
            set (val) {
                this.$store.commit('setUser', { key: 'mobile_b', value: val })
            }
        },
        newMsg_dot: {
            get () { return this.$store.state.user.newMsg_dot },
            set (val) {
                this.$store.commit('setUser', { key: 'newMsg_dot', value: val })
            }
        },
        petList: {
            get () {return this.$store.state.user.petList},
            set (val) {
                this.$store.commit("setUser", {
                    key: "petList",
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
        petId1: {
            get () {return this.$store.state.user.petId},
            set (val) {
                this.$store.commit("setUser", {
                    key: "petId",
                    value: val
                })
            },
        },
        firstPet: {
            get () {return this.$store.state.user.firstPet},
            set (val) {
                this.$store.commit("setUser", {
                    key: "firstPet",
                    value: val
                })
            },
        },
    },
    methods: {
        top_up () {
            this.head_mobile_extand = true
            this.$store.commit('setUser', { key: 'mobile_b', value: !this.top_up_mask })
        },
        search () {
            if (!this.inp) {
                return false
            }
            if (localStorage.getItem('platform') == 1) {
                let data = {
                    name: this.inp,
                    searchType: 1,
                    doctorId: this.doctorID
                }
                this.$store.commit("setUser", {
                    key: "doctorList",
                    value: []
                })
                this.$store.commit("setUser", {
                    key: "loading6",
                    value: true
                })
                searchDoc(data).then(res => {
                    this.$store.commit("setUser", {
                        key: "loading6",
                        value: false
                    })
                    if (res.data.rtnCode == 200) {
                        this.$store.commit("setUser", {
                            key: "doctorList",
                            value: res.data.data
                        })
                    } else {
                        this.$store.commit("setUser", {
                            key: "doctorList",
                            value: []
                        })
                        this.$store.commit("setUser", {
                            key: "loading6",
                            value: false
                        })
                    }
                })
            } else if (localStorage.getItem('platform') == 2) {
                let data = {
                    name: this.inp,
                    searchType: this.petOrDoc,
                    doctorId: localStorage.getItem('userId')
                }
                if (this.petOrDoc == 1) {
                    this.$store.commit("setUser", {
                        key: "doctorList",
                        value: []
                    })
                } else if (this.petOrDoc == 2) {
                    this.$store.commit("setUser", {
                        key: "getDoctorMedicalLimitList",
                        value: []
                    })
                }
                this.$store.commit("setUser", {
                    key: "loading6",
                    value: true
                })
                searchDoc(data).then(res => {
                    this.$store.commit("setUser", {
                        key: "loading6",
                        value: false
                    })
                    if (this.petOrDoc == 1) {
                        if (res.data.rtnCode == 200) {
                            this.$store.commit("setUser", {
                                key: "doctorList",
                                value: res.data.data
                            })
                        } else {
                            this.$store.commit("setUser", {
                                key: "doctorList",
                                value: []
                            })
                            this.$store.commit("setUser", {
                                key: "loading6",
                                value: false
                            })
                        }
                    } else if (this.petOrDoc == 2) {
                        if (res.data.rtnCode == 200) {
                            this.$store.commit("setUser", {
                                key: "getDoctorMedicalLimitList",
                                value: res.data.data
                            })
                        } else {
                            this.$store.commit("setUser", {
                                key: "getDoctorMedicalLimitList",
                                value: []
                            })
                            this.$store.commit("setUser", {
                                key: "loading6",
                                value: false
                            })
                        }
                    }
                })
            }
        },
        showDetails () {
            this.show = !this.show
            this.rotate = !this.rotate
            this.$store.commit("setUser", { key: "rotate", value: this.rotate } )
            // this.$store.commit("setUser", { key: "showList", value: !this.rotate } )
        },
        getUser () {
            this.$store.dispatch("getUser",this)
        },
        petDetails () {
            this.drawer = false
            this.$router.push("/petDetails")
        },
        getImage (e) {
            if (localStorage.getItem("platform") == 1) {
                this.$router.push('/setting')
                // this.dealImg(e.target.files[0],(img) => {
                //     var formData = new FormData();
                //     formData.append('file', img);
                //     file(formData).then(res => {
                //         if (res.data.rtnCode == 200) {
                //             this.userDetails.userImage = res.data.data
                            
                //             updateUserDetails(this.userDetails).then(res => {
                //                 if (res.data.rtnCode == 200) {
                //                     this.getUser()
                //                 } else {
                                    
                //                 }
                //             }).catch(e => {
                //                 console.log(e)
                //             })
                //         } else {
                //             this.userDetails = {}
                //         }
                //     })
                // })
            } else if (localStorage.getItem("platform") == 2) {
                this.$router.push('/vetSetting')
                // this.dealImg(e.target.files[0],(img) => {
                //     var formData = new FormData();
                //     formData.append('file', img);
                //     file(formData).then(res => {
                //         if (res.data.rtnCode == 200) {
                //             this.userDetails.headUr = res.data.data
                //             this.userDetails.doctorName = "Beck"
                //             updateVetDetails(this.userDetails).then(res => {
                //                 if (res.data.rtnCode == 200) {
                //                     this.getUser()
                //                 }
                //             }).catch(e => {
                //                 console.log(e)
                //             })
                //         } else {
                //             this.userDetails = {}
                //         }
                //     })
                // })
            }
        },
        support () {
            if (localStorage.getItem("platform") == 1) {
                this.$router.push({
                    name:'support'
                })
            } else if (localStorage.getItem("platform") == 2) {
                this.$router.push({
                    name:'v_support'
                })
            }
        },
        notice () {
            if (localStorage.getItem("platform") == 1) {
                this.$router.push("/notice")
            } else if (localStorage.getItem("platform") == 2) {
                this.$router.push("/vetNotice")
            }
        },
        home () {
            this.head_mobile_extand = false
            this.$store.commit('setUser', { key: 'mobile_b', value: !this.top_up_mask })
            if (localStorage.getItem("platform") == 1) {
                this.$router.push("/customerhomepage")
            } else if (localStorage.getItem("platform") == 2) {
                this.$router.push("/myCustomer")
            }
        },
        logout () {
            this.$store.dispatch("logout", this)
            // var auth2 = gapi.auth2.getAuthInstance();
            // auth2.signOut().then(function(res) {
            //     console.log(res)
            // });
        },
        doctor () {
            if (localStorage.getItem("platform") == 2) {
                this.petOrDoc = 1
                this.identity = false
                this.$router.push("/vetDoctor")
            } else {
                this.$router.push("/myDoctor")
            }
        },
        setting () {
            this.head_mobile_extand = false
            this.$store.commit('setUser', { key: 'mobile_b', value: !this.top_up_mask })
            if (localStorage.getItem('platform') == 1) {
                this.$router.push({
                    name: 'setting'
                })
            } else if (localStorage.getItem('platform') == 2) {
                this.$router.push({
                    name: 'vetSetting'
                })
            }
        },
        patient () {
            if (localStorage.getItem("platform") == 2) {
                this.doctorID = localStorage.getItem('userId')
                this.petOrDoc = 2
                this.identity = true
                this.$router.push("/myCustomer")
            }
        },
        Record () {
            this.head_mobile_extand = false
            this.$store.commit('setUser', { key: 'mobile_b', value: !this.top_up_mask })
            if (localStorage.getItem('platform') == 1) {
                this.$router.push({
                    name: 'allRecord'
                })
            } else if (localStorage.getItem('platform') == 2) {
                this.$router.push({
                    name: 'medical'
                })
            }
        },
        paymentHistory () {
            this.head_mobile_extand = false
            this.$store.commit('setUser', { key: 'mobile_b', value: !this.top_up_mask })
            if (localStorage.getItem('platform') == 1) {
                this.$router.push({
                    name: 'paymentHistory'
                })
            } else if (localStorage.getItem('platform') == 2) {
                this.$router.push({
                    name: 'myPaymentHistory'
                })
            }
        },
        myAppointment () {
            this.head_mobile_extand = false
            this.$store.commit('setUser', { key: 'mobile_b', value: !this.top_up_mask })
            if (localStorage.getItem('platform') == 1) {
                this.$router.push("/myAppointment")
            } else if (localStorage.getItem('platform') == 2) {
                this.$router.push("/appointment") 
            }
        },
        drawer_s () {
            if (localStorage.getItem('platform') == 1) {
                this.drawer = !this.drawer
            }
            
        },
        getPetType () {
            let data = {
                userId: localStorage.getItem('userId'),
                platform: localStorage.getItem('platform'),
                token: localStorage.getItem('Token')
            }
            petType(data).then(res => {
                res.data.forEach(item => {
                    item.children.forEach(child => {
                        child.children = []
                    })
                })
                this.options = res.data
                this.TYPE()
            })
        },
        TYPE () {
            this.options.forEach(op => {
                if (this.pet.petType == op.petTypeId) {
                    this.breed = child.petTypeName
                }
                if (op.children) {
                    op.children.forEach(child => {
                        if (this.pet.petType == child.petTypeId) {
                            this.breed = child.petTypeName
                        }
                    })
                }
            })
        },
        cutPet(val) {
            this.firstPet = val
            this.$store.commit("setUser", { key: "pet",value: this.petList[val] })
            this.$store.commit("setUser", { key: "petId",value: this.petList[val].id })
        },
        firstDid () {
            this.$router.push("/firstAid")
        }
    }
}
</script>

