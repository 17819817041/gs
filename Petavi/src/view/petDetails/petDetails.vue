<style lang="less" scoped>
@import "@/less/css.less";
    .customerPage {
        flex: 10;
    }
    .customer_content {
        width: 100%;
        .pet_message {
            width: 100%;
            height: 100%;
            background: @content;
            margin-top: 10px;
            padding-bottom: 30px;
            // @media screen and (max-width:1350px) {
            //     width: 82%;
            // }
            // @media screen and (max-width:1200px) {
            //     width: 98%;
            //     margin: auto;
            // }
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
            width: 70px;
            position: absolute;
            border-radius: 12px;
            background: @helpBtn;
            padding: 4px 0px;
            right: 20px;
            top: 20px;
            font-size: 15px;
            box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
        }
    }
    .wrap_save {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 15px;
    }
    .save {
        width: 70px;
        border-radius: 12px;
        background: @hdColor;
        padding: 4px 0px;
        box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
    }
    .cancel {
        width: 70px;
        border-radius: 12px;
        margin-left: 10px;
        background: @helpBtn;
        padding: 4px 0px;
        box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
    }
    .petMessage_title {
        color: #5E5E5E;
    }
    .details_image {
        width: 25%;
        // padding: 0 50px;
        .wrap_IMG {
            width: 200px;
            height: 200px;
            border: solid 1px rgb(223, 201, 201);
            border-radius: 50%;
            margin-left: 50px;
            overflow: hidden;
        }
    }
    .pet_IMG {
        height: 100%;
        display: block;
    }
    .details_message {
        width: 21%;
        position: relative;
        .delete {
            position: absolute;
            bottom: -20px;
            left: 0;
            padding: 5px 10px;
            color: white;
            background: @denger;
            margin-top: 30px;
            border-radius: 10px;
        }
        .about {
            height: 36px;
            padding: 0 0 7px 30px;
        }
    }
    .noPadding {
        padding: 0 0 4px 30px !important;
    }
    .details_message1 {
        width: 40%;
    }
    .about {
        height: 36px;
        padding: 0 0 12px 30px;
        white-space: nowrap;
    }
    // .message1_child {
    //     border: solid 1px;
    // }
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
            font-size: 16px;
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
            font-size: 16px;
        }
    }
    .details_images, .details_message, .details_message1 {
        @media screen and (max-width:120px) {}
    }
    .record_active {
        // width: 300px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .years_input, .month_input {
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius: 40%;
        border: solid 1px gray;
        input {
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
            font-size: 16px;
        }
    }
    .morePetDetalis {
        color: @logout;
        font-size: 16px;
        text-decoration: underline;
    }
    .textarea {
        width: 80%;
        border: solid 1px rgb(202, 202, 202);
        height: 80px;
        border-radius: 10px;
        transform: translate(30px,-8px);
        overflow: hidden;
        textarea {
            width: 100%;
            border: none;
            outline: none;
            resize: none;
        }
    }
    .size19 {
        font-size: 19px;
    }
    .remarktext {
        width: 96%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

<template>
    <div class="customerPage">
        <div class="customer_content flex">
            <div class="pet_message">
                <div class="bold petMessage_title" @click="toPetMessage">Pet Details</div>
                <div class="details_item size19 flex" v-for="(item,i) in petLists" :key="item.id">
                    <div v-if="item.change" class="edit cursor tc" @click="edit(item,i)">Edit</div>
                    <div v-else class="wrap_save flex">
                        <div class="save cursor tc" @click="save(item,i)">Save</div>
                        <div class="cancel cursor tc" @click="cancel(item,i)">cancel</div>
                    </div>
                    <div class="details_image ju">
                        
                        <label for="ava1">
                            <div class="wrap_IMG ju">
                                <img :class="['pet_IMG', { cursor: !item.change }]" :src="item.image" alt="">
                            </div>
                            <input id="ava1" type="file" v-if="!item.change" v-show="false" @change="petImage">
                        </label>

                    </div>
                    <div class="details_message flex">
                        <div class="delete cursor size15" v-if="!item.change" @click="Delete(item)">
                            Delete information
                        </div>
                        <div>
                            <div>
                                <div class="flex about al">
                                    <div>Pet ID</div>
                                </div>
                                <div class="flex about al">
                                    <div>Name</div>
                                </div>
                                <div class="flex about al">
                                    <div>Age</div>
                                </div>
                                <div class="flex about al">
                                    <div>Pet Type</div>
                                </div>
                                <div class="flex about al">
                                    <div>Breed</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="flex about">
                                <div>{{item.id}}</div>
                            </div>
                            <div :class="['flex', 'al', 'about', {noPadding:!item.change}]">
                                <div v-if="item.change">{{item.name}}</div>
                                <div class="editInp al" v-else>
                                    <input type="text" v-model="item.name">
                                </div>
                            </div>
                            <div :class="['flex', 'about', {noPadding:!item.change}]">
                                <div v-if="item.change">{{item.age}}</div>
                                <div class="al" v-else>
                                    <div class="years_input al"><input class="tc" type="text" v-model="item.yrs"/></div>
                                    <div>yrs</div>
                                    <div class="month_input al"><input class="tc" type="text" v-model="item.mo" ></div>
                                    <div>mo</div>
                                </div>
                            </div>
                            <div class="flex about">
                                <div v-if="item.change">{{item.petType}}</div>
                                <div class="editInp al" v-else>
                                    <input type="text" v-model="item.petType">
                                </div>
                            </div>
                            <div class="flex about">
                                <div v-if="item.change">
                                    <div v-if="item.breed">{{item.breed}}</div>
                                    <div v-else>none</div>
                                </div>
                                <div class="editInp al" v-else>
                                    <!-- <el-select v-model="breed">
                                        <el-option v-for="(item,i) in breedList" :key="i" :value="item"></el-option>
                                    </el-select> -->
                                    <input type="text" v-model="item.breed" placeholder="input breed">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="details_message1">
                        <div class="flex">
                            <div class="message1_child">
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
                                    <div v-if="item.change">{{item.gender == 1? 'Male':'Female'}}</div>
                                    <div class="editInp al" v-else>
                                        <el-select v-model="sex" @change="getSex">
                                            <el-option value="1">M</el-option>
                                            <el-option value="2">F</el-option>
                                        </el-select>
                                    </div>
                                </div>
                                <div class="flex about">
                                    <div v-if="item.change">{{item.petJueYu == 1? 'Sterilization':'Unneutered'}}</div>
                                    <div v-else class="editInp al">
                                        <el-select v-model="status" @change="neuteredStatus">
                                            <el-option value="1">Sterilization</el-option>
                                            <el-option value="2">Unneutered</el-option>
                                        </el-select>
                                    </div>
                                </div>
                                <div class="flex about">
                                    <div v-if="item.change">{{item.weight}} kg</div>
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
                                        <div class=" record_active">66666666666666666666... </div>
                                        <div class="morePetDetalis cursor" @click="record">More</div>
                                    </div>
                                </div>
                                <div class="flex about">
                                    <div class="remarktext" v-if="item.change">{{item.remark? item.remark:'none'}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="textarea" v-if="!item.change">
                            <textarea v-model="item.remark" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { file, updatePet, deletePet } from "@/axios/request.js"
export default {
    data () {
        return {
            sex: null,
            breed:'Husky',
            status: '',
            pageNum: 1,
            pageSize: 100,
            i: null,
            petLists: []
            // data: {
            //     petId: 13
            // }
        }
    },
    created () {
        
    },
    watch: {
        petList: {
            handler (val) {
                this.petLists = JSON.parse(JSON.stringify(val))
                this.setFirstPet()
            },
            immediate: true
        },
        firstPet: {
            handler (val) {
                this.petLists = JSON.parse(JSON.stringify(this.petList))
                this.setFirstPet()
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
        petTypeList () { return this.$store.state.user.petType },
        firstPet () { return this.$store.state.user.firstPet },
    },
    methods: {
        setFirstPet () {
            var current = this.petLists[this.firstPet]
            if (current) {
                this.petLists.splice(this.firstPet,1)
                this.petLists.unshift(current)
            }
        },
        // getPetDetails () {                                                                  //获取第一只宠物
        //     petDetails(this.data).then(res => {
        //         console.log(res,"获取宠物信息")
        //         if (res.data.rtnCode == 200) {
        //             this.petDetails = res.data.data
        //             console.log(this.petDetails,"this")
        //         }
        //     })
        // },
        cancel (item,i) {
            // item.change = true
            
            var data = {
                userId: localStorage.getItem("userId"),
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            this.$store.dispatch("getPetList",data)
            this.petLists[i].change = true
        },
        Delete (item) {
            let data = {
                petId: item.id
            }
            deletePet(data).then(res => {
                if (res.data.rtnCode == 200) {
                    this.$confirm('Delete current information?', 'Attention', {
                        confirmButtonText: 'Confirm',
                        cancelButtonText: 'Cancel',
                        type: 'warning'
                    }).then(() => {
                        this.$message({
                            type: "success",
                            message: "success delee !"
                        })
                        var data = {
                            userId: localStorage.getItem("userId"),
                            pageNum: this.pageNum,
                            pageSize: this.pageSize
                        }
                        this.$store.dispatch("getPetList",data)
                    })
                }
            })
        },
        updatePet () {                                                                         //更新宠物信息
            updatePet(this.petLists[this.i]).then(res => {
                console.log(res,"geng新完成")
                if (res.data.rtnCode == 200) {
                    var data = {
                        userId: localStorage.getItem("userId"),
                        pageNum: this.pageNum,
                        pageSize: this.pageSize
                    }
                    this.$store.dispatch("getPetList",data)
                    this.$message({
                        type: 'success',
                        message: 'Successfully changed'
                    })
                }
            }).catch(e => {
                console.log(e)
                this.$message({
                    type: "error",
                    message: "Update Failed!"
                })
            })
        },
        petImage (e) {    
            console.log(e)                                                                      //上传宠物图片
            var formData = new FormData
            formData.append("file",e.target.files[0])
            file(formData).then(res => {
                console.log(res,"宠物图片")
                if (res.data.rtnCode == 200) {
                    this.src = res.data.data
                    this.petList[this.i].image = res.data.data
                    this.updatePet()
                }
            }).catch(e => {
                console.log(e)
                this.$message({
                    type: "error",
                    message: "Picture is too large"
                })
            })
        },
        neuteredStatus (e) {
            this.petLists[this.i].petJueYu = e
            if (e == 1) {
                this.status = "Sterilization"
            } else if (e == 2) {
                this.status = "Unneutered"
            }
        },  
        getSex (e) {
            console.log(e)
            this.petLists[this.i].gender = e
            if (e == 1) {
                this.sex = "Male"
            } else if (e == 2) {
                this.sex = "Female"
            }
        },
        edit (item,i) {
            // item.change = false
            this.petLists[i].change = false
            // console.log(item.change,i)
            this.i = i
            if (this.petLists[i].gender == 1) {
                this.sex = 'Male'
            } else if (this.petLists[i].gender == 2) {
                this.sex = "Female"
            }
            this.petLists = [...this.petLists]
        },
        save (item,i) {
            this.petLists[i].age = item.yrs + 'yrs' + item.mo + 'mo'
            this.updatePet()
            this.petLists[i].change = true
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

