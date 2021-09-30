<template>
    <div class="changeBatch" v-loading='loading'>
        <div>
            <div class="firstAid_title tc">Online Emergency Doctor</div>
            <div class="choose tc">Choose a Doctor</div>
            <div class="cut_d al mg" v-if="doc[0]">
                <span class="cursor al" @click="cutDoc"><img src="@/assets/img/cut_d.png" alt=""> Change batch</span>
            </div>
        </div>
        <div class="changeBatch_c mg clear" v-if="doc[0]">
            <div class="batch_doc float" v-for="(item,i) in doc" :key="i">
                <div class="about_doc flex">
                    <div class="doc_img ju al">
                        <img style="height:100%;" :src="item.userHead" v-if="item.userHead" alt="">
                        <i class="el-icon-picture-outline Icon" style="font-size: 27px;color:gray" v-else></i>
                    </div>
                    <div class="name_address">
                        <div class="size21">
                            <span class="d_name" v-if="item.doctorName">{{item.doctorName}}</span>
                            <span v-else>No Name</span>
                        </div>
                        <div class="size15 al">
                            <span class="al"><img style="widthh:12px;height:15px" src="@/assets/img/location.png" alt=""></span>
                            <span class="d_location" v-if="item.addressName">{{item.addressName}}</span>
                            <span class="d_location" v-else>No Address</span>
                        </div>
                    </div>
                </div>
                <div class="workTime al sb">
                    <div>
                        <div class="size14">Experience</div>
                        <div>
                            <span class="size16" v-if="item.experience">{{item.experience}}</span> 
                            <span v-else>0</span>
                            <span class="size14"> Years</span>
                        </div>
                    </div>
                    <div>
                        <div class="size14">Likes</div>
                        <div><span class="size16">{{item.totalLike}}</span><span class="size14"> ({{item.likingRate}}) </span></div>
                    </div>
                    <div class="call ju cursor al callBtn" @click="starBook(item)">
                        Call
                    </div>
                </div>
                <div class="doc_content">
                    <span v-if="item.doctorContent">{{item.doctorContent}}</span>
                    <span v-else>The doctor has no profile yet</span>
                </div>
            </div>
            <!-- <div class="batch_doc float" style="height: 191px;border: solid 1px"></div>
            <div class="batch_doc float" style="height: 191px;border: solid 1px"></div>
            <div class="batch_doc float" style="height: 191px;border: solid 1px"></div>
            <div class="batch_doc float" style="height: 191px;border: solid 1px"></div> -->
        </div>
        <div class="changeBatch_c mg" v-else>
            <div class="firstAid_title tc">
                No online doctor!
            </div>
        </div>
    </div>
</template>

<script>
import { changeBatch } from '@/axios/request.js'
export default {
    data () {
        return {
            pageNum: 1,
            pageSize: 5,
            totalRecordsCount: 0,
            doc: [],
            loading: true
        }
    },
    created () {
        console.log(this.$route.query)
        this.getchangeBatch()
    },
    computed: {
        callModal: {
            get () { return this.$store.state.user.callModal },
            set (val) {
                this.$store.commit("setUser", {
                    key: "callModal",
                    value: val
                })
            },
        },
        doctorList: { 
            get () { return this.$store.state.user.doctorList },
            set (val) {
                this.$store.commit("setUser", {
                    key: "doctorList",
                    value: val
                })
            }
        },
		caller () { return this.$store.state.user.caller },
		userDetail () { return this.$store.state.user.userDetail },
		IMuser () { return this.$store.state.user.IMuser },
		mask () {return this.$store.state.user.mask},
		cut_metting () { return this.$store.state.user.mettingId },
		petId: {
			get () { return this.$store.state.user.petId },
			set (val) {
				this.$store.commit("setUser", {
                    key: "petId",
                    value: val
                })
			}
		},
		pet () {return this.$store.state.user.pet},
    },
    methods: {
        getchangeBatch () {
            let data = {
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            changeBatch(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200 ) {
                    this.doc = res.data.data.pageT
                    this.totalRecordsCount = res.data.data.totalRecordsCount
                }
            })
        },
        cutDoc () {
            if (this.totalRecordsCount <= 5) {
                this.$message({
                    type: 'warning',
                    message: 'No more!'
                })
            } else {
                this.loading = true
                console.log(Math.ceil(this.totalRecordsCount/5))
                this.pageNum >= Math.ceil(this.totalRecordsCount/5) ? this.pageNum = 1 : this.pageNum +=1
                this.getchangeBatch()
            }
        },
        starBook (item) {
            if (item.doctorName == null) {
                item.doctorName = 'No name'
            }
            this.$store.commit("setUser",{
                key: "vDetail",
                value: item
            })
            this.$store.commit("setUser",{
                key: "mask",
                value: item
            })
            this.$store.commit("setUser", {
                key: "callTo",
                value: this.detail
            })
            this.callModal = true
        },
        sendMsg (item) {
			let D = new Date().getTime()
            localStorage.setItem('sroom',D)
			let data = {
                type: "Call",
				user: this.userDetail,
				platform: localStorage.getItem('platform'),
				petId: this.petId,
				sroom: D
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: JSON.stringify(data),                  // 消息内容
                to: JSON.stringify(item.doctorId) + 'A2',      // 接收消息对象（用户id）
                chatType: 'singleChat',                  // 设置为单聊                       
                success: function (id, serverMsgId) {
                    console.log('send private text Success');  
                }, 
                fail: function(e){
                    console.log(e)
                    console.log("Send private text error");  
                }
            });
            this.$conn.send(msg.body);
		},
    }
}
</script>

<style lang="less" scoped>
    .changeBatch_c {
        width: 80%;
        @media screen and (max-width:1847px) {
            width: 68%;
        }
        @media screen and (max-width:1764px) {
            width: 57%;
            min-width: 800px;
        }
        @media screen and (max-width:1000px) {
            // width: 45%;
            min-width: 511px;
        }
        @media screen and (max-width:564px) {
            width: 90%;
            min-width: 0;
        }
        .batch_doc {
            width: 19%;
            background: white;
            margin: 10px 0.5%;
            min-width: 250px;
            // border: solid 1px;
            border-radius: 9px;
            box-shadow: 0px 1px 2px gray;
            padding: 10px;
            // @media screen and (max-width:1847px) {
            //     margin: 10px 2.5%;
            // }
            // @media screen and (max-width:1764px) {
            //     margin: 10px 5.5%;
            // }
            // @media screen and (max-width:1602px) {
            //     margin: 10px 12.5%;
            // }
            @media screen and (max-width:564px) {
                width: 100%;
                min-width: 0;
            }
        }
    }
    // .about_doc {
    //     padding: 10px 10px 0 10px;
    // }
    .name_address {
        flex: 10;
        padding-left: 15px;
    }
    .doc_img {
        width: 75px;
        height: 75px;
        border: solid 1px rgb(207, 207, 207);
        border-radius: 50%;
        overflow: hidden;
        @media screen and (max-width:1000px) {
            width: 55px;
            height: 55px;
        }
    }
    .d_size16 {
        font-size: 16px;
    }
    .d_size13 {
        font-size: 13px;
        margin-left: 5px;
        color: gray;
    }
    .workTime {
        margin-top: 20px;
        div {
            @media screen and (max-width:1350px) {
                transform: scale(0.9);
            }
        }
    }
    .call {
        max-width: 80px;
        width: 30%;
        height: 35px;
        border-radius: 12px;
        color: white;
    }
    .doc_content {
        margin-top: 15px;
        @media screen and (max-width: 1000px) {
            font-size: 13px;
        }
    }
    .d_name {
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 1;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
        @media screen and (max-width: 1000px) {
            font-size: 16px;
        }
    }
    .d_location {
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 2;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }
    .firstAid_title {
        margin-top: 80px;
        font-size: 45px;
        font-weight:bold;
        color: #707070;
        @media screen and (max-width: 1500px) {
            font-size: 30px;
        }
        @media screen and (max-width: 1100px) {
            font-size: 20px;
        }
    }
    .choose {
        font-size: 25px;
        color: #4A4B4D;
        padding: 50px 0 30px 0;
        @media screen and (max-width: 1100px) {
            padding: 30px 0 20px 0;
            font-size: 15px;
        }
    }
    .cut_d {
        color: gray;
        font-size: 20px;
        width: 80%;
        @media screen and (max-width:1847px) {
            width: 68%;
        }
        @media screen and (max-width:1764px) {
            width: 57%;
            min-width: 800px;
        }
        @media screen and (max-width:1000px) {
            // width: 45%;
            min-width: 511px;
        }
        @media screen and (max-width:564px) {
            width: 90%;
            min-width: 0;
        }
    }
</style>