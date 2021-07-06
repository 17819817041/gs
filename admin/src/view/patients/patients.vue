<style lang="less" scoped>
@import "@/less/css.less";
    .patients {
        flex: 10;
        height: 100%;
    }
    .message_item {
        width: calc(100%);
        background: @content;
        transition: 0.25s;
        @media screen and (max-width:1200px) {
            width: 98%;
            margin: auto;
            margin-top: 30px;
            border-radius: 6px;
        }
    }
    .setting_img {
        width: 37px;
        padding-right: 5px;
    }
    .personal_message {
        width: 97%;
        box-shadow: 0px 3px 3px 0px #D0D0D0;
        border-radius: 10px;
        background: white;
        position: relative;
        .item_title {
            position: absolute;
            left: 50%;
            top: 5%;
            transform: translate(-50%,-50%);
        }
    }
    .size25 {
        font-size: 25px;
        color: @explanTitle;
    }
    .size22 {
        font-size: 22px;
        color: @explanTitle;
    }
    .detail {
        padding: 70px 0;
    }
    .btnColor {
        background: @logout !important;
        border: none !important;
        border-radius: 17px;
        margin-top: 20px;
    }
    .details_image, .person_image {
        border-radius: 50%;
        overflow: hidden;
        width: 27%;
    } 
    .dog_img, .felame {
        height: 100%;
        border: solid 1px;
        border-radius: 50%;
        overflow: hidden;
        transition: 0.25s;
        // @media screen and (max-width:1500px) {
        //     width: 150px;
        // }
    }
    .message1, .message2 {
        width: 30%;
        transition: 0.25s;
        @media screen and (max-width:1500px) {
            width: 50%;
        }
    }
    .children, .details_message, .message1_item, .message2_item{
        transition: 0.25s;
        @media screen and (max-width:1725px) {
            font-size: 17px !important;
        }
    }
    .name1 div{
        padding-bottom: 6px;
    }
    .name1:nth-child(1) {
        padding-right: 25px;
    }
    .name2 div {
        padding-bottom: 20px;
    }
    .name2:nth-child(1) {
        padding-right: 25px;
    }

    .details_item {
        background: white;
        border-radius: 8px;
        padding: 70px 0;
        box-shadow: 0px 3px 3px 0px #D0D0D0;
        position: relative;
        .item_title2 {
            position: absolute;
            left: 50%;
            top: 10%;
            transform: translate(-50%,-50%);
        }
    }
    .petMessage_title {
        color: #5E5E5E;
    }
    .details_message {
        width: 32%;
        .about {
            padding: 0 0 7px 30px;
        }
    }
    .noPadding {
        padding: 0 0 4px 30px !important;
    }
    .details_message1 {
        width: 48%;
        position: relative;
        .children {
            width: 30%;
        }
    }
    .children {
        transition: 0.25s;
        @media screen and (max-width:1430px) {
            width: 40% !important;
        }
    }
    .about {
        padding: 0 0 12px 30px;
        transition: 0.25s;
        @media screen and (max-width:1299px) {
            padding: 0 0 11px 20px !important;
        }
    }
    .record1 {
        position: absolute;
        bottom: -27%;
        left: -50%;
        display: flex;
        opacity: 0;
        transition: 0.3s;
        @media screen and (max-width:1430px) {
            opacity: 1;
        }
        div {
            margin: 0 2px 0 10px;
        }
    }
    .record {
        padding-left: 10%;
        transition: 0.3s !important;
        @media screen and (max-width:1430px) {
            display: none;
        }
        div {
            margin-bottom: 5px;
        }
    }
    .medial_item {
        background: @logout !important;
    }
    .cancel_item {
        background: @denger;
    }
</style>

<template>
    <div class="patients">
        <div class="patients_message flex">
            <div class="message_item">
                <div class="setting_message">
                    <div class="explan al Explan_title">
                        <img class="setting_img" src="@/assets/img/setting.png" alt="">
                        Setting
                    </div>
                    <div class="personal_message mg">
                        <div class="size25 bold tc item_title">Guadian Details</div>
                        <div class="detail flex width100 al">
                            <div class="person_image al ju">
                                <img class="felame" v-if="userAndPet.userHead" :src="userAndPet.userHead" alt="" mode="widthFix">
                                <i class="el-icon-picture-outline" v-else style="font-size:70px;color:gray"></i>
                            </div>
                            <div class="flex" style="width:73%">
                                <div class="message1">   
                                    <div class="message1_item ts flex size22 al">
                                        <div class="name1">
                                            <div>User ID</div>
                                            <div>Name</div>
                                            <div>Age</div>
                                            <div>Location</div>
                                            <div>Mobile</div>
                                        </div>
                                        <div class="name1">
                                            <div v-if="userAndPet.userId">{{userAndPet.userId}}</div>
                                            <div v-else> --</div>
                                            <div v-if="userAndPet.userName">{{userAndPet.userName}}</div>
                                            <div v-else>No Name</div>
                                            <div v-if="userAndPet.age">{{userAndPet.age}}</div>
                                            <div v-else>No data</div>
                                            <div v-if="userAndPet.address">{{userAndPet.address}}</div>
                                            <div v-else>No address</div>
                                            <div v-if="userAndPet.moble">{{userAndPet.moble}}</div>
                                            <div v-else>No mobile</div>
                                        </div>
                                    </div>   
                                </div>
                                <div class="message2">
                                    <div class="message2_item flex ts size22 al">
                                        <div class="name2">
                                            <div>Gender</div>
                                            <div>Preferred Vet</div>
                                            <div>Remarks</div>
                                        </div>
                                        <div class="name2">
                                            <div v-if="userAndPet.petGenderName">{{userAndPet.petGenderName}}</div>
                                            <div v-else>No data</div>
                                            <div v-if="userAndPet.preferredVetName">{{userAndPet.preferredVetName}}</div>
                                            <div v-else>No data</div>
                                            <div>None</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="details_item flex">
                            <div class="size25 bold tc item_title2">Pet Details</div>
                            <div class="details_image ju al">
                                <img class="dog_img" v-if="userAndPet.petHeadUrl" :src="userAndPet.petHeadUrl" alt="" mode="widthFix">
                                <i class="el-icon-picture-outline" v-else style="font-size:70px;color:gray"></i>
                            </div>
                            <div class="details_message flex size22">
                                <div>
                                    <div class="flex about">
                                        <div>Pet ID</div>
                                    </div>
                                    <div class="flex about">
                                        <div>Name</div>
                                    </div>
                                    <div class="flex about">
                                        <div>Age</div>
                                    </div>
                                    <div class="flex about">
                                        <div>Pet Type</div>
                                    </div>
                                    <div class="flex about">
                                        <div>Breed</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex about">
                                        <div v-if="userAndPet.petId">{{userAndPet.petId}}</div>
                                    </div>
                                    <div class="flex about">
                                        <div v-if="userAndPet.petName">{{userAndPet.petName}}</div>
                                        <div v-else>No name</div>
                                    </div>
                                    <div class="flex about">
                                        <div v-if="userAndPet.petAge">{{userAndPet.petAge}}</div>
                                        <div v-else>No data</div>
                                    </div>
                                    <div class="flex about">
                                        <div v-if="userAndPet.petTypeName">{{userAndPet.petTypeName}}</div>
                                        <div v-else>No data</div>
                                    </div>
                                    <div class="flex about">
                                        <div v-if="userAndPet.petWeight">{{userAndPet.petWeight}}</div>
                                        <div v-else>No data</div>
                                    </div>
                                </div>
                            </div>
                            <div class="details_message1 flex">
                                <div class="children size22">
                                    <div class="flex about">
                                        <div>Gender</div>
                                    </div>
                                    <div class="flex about">
                                        <div>Neutered status</div>
                                    </div>
                                    <div class="flex about">
                                        <div>Weight</div>
                                    </div>
                                    <div class="flex about">
                                        <div>Remarks</div>
                                    </div>
                                </div>
                                <div class="children size22">
                                    <div class="flex about">
                                        <div v-if="userAndPet.petGenderName">{{userAndPet.petGenderName}}</div>
                                        <div v-else>No data</div>
                                    </div>
                                    <div class="flex about">
                                        <div>
                                            <span v-if="userAndPet.neuteredState == 1">Sterilization</span>
                                            <span v-else-if="userAndPet.neuteredState == 2">Unneutered</span>
                                            <span v-else-if="userAndPet.neuteredState === null">No data</span>
                                        </div>
                                    </div>
                                    <div class="flex about">
                                        <div v-if="userAndPet.petWeight">{{userAndPet.petWeight}}kg</div>
                                        <div v-else>No data</div>
                                    </div>
                                    <div class="flex about">
                                        <div v-if="userAndPet.remark">{{userAndPet.remark}}</div>
                                        <div v-else>No data</div>
                                    </div>
                                </div>
                                <div class="record">
                                    <div class="medial cursor">
                                        <el-button class="medial_item width100" type="primary" @click="toRecord" round>Medical Record</el-button>
                                    </div>
                                    <div class="add cursor">
                                        <el-button class="add_item width100" type="warning" round>Add Record</el-button>
                                    </div>
                                    <div class="cancel cursor">
                                        <el-button class="cancel_item width100" type="primary" round>Cancel Record</el-button>
                                    </div>
                                </div>
                                <div class="record1">
                                    <div class="medial cursor">
                                        <el-button class="medial_item width100" type="primary" @click="toRecord" round>Medical Record</el-button>
                                    </div>
                                    <div class="add cursor">
                                        <el-button class="add_item width100" type="warning" round>Add Record</el-button>
                                    </div>
                                    <div class="cancel cursor">
                                        <el-button class="cancel_item width100" type="primary" round>Cancel Record</el-button>
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
import { petType, getUserByPetId } from "@/axios/request.js"
export default {
    data () {
        return {
            userAndPet:{},
            options: []
        }
    },
    created () {
        this.getPet()
        this.getPetType()
        
    },
    methods: {
        getBreed () {
            this.options.forEach(item => {
                if (item.petTypeId = this.userAndPet) {
                    this.userAndPet.breed = item.petTypeName
                }
            })
        },
        getPet () {
            let data = {
                petId: this.$route.query.id
            }
            getUserByPetId(data).then(res => {
                console.log(res,'petAndUser')
                if (res.data.rtnCode == 200) {
                    this.userAndPet = res.data.data
                }
            }).catch(e => {
                console.log(e)
                this.$message({
                    type: 'error',
                    message: "The query failed. The data has been deleted!"
                })
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
                // this.getBreed()
            })
        },
        toRecord () {
            this.$router.push({
                name: 'record',
                params: {
                    pet: this.userAndPet
                }
            })
        }
    }
}
</script>

