<style lang="less" scoped>
@import "@/less/css.less";
    .message_title {
        padding: 20px 0;
    }
    .photo {
        margin: 7px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        position: relative;
        background: #EDEDED;
        overflow: hidden;
        .defaultImg {
            width: 70%;                           //不完整图片
        }
        .upImg {
            height: 100%;
        }
    }
    .wrap_img {
        position: relative;
        .addImg {
            width: 50px;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%,50%);
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
        width: 30%;
    }
</style>

<template>
    <div class="petMessage">
        <div>
            <myHeaderL></myHeaderL>
        </div>
        <div class="fillIn">  <!-- 填写信息 -->
            <div class="message_title size21 tc">About the pet</div>
            <div class="size12 tc">Add your pet details</div>
            <!-- <div class="ju">
                <div class="wrap_img">
                    <label class="photo cursor al ju" for="avaImg">
                        <img class="upImg" :src="addPetMessage.image" v-if="addPetMessage.image" alt="">
                        <img class="defautlImg" src="@/assets/img/default.png" alt="" v-else>
                        <input type="file" @change="getImage" name="" v-show="false" id="avaImg">
                    </label>
                    <img class="addImg" src="@/assets/img/file.png" alt="">
                </div>
            </div> -->
            <div class="message_form">
                <el-form :rules="rules" ref="form" :model="addPetMessage" :label-position="position" label-width="80px">
                    <el-form-item prop="image">
                        <div class="ju">
                            <div class="wrap_img">
                                <label class="photo cursor al ju" for="avaImg">
                                    <img class="upImg" :src="addPetMessage.image" v-if="addPetMessage.image" alt="">
                                    <img class="defautlImg" src="@/assets/img/default.png" alt="" v-else>
                                    <input type="file" @change="getImage" name="" v-show="false" id="avaImg">
                                </label>
                                <img class="addImg" src="@/assets/img/file.png" alt="">
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item prop="name">
                        <el-input placeholder="Pet Name" v-model="addPetMessage.name"></el-input>
                    </el-form-item>
                    <div class="textcolor">Date of birth</div>
                    <div>
                        <el-form-item prop="birth">
                            <div class="sb">
                                <div class="select_item">
                                    <el-select v-model="day" @change="chooseDay">
                                        <el-option v-for="(item,i) in dayList" :key="i" :value="item"></el-option>
                                    </el-select>
                                </div>
                                <div class="select_item">
                                    <el-select v-model="month" @change="chooseMonth">
                                        <el-option v-for="(item,i) in monthList" :key="i" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </div>
                                <div class="select_item">
                                    <el-select v-model="years">
                                        <el-option v-for="(item,i) in yearsList" :key="i" :value="item"></el-option>
                                    </el-select>
                                </div>
                            </div>
                        </el-form-item>
                    </div>
                    <div class="sb textcolor">
                        <div style="width:30%">Gender</div>
                        <div style="width:30%">Neutered status</div>
                        <div style="width:30%">Weight (kg)</div>
                    </div>
                    <div>
                        <el-form-item prop="weight">
                            <div class="sb">
                                <div class="select_item">
                                    <el-select v-model="sex">
                                        <el-option v-for="(item,i) in sexList" :key="i" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </div>
                                <div class="select_item">
                                    <el-select v-model="value">
                                        <el-option value=""></el-option>
                                    </el-select>
                                </div>
                                <div class="select_item">
                                    <el-input v-model="addPetMessage.weight"></el-input>
                                </div>
                            </div>
                        </el-form-item>
                    </div>
                    <el-form-item prop="petType">
                        <el-input placeholder="Pet Type" v-model="addPetMessage.petType"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="Remark"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="width100" type="warning">Other Pet</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="width100" type="primary" @click="submit">Submit</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { addPet, file } from '@/axios/request.js'
export default {
    data () {
        return {
            position:'top',
            formList: {
                one:'123',
                two:'456'
            },
            value:[],
            value1:'',
            day:'',
            dayList:[],
            month:'',
            // monthList:[],
            judge_month: null,
            monthList: [ 
                { label: 'Jan', value: '1' }, 
                { label: 'Feb', value: '2' }, 
                { label: 'Mar', value: '3' }, 
                { label: 'Apr', value: '4' }, 
                { label: 'May', value: '5' }, 
                { label: 'Jun', value: '6' }, 
                { label: 'Jul', value: '7' }, 
                { label: 'Aug', value: '8' }, 
                { label: 'Sep', value: '9' }, 
                { label: 'Oct', value: '10' }, 
                { label: 'Nov', value: '11' }, 
                { label: 'Dec', value: '12' }, 
            ],
            years:'',
            yearsList:[],
            sex:'',
            sexList: [
                {label: 'M', value: 1},
                {label: 'F', value: 2},
            ],
            addPetMessage: {
                id: localStorage.getItem("userId"),
                name: "",
                image: '',
                petType: null,
                birth: "",
                weight: ""
            },
            rules: {
                name: [
                    { required: true, message: "Please enter name!", trigger: 'blur' }
                ],
                petType: [
                    { required: true, message: "Please enter petType!", trigger: 'blur' }
                ],
                birth: [
                    { required: true, message: "Please enter birth!", trigger: 'blur' }
                ],
                weight: [
                    { required: true, message: "Please enter weight!", trigger: 'blur' }
                ]
            }
        }
    },
    created () {
        this.getDay()
    },
    methods: {
        addPet () {                                                                              //添加宠物
            addPet(this.addPetMessage).then(res => {
                console.log(res,"添加宠物信息")
            })  
        },
        getImage (e) {
            var formData = new FormData()
            formData.append('file',e.target.files[0])
            file(formData).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.addPetMessage.image = res.data.data
                }
            }).catch(e => {
                console.log(e)
                this.$message({
                    type: "error",
                    message: "Picture is too large"
                })
            })
        },
        getDay () {
            // let month = new Date().getMonth() + 1      //获取月份
            // let Day = new Date(2021,2,0).getDate()//  获取每月天数
            for (let i=1;i<=31;i++) {
                this.dayList.push(i)
            }
            let year = new Date().getFullYear()
            for ( let i=0; i<=21; i++ ) {
                this.yearsList.push(year - i)
            }
        },
        chooseDay (val) {
            this.day = val
        },
        chooseMonth (val) {
            this.judge_month = val
            let Day = new Date(2021,this.judge_month,0).getDate()//  获取每月天数
            console.log(Day,'day')
            this.dayList = []
            for (let i=1;i<=Day;i++) {
                this.dayList.push(i)
            }
            console.log(this.dayList.length,this.day)
            if (this.day > this.dayList.length) {
                this.day = this.dayList.length
            }
        },
        submit () {
            this.addPetMessage.birth = String(this.years) + '-' + String(this.month) + '-' + String(this.day)
            this.$refs.form.validate((flag) => {
                if (flag) {
                    this.addPet()
                    this.$message({
                        type: 'success',
                        message: "Successfully added !"
                    })
                    setTimeout(() => {
                        this.$router.replace('/petDetails')
                    },500)
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

