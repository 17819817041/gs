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
            padding: 5;
            font-size: 17px;
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
    <div class="customerPage" v-loading='updating'>
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
                            <div class="wrap_IMG ju al">
                                <img :class="['pet_IMG', { cursor: !item.change }]" v-if="item.image" :src="item.image" alt="">
                                <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
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
                                <div v-if="item.change">{{
                                    options.find(op => op.petTypeId == item.petTypeParentId)? 
                                    options.find(op => op.petTypeId == item.petTypeParentId).petTypeName
                                    : ''
                                }}</div>
                                <div class="editInp al" v-else>
                                    <!-- <el-cascader class="width100" :options="options" @change="cascader" placeholder="pet Type"></el-cascader> -->
                                    <el-select @change="selectType($event,i)" v-model="item.petTypeParentId">
                                        <el-option v-for="(op) in options" :value="op.petTypeId" :key="op.petTypeId" :label="op.petTypeName"></el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="flex about">
                                <div v-if="item.change">
                                    <div v-if="item.petTypeName">{{item.petTypeName}}</div>
                                    <div v-else>{{
                                        item.breedList?
                                        item.breedList.find(breed => item.petType == breed.petTypeId)?
                                        item.breedList.find(breed => item.petType == breed.petTypeId).petTypeName:
                                        ''
                                        : ''
                                    }}</div>
                                </div>
                                <div class="editInp al" v-else>
                                    <el-select v-model="item.petType">
                                        <el-option v-for="(breed,i) in item.breedList? item.breedList:[]" :key="i" 
                                        :label="breed.petTypeName"
                                        :value="breed.petTypeId"></el-option>
                                    </el-select>
                                    <!-- <input type="text" v-model="item.breed" placeholder="input breed"> -->
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
                                    <div v-if="item.change">
                                        <span v-if="item.gender == 1">Male</span>
                                        <span v-else-if="item.gender == 2">Female</span>
                                        <span v-else-if="item.gender === null">No data</span>
                                    </div>
                                    <div class="editInp al" v-else>
                                        <el-select v-model="sex" @change="getSex">
                                            <el-option value="1" label="Male"></el-option>
                                            <el-option value="2" label="Female"></el-option>
                                        </el-select>
                                    </div>
                                </div>
                                <div class="flex about">
                                    <div v-if="item.change">
                                        <!-- {{item.petJueYu == 1? 'Sterilization':'Unneutered'}} -->
                                        <span v-if="item.petJueYu == 1">Sterilization</span>
                                        <span v-else-if="item.petJueYu == 2">Unneutered</span>
                                        <span v-else-if="item.petJueYu === null">No data</span>
                                    </div>
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
                                    <div class="remarktext" v-if="item.change">{{item.remark? item.remark:'No data'}}</div>
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
import { file, updatePet, deletePet, petType } from "@/axios/request.js"
export default {
    data () {
        return {
            sex: null,
            breed:'',
            status: '',
            pageNum: 1,
            pageSize: 100,
            i: null,
            petLists: [],
            options: [],
            petType: '',
            updating:false,
        }
    },
    created () {
        this.getPetType()
        this.SEX()
    },
    mounted () {
        
    },
    watch: {
        petList: {
            handler (val) {
                this.petLists = JSON.parse(JSON.stringify(val))
                this.setFirstPet()
                this.TYPE()
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
        selectType (e,i) {
            this.petLists[i].petType = ''
            let obj = this.options.find(op => op.petTypeId == e)
            this.petLists[i].breedList = obj.children
            this.petLists = [...this.petLists]
        },
        cascader (val) {
            let first = val[0]
            let last = val.slice(-1)[0]
            this.petLists[this.i].petType = last
            this.petLists[this.i].breed = first
        },
        SEX () {
            this.petLists.forEach(item => {
                if (item.gender == 1) {
                    this.sex = 'Male'
                } else if (item.gender == 2) {
                    this.sex = 'Female'
                }
                if (item.petJueYu == 1) {
                    console.log('Sterilization')
                    this.status = 'Sterilization'
                } else if (item.petJueYu == 2) {
                    console.log('Unneutered')
                    this.status = 'Unneutered'
                }
            })
            this.petLists = [...this.petLists]
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
        re (op) {
            this.petLists.forEach(item => {
                if (item.breed == op.petTypeId) {
                    item.breedName == op.petTypeName
                }
            })
        },
        TYPE () {
            this.petLists.forEach(item => {
                this.options.forEach(op => {
                    if (op.children) {
                        op.children.forEach(child => {
                            if (item.petType == child.petTypeId) {
                                let obj = this.options.find(op1 => op1.petTypeId == child.petTyepParentId)
                                item.petTypeParentId = child.petTyepParentId
                                item.breedList = obj.children
                                this.petLists = [...this.petLists]
                            }
                        })
                    }
                })
            })
        },
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
        updatePet () {    
            let obj = JSON.parse(JSON.stringify(this.petLists[this.i]))   
            delete obj.breedList
            delete obj.petTypeParentId                                                               //更新宠物信息
            updatePet(obj).then(res => {
                console.log(res,"geng新完成")
                if (res.data.rtnCode == 200) {
                    var data = {
                        userId: localStorage.getItem("userId"),
                        pageNum: this.pageNum,
                        pageSize: this.pageSize
                    }
                    this.$store.dispatch("getPetList",data)
                    this.updating = false
                    this.$message({
                        type: 'success',
                        message: 'Successfully changed'
                    })
                }
            }).catch(e => {
                console.log(e)
                this.updating = false
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
            this.petLists[this.i].gender = e
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
            this.updating = true
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

