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
        .itemChild {
            width: 98%;
            height: 100%;
        }
    }
    .record_message {
        margin-bottom: 20px;
        white-space: nowrap;
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
    }
    .noPadding {
        padding: 0 0 4px 30px !important;
    }
    .record_message1 {
        margin-left: 60px;
        width: 50%;
        position: relative;
        white-space: nowrap;
        @media screen and (max-width: 1000px){
            margin-left: 20px;
        }
    }
    .record_image {
        width: 21%;
    }
    .record_image div {
        margin: 25px 0;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        transition: 0.25s;
        @media screen and (max-width:1300px) {
            width: 190px;
            height: 190px;
        }
        @media screen and (max-width: 1000px){
            width: 150px;
            height: 150px;
        }
    } 
    .dog_img{
        height: 100%;
    }
    .children {
        transition: 0.25s;
        @media screen and (max-width:1430px) {
            width: 40% !important;
        }
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
            padding-left: 20px;
        }
    }

    .medialRecord {
        max-height: 321px;
        overflow: auto;
        margin: 20px 10px 20px 30px;
        .medialRecord_item {
            width: 98%;
            margin-top: 30px;
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
    .record_message_wrap {
        height: calc(100% - 61px);
        overflow: auto;
    }
    .record_message_wrap::-webkit-scrollbar {
            width: 8px;
        }
    .record_message_wrap::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: rgb(180, 180, 180);
    }
</style>

<template>
    <div class="record" v-loading="loading">
        <div class="recordContent">
            <div class="recordContent_item">
                <div class="itemChild mg">
                    <div class="explan bold al">
                        <img src="@/assets/img/recordImg.png" alt="">
                        Medical Record History
                    </div>
                    <div class="record_message_wrap" v-if="getDoctorMedicalLimitList[0]">
                        <div class="record_message" v-for="(item,i) in getDoctorMedicalLimitList" :key="i">
                            <div class="record_item flex mg">
                                <div class="record_image ju">
                                    <div class="ju al">
                                        <img class="dog_img" :src="item.image" v-if="item.image" alt="">
                                        <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
                                    </div>
                                </div>
                                <div style="flex:10">
                                    <div class="record_wrap flex">
                                        <div class="record_message flex">
                                            <div class="size17">
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
                                                <div class="flex about">
                                                    <div v-if="item.petId">{{item.petId}}</div>
                                                    <div v-else>No data</div>
                                                </div>
                                                <div class="flex about">
                                                    <div v-if="item.name">{{item.name}}</div>
                                                    <div v-else>No data</div>
                                                </div>
                                                <div class="flex about">
                                                    <div v-if="item.age">{{item.age}}</div>
                                                    <div v-else>No data</div>
                                                </div>
                                                <div class="flex about">
                                                    <div >{{item.pet_name}}</div>
                                                </div>
                                                <div class="flex about">
                                                    <div>{{item.breed_name}}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="record_message1 flex">
                                            <div class="children size17">
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
                                            <div class="children size16">
                                                <div class="flex about">
                                                    <div >
                                                        <span v-if="item.gender == 1">Male</span>
                                                        <span v-else-if="item.gender == 2">Female</span>
                                                    </div>
                                                </div>
                                                <div class="flex about">
                                                    <div>
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
                                                    <div v-if="item.remark">{{item.remark}}</div>
                                                    <div v-else>No data</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="medialRecord" v-if="item.petMedicalRecordDtos">
                                        <div class="medialRecord_item" v-for="(child,i) in item.petMedicalRecordDtos" :key="i">
                                            <div class=" size17">Medical Record</div>
                                            <div style="padding: 5px 0 5px 15px"> 
                                                <span class=" size17">Date: </span>
                                                <span class="size15">{{child.createdAt}}</span>
                                            </div>
                                            <div style="padding-top: 10px">
                                                <span class=" size17">Vet: </span>
                                                <span class="size15">Dr Beck</span>
                                            </div>
                                            <div class="vetRecord size15" style="padding: 10px 15px">
                                                <span v-if="child.content">{{child.content}}</span>     
                                                <span v-else>The doctor did not add content!</span>     
                                            </div>
                                        </div>
                                    </div>
                                    <div class="medialRecord" v-else>
                                        <div class="medialRecord_item size17">
                                            No medical records
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="record_message_wrap bold tc" v-else style="font-size:23px;color:gray;margin-top:30px">
                        No Message
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { petDetails, PetMedicalRecor, petType } from "@/axios/request.js"
import { getUserByPetId, getPetMedicalRecord } from "@/axios/request.js"
export default {
    data () {
        return {
            loading: true,
            options: [],
            getDoctorMedicalLimitList: [],
            pageNum_m: 1,
            pageSize_m: 100,
        }
    },
    created () {
        this.PetMedicalRecord()
        // this.TYPE()
    },
    methods: {
        PetMedicalRecord () {
            let data = {
                doctorId: localStorage.getItem('userId'),
                pageNum: this.pageNum_m,
                pageSize: this.pageSize_m
            }
            getPetMedicalRecord(data).then(res => {
                console.log(res,'medical')
                if (res.data.rtnCode == 200) {
                    this.getDoctorMedicalLimitList = res.data.data.pageT
                    this.loading = false
                    this.getPetType()
                } else {
                    this.loading = false
                }
            }).catch(e => {
                this.loading = false
                console.log(e)
            })
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
                this.$nextTick(() => {
                    this.TYPE()
                })
            })
        },
        TYPE () {
            this.getDoctorMedicalLimitList.forEach(item => {
                this.options.forEach(op => {
                    if (op.children) {
                        op.children.forEach(child => {
                            if (item.petType == child.petTypeId) {
                                console.log(op.petTypeName,child.petTypeName)
                                item.pet_name = op.petTypeName
                                item.breed_name = child.petTypeName
                                console.log(item.pet_name,item.breed_name)
                                let obj = this.options.find(op1 => op1.petTypeId == child.petTyepParentId)
                                item.petTypeParentId = child.petTyepParentId
                                item.breedList = obj.children
                            }
                        })
                        this.getDoctorMedicalLimitList = [...this.getDoctorMedicalLimitList]
                        this.loading = false
                    } else {
                        this.loading = false
                    }
                    if (op.children.length == 0) {
                        if (item.petType == op.petTypeId) {
                            item.breedList = []
                            item.pet_name = op.petTypeName
                        }
                        this.loading = false
                    } else {
                        this.loading = false
                    }
                })
            })
        },
    }
}
</script>

