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
        padding: 25px 0;
        width: 230px;
        height: 230px;
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
    .about {
        padding: 0 0 12px 30px;
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
</style>

<template>
    <div class="record" v-loading="loading">
        <div class="recordContent">
            <div class="recordContent_item noBar">
                <div class="itemChild mg">
                    <div class="explan bold al">
                        <img src="@/assets/img/recordImg.png" alt="">
                        Medical Record History
                    </div>
                    <div class="record_message">
                        <div class="record_item flex mg">
                            <div class="record_image ju">
                                <!-- <img class="dog_img" src="@/assets/img/dog.png" alt=""> -->
                                <div class="ju al">
                                    <img class="dog_img" :src="userAndPet.image" v-if="userAndPet.image" alt="">
                                    <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
                                </div>
                            </div>
                            <div style="flex:10">
                                <div class="record_wrap flex">
                                    <div class="record_message flex">
                                        <div class=" size17">
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
                                                <div v-if="userAndPet.id">{{userAndPet.id}}</div>
                                                <div v-else>No data</div>
                                            </div>
                                            <div class="flex about">
                                                <div v-if="userAndPet.name">{{userAndPet.name}}</div>
                                                <div v-else>No data</div>
                                            </div>
                                            <div class="flex about">
                                                <div v-if="userAndPet.age">{{userAndPet.age}}</div>
                                                <div v-else>No data</div>
                                            </div>
                                            <div class="flex about">
                                                <div >{{petType}}</div>
                                            </div>
                                            <div class="flex about">
                                                <div>{{breed}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="record_message1 flex">
                                        <div class="size17">
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
                                                <div >
                                                    <span v-if="userAndPet.gender == 1">Male</span>
                                                    <span v-else-if="userAndPet.gender == 2">Female</span>
                                                </div>
                                            </div>
                                            <div class="flex about">
                                                <div>
                                                    <span v-if="userAndPet.petJueYu == 1">Sterilization</span>
                                                    <span v-else-if="userAndPet.petJueYu == 2">Unneutered</span>
                                                    <span v-else-if="userAndPet.petJueYu === null">No data</span>
                                                </div>
                                            </div>
                                            <div class="flex about">
                                                <div v-if="userAndPet.weight">{{userAndPet.weight}}kg</div>
                                                <div v-else>0</div>
                                            </div>
                                            <div class="flex about">
                                                <div v-if="userAndPet.remark">{{userAndPet.remark}}</div>
                                                <div v-else>No data</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="medialRecord" v-if="userAndPet.petMedicalRecordDtos" >
                                    <div class="medialRecord_item" v-for="(item,i) in userAndPet.petMedicalRecordDtos" :key="i">
                                        <div class=" size19">Medical Record</div>
                                        <div style="padding: 5px 0 5px 15px"> 
                                            <span class=" size17">Date: </span>
                                            <span class="size15">{{item.createdAt}}</span>
                                        </div>
                                        <div style="padding-top: 10px">
                                            <span class=" size17">Vet: </span>
                                            <span class="size15">{{item.doctorName}}</span>
                                        </div>
                                        <div class="vetRecord size15" style="padding: 10px 15px">
                                            <span v-if="item.content">{{item.content}}</span>     
                                            <span v-else>No Data</span>     
                                        </div>
                                    </div>
                                </div>
                                <div class="medialRecord" v-else-if="userAndPet.petMedicalRecordDtos === null" >
                                    <div class="medialRecord_item">
                                        <div class=" size17">No Medical Record</div>
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
import { petDetails, petType } from "@/axios/request.js"
export default {
    data () {
        return {
            loading: true,
            userAndPet: {},
            options: [],
            petType: '-',
            breed: '-'
        }
    },
    created () {
        
        this.getPetDetails()
    },
    methods: {
        getPetDetails () {
            console.log(this.$route.query.pet)
            let data = {
                petId: this.$route.query.pet
            }
            petDetails(data).then(res => {
                this.userAndPet = res.data.data
                this.getPetType()
            })
        },
        getPetType () {
            let data = {
                userId: localStorage.getItem('userId'),
                platform: localStorage.getItem('platform'),
                token: localStorage.getItem('Token')
            }
            petType(data).then(res => {
                console.log(res)
                res.data.forEach(item => {
                    item.children.forEach(child => {
                        child.children = []
                    })
                })
                this.options = res.data
                this.TYPE()
            })
        },
        TYPE () {
            this.options.forEach(op => {
                if (this.userAndPet.petType == op.petTypeId) {
                    this.breed = op.petTypeName
                    this.petType = op.petTypeName
                    this.loading = false
                } else{
                    this.loading = false
                }
                if (op.children) {
                    op.children.forEach(child => {
                        if (this.userAndPet.petType == child.petTypeId) {
                            this.breed = child.petTypeName
                            this.petType = op.petTypeName
                        }
                    })
                    this.loading = false
                } else {
                    this.loading = false
                }
            })
        },
    }
}
</script>

