<style lang="less">
@import "@/less/css.less";
    .adminAgora {
        flex: 10;
        height: 100%;

    }
    .adminFunction {
        width: 40%;
        // height: 100%;
        border: blue;
    }
    .mutual_video {
        width: 100%;
        // border: solid 1px red;
        // height: 50%;
        .mutual_video_item {
            width: 100%;
            height: 50%;
            border: solid 1px green;
            box-sizing: border-box;
            display: block;
        }
        .video {
            width: 50%;
            height: 300px;
            border: solid 1px black;
        }
    }
    .caller_callTo {
        width: 100%;
        // height: 50%;
    }
    .d_user {
        width: 50%;
        height: 100%;
    }



    .userDetails_wrap {
        width: 50%;
    }
    .patients_img_wrap {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        margin-top: 5px;
        border: solid 1px rgb(211, 208, 208);
    }
    .patients_img {
        height: 100%;
    }
    .personal_name {
        padding: 5px 0;
    }
    .address_img {
        width: 14px;
        height: 19px;
        margin-right: 8px;
    }
    .relationWay {
        padding: 5px 0px;
    }
    .message_list {
        width: 65%;
        margin: 10px auto;
    }
    .size15bl {
        font-size: 15px;
    }
    .const {
        width: 35%;
        padding-bottom: 7px;
        margin-left: 25%;
    }
    .event {
        // width: 65%;
        padding-bottom: 11px;
    }
    .personMore {
        span{
            color: #1976D2;
            font-size: 16px;
            text-decoration: underline;
            padding: 5px 20px 5px 0px;
        }
    }
    .my_account {
        width: 400px;
        display: flex;
        flex-direction: column;
    }
    .guardianDetails {
        
        padding: 5px 0 5px 20px;
    }
    .outLogo {
        width: 45%;
        height: 36px;
        border-radius: 15px;
        background: @logout;
        color: white;
    }
    .userHead_img {
        width: 50px;
        height: 50px;
        border: solid 1px rgb(217, 223, 219);
        border-radius: 50%;
        overflow: hidden;
        background: white;
        margin-right: 5px;
    }
    .userHead {
        height: 100%;
    }
    .myOperation{
        width: 30%;
        height: 50px;
        padding: 0 10px;
    }
    .about_me {
        width: 90%;
        padding: 30px 0 28px 0;
        // @media screen and (max-width: 1300px) {
        //     transform: scale(0.9,0.6);
        // }
    }
    .outLogo {
        width: 100%;
        height: 36px;
        border-radius: 15px;
        background: @logout;
        color: white;
    }
    .myName {
        width: 70%;
        padding: 0 5px;
    }
    .helpAbout {
        width: 50%;
        height: 36px;
        padding: 0 5px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: 100;
        background: @helpBtn;
        img {
            padding-right: 5px;
        }
    }
    .logo_wrap {
        position: relative;
        height: 109px;
        margin-bottom: 10px;
        
    }
    .LOGO {
        position: absolute;
        left: 62px;
        top: 15px;
        width: 110px;
        height: 123px;
        z-index: 500;
        background: white;
        @media screen and (max-width: 1300px) {
            width: 75px;
            height: 85px;
        }
        @media screen and (max-width: 564px) {
            width: 50px;
            height: 60px;
        }
    }
    .star_e {
        width: 90%;
        background: @ThemeColor;
        border-radius: 12px;
        padding: 15px 0;
        color: white;
    }
    .leave_r {
        width: 90%;
        background: @denger;
        border-radius: 12px;
        padding: 15px 0;
        color: white;
        margin: 25px auto;
    }
    .record_show {
        width: 90%;
        border-radius: 8px;
        border: solid 3px #EAEAEA;
        flex: 10;
        margin: 35px auto;
        padding: 0 20px;
        .record_title {
            padding: 20px 0;
            color: gray;
            font-size: 17px;
        }
        .record_date, .Details {
            color: #8D8D8D;
            font-size: 14px;
        }
    }
    .data_item {
        padding: 7px;
    }
    .Details_item {
        padding: 20px 0 5px 0;
    }
    .details_content {
        padding: 7px;
        max-width: 75%;
        word-wrap: wrap;
    }
    .i_pet {
        height: 100%;
        overflow: auto;
    }
    .confr_video {
        height: 100%;
        overflow: auto;
        padding: 25px 10px;
    }
    .my_account {
        height: 100%;
        overflow: auto;
    }
</style>
<template>
    <div class="adminAgora flex">
        <!-- <div class="adminFunction">
            <button @click="out">out</button>
        </div> -->
        <div class="i_pet noBar">
            <div class="logo_wrap">
                <img class="LOGO" src="@/assets/img/logo.png" alt="">
            </div>
            <Message></Message>
        </div>
        <div style="flex: 10" class="confr_video noBar">
            <div class="mutual_video flex">
                <!-- <video class="mutual_video_item" autoplay id="video"></video>
                <video class="mutual_video_item" autoplay id="video"></video> -->
                <div class="video"></div>
                <div class="video"></div>
            </div>
            <div class="caller_callTo flex">
                <div class="d_user">
                    <div class="guardianDetails mg size19">Guardian Details</div>
                    <div class="userDetails_wrap mg">
                        <div class="ju al patients_img_wrap mg">
                            <img class="patients_img" v-if="petAndUser.userHead" :src="petAndUser.userHead" alt="">
                            <i class=" el-icon-picture-outline Icon" style="font-size:40px;color:gray;" v-else></i>
                        </div>
                        <div class="size19 tc personal_name">{{petAndUser.userName}}</div>
                        <div class="address ju">
                            <div>
                                <img class="address_img" src="@/assets/img/location.png" alt="">
                            </div>
                            <div class="size13">{{petAndUser.address}}</div>
                        </div>
                        <div class="ju">
                            <div><img class="relationWay cursor" src="@/assets/img/chat.png" alt=""></div>
                        </div>
                        <div class="message_list mg size15bl">
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
                                <div class="event">HK</div>
                            </div>
                            <div style="width:100%" class="flex al ts">
                                <div class="const">Mobile</div>
                                <div class="event">{{petAndUser.moble}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="personMore mg te flexEnd cursor"><span>More...</span></div>
                </div>
                <div class="d_user"></div>
            </div>
        </div>
        <div class="my_account noBar">
            <div>
                <div class="about_me mg sb">
                    <div class="myName al">
                        <div class="al">
                            <div class="userHead_img ju al">
                                <!-- <img class="userHead" src="@/assets/img/john.png" alt=""> -->
                                <img v-if="userDetailMessage.image" class="userHead" :src="userDetailMessage.image" alt="">
                                <i class="el-icon-picture-outline" v-else style="font-size:30px;color:gray"></i>
                            </div>
                            <div class="tc size14" v-if="userDetailMessage.name">{{userDetailMessage.name}}</div>
                            <div v-else class="tc" style="font-size:12px">No Name</div>
                        </div>
                        <div><img style="width:17px;height:22px;margin-left:5px" src="@/assets/img/information.png" alt=""></div>
                    </div>
                    <div class="myOperation al flexEnd">
                        <div class="outLogo size12 bold cursor al ju">Logout</div>
                    </div>
                </div>
                <div class="star_e bold cursor tc mg white">
                    17:00 - 18:00
                </div>
                <div class="leave_r cursor bold tc white">
                    Leave the Room
                </div>
            </div>
            <div class="record_show">
                <div class="record_title">
                    Medical Record
                </div>
                <div class="record_date">
                    <div>Date</div>
                    <div class="data_item">{{date}}</div>
                </div>
                <div class="Details">
                    <div class="Details_item">Details</div>
                    <div class="details_content">
                        -----------------------------------------------------------------------------------------------
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
            petAndUser: {},
            date: ''
        }   
    },
    created () {
        this.getUser()
        this.getToday()
    },
    mounted () {
        this.join()
    },
    computed: {
        userDetailMessage () { return this.$store.state.user.userDetail }
    },
    methods: {
        getToday () {
            var d = new Date()
            console.log(d.toLocaleDateString(),d.toDateString())
            this.date = d.toDateString().split(' ')[2] + ' ' + d.toDateString().split(' ')[1] + ' ' + d.toDateString().split(' ')[3]
        },
        getUser () {
            let user = JSON.parse(localStorage.getItem('confr'))
            console.log(user)
            let data = {
                petId: user.password.petId
            }
            getUserByPetId(data).then(res => {
                console.log(res,'petAndUser')
                if (res.data.rtnCode == 200) {
                    this.petAndUser = res.data.data
                    this.$store.state.user.agoraPet = res.data.data
                }
            }).catch(e => {
                console.log(e)
                this.$message({
                    type: 'error',
                    message: "The query failed. The data has been deleted!"
                })
            })
        },
        async join () {
            var confr = localStorage.getItem('confr')
            // console.log(confr)
            if (confr) {
                confr = JSON.parse(confr)
                let params = {
                    // roomName: confr.userid,
                    roomName: '486A1',
                    password: "123456",
                    role: 3,
                    config:{ 
                        rec: false, 
                        recMerge:false, //是否开启合并录制
                        supportWechatMiniProgram: true //是否允许小程序加入会议
                    }
                }
                console.log("room",params)

                const user_room = await emedia.mgr.joinRoom(params);
                console.log("room",user_room,params)
                let constraints = { audio: false, video: false };
                const stream = await emedia.mgr.publish(constraints)
            }
           
        },
        out () {
            window.eMedia.mgr.exitConference()
        }
    }
}
</script>