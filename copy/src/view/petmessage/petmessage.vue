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
    <div class="petMessage" v-loading="loading">
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
                                    <el-select v-model="addPetMessage.gender">
                                        <el-option v-for="(item,i) in sexList" :key="i" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </div>
                                <div class="select_item">
                                    <!-- <el-select v-model="value">
                                        <el-option value=""></el-option>
                                    </el-select> -->
                                    <el-select v-model="addPetMessage.petJueYu">
                                        <el-option value="1" label="Sterilization"></el-option>
                                        <el-option value="2" label="Unneutered"></el-option>
                                    </el-select>
                                </div>
                                <div class="select_item">
                                    <el-input v-model="addPetMessage.weight"></el-input>
                                </div>
                            </div>
                        </el-form-item>
                    </div>
                    <el-form-item prop="petType">
                        <!-- <el-input placeholder="Pet Type" v-model="addPetMessage.petType"></el-input> -->
                        <el-cascader class="width100" :options="options" @change="cascader" placeholder="pet Type"></el-cascader>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="Remark" v-model="addPetMessage.remark"></el-input>
                    </el-form-item>
                    <!-- <el-form-item>
                        <el-button class="width100" type="warning">Other Pet</el-button>
                    </el-form-item> -->
                    <el-form-item>
                        <el-button class="width100" type="primary" @click="submit">Submit</el-button>
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
                {label: 'Male', value: 1},
                {label: 'Female', value: 2},
            ],
            addPetMessage: {
                id: localStorage.getItem("userId"),
                name: "",
                gender: null,
                image: '',
                petType: null,
                birth: "",
                weight: "",
                petType: null,
                remark: ''
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
            },
            options: []
        }
    },
    created () {
        this.getDay()
        this.getPetType()
    },
    computed: {
        // petStatus () { return this.$store.state.user.petList }
    },
    methods: {
        cascader (val) {
            this.addPetMessage.petType = val.slice(-1)[0]
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
                this.recursion(res.data)
            })
        },
        recursion (key) {
            key.forEach(item => {
                item.label = item.petTypeName
                item.value = item.petTypeId
                if (item.children.length !== 0) {
                    this.recursion(item.children)
                } else if (item.children.length == 0) {
                    item.children = null
                }
            })
        },
        addPet () {                                                                              //添加宠物
            addPet(this.addPetMessage).then(res => {
                // console.log(res,"添加宠物信息")
            })  
        },
        getImage (e) {
            this.dealImg(e.target.files[0],(img) => {
                var formData = new FormData()
                formData.append('file',img)
                file(formData).then(res => {
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
            this.dayList = []
            for (let i=1;i<=Day;i++) {
                this.dayList.push(i)
            }
            if (this.day > this.dayList.length) {
                this.day = this.dayList.length
            }
        },
        submit () {
            this.loading = true
            this.addPetMessage.birth = String(this.years) + '-' + String(this.month) + '-' + String(this.day)
            this.$refs.form.validate((flag) => {
                if (flag) {
                    this.addPet()
                    this.loading = false
                    this.$message({
                        type: 'success',
                        message: "Successfully added !"
                    })
                        setTimeout(() => {
                        this.$router.replace('/myDoctor')
                        },500)
                } else {
                    this.loading = false
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

