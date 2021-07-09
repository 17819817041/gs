<template>
    <div class="myCustomer flex" v-loading='loading'>
        <div class="animal">
            <div class="wrap clear">
                <!-- <div class="wrap_item ju float cursor"  @click="toPatients">
                    <div><img class="personal_img" src="@/assets/img/customerHead.png" alt=""></div>
                    <div class="name tc">
                        <div class="size25">Betty Wong</div>
                        <div class="address flex">
                            <div><img class="address_img" src="@/assets/img/location.png" alt=""></div>
                            <div class="size17">Chai Wan, Hong Kong</div>
                        </div>
                    </div>
                </div> -->
                <div class="wrap_item float" v-for="(item,i) in petList" :key="item.id"   @click="toPatients(item,i)">
                    <div class="flex al">
                        <div class="ju al Personal">
                            <img class="personal_img" style="height:100%;" v-if="item.petHeadUrl" :src="item.petHeadUrl" alt="">
                            <i class="el-icon-picture-outline Icon" v-else></i>
                        </div>
                        <div class="name">
                            <div class="size18 petName flex" v-if="item.petName">
                                <div class="address_img"></div>
                                <div>{{item.petName}}</div>
                            </div>
                            <div class="size18 flex" v-else>
                                <div class="address_img"></div>
                                <div>No Name</div>
                            </div>
                            <div class="size_14 flex">
                                <div class="address_img"></div>
                                <div>{{item.petId}}</div>
                            </div>
                            <div class="address flex">
                                <div><img class="address_img" src="@/assets/img/location.png" alt=""></div>
                                <div class="size_14 address_name" v-if="item.address">{{item.address}}</div>
                                <div class="size_14 address_name" v-else-if="item.address === null">No Address</div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <img class="Img" :src="changePage.petHeadUrl" alt="" v-if="changePage.petHeadUrl">
                            <i class=" el-icon-picture-outline Icon" style="font-size:60px;color:gray;" v-else></i>
                        </div>
                        <div class="pet_information">
                            <div class="pet_name size19" v-if="changePage.petName">{{changePage.petName}}</div>
                            <div class="pet_name size19" v-else>None</div>
                            <div class="size15bl">Pet ID : {{changePage.petId}}</div>
                            <div class="size15bl">Age : {{changePage.petAge}}</div>
                            <div class="size15bl">Sex : {{changePage.petGenderName}}</div>
                            <div class="size15bl">neutered status : 
                                <span v-if="changePage.neuteredState == 1">Sterilization</span>
                                <span v-if="changePage.neuteredState == 2">Unneutered</span>
                                <span v-if="changePage.neuteredState === null">No data</span>
                            </div>
                            <div class="size15bl">Weight : {{changePage.petWeight}}kg</div>
                        </div>
                        <!-- <div class="petMore te cursor"><span>More...</span></div> -->
                    </div>
                </div>
                <div style="margin-top:30px;">
                    <div class="guardianDetails mg size19">Guardian Details</div>
                    <div class="mg ju al patients_img_wrap">
                        <img class="patients_img" v-if="changePage.userHead" :src="changePage.userHead" alt="">
                        <i class=" el-icon-picture-outline Icon" style="font-size:40px;color:gray;" v-else></i>
                    </div>
                    <div class="size19 tc personal_name">{{changePage.userName}}</div>
                    <div class="address ju">
                        <div><img class="address_img" src="@/assets/img/location.png" alt=""></div>
                        <div class="size13" v-if="changePage.address" >{{changePage.address}}</div>
                        <div class="size13" v-else>No data</div>
                    </div>
                    <div class="ju">
                        <div><img class="relationWay cursor" src="@/assets/img/chat.png" alt=""></div>
                        <div><img class="relationWay cursor" src="@/assets/img/phone.png" alt=""></div>
                    </div>
                    <div class="message_list size15bl">
                        <div style="width:100%" class="flex al ts">
                            <div class="const">User ID</div>
                            <div class="event">{{changePage.userId}}</div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Name</div>
                            <div class="event">{{changePage.userName}}</div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Age</div>
                            <div class="event">{{changePage.age}}</div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Location</div>
                            <div class="event">{{changePage.address}}</div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Mobile</div>
                            <div class="event">{{changePage.Mobile}}</div>
                        </div>
                    </div>
                    <div class="personMore"><span class="cursor" @click="pet_user_d">More...</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { allPet, getUserByPetId } from "@/axios/request.js"
export default {
    data () {
        return {
            // client:null,
            // localTracks : {
            //     videoTrack: null,
            //     audioTrack: null
            // },
            // remoteUsers : {},
            // options: {
            //     appid: '0bc95e1145da4b729993725eb55b319a',
            //     channel: '654',
            //     uid: 888,
            //     token: '0060bc95e1145da4b729993725eb55b319aIABktH+02bSfhRnt1IbqwSWGHtt2CLSt2SYNHo683uu1BjN2IlwAAAAAEAD/3NMfIxqyYAEAAQAjGrJg'
            // },
            // List: {},
            pageNum: 1,
            pageSize: 100,
            changePage: {},
        }
    },
    mounted () {
        // this.createClient()
    },
    created () {
        this.getPetLists()
        
    },
    watch: {
        // petList: {
        //     handler (val) {

        //     },
        //     immediate: true
        // }
    },
    computed: {
        petList: {
            get () {return this.$store.state.user.petList},
            // set (val) {
            //     this.$store.commit("setUser", {
            //         key: "petList",
            //         value: val
            //     })
            // },
        },
        loading () { return this.$store.state.user.loading }
    },
    methods: {
        toPatients (item,i) {
            let data = {
                petId: item.petId
            }
            getUserByPetId(data).then(res => {
                console.log(res,'petAndUser')
                if (res.data.rtnCode == 200) {
                    this.changePage = res.data.data
                }
            }).catch(e => {
                console.log(e)
                this.$message({
                    type: 'error',
                    message: "The query failed. The data has been deleted!"
                })
            })
        },
        pet_user_d () {
            if (this.changePage) {
                this.$router.push({
                    path: '/patients?id=' + this.changePage.petId
                })
            }
        },
        getPetLists () {
            let data = {
                vm: this,
                userId: localStorage.getItem("adminUserId"),
                pageNum: 1,
                pageSize: 1000
            }
            this.$store.dispatch('getPetList',data)
        },
        





        // createClient () {
        //     this.client = this.$V.createClient({  //进入页面自动调用 mounted
        //         mode: "rtc",
        //         codec: "vp8"
        //     })
        //     this.client.on("user-published", this.handleUserPublished);    //点击join触发
        // },
        // handleUserPublished (user, mediaType) {
        //     console.log(1233333, user.uid, mediaType)
        //     const id = user.uid;
        //     this.remoteUsers[id] = user;
        //     this.subscribe(user, mediaType);
        // },
        // async subscribe (user, mediaType) {
        //     const uid = user.uid;
        //     await this.client.subscribe(user, mediaType);
        //     if (mediaType === 'video') {
        //         console.log("subscribe success" , uid, this.client.uid);
        //         user.videoTrack.play(`player2`);
        //     }
        //     if (mediaType === 'audio') {
        //         user.audioTrack.play();
        //     }
        // },
        // async join () {
        //     [ this.options.uid, this.localTracks.audioTrack, this.localTracks.videoTrack ] = await Promise.all([
        //         // join the channel
        //         this.client.join(this.options.appid, this.options.channel, this.options.token || null),
        //         // create local tracks, using microphone and camera
        //         this.$V.createMicrophoneAudioTrack(),
        //         this.$V.createCameraVideoTrack()
        //     ]);
        //     this.localTracks.videoTrack.play("player1");
        //     await this.client.publish(Object.values(this.localTracks));
        //     console.log("publish success");
        // },
        // async leave() {
        //     for (var trackName in this.localTracks) {
        //         var track = this.localTracks[trackName];
        //         if(track) {
        //             track.stop();
        //             track.close();
        //             this.localTracks[trackName] = undefined;
        //         }
        //     }
        //     // remove remote users and player views
        //     this.remoteUsers = {};
        //     // leave the channel
        //     await this.client.leave();
        // }
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
        overflow-y: auto;
        overflow-x: hidden;
        @media screen and (max-width:1000px) {
            width: 60%;
        }
        .wrap {
            width: 102.5%;
            padding: 1.8% 1.3% 1.8% 1.8%;
            height: 100%;
            
        }
    }
    .animal::-webkit-scrollbar {
        width: 7px;
    }
    .animal::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background: rgb(212, 212, 212);
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
            // display: inline-block;
            float: right;
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
</style>