<style lang="less" scoped>
@import "@/less/css.less";
.petMessage {
    height: 100%;
}
    .message_title {
        padding: 20px 0;
    }
    .fillIn {
        height: calc(100% - 119px);
        overflow: auto;
    }
    .photo {
        margin: 7px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        position: relative;
        background: #EDEDED;
        overflow: hidden;
        .defautlImg {
            height: 75%;                           //不完整图片
        }
        .upImg {
            height: 100%;
        }
    }
    .wrap_img {
        position: relative;
        .addImg {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%,50%);
            background: white;
        }
    }
    .message_form {
        width: 550px;
        margin: 40px auto;
        @media screen and (max-width:564px) {
            width: 90%;
            margin: auto;
        }
    }
    .textcolor {
        color: #BCBCBC;
    }
    .select_item {
        width: 100%;
    }
    button {
        padding: 13px;
        background: #FF0000;
        color: white;
        font-size: 14px;
        border: solid 1px #FF0000;
        border-radius: 4px;
        margin-bottom: 1px;
    }
</style>

<template>
    <div class="petMessage" v-loading="loading">
        <div>
            <myHeaderL></myHeaderL>
        </div>
        <div class="fillIn noBar">  <!-- 填写信息 -->
            <div class="message_title size21 tc">About the family member</div>
            <div class="size12 tc">Add your family member details</div>
            <div class="message_form">
                <el-form :rules="rules" ref="form" :model="addPetMessage" :label-position="position" label-width="80px">
                    <el-form-item prop="image">
                        <div class="ju">
                            <div class="wrap_img">
                                <label class="photo cursor al ju" for="avaImg">
                                    <img class="upImg" :src="addPetMessage.headImg" v-if="addPetMessage.headImg" alt="">
                                    <img style="height: 100%;" v-else src="@/assets/img/defaultimg.jpg" alt="">
                                    <input type="file" @change="getImage" name="" v-show="false" id="avaImg">
                                </label>
                                <!-- <img class="addImg" src="@/assets/img/file.png" alt=""> -->
                                <div class="addImg">
                                    <label class="cursor al ju" for="avaImg1" style="height: 100%">
                                        <img style="height: 100%" src="@/assets/img/file.png" alt="">
                                        <input type="file" @change="getImage" name="" v-show="false" id="avaImg1">
                                    </label>
                                </div>
                                
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item prop="name">
                        <el-input placeholder="Name" v-model="addPetMessage.name"></el-input>
                    </el-form-item>
                    <div class="sb textcolor">
                        <div style="width:50%">Age</div>
                        <div style="margin-right: 10px;margin-left: 10px;"></div>
                        <div style="width:50%">Gender</div>
                        <!-- <div style="width:30%">Weight (kg)</div> -->
                    </div>
                    <div class="sb">
                        <el-form-item prop="age" style="width: 50%;">
                            <div class="sb">
                                <div class="select_item">
                                    <el-select v-model="addPetMessage.age" placeholder="Age">
                                        <el-option v-for="(item,i) in dayList" :key="i" :value="item"></el-option>
                                    </el-select>
                                </div>
                            </div>
                        </el-form-item>
                        <div style="margin-right: 10px;margin-left: 10px;"></div>
                        <el-form-item prop="sex" style="width: 50%;" >
                                <div class="select_item">
                                    <el-select v-model="addPetMessage.sex">
                                        <el-option v-for="(item,i) in sexList" :key="i" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </div>
                        </el-form-item>
                    </div>
                    <div class="sb textcolor">
                        <div style="width:50%">Height</div>
                        <div style="margin-right: 10px;margin-left: 10px;"></div>
                        <div style="width:50%">Weight (kg)</div>
                    </div>
                    <div class="sb">
                        <el-form-item prop="height" style="width: 50%;" >
                            <div class="sb">
                                <div class="select_item">
                                    <el-input v-model="addPetMessage.height"></el-input>
                                </div>
                            </div>
                        </el-form-item>
                        <div style="margin-right: 10px;margin-left: 10px;"></div>
                        <el-form-item prop="weight" style="width: 50%;">
                            <div class="select_item">
                                <el-input v-model="addPetMessage.weight"></el-input>
                            </div>
                        </el-form-item>
                    </div>
                    <el-form-item prop="petType">
                        <el-select v-model="addPetMessage.familyRelations">
                            <el-option value="Father" label="Father"></el-option>
                            <el-option value="Mather" label="Mather"></el-option>
                            <el-option value="Grandfather" label="Grandfather"></el-option>
                            <el-option value="Grandmather" label="Grandmather"></el-option>
                            <!-- <el-option value="ElderBrother" label="Elder Brother"></el-option> -->
                            <el-option value="Sister" label="Sister"></el-option>
                            <el-option value="Brother" label="Brother"></el-option>
                            <!-- <el-option value="YoungerSister" label="Younger Sister"></el-option> -->
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="Remark" v-model="addPetMessage.content"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <button class="width100 cursor" @click="submit">Submit</button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { addPet, file, petType } from '@/axios/request.js'
export default {
    data () {
        return {
            loading: false,
            position:'top',
            formList: { one:'123', two:'456' },
            value:[],
            value1:'',
            dayList:[],
            sex:'',
            sexList: [{label: 'Male', value: 1},{label: 'Female', value: 2}],
            addPetMessage: {
                userId: localStorage.getItem("userId"),
                name: '',
                age: '',
                headImg: '',
                sex: null,
                height: '',
                weight: '',
                content: '',
                familyRelations: '',
            },
            rules: {
                name: [
                    { required: true, message: "Please enter name!", trigger: 'blur' }
                ],
                familyRelations: [
                    { required: true, message: "Please enter relation!", trigger: 'blur' }
                ],
                age: [
                    { required: true, message: "Please enter age!", trigger: 'blur' }
                ],
                weight: [
                    { required: true, message: "Please enter weight!", trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: "Please enter sex!", trigger: 'blur' }
                ],
                height: [
                    { required: true, message: "Please enter height!", trigger: 'blur' }
                ]
            },
            options: []
        }
    },
    created () {
        this.getDay()
    },
    computed: {
        // petStatus () { return this.$store.state.user.petList }
    },
    methods: {
        addPet () {                            
            this.loading = true                                      //添加宠物
            addPet(this.addPetMessage).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: "Successfully added !"
                    })
                    setTimeout(() => {
                        // this.$router.replace('/myDoctor')
                        this.$router.back()
                    },500)
                } else {
                    this.$message({
                        type: 'error',
                        message: "Failed added !"
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: "Failed added !"
                })
            })
        },
        getImage (e) {
            this.dealImg(e.target.files[0],(img) => {
                var formData = new FormData()
                formData.append('file',img)
                file(formData).then(res => {
                    if (res.data.rtnCode == 200) {
                        this.addPetMessage.headImg = res.data.data
                    }
                }).catch(e => {
                    console.log(e)
                    this.$message({
                        type: "error",
                        message: "Picture is too large"
                    })
                })
            })
            
        },
        getDay () {
            // let month = new Date().getMonth() + 1      //获取月份
            // let Day = new Date(2021,2,0).getDate()//  获取每月天数
            for (let i=1;i<=100;i++) {
                this.dayList.push(i)
            }
        },
        submit () {
            this.$refs.form.validate((flag) => {
                if (flag) {
                    this.addPet()
                } else {
                    this.$message({
                        type: "error",
                        message: "Please fill in the information completely!"
                    })
                }
            })
        }
    }
}
</script>

