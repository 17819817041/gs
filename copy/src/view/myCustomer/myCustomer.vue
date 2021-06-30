<template>
    <div class="myCustomer flex">
        <div class="animal">
            <div class="wrap noBar clear">
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
                <div class="wrap_item float" v-for="(item,i) in List" :key="item.id"   @click="toPatients(item,i)">
                    <div class="flex al">
                        <div class="ju al Personal">
                            <img class="personal_img" style="height:100%;" v-if="item.image" :src="item.image" alt="">
                            <i class="el-icon-picture-outline Icon" v-else></i>
                        </div>
                        <div class="name">
                            <div class="size18 petName flex" v-if="item.name">
                                <div class="address_img"></div>
                                <div>{{item.name}}</div>
                            </div>
                            <div class="size18 flex" v-else>
                                <div class="address_img"></div>
                                <div>No Name</div>
                            </div>
                            <div class="size_14 flex">
                                <div class="address_img"></div>
                                <div>{{item.id}}</div>
                            </div>
                            <div class="address flex">
                                <div><img class="address_img" src="@/assets/img/location.png" alt=""></div>
                                <div class="size_14 address_name">Chai Wan, Hong Kong</div>
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
                            <img class="Img" :src="changePage.image" alt="" v-if="changePage.image">
                            <i class=" el-icon-picture-outline Icon" style="font-size:60px;color:gray;" v-else></i>
                        </div>
                        <div class="pet_information">
                            <div class="pet_name size19" v-if="changePage.name">{{changePage.name}}</div>
                            <div class="pet_name size19" v-else>None</div>
                            <div class="size15bl">Pet ID : {{changePage.id}}</div>
                            <div class="size15bl">Age : {{changePage.age}}</div>
                            <div class="size15bl">Sex : {{changePage.gender}}</div>
                            <div class="size15bl">neutered status : None</div>
                            <div class="size15bl">Weight : {{changePage.weight}}kg</div>
                        </div>
                        <div class="petMore te cursor"><span>More...</span></div>
                    </div>
                </div>
                <div>
                    <div class="guardianDetails mg size19">Guardian Details</div>
                    <div class="ju"><img class="patients_img" src="@/assets/img/customerHead1.png" alt=""></div>
                    <div class="size19 tc personal_name">Betty Wong</div>
                    <div class="address ju">
                        <div><img class="address_img" src="@/assets/img/location.png" alt=""></div>
                        <div class="size13">Chai Wan, Hong Kong</div>
                    </div>
                    <div class="ju">
                        <div><img class="relationWay cursor" src="@/assets/img/chat.png" alt=""></div>
                        <div><img class="relationWay cursor" src="@/assets/img/phone.png" alt=""></div>
                    </div>
                    <div class="message_list size15bl">
                        <div style="width:100%" class="flex al ts">
                            <div class="const">User ID</div>
                            <div class="event">666</div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Name</div>
                            <div class="event">Tom</div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Age</div>
                            <div class="event">21</div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Location</div>
                            <div class="event">HK</div>
                        </div>
                        <div style="width:100%" class="flex al ts">
                            <div class="const">Mobile</div>
                            <div class="event">12138</div>
                        </div>
                    </div>
                    <div class="personMore mg te cursor"><span>More...</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            List: {},
            pageNum: 0,
            pageSize: 100,
            changePage: {}
        }
    },
    mounted () {
        // this.createClient()
    },
    created () {
        var data = {
            // userId: localStorage.getItem("userId"),
            userId: 486,
            pageNum: 1,
            pageSize: 10
        }
        this.$store.dispatch("getPetList",data)
    },
    watch: {
        petList: {
            handler (val) {
                this.List = JSON.parse(JSON.stringify(this.petList))
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
        }
    },
    methods: {
        toPatients (item,i) {
            if (i == 0) {
                this.$router.push("/patients")
            }
            this.changePage = item
            console.log(this.changePage)
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
    .Personal {
        width: 65px;
        height: 65px;
        overflow: hidden;
        border: solid 1px rgb(228, 223, 223);
        border-radius: 50%;
        margin-right: 10px;
    }
    .personal_img {
        padding-right: 8px;
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
        margin-top: 5px;
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
        margin-top:30px;
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
        padding: 2px 0 5px 0;
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
</style>