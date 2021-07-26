<template>
    <div class="vetSetting noBar">
        <div class="explan al Explan_title mg">
            <img class="setting_img" src="@/assets/img/setting.png" alt="">
            Setting
        </div>
        <div class="vetSetting_content mg">
            <div class="vetSetting_content_item">
                <div class="vetSetting_content_item_title">
                    <div class=" size26 bold tc">My Profile</div>
                    <div class="edit cursor tc" v-if="edit" @click="editBtn">Edit</div>    
                    <div class="alter flex" v-else>
                        <div class="save cursor tc" @click="saveBtn">Save</div>
                        <div class="cancel tc cursor" @click="cancelBtn" >Cancel</div>
                    </div>
                </div>
                <div class="profile flex">
                    <div class="profile_img">
                        <div class="profile_img_wrap mg">
                            <label for="avaSet">
                                <div style="width:100%;margin:auto;height:100%" class="ju al img_wrap_p" v-loading="img_loading"
                                    element-loading-text="Loading..."
                                    element-loading-spinner="el-icon-loading"
                                    element-loading-background="rgba(0, 0, 0, 0.8)">
                                    <img :class="['update_img', {cursor: !edit}]" :src="showimg" v-if="showimg" alt="">
                                    <img :class="['profileimg mg', {cursor: !edit}]" v-if="userDetail.userImage" :src="userDetail.userImage" alt="" mode="widthFix">
                                    <!-- <i v-else class="el-icon-picture-outline" style="font-size:125px;color:gray"></i> -->
                                    <img style="height:100%;" v-else :src="default_img" alt="">
                                </div>
                                <input type="file" id="avaSet" v-if="!edit" v-show="false" @change="getImage">
                            </label>
                        </div>
                    </div>
                    <div class="profile_message">
                        <div class="message_wrap flex">
                            <div class="title al size19">User ID</div>
                            <div class="mean al size16_s">{{userDetail.userId}}</div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al size19">Name</div>
                            <div v-if="edit" class="mean al size16_s">{{userDetail.doctorName}}</div>
                            <div v-else class="inp mean al"><input type="text" v-model="userDetail.doctorName"></div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al size19">Age</div>
                            <div v-if="edit" class="mean size16_s al">{{userDetail.age? userDetail.age:'None'}}</div>
                            <div v-else class="inp mean al"><input type="text" v-model="userDetail.age"></div>
                        </div>

                        <div class="message_wrap flex">
                            <div  class="title al size19">Location</div>
                            <div v-if="edit" class="mean al s_location size16_s">{{
                                address.find(ad => ad.areaId == userDetail.addressId) ? 
                                address.find(ad => ad.areaId == userDetail.addressId).addressName : "No Address"
                            }}</div>
                            <div v-else class="inp mean al">
                                <el-select v-model="default_address" @change="selectLocation">
                                    <el-option v-for="(add) in address" :key="add.id" :value="add.areaId" :label="add.addressName"></el-option>
                                </el-select>
                            </div>
                        </div>

                        <div class="message_wrap flex">
                            <div class="title al size19">Mobile</div>
                            <div v-if="edit" class="mean al size16_s">{{userDetail.mobile? userDetail.mobile: "None"}}</div>
                            <div v-else class="inp mean al"><input type="text" v-model="userDetail.mobile"></div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al size19">Gender</div>
                            <div class="mean al size16_s" v-if="edit">
                                <span v-if="userDetail.genderId == 1">Male</span>
                                <span v-else-if="userDetail.genderId == 2">Female</span>
                                <span v-else-if="userDetail.genderId == 0">No data</span>
                            </div>
                            <div v-else class="inp mean al">
                                <el-select v-model="sex" @change="cutSex">
                                    <el-option value="1" label="Male"></el-option>
                                    <el-option value="2" label="Female"></el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al size19">Education</div>
                            <div class="mean al size16_s" v-if="edit">
                                <span v-if="userDetail.education">{{userDetail.education}}</span>
                                <span v-else>No data</span>
                            </div>                                              <!--   //学历   -->
                            <div v-else class="inp mean al">
                                <el-select v-model="userDetail.education" >
                                    <el-option value="Doctor´s Degree" label="Doctor´s Degree"></el-option>
                                    <el-option value="Master´s Degree" label="Master´s Degree"></el-option>
                                    <el-option value="Normal Courses" label="Normal Courses"></el-option>
                                    <el-option value="Short-cycle Courses" label="Short-cycle Courses"></el-option>
                                    <el-option value="Regular Senior Secondary Schools" label="Regular Senior Secondary Schools"></el-option>
                                    <el-option value="Regular Specialized Secondary Schools" label="Regular Specialized Secondary Schools"></el-option>
                                    <el-option value="Regular Junior Secondary Schools" label="Regular Junior Secondary Schools"></el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al size19">Gertification</div>
                            <div class="mean al">-</div>
                        </div>

                        <div class="aboutMe">
                            <div class="size19">More about you</div>
                            <div v-if="edit" class="size16_s">
                                <span v-if="userDetail.extend">{{userDetail.extend}}</span>
                                <span v-else>No data</span>
                            </div>
                            <div v-else class="aboutMe_text">
                                <textarea name="" id="" cols="30" v-model="userDetail.extend" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="profile_message1">
                        <div>
                            <div class="message_wrap flex">
                                <div class="title al size19">Veterinary Hospital</div>
                                <div v-if="edit" class="mean al size16_s">
                                    {{ hospitalList.find(hos => hos.veterinaryHospitalId == userDetail.vetrtinaryHospitalId)?
                                    hospitalList.find(hos => hos.veterinaryHospitalId == userDetail.vetrtinaryHospitalId).veterinaryHospitalName:'No Name' }}
                                </div>
                                <!-- <div v-else class="inp mean al"><input type="text" v-model="userDetail.vetrtinaryHospitalId"></div> -->
                                <div v-else class="inp mean al">
                                    <el-select class="option width100 al" @change="getHospital" v-model="userDetail.vetrtinaryHospitalName" 
                                    placeholder="Hospital" name="" id="">
                                        <el-option v-for="(item) in hospitalList" 
                                        :key="item.veterinaryHospitalId" 
                                        :value="item.veterinaryHospitalId" 
                                        :label="item.veterinaryHospitalName">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="title al size19">Work experience</div>
                                <div class="mean al size16_s" v-if="edit">{{userDetail.workExperience? userDetail.workExperience: "0"}}+ years</div>
                                <div v-else class="inp mean al"><input type="text" 
                                @input="userDetail.workExperience=userDetail.workExperience.replace(/[^\d]/g,'')" v-model="userDetail.workExperience"></div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="al size19">Working address and Timing</div>
                            </div>
                            <div class="message_wrap address_child al size16_s">
                                <div v-if="edit">{{userDetail.workingAddress}}</div>
                                <div v-else class="address_inp al"><input type="text" v-model="userDetail.workingAddress"></div>
                            </div>
                            <div class="message_wrap_work">
                                <div v-if="edit" style="margin-top:10px;color: #7c7878;">
                                    <span>
                                        <span v-if="userDetail.startTime">{{userDetail.startTime}}</span>
                                        <span v-else>00:00</span>
                                    </span>
                                     - 
                                    <span>
                                        <span v-if="userDetail.endTime">{{userDetail.endTime}}</span>
                                        <span v-else>00:00</span>
                                    </span>
                                    <span style="padding: 0 5px;"></span>
                                    <span>
                                        <span v-if="userDetail.starWeek">{{userDetail.starWeek}}</span>
                                        <span v-else>Monday</span>
                                    </span>
                                     to
                                    <span>
                                        <span v-if="userDetail.endWeek">{{userDetail.endWeek}}</span>
                                        <span v-else>Friday</span>
                                    </span>
                                </div>   <!--{{userDetail.remake}}-->
                                <div v-else class="timeInp_wrap sb al">
                                    <div class="al" style="margin-bottom:10px">
                                        <div class="timeInp al">
                                            <!-- <input type="text" v-model="userDetail.startTime"> -->
                                            <el-time-select 
                                                class="width100"
                                                v-model="userDetail.startTime"
                                                :picker-options="{
                                                    start: '08:30',
                                                    step: '00:15',
                                                    end: '18:30'
                                                }"
                                                placeholder="Star">
                                            </el-time-select>
                                        </div> <span style="padding:0 5px">--</span>
                                        <div class="timeInp al">
                                            <!-- <input type="text" v-model="userDetail.endTime"> -->
                                            <el-time-select 
                                                class="width100"
                                                v-model="userDetail.endTime"
                                                :picker-options="{
                                                    start: '08:30',
                                                    step: '00:15',
                                                    end: '18:30'
                                                }"
                                                placeholder="End">
                                            </el-time-select>
                                        </div>
                                    </div>

                                    <div class="al" style="margin-bottom:10px">
                                        <div class="timeInp al">
                                            <!-- userDetail.remake -->
                                            <el-select v-model="s_week">    
                                                <el-option label="Monday" value="Monday" ></el-option>
                                                <el-option label="Tuesday" value="Tuesday" ></el-option>
                                                <el-option label="Wednesday" value="Wednesday" ></el-option>
                                                <el-option label="Thursday " value="Thursday " ></el-option>
                                                <el-option label="Friday" value="Friday" ></el-option>
                                                <el-option label="Saturday" value="Saturday" ></el-option>
                                                <el-option label="Sunday" value="Sunday" ></el-option>
                                            </el-select>
                                        </div> <span style="padding:0 5px">--</span>
                                        <div class="timeInp al">
                                            <!-- userDetail.remake -->
                                            <el-select v-model="e_week">    
                                                <el-option label="Monday" value="Monday" ></el-option>
                                                <el-option label="Tuesday" value="Tuesday" ></el-option>
                                                <el-option label="Wednesday" value="Wednesday" ></el-option>
                                                <el-option label="Thursday " value="Thursday " ></el-option>
                                                <el-option label="Friday" value="Friday" ></el-option>
                                                <el-option label="Saturday" value="Saturday" ></el-option>
                                                <el-option label="Sunday" value="Sunday" ></el-option>
                                            </el-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="title al size19">Professional field</div>
                                <div class="mean al size16_s" v-if="edit">
                                    <span v-if="userDetail.prdfessionalField">{{userDetail.prdfessionalField}}</span>
                                    <span v-else>-</span>
                                </div>
                                <div v-else class="prdfessionalField al"><input type="text" v-model="userDetail.prdfessionalField"></div>
                            </div>
                        </div>

                        <div class="vetReset sa">
                            <div></div>
                            <div class="resetBtn al ju cursor" @click="reset">Reset Password</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { updateVetDetails, HospitalList, address, file } from "@/axios/request.js"
export default {
    data () {
        return {
            edit: true,
            hospitalName: '',
            hospitalList: [],
            sex: '',
            address: [],
            wookingDay: '',
            s_week: 'Monday',
            e_week: 'Friday',
            userDetails: {},
            default_address: '',
            showimg: '',
            img_loading: false
        }
    },
    watch: {
        userDetail: {
            handler (val) {
                if (val.genderId == 1) {
                    this.sex = 'Male'
                } else if (val.genderId == 2) {
                    this.sex = 'Female'
                }
            },
            immediate: true
        }
    },
    computed: {
        // userDetail () { return this.$store.state.user.userDetail },
        userDetail: {
            get () { return this.$store.state.user.userDetail },
            set (val) {
                this.$store.commit("setUser", {
                    key: "userDetail",
                    value: val
                })
            },
        },
        default_img () { return this.$store.state.user.default_img },
    },
    created () {
        this.getHospitalList()
        this.getAddress()
    },
    methods: {
        cutSex (val) {
            this.userDetail.genderId = val
            console.log(val)
        },
        getImage (e) {
            this.dealImg(e.target.files[0], (res) => {
                var formData = new FormData();
                formData.append('file', res);
                this.img_loading = true
                file(formData).then(msg => {
                    this.img_loading = false
                    if (msg.data.rtnCode == 200) {
                        this.userDetail.headUr = msg.data.data
                        this.showimg = msg.data.data
                    } else {
                        this.userDetails = {}
                    }
                }).catch(e => {
                    this.img_loading = false
                    this.$message({
                        type: 'error',
                        message: 'Picture is too large or formatted incorrectly!'
                    })
                })
            })
        },
        changeAddress (e) {
            console.log(e)
            this.userDetail.location = e
        },
        getAddress () {
            address().then(res => {
                this.address = res.data.data
                res.data.data.forEach(item => {
                    if (item.areaId == this.userDetail.addressId) {
                        this.default_address = item.addressName
                    } else {
                        // this.default_address = 'select'
                    }
                })
            })
        },
        getHospital (val) {
            console.log(val)
            this.userDetail.vetrtinaryHospitalId = val
        },
        editBtn () {
            this.edit = false
            // this.userDetail.headUr = this.userDetail.userImage
        },
        saveBtn () {
            var reg = /^1[0-9]{10}$/;
            if (reg.test(this.userDetail.mobile)) {
                this.update()
                this.edit = true
            } else {
                this.$message({
                    type: 'error',
                    message: 'Phone number format is incorrect!'
                })
            }
            // if(this.userDetail.age){
            //     let reg = /^1[0-9]{3}$/;
            //     if(reg.test(this.userDetail.age)){
            //         this.$message({
            //             type: 'error',
            //             message: 'error'
            //         })
            //     }else{
                    
            //     }
            // }
        },
        cancelBtn () {
            this.edit = true
            this.showimg = ''
            this.userDetail.headUr = this.userDetail.userImage
        },
        reset () {
            this.$router.push("/vetReset")
        },
        update () {
            this.userDetail.remake = this.s_week + '-' + this.e_week
            updateVetDetails(this.userDetail).then(res => {
                setTimeout(() => {
                    this.showimg = ''
                },700)
                if (res.data.rtnCode == 200) {
                    this.$store.dispatch("getUser")
                    this.$message({
                        type: "success",
                        message: "Successfully changed!"
                    })
                } else {
                    this.$message({
                        type: "error",
                        message: "Change Failed!"
                    })
                }
            }).catch( e => {
                console.log(e)
                this.$message({
                    type: "error",
                    message: "Change Failed!"
                })
            })
        },
        selectLocation (val) {
            this.userDetail.addressId = val
        },
        getHospitalList () {
            HospitalList().then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.hospitalList = res.data.data
                }
            })
        },
    }
}
</script>

<style lang="less" scoped>
    @import "@/less/css.less";
    .vetSetting {
        flex: 10;
        height: 100%;
        background: @content;
        overflow: auto;
    }
    .setting_img {
        width: 37px;
        padding-right: 5px;
    }
    .Explan_title {
        width: 96.5%;
        margin: auto;
        padding: 15px 0;
    }
    .size26 {
        font-size: 26px;
        color: #5E5E5E;
    }
    .vetSetting_content {
        width: 96.5%;
        .vetSetting_content_item {
            padding: 25px 0;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 2px 1px gray;
        }
    }
    .prdfessionalField {
        width: 170px;
        height: 29px;
        border: solid 1px rgb(182, 182, 182);
        border-radius: 10px;
        overflow: hidden;
        input {
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
        }
    }
    .vetSetting_content_item_title {
        position: relative;
    }
    .edit, .alter {
        position: absolute;
        right: 20px;
        top: 10%;
        padding: 5px 0;
        border-radius: 10px;
    }
    .edit {
        background: @helpBtn;
        width: 80px;
    }
    .save {
        background: @hdColor;
        width: 80px;
        padding: 5px 0;
        border-radius: 10px;
    }
    .cancel {
        background: @helpBtn;
        width: 80px;
        border-radius: 10px;
        padding: 5px 0;
        margin-left: 5px;
    }
    .profile_message1 {
        width: 45%;
        padding-left: 60px;
        .address_child {
            color: #7c7878;
            // padding: 0 !important;
        }
        .message_wrap {
            // width: 300px;
            height: 69px;
            padding: 20px 0;
            .title{    
                width: 260px;
            }
            .mean {
                // width: 200px;
                white-space: nowrap;
                color: gray;
            }
        }
    }
    
    .message_wrap_work {
        max-width: 460px;
        flex-wrap: wrap;
        // height: 69px;
        padding: 20px 0;
        .title{    
            width: 221px;
        }
        
    }
    .option {
        border: none;
        outline: none;
        height: 100%;
    }
    .profile_message {
        width: 25%;
        .message_wrap {
            // width: 300px;
            padding: 10px 0;
            .title {    
                width: 146px;
                height: 29px;
            }
            .mean  {
                width: 210px;
                height: 29px;
            }
        }
        .aboutMe {
            margin-top: 50px;
        }
    }
    .aboutMe_text {
        border: solid 1px gray;
        height: 100px;
        border-radius: 20px;
        overflow: hidden;
        padding: 5px;
        background: #F2F2F2;
        textarea {
            width: 100%;
            height: 100%;
            border: none;
            background: #F2F2F2;
            outline: none;
        }
    }
    .profile_img {
        width: 25%;
    }
    .profile_img_wrap {
        width: 230px;
        height: 230px;
        border: solid 1px;
        border-radius: 50%;
        overflow: hidden;
        @media screen and (max-width: 1300px) {
            width: 180px;
            height: 180px;
        }
        @media screen and (max-width: 1100px) {
            width: 140px;
            height: 140px;
        }
    }
    .profileimg {
        height: 100%;
    }
    .vetReset {
        // width: 600px;
        margin-top: 70px;
    }
    .resetBtn {
        background: @logout;
        width: 220px;
        border-radius: 17px;
        color: white;
        padding: 7px 0;
    }

    .inp {
        // width: 140px;
        border: solid 1px rgb(187, 182, 182);
        border-radius: 10px;
        overflow: hidden;
        height: 29px;
        input {
            width: 100%;
            border: none;
            outline: none;
            padding: 1px 15px;
            color: rgb(190, 190, 190);
            font-size: 14px;
        }
    }
    .timeInp_wrap {
        flex-wrap:wrap;
        width: 100%;
        margin-top: 10px;
    }
    .timeInp {
        width: 100px;
        border: solid 1px rgb(182, 182, 182);
        border-radius: 10px;
        overflow: hidden;
        height: 29px;
        input {
            width: 100%;
            border: none;
            outline: none;
        }
    }
    .address_inp {
        width: 220px;
        height: 29px;
        border: solid 1px rgb(182, 182, 182);
        overflow: hidden;
        border-radius: 10px;
        input {
            width: 100%;
            height: 100%;
            padding: 1px 15px;
            color: rgb(197, 197, 197);
            font-size: 14px;
            outline: none;
            border: none;
        }
    }
    .size19 {
        font-size: 17px;
        font-weight: bold;
        color: @explanTitle;
        transition: 0.1s;
        @media screen and (max-width: 1000px){
            font-size: 16px;
            font-weight: bold;
        }
    }
    .size16_s {
        font-size: 17px;
        color: gray;
        transition: 0.1s;
        @media screen and (max-width: 1000px){
            font-size: 16px;
        }
    }
    .s_location {
        // overflow: hidden;
        // text-overflow: ellipsis;
        // display: -webkit-box;
        // -webkit-line-clamp: 2;
        // -webkit-box-orient: vertical;
        word-wrap: wrap !important;
        // line-height: 36.66rpx;
        // letter-spacing: 3.33rpx;
    }
    .img_wrap_p {
        position: relative;
        .update_img {
            position: absolute;
            height: 100%;
            left: 50%;
            top: 0;
            transform: translate(-50%,0);
            z-index: 10;
            cursor: pointer;
        }
    }
</style>