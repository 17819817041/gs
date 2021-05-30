<style lang="less" scoped>
@import "@/less/css.less";
    // .customerPage {
    //     flex: 10;
    // }
    .customer_content {
        .pet_message {
            width: 100%;
            height: 100%;
            background: @content;
            margin-top: 10px;
            @media screen and (max-width:1350px) {
                width: 82%;
            }
            @media screen and (max-width:1200px) {
                width: 98%;
                margin: auto;
            }
        }
    }
    .petMessage_title, .details_item {
        width: 97%;
        margin: auto;
        margin-top: 30px;
    }
    .details_item {
        position: relative;
        background: white;
        border-radius: 8px;
        padding: 70px 0;
        box-shadow: 0px 3px 3px 0px #D0D0D0;
        .edit {
            width: 100px;
            position: absolute;
            border-radius: 20px;
            background: @helpBtn;
            padding: 10px 0px;
            right: 20px;
            top: 20px;
        }
        .save {
            width: 100px;
            position: absolute;
            border-radius: 20px;
            background: @hdColor;
            padding: 10px 0px;
            right: 20px;
            top: 20px;
        }
    }
    .petMessage_title {
        color: #5E5E5E;
    }
    .details_image {
        padding: 0 50px;
        .wrap_IMG {
            width: 200px;
            height: 200px;
            border: solid 1px;
            border-radius: 50%;
            margin-left: 50px;
            overflow: hidden;
        }
    }
    .pet_IMG {
        width: auto;
        height: 100%;
        display: block;
        margin: auto;
    }
    .details_message {
        width: 30%;
        .about {
            height: 43px;
            padding: 0 0 7px 30px;
        }
    }
    .noPadding {
        padding: 0 0 4px 30px !important;
    }
    .details_message1 {
        width: 40%;
        .about {
            height: 43px;
            padding: 0 0 12px 30px;
        }
    }
    .editInp {
        width: 160px;
        border-radius: 10px;
        border: solid 1px gray;
        height: 30px;
        overflow: hidden;
        input {
            padding-left: 10px;
            border: none;
            outline: none;
        }
    }
    .editInp1 {
        width: 80px;
        border-radius: 10px;
        border: solid 1px gray;
        height: 30px;
        overflow: hidden;
        input {
            padding-left: 10px;
            border: none;
            outline: none;
        }
    }
    .details_images, .details_message, .details_message1 {
        @media screen and (max-width:120px) {}
    }
    .record_active {
        width: 300px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .years_input, .month_input {
        width: 35px;
        height: 35px;
        overflow: hidden;
        border-radius: 40%;
        border: solid 1px;
        input {
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
            font-size: 25px;
        }
    }
    .morePetDetalis {
        color: @logout;
        font-size: 16px;
        text-decoration: underline;
    }
    .textarea {
        width: 100%;
        border: solid 1px;
        height: 100px;
        border: solid 1px;
        border-radius: 10px;
        overflow: hidden;
        textarea {
            width: 100%;
            border: none;
            outline: none;
            resize: none;
        }
    }
</style>

<template>
    <div class="customerPage">
        <div class="customer_content flex">
            <div class="pet_message">
                <div class="bold petMessage_title" @click="toPetMessage">Pet Details</div>
                <div class="details_item size21 flex" v-for="(item) in petList" :key="item.id">
                    <div v-if="change" class="edit cursor tc" @click="edit">Edit</div>
                    <div v-else class="save cursor tc" @click="save">Save</div>
                    <div class="details_image ju">
                        
                        <label for="ava1">
                            <div class="wrap_IMG">
                                <img class="pet_IMG" :src="item.image" alt="">
                            </div>
                            <input id="ava1" type="file" v-show="false" @change="petImage">
                        </label>

                    </div>
                    <div class="details_message flex">
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
                                <div>{{item.id}}</div>
                            </div>
                            <div :class="['flex', 'al', 'about', {noPadding:!change}]">
                                <div v-if="change">{{item.name}}</div>
                                <div class="editInp al" v-else>
                                    <input type="text" v-model="item.name">
                                </div>
                            </div>
                            <div :class="['flex', 'about', {noPadding:!change}]">
                                <div v-if="change">{{item.age}}</div>
                                <div class="al" v-else>
                                    <div class="years_input al"><input class="tc" type="text"></div>
                                    <div>yrs</div>
                                    <div class="month_input al"><input class="tc" type="text" ></div>
                                    <div>mo</div>
                                </div>
                            </div>
                            <div class="flex about">
                                <div v-if="change">{{item.petType}}</div>
                                <div class="editInp al" v-else>
                                    <input type="text" v-model="item.petType">
                                </div>
                            </div>
                            <div class="flex about">
                                <div v-if="change">{{item.breed}}</div>
                                <div class="editInp al" v-else>
                                    <el-select v-model="breed">
                                        <el-option v-for="(item,i) in breedList" :key="i" :value="item"></el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="details_message1 flex">
                        <div>
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
                                <div>Medical records </div>
                            </div>
                            <div class="flex about">
                                <div style="color:white">record</div>
                            </div>
                            <div class="flex about">
                                <div>Remarks</div>
                            </div>
                        </div>
                        <div>
                            <div class="flex about">
                                <div v-if="change">{{item.gender}}</div>
                                <div class="editInp al" v-else>
                                    <el-select v-model="sex" @change="getSex">
                                        <el-option value="1">M</el-option>
                                        <el-option value="2">F</el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="flex about">
                                <div>None</div>
                            </div>
                            <div class="flex about">
                                <div v-if="change">{{item.weight}}</div>
                                <div v-else class="flex">
                                    <div class="editInp1 al" >
                                        <div class="input"><input type="text" v-model="item.weight"></div>
                                    </div>
                                    <div>kg</div>
                                </div>
                            </div>
                            <div class="flex about">
                                <div>2021/05/01 </div>
                            </div>
                            <div class="flex about">
                                <div class="al">
                                    <div class=" record_active">6666666666666666666666666666666666666666666666666666 </div>
                                    <div class="morePetDetalis cursor" @click="record">More</div>
                                </div>
                            </div>
                            <div class="flex about">
                                <div v-if="change">Remarks</div>
                                <div v-else class="textarea">
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
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
import { file, addPet, petDetails, updatePet, petList } from "@/axios/request.js"
export default {
    data () {
        return {
            neuteredStatus:'None',
            sex: null,
            change:true,
            breed:'Husky',
            breedList: [ 'Husky' ],

            src: "",
            petDetails: {},
            addPetMessage: {
                id: localStorage.getItem("userId"),
                name: "dog",
                image: null,
                petType: 1,
                birth: "2020-02-05",
                weightL: "33.5kg"
            },
            data: {
                petId: 13
            }
        }
    },
    created () {
        this.getPetDetails()
    },
    computed: {
        petList: {
            get () {return this.$store.state.user.petList}
        }
    },
    methods: {
        addPet () {                                                                              //添加宠物
            addPet(this.addPetMessage).then(res => {
                console.log(res,"添加宠物信息")
            })  
        },
        getPetDetails () {                                                                  //获取第一只宠物
            petDetails(this.data).then(res => {
                console.log(res,"获取宠物信息")
                if (res.data.rtnCode == 200) {
                    this.petDetails = res.data.data
                    console.log(this.petDetails,"this")
                }
            })
        },
        updatePet () {     
            this.petDetails.age = "2yrs2mo"                                                         //更新宠物信息
            updatePet(this.petDetails).then(res => {
                console.log(res,"geng新完成")
                this.getPetDetails()
            })
        },
        petImage (e) {                                                                          //上传宠物图片
            var formData = new FormData
            formData.append("file",e.target.files[0])
            file(formData).then(res => {
                console.log(res,"宠物图片")
                this.src = res.data.data
                this.petDetails.image = res.data.data
                this.updatePet()
            })
        },



        getSex (e) {
            this.petDetails.gender = e
            if (e == 1) {
                this.sex = "M"
            } else if (e == 2) {
                this.sex = "F"
            }
        },
        edit () {
            this.change = false
        },
        save () {
            this.updatePet()
            this.change = true
        },
        toPetMessage () {
            this.$router.push({
                name:'petmessage'
            })
        },
        record () {
            this.$router.push("/record")
        }
    }
}
</script>

