<template>
    <div class="myCustomer flex">
        <div class="animal">
            <div class="wrap clear">
                <div class="wrap_item ju float cursor"  @click="toPatients">
                    <div><img class="personal_img" src="@/assets/img/customerHead.png" alt=""></div>
                    <div class="name tc">
                        <div class="size25">Betty Wong</div>
                        <div class="address flex">
                            <div><img class="address_img" src="@/assets/img/location.png" alt=""></div>
                            <div class="size17">Chai Wan, Hong Kong</div>
                        </div>
                    </div>
                </div>
                <div class="wrap_item ju float">
                    <div><img class="personal_img" src="@/assets/img/customerHead.png" alt=""></div>
                    <div class="name tc">
                        <div class="size25">Betty Wong</div>
                        <div class="address flex">
                            <div><img class="address_img" src="@/assets/img/location.png" alt=""></div>
                            <div class="size17">Chai Wan, Hong Kong</div>
                        </div>
                    </div>
                </div>
                <div class="wrap_item ju float">
                    <div><img class="personal_img" src="@/assets/img/customerHead.png" alt=""></div>
                    <div class="name tc">
                        <div class="size25">Betty Wong</div>
                        <div class="address flex">
                            <div><img class="address_img" src="@/assets/img/location.png" alt=""></div>
                            <div class="size17">Chai Wan, Hong Kong</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="player mg" id="player2">
                <div id="player1">

                </div>
            </div>
            <div class="join" @click="join">
                加入
            </div>
            <div @click="leave">离开</div>
        </div>
        <div class="personWithAnimal">
            <div class="information_wrap">
                <div class="petDetails">
                    <div class="petDetails_item">
                        <div class="Title sb">
                            <div class="size19">Pet Details</div>
                        </div>
                        <div class="ju"><img class="Img" src="@/assets/img/petimg.png" alt=""></div>
                        <div class="pet_information">
                            <div class="pet_name size19">Gigi</div>
                            <div class="size15bl">Pet ID : 000000</div>
                            <div class="size15bl">Age : 1 yrs</div>
                            <div class="size15bl">Sex : F</div>
                            <div class="size15bl">neutered status : None</div>
                            <div class="size15bl">Weight : 20kg</div>
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
                    <div><img class="relationWay" src="@/assets/img/chat.png" alt=""></div>
                    <div><img class="relationWay" src="@/assets/img/phone.png" alt=""></div>
                </div>
                <div class="message_list size15bl">
                    <div style="width:100%" class="flex al ts">
                        <div class="const">User ID</div>
                        <div class="event">Tom6666666666666</div>
                    </div>
                    <div style="width:100%" class="flex al ts">
                        <div class="const">Name</div>
                        <div class="event">Tom6666666666666</div>
                    </div>
                    <div style="width:100%" class="flex al ts">
                        <div class="const">Age</div>
                        <div class="event">Tom6666666666666</div>
                    </div>
                    <div style="width:100%" class="flex al ts">
                        <div class="const">Location</div>
                        <div class="event">Tom6666666666666</div>
                    </div>
                    <div style="width:100%" class="flex al ts">
                        <div class="const">Mobile</div>
                        <div class="event">Tom6666666666666</div>
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
            client:null,
            localTracks : {
                videoTrack: null,
                audioTrack: null
            },
            remoteUsers : {},
            options: {
                appid: '0bc95e1145da4b729993725eb55b319a',
                channel: '654',
                uid: 888,
                token: '0060bc95e1145da4b729993725eb55b319aIABktH+02bSfhRnt1IbqwSWGHtt2CLSt2SYNHo683uu1BjN2IlwAAAAAEAD/3NMfIxqyYAEAAQAjGrJg'
            }
        }
    },
    mounted () {
        this.createClient()
    },
    methods: {
        toPatients () {
            this.$router.push("/patients")
        },

        createClient () {
            this.client = this.$V.createClient({  //进入页面自动调用 mounted
                mode: "rtc",
                codec: "vp8"
            })
            this.client.on("user-published", this.handleUserPublished);    //点击join触发
        },
        handleUserPublished (user, mediaType) {
            console.log(1233333, user.uid, mediaType)
            const id = user.uid;
            this.remoteUsers[id] = user;
            this.subscribe(user, mediaType);
        },
        async subscribe (user, mediaType) {
            const uid = user.uid;
            await this.client.subscribe(user, mediaType);
            if (mediaType === 'video') {
                console.log("subscribe success" , uid, this.client.uid);
                user.videoTrack.play(`player2`);
            }
            if (mediaType === 'audio') {
                user.audioTrack.play();
            }
        },
        async join () {
            [ this.options.uid, this.localTracks.audioTrack, this.localTracks.videoTrack ] = await Promise.all([
                // join the channel
                this.client.join(this.options.appid, this.options.channel, this.options.token || null),
                // create local tracks, using microphone and camera
                this.$V.createMicrophoneAudioTrack(),
                this.$V.createCameraVideoTrack()
            ]);
            this.localTracks.videoTrack.play("player1");
            await this.client.publish(Object.values(this.localTracks));
            console.log("publish success");
        },
        async leave() {
            for (var trackName in this.localTracks) {
                var track = this.localTracks[trackName];
                if(track) {
                    track.stop();
                    track.close();
                    this.localTracks[trackName] = undefined;
                }
            }
            // remove remote users and player views
            this.remoteUsers = {};
            // leave the channel
            await this.client.leave();
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
        }
    }
    .personal_name {
        padding: 10px 0;
    }
    .wrap_item {
        width: 30.33%;
        padding: 20px 0;
        box-shadow: 0 2px 1px 1px #D5D5D5;
        margin: 0 3% 5px 0%;
        transition: 0.2s;
        @media screen and (max-width:1620px) {
            width: 46%;
            margin: 0 3.5% 5px 0.5%;
        }
        @media screen and (max-width:1000px) {
            width: 80%;
            margin: 0 3.5% 5px 8.5%;
        }
    }
    .personal_img {
        padding-right: 8px;
        
    }
    .personWithAnimal {
        width: 26%;
        .information_wrap {
            width: 90%;
            margin: auto;
            height: 100%;
        }
    }
    .address_img {
        width: 16px;
        height: 21px;
        padding-right: 8px;
    }
    .size25 {
        color: black;
        font-size: 25px;
    }
    .size19 {
        font-size: 19px;
    }
    .size17 {
        color: #9F9F9F;
        font-size: 17px;
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
</style>