<style lang="less" scoped>
    @import "@/less/css.less";
    .record {
        // width: 100%;
        height: 100%;
        flex: 10;
    }
    .recordContent {
        height: 100%;
    }
    .recordContent_item {
        background: @content;
        flex: 10;
        height: 100%;
        overflow: auto;
        .itemChild {
            width: 98%;
        }
    }
    .record_message {
        margin-bottom: 20px;
        .record_item {
            margin-bottom: 15px;
            width: 98%;
            background: white;
            border-radius: 10px;
        }
        .about {
            padding: 0 0 7px 30px;
        }
    }
    .record_message_el {
        margin-bottom: 20px;
        // white-space: nowrap;
        @media screen and (max-width: 590px){
            margin-bottom: 0;
        }
        .record_item {
            margin-bottom: 15px;
            width: 98%;
            background: white;
            border-radius: 10px;
        }
        .about {
            padding: 0 0 7px 30px;
        }
    }
    .petMessage_title {
        color: #5E5E5E;
    }
    .record_wrap {
        padding: 25px 0;
        @media screen and (max-width: 590px) {
            padding: 0;
            flex-direction: column;
        }
    }
    .noPadding {
        padding: 0 0 4px 30px !important;
    }
    .record_message1 {
        margin-left: 60px;
        width: 100%;
        position: relative;
        // white-space: nowrap;
    }
    .record_image {
        width: 21%;
    }
    .record_image div {
        margin: 25px 0;
        width: 200px;
        height: 200px;
        transition: 0.25s;
        border-radius: 50%;
        overflow: hidden;
        @media screen and (max-width:1300px) {
            width: 190px;
            height: 190px;
            border-radius: 50%;
            overflow: hidden;
            margin: 25px 0;
        }
    } 
    .dog_img{
        height: 100%;
    }
    .about {
        padding: 0 0 12px 30px;
        height: 33px;
        transition: 0.25s;
        @media screen and (max-width:1299px) {
            padding: 0 0 11px 20px !important;
        }
    }
    .size17 {
        font-size: 17px;
        font-weight: bold;
        transition: 0.1s;
    }
    .size16 {
        font-size: 16px;
        color: rgb(70, 70, 70);
        padding-left: 20px;
    }
    .medialRecord {
        max-height: 321px;
        overflow: auto;
        margin: 20px 10px 20px 30px;
        .medialRecord_item {
            margin-top: 30px;
            width: 98%;
            padding: 5px 0 10px 0;
            border-bottom: solid 1px rgb(224, 224, 224);
        }
    }
    .medialRecord::-webkit-scrollbar {
            width: 8px;
    }
    .medialRecord::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: rgb(216, 216, 216);
    }
    .vetRecord {
        width: 80%;
        word-wrap: break-word;
    }
    .mobile_tit {
        width: 11%;
        min-width: 134px;
    }
    .collapse_img {
        width: 45px;
        height: 45px;
        margin: 0px 15px;
        border-radius: 50%;
        overflow: hidden;
    }
    .collapse_size {
        font-size: 15px;
        padding: 0 15px;
    }
</style>

<template>
    <div class="record" v-loading="loading">
        <div class="recordContent">
            <div class="recordContent_item noBar">
                <div class="itemChild mg">
                    <div class="explan bold al" style="padding: 17px 0;">
                        <img src="@/assets/img/recordImg.png" alt="">
                        Medical Record History
                    </div>
                    <div class="record_message" v-for="(item,i) in petLists" :key="i">
                        <div class="record_item flex mg">
                            <div class="record_image ju">
                                <div class="ju al">
                                    <img class="dog_img" :src="item.familyMember.headImg" v-if="item.familyMember.headImg" alt="">
                                    <img style="height:75%;" v-else src="@/assets/img/default.png" alt="">
                                </div>
                            </div>
                            <div style="flex:10">
                                <div class="record_wrap flex">
                                    <div class="record_message flex">
                                        <div class=" size17 mobile_tit">
                                            <div class="flex about">
                                                <div>User ID</div>
                                            </div>
                                            <div class="about">
                                                <div>Name</div>
                                            </div>
                                            <div class="about">
                                                <div>Age</div>
                                            </div>
                                            <div class="about">
                                                <div>Relation</div>
                                            </div>
                                        </div>
                                        <div class="size16">
                                            <div class="flex about al">
                                                <div v-if="item.familyMember.userId">{{item.familyMember.userId}}</div>
                                                <div v-else>No data</div>
                                            </div>
                                            <div class="flex about al">
                                                <div v-if="item.familyMember.name">{{item.familyMember.name}}</div>
                                                <div v-else>No data</div>
                                            </div>
                                            <div class="flex about al">
                                                <div v-if="item.familyMember.age">{{item.familyMember.age}}</div>
                                                <div v-else>No data</div>
                                            </div>
                                            <div class="flex about al">
                                                <div >{{item.familyMember.familyRelations}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="record_message1 flex">
                                        <div class="size17 mobile_tit">
                                            <div class="about">
                                                <div>Gender</div>
                                            </div>
                                            <div class="about">
                                                <div>Height</div>
                                            </div>
                                            <div class="about">
                                                <div>Weight</div>
                                            </div>
                                            <div class="about">
                                                <div>Remarks</div>
                                            </div>
                                        </div>
                                        <div class="size16">
                                            <div class="flex about">
                                                <div class="al">
                                                    <span v-if="item.familyMember.sex == 1">Male</span>
                                                    <span v-else-if="item.familyMember.sex == 2">Female</span>
                                                </div>
                                            </div>
                                            <div class="flex about">
                                                <div v-if="item.familyMember.height">{{item.familyMember.height}} cm</div>
                                                <div v-else>0 cm</div>
                                            </div>
                                            <div class="flex about">
                                                <div v-if="item.familyMember.weight">{{item.familyMember.weight}} kg</div>
                                                <div v-else>0 kg</div>
                                            </div>
                                            <div class="flex about">
                                                <div v-if="item.familyMember.content">{{item.familyMember.content}}</div>
                                                <div v-else>No data</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loading: false,
            userAndPet: {},
            options: [],
            petType: '-',
            breed: '-',
            petLists: [],
            activeName: 1
        }
    },
    created () {
        this.getpet_list()
    },
    watch: {
        petList: {
            handler (val) {
                this.petLists = JSON.parse(JSON.stringify(val))
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
        },
        p_loading: {
            get () { return this.$store.state.user.p_loading },
            set (val) {
                this.$store.commit("setUser", {
                    key: "p_loading",
                    value: val
                })
            },
        }
    },
    methods: {
        getpet_list () {
            var data = {
                userId: localStorage.getItem("userId"),
                pageNum: 1,
                pageSize: 100
            }
            this.$store.dispatch("getPetList",data)
        },
    }
}
</script>

