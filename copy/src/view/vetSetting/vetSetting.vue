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
                                <div style="width:100%;margin:auto;height:100%" class="ju al">
                                    <img :class="['profileimg mg', {cursor: !edit}]" v-if="userDetail.userImage" :src="userDetail.userImage" alt="" mode="widthFix">
                                    <i v-else class="el-icon-picture-outline" style="font-size:125px;color:gray"></i>
                                </div>
                                <input type="file" id="avaSet" v-if="!edit" v-show="false" @change="getImage">
                            </label>
                        </div>
                    </div>
                    <div class="profile_message">
                        <div class="message_wrap flex">
                            <div class="title al">User ID</div>
                            <div class="mean al">{{userDetail.userId}}</div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al">Name</div>
                            <div v-if="edit" class="mean al">{{userDetail.doctorName}}</div>
                            <div v-else class="inp mean al"><input type="text" v-model="userDetail.doctorName"></div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al">Age</div>
                            <div v-if="edit" class="mean al">{{userDetail.age? userDetail.age:'None'}}</div>
                            <div v-else class="inp mean al"><input type="text" v-model="userDetail.age"></div>
                        </div>

                        <div class="message_wrap flex">
                            <div  class="title al">Location</div>
                            <div v-if="edit" class="mean al">{{
                                address.find(ad => ad.areaId == userDetail.addressId) ? 
                                address.find(ad => ad.areaId == userDetail.addressId).addressName : ""
                            }}</div>
                            <div v-else class="inp mean al">
                                <el-select v-model="userDetail.addressId">
                                    <el-option v-for="(add) in address" :key="add.id" :value="add.areaId" :label="add.addressName"></el-option>
                                </el-select>
                            </div>
                        </div>

                        <div class="message_wrap flex">
                            <div class="title al">Mobile</div>
                            <div v-if="edit" class="mean al">{{userDetail.mobile? userDetail.mobile: "None"}}</div>
                            <div v-else class="inp mean al"><input type="text" v-model="userDetail.mobile"></div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al">Gender</div>
                            <div class="mean al" v-if="edit">
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
                            <div class="title al">Education</div>
                            <div class="mean al" v-if="edit">
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
                            <div class="title al">Gertification</div>
                            <div class="mean al">-</div>
                        </div>

                        <div class="aboutMe">
                            <div>More about you</div>
                            <div v-if="edit">
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
                                <div class="title al">Veterinary Hospital</div>
                                <div v-if="edit" class="mean al">{{userDetail.vetrtinaryHospitalName?userDetail.vetrtinaryHospitalName:"None"}}</div>
                                <!-- <div v-else class="inp mean al"><input type="text" v-model="userDetail.vetrtinaryHospitalId"></div> -->
                                <div v-else class="inp mean al">
                                    <el-select class="option width100 al" @change="getHospital" v-model="userDetail.vetrtinaryHospitalName" placeholder="Hospital" name="" id="">
                                        <el-option v-for="(item) in hospitalList" 
                                        :key="item.veterinaryHospitalId" 
                                        :value="item.veterinaryHospitalId" 
                                        :label="item.veterinaryHospitalName">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="title al">Work experience</div>
                                <div class="mean al" v-if="edit">{{userDetail.workExperience? userDetail.workExperience: "None"}}+ years</div>
                                <div v-else class="inp mean al"><input type="text" 
                                @input="userDetail.workExperience=userDetail.workExperience.replace(/[^\d]/g,'')" v-model="userDetail.workExperience"></div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="al">Working address and Timing</div>
                            </div>
                            <div class="message_wrap address_child al">
                                <div v-if="edit">{{userDetail.workingAddress}}</div>
                                <div v-else class="address_inp al"><input type="text" v-model="userDetail.workingAddress"></div>
                            </div>
                            <div class="message_wrap_work">
                                <div v-if="edit" style="margin-top:10px;color: #7c7878;">{{userDetail.startTime}} - {{userDetail.endTime}} {{wookingDay}} </div>   <!--{{userDetail.remake}}-->
                                <div v-else class="timeInp_wrap sb al">
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
                                            placeholder="Booking Star Time">
                                        </el-time-select>
                                    </div> -
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
                                            placeholder="Booking Star Time">
                                        </el-time-select>
                                    </div>

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
                                    </div> to
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
                            <div class="message_wrap flex">
                                <div class="title al">Professional field</div>
                                <div class="mean al" v-if="edit">
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
            userDetails: {}
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
        userDetail () { return this.$store.state.user.userDetail }
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
                file(formData).then(msg => {
                    if (msg.data.rtnCode == 200) {
                        this.userDetail.headUr = msg.data.data
                    } else {
                        this.userDetails = {}
                    }
                })
            })
        },
        changeAddress (e) {
            console.log(e)
            this.userDetail.location = e
        },
        getAddress () {
            address().then(res => {
                // console.log(res)
                // res.data.data.forEach(item => {
                //     item.areaId = String(item.areaId)
                // })
                this.address = res.data.data
            })
        },
        getHospital (val) {
            console.log(val)
            this.userDetail.vetrtinaryHospitalId = val
        },
        editBtn () {
            this.edit = false
        },
        saveBtn () {
            // this.wookingDay = this.s_week + ' to ' + this.e_week
            this.update()
            this.edit = true
        },
        cancelBtn () {
            this.edit = true
        },
        reset () {
            this.$router.push("/vetReset")
        },
        update () {
            // this.userDetail.remake = 'Monday to Friday'
            updateVetDetails(this.userDetail).then(res => {
                console.log(res)
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
        getHospitalList () {
            HospitalList().then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.hospitalList = res.data.data
                }
            })
        }
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
        border: solid 1px;
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
            width: 300px;
            height: 69px;
            padding: 20px 0;
            .title{    
                width: 260px;
            }
            .mean {
                width: 200px;
            }
        }
    }
    .message_wrap_work {
        width: 460px;
        height: 69px;
        padding: 20px 0;
        .title{    
            width: 260px;
        }
        .mean {
            width: 200px;
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
            width: 300px;
            padding: 10px 0;
            .title {    
                width: 250px;
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
        width: 250px;
        height: 250px;
        border: solid 1px;
        border-radius: 50%;
        overflow: hidden;
    }
    .profileimg {
        height: 100%;
    }
    .vetReset {
        width: 600px;
        margin-top: 90px;
    }
    .resetBtn {
        background: @logout;
        width: 220px;
        border-radius: 17px;
        color: white;
        padding: 7px 0;
    }

    .inp {
        width: 140px;
        border: solid 1px rgb(187, 182, 182);
        border-radius: 10px;
        overflow: hidden;
        height: 29px;
        input {
            width: 100%;
            border: none;
            outline: none;
        }
    }
    .timeInp_wrap {
        width: 100%;
        margin-top: 10px;
    }
    .timeInp {
        width: 100px;
        border: solid 1px;
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
        border: solid 1px;
        border-radius: 10px;
        input {
            outline: none;
            border: none;
        }
    }
</style>