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
        // white-space: nowrap;
        @media screen and (max-width: 600px){
            display: none;
        }
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
        @media screen and (max-width: 1000px){
            margin-left: 20px;
        }
        @media screen and (max-width: 590px){
            margin-left: 0px;
        }
    }
    .record_image {
        width: 21%;
        @media screen and (max-width: 600px){
            display: none;
            margin: auto;
        }
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
        @media screen and (max-width: 1000px){
            width: 150px;
            height: 150px;
            border-radius: 50%;
            overflow: hidden;
            margin: 25px 0;
        }
        @media screen and (max-width: 800px){
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            margin: 25px 0;
        }
        @media screen and (max-width: 590px){
            width: 70px;
            height: 70px;
            min-width: 70px;
            border-radius: 50%;
            overflow: hidden;
            margin: 25px 0;
        }
        @media screen and (max-width: 317px){
            width: 60px;
            height: 60px;
            min-width: 60px;
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
        @media screen and (max-width: 1000px){
            height: 30px;
        }
    }
    .size17 {
        font-size: 17px;
        font-weight: bold;
        transition: 0.1s;
        @media screen and (max-width: 1000px){
            font-size: 14px;
            font-weight: bold;
        }
    }
    .size16 {
        font-size: 16px;
        color: rgb(70, 70, 70);
        padding-left: 20px;
        transition: 0.1s;
        @media screen and (max-width: 1000px){
            font-size: 12px;
            color: rgb(70, 70, 70);
            padding-left: 10px;
        }
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
    .collapse_wrap {
        display: none;
        @media screen and (max-width: 600px) {
            display: block;
        }
    }
    .el-collapse_wrap {
        display: none;
        @media screen and (max-width: 600px) {
            display: block;
        }
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
                                <!-- <div class="medialRecord" v-if="item.familyMedicalRecordDtos[0]" >
                                    <div class="medialRecord_item" v-for="(child,i) in item.familyMedicalRecordDtos" :key="i">
                                        <div class=" size17">Medical Record</div>
                                        <div style="padding: 5px 0 5px 15px"> 
                                            <span class=" size17">Date: </span>
                                            <span class="size15">{{child.createdAt}}</span>
                                        </div>
                                        <div style="padding-top: 10px">
                                            <span class=" size17">Vet: </span>
                                            <span class="size15">{{child.doctorName}}</span>
                                        </div>
                                        <div class="vetRecord size15" style="padding: 10px 15px">
                                            <span v-if="child.content">{{child.content}}</span>     
                                            <span v-else>No Data</span>     
                                        </div>
                                    </div>
                                </div>
                                <div class="medialRecord" v-else >
                                    <div class="medialRecord_item">
                                        <div class=" size17">No Medical Record</div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>

                    <div class="el-collapse_wrap">
                        <el-collapse v-model="activeName" accordion>
                            <el-collapse-item v-for="(item,i) in petLists" :key="item.id" :name="i+1">
                                <template slot="title">
                                    <div class="collapse_img al ju">
                                        <img class="dog_img" :src="item.image" v-if="item.image" alt="">
                                        <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
                                    </div>
                                    <div style="height: 60px;line-height: 60px;">
                                        <div style="line-height: 60px;">
                                            <span class="collapse_size bold" v-if="item.name">{{item.name}}</span>
                                            <span class="collapse_size bold" v-else>No Name</span>
                                        </div>
                                    </div>
                                </template>
                                <div class="record_message_el">
                                    <div class="record_item flex mg">
                                        <div class="record_image ju">
                                            <div class="ju al">
                                                <img class="dog_img" :src="item.image" v-if="item.image" alt="">
                                                <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
                                            </div>
                                        </div>
                                        <div style="flex:10">
                                            <div class="record_wrap flex">
                                                <div class=" flex">
                                                    <div class=" size17 mobile_tit">
                                                        <div class="flex about">
                                                            <div>Pet ID</div>
                                                        </div>
                                                        <div class="about">
                                                            <div>Name</div>
                                                        </div>
                                                        <div class="about">
                                                            <div>Age</div>
                                                        </div>
                                                        <div class="about">
                                                            <div>Pet Type</div>
                                                        </div>
                                                        <div class="about">
                                                            <div>Breed</div>
                                                        </div>
                                                    </div>
                                                    <div class="size16">
                                                        <div class="flex about al">
                                                            <div v-if="item.id">{{item.id}}</div>
                                                            <div v-else>No data</div>
                                                        </div>
                                                        <div class="flex about al">
                                                            <div v-if="item.name">{{item.name}}</div>
                                                            <div v-else>No data</div>
                                                        </div>
                                                        <div class="flex about al">
                                                            <div v-if="item.age">{{item.age}}</div>
                                                            <div v-else>No data</div>
                                                        </div>
                                                        <div class="flex about al">
                                                            <div >{{item.pet_name? item.pet_name: 'No Data'}}</div>
                                                        </div>
                                                        <div class="flex about al">
                                                            <div>{{item.breed_name? item.breed_name: 'No more breed'}}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="record_message1 flex">
                                                    <div class="size17 mobile_tit">
                                                        <div class="about">
                                                            <div>Gender</div>
                                                        </div>
                                                        <div class="about">
                                                            <div>Neutered status</div>
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
                                                                <span v-if="item.gender == 1">Male</span>
                                                                <span v-else-if="item.gender == 2">Female</span>
                                                            </div>
                                                        </div>
                                                        <div class="flex about">
                                                            <div class="al">
                                                                <span v-if="item.petJueYu == 1">Sterilization</span>
                                                                <span v-else-if="item.petJueYu == 2">Unneutered</span>
                                                                <span v-else-if="item.petJueYu === null">No data</span>
                                                            </div>
                                                        </div>
                                                        <div class="flex about">
                                                            <div v-if="item.weight">{{item.weight}}kg</div>
                                                            <div v-else>0</div>
                                                        </div>
                                                        <div class="flex about">
                                                            <div v-if="item.remark">{{item .remark}}</div>
                                                            <div v-else>No data</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="medialRecord" v-if="item.petMedicalRecordDtos[0]" >
                                                <div class="medialRecord_item" v-for="(child,i) in item.petMedicalRecordDtos" :key="i">
                                                    <div class=" size17">Medical Record</div>
                                                    <div style="padding: 5px 0 5px 15px"> 
                                                        <span class=" size17">Date: </span>
                                                        <span class="size15">{{child.createdAt}}</span>
                                                    </div>
                                                    <div style="padding-top: 10px">
                                                        <span class=" size17">Vet: </span>
                                                        <span class="size15">{{child.doctorName}}</span>
                                                    </div>
                                                    <div class="vetRecord size15" style="padding: 10px 15px">
                                                        <span v-if="child.content">{{child.content}}</span>     
                                                        <span v-else>No Data</span>     
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="medialRecord" v-else >
                                                <div class="medialRecord_item">
                                                    <div class=" size17">No Medical Record</div>
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
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

