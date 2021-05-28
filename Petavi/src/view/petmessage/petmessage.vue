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
        img {
            width: 70%;     //不完整图片
        }
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
            <div class="ju">
                <div class="photo al ju">
                    <img src="@/assets/img/default.png" alt="">
                    <img class="addImg" src="@/assets/img/file.png" alt="">
                </div>
            </div>
            <div class="message_form">
                <el-form :model="formList" :label-position="position" label-width="80px">
                    <el-form-item prop="one">
                        <el-input placeholder="Pet Name"></el-input>
                    </el-form-item>
                    <div class="textcolor">Date of birth</div>
                    <div>
                        <el-form-item prop="two">
                            <div class="sb">
                                <div class="select_item">
                                    <el-select v-model="day">
                                        <el-option v-for="(item,i) in dayList" :key="i" :value="item"></el-option>
                                    </el-select>
                                </div>
                                <div class="select_item">
                                    <el-select v-model="month">
                                        <el-option v-for="(item,i) in monthList" :key="i" :value="item"></el-option>
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
                        <el-form-item>
                            <div class="sb">
                                <div class="select_item">
                                    <el-select v-model="sex">
                                        <el-option v-for="(item,i) in sexList" :key="i" :value="item"></el-option>
                                    </el-select>
                                </div>
                                <div class="select_item">
                                    <el-select v-model="value">
                                        <el-option value="123"></el-option>
                                    </el-select>
                                </div>
                                <div class="select_item">
                                    <el-select v-model="value">
                                        <el-option value="123"></el-option>
                                    </el-select>
                                </div>
                            </div>
                        </el-form-item>
                    </div>
                    <el-form-item>
                        <el-input placeholder="Pet Type"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="Remark"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="width100" type="warning">Other Pet</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="width100" type="primary">Submit</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
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
            monthList:[],
            years:'',
            yearsList:[],
            sex:'',
            sexList:[ "M", "F" ]
        }
    },
    created () {
        this.getDay()
    },
    methods: {
        getDay () {
            let month = new Date().getMonth() + 1      //获取月份
            let Day = new Date(2021,month,0).getDate()//  获取每月天数
            for (let i=1;i<=Day;i++) {
                this.dayList.push(i)
            }
            for (let i=1;i<=12;i++) {
                this.monthList.push(i)
            }
            for (let i=1;i<10;i++) {
                this.yearsList.push('202' + i)
            }
            console.log(this.day)
        }
    }
}
</script>

