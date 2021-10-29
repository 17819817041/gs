<style lang="less" scoped>
@import "@/less/css.less";
    .customerPage {
        flex: 10;
        height: 100%;
    }
    .customer_content {
        width: 100%;
        height: 100%;
        .pet_message {
            width: 100%;
            height: 100%;
            background: @content;
            padding-bottom: 30px;
            overflow: auto;
        }
    }
    .details_item {
        width: 97%;
        margin: auto;
        margin-bottom: 30px;
        position: relative;
        background: white;
        border-radius: 8px;
        padding: 70px 3px;
        box-shadow: 0px 3px 3px 0px #D0D0D0;
        @media screen and (max-width: 600px) {
            display: none;
        }
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
    .mobile_pet_edit {
        width: 97%;
        margin: auto;
        margin-bottom: 30px;
        position: relative;
        background: white;
        border-radius: 8px;
        padding: 70px 3px;
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
    .mobile_edit {
        width: 70px;
        height: 32px;
        border-radius: 12px;
        background: @helpBtn;
        padding: 6px 0px 3px 0;
        margin-right: 20px;
        font-size: 15px;
        color: white;
        box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
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
        position: sticky;
        top: 0;
        width: 97%;
        margin: auto;
        padding: 15px 0;
        z-index: 100;
        background: @content;
        transition: 0.1s;
    }
    .details_image {
        width: 25%;
        .wrap_IMG {
            width: 182px;
            height:182px;
            border-radius: 50%;
            margin-left: 50px;
            overflow: hidden;
            transition: 0.2s;
            @media screen and (max-width: 1300px){
                width: 150px;
                height: 150px;
                border-radius: 50%;
                margin-left: 0px;
                overflow: hidden;
            }
            @media screen and (max-width: 1000px){
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin-left: 0px;
                overflow: hidden;
            }
        }
    }
    .pet_IMG {
        height: 100%;
        display: block;
    }
    .details_message {
        min-width: 195px;
        width: 21%;
        position: relative;
        @media screen and (max-width: 600px) {
            width: 100%;
        }
        .delete {
            position: absolute;
            bottom: -20px;
            left: 0;
            padding: 5px 10px;
            color: white;
            background: @denger;
            margin-top: 30px;
            border-radius: 10px;
            @media screen and (max-width: 600px) {
                bottom: -302px;;
            }
        }
        // .about {
        //     height: 36px;
        //     padding: 0 0 7px 30px;
        // }
    }
    .noPadding {
        padding: 0 0 4px 30px !important;
    }
    .details_message1 {
        width: 54%;
        margin-left: 15px;
        @media screen and (max-width: 600px) {
            width: 100%;
            margin-left: 0px;
        }
    }
    .about {
        height: 36px;
        padding: 0 0 12px 0px;
        transition: 0.2s;
        white-space: nowrap;
        @media screen and (max-width: 1000px){
            height: 30px;
            padding: 0 0 12px 0px;
            white-space: nowrap;
        }
    }
    .editInp {
        // width: 100%;
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
        @media screen and (max-width: 1000px){
            height: 25px;
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
        @media screen and (max-width: 1000px){
            height: 25px;
        }
    }
    .details_images, .details_message, .details_message1 {
        @media screen and (max-width:120px) {}
    }
    .record_active {
        // width: 300px;
        max-width: 230px;
        max-height: 30px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 1;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all !important;/*在任何地方换行*/
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
        color: #1976D2;
        font-size: 13px;
        height: 100%;
        text-decoration: underline;
        margin-left: 10px;
        line-height: 35px;
    }
    .textarea {
        width: 80%;
        border: solid 1px rgb(202, 202, 202);
        height: 80px;
        border-radius: 10px;
        transform: translate(30px,-8px);
        overflow: hidden;
        textarea {
            width: 100% !important;
            height: 100% !important;
            border: none;
            outline: none;
            resize: none;
            padding: 5;
            font-size: 17px;
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
    .remarktext {
        width: 99%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .toPetMessage {
        padding: 8px;
        border-radius: 20px;
        background: @video;
        color: white;
        white-space: nowrap;
        @media screen and (max-width: 600px) {
            font-size: 13px;
        }
        img {
            width:20px;
            margin-right: 3px;
            @media screen and (max-width: 600px) {
                width: 16px;
            }
        }
    }
    .margin_mobile {
        margin: 10px auto;
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
    .mobile_details {
        width: 97%;
        margin: auto;
        margin-bottom: 30px;
        background: white;
        border-radius: 8px;
        padding: 20px 3px;
        box-shadow: 0px 3px 3px 0px #D0D0D0;
        display: none;
        @media screen and (max-width: 600px) {
            display: flex;
        }
    }
    .mobile_details_img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0 15px;
        overflow: hidden;
    }
    .collapse_size {
        font-size: 19px;
    }
</style>
<template>
    <div class="customerPage" v-loading='p_loading'>
        <div class="customer_content flex">
            <div class="pet_message noBar">
                <div class="bold petMessage_title sb al">
                    <div class="al explan">Relatives Details</div>
                    <div class="al toPetMessage cursor" @click="toPetMessage">
                        <span>Add Member</span>
                    </div>
                </div>
                <div class="details_item size19 flex" v-for="(item,i) in petLists" :key="item.id">
                    <div v-if="item.change" class="edit cursor tc" @click="edit(item,i)">Edit</div>
                    <div v-else class="wrap_save flex">
                        <div class="save cursor tc white" @click="save(item,i)">Save</div>
                        <div class="cancel cursor tc" @click="cancel(item,i)">cancel</div>
                    </div>
                    <div class="details_image ju">
                        <label for="ava1">
                            <div class="wrap_IMG ju al">
                                <img :class="['pet_IMG', { cursor: !item.change }]" v-if="item.familyMember.headImg" :src="item.familyMember.headImg" alt="">
                                <img style="height: 100%;" v-else src="@/assets/img/defaultimg.jpg" alt="">
                            </div>
                            <input id="ava1" type="file" v-if="!item.change" v-show="false" @change="petImage">
                        </label>
                    </div>
                    <div class="details_message flex">
                        <div class="delete cursor size15" v-if="!item.change" @click="Delete(item)">
                            Delete information
                        </div>
                        <div>
                            <div class="size17">
                                <div class="flex about al">
                                    <div>User ID</div>
                                </div>
                                <div class="flex about al">
                                    <div>Name</div>
                                </div>
                                <div class="flex about al">
                                    <div>Age</div>
                                </div>
                                <div class="flex about al">
                                    <div>Relation</div>
                                </div>
                            </div>
                        </div>
                        <div class="size16">
                            <div class="flex about">
                                <div class="al">{{item.familyMember.id}}</div>
                            </div>
                            <div :class="['flex', 'al', 'about']">
                                <div v-if="item.change">{{item.familyMember.name}}</div>
                                <div class="editInp al" v-else>
                                    <input type="text" class="width100" v-model="item.familyMember.name">
                                </div>
                            </div>
                            <div :class="['flex', 'about']">
                                <div v-if="item.change">{{item.familyMember.age}}</div>
                                <div class="editInp al" v-else>
                                    <el-select v-model="item.familyMember.age">
                                        <el-option v-for="index in 100" :key="index" :value="index" :label="index"></el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="flex about">
                                <div v-if="item.change">{{item.familyMember.familyRelations}}</div>
                                <div class="editInp al" v-else>
                                    <el-select v-model="item.familyMember.familyRelations">
                                        <el-option value="Father" label="Father"></el-option>
                                        <el-option value="Mather" label="Mather"></el-option>
                                        <el-option value="Grandfather" label="Grandfather"></el-option>
                                        <el-option value="Grandmather" label="Grandmather"></el-option>
                                        <!-- <el-option value="ElderBrother" label="Elder Brother"></el-option> -->
                                        <el-option value="Sister" label="Sister"></el-option>
                                        <el-option value="Brother" label="Brother"></el-option>
                                        <!-- <el-option value="YoungerSister" label="Younger Sister"></el-option> -->
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="details_message1">
                        <div class="flex">
                            <div class="message1_child size17">
                                <div class="flex about">
                                    <div>Gender</div>
                                </div>
                                <div class="flex about">
                                    <div>Height</div>
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
                            <div class="size16">
                                <div class="flex about">
                                    <div v-if="item.change" class="al">
                                        <span v-if="item.familyMember.sex == 1">Male</span>
                                        <span v-else-if="item.familyMember.sex == 2">Female</span>
                                        <span v-else-if="item.familyMember.sex === null">No data</span>
                                    </div>
                                    <div class="editInp al" v-else>
                                        <el-select v-model="sex" @change="getSex">
                                            <el-option value="1" label="Male"></el-option>
                                            <el-option value="2" label="Female"></el-option>
                                        </el-select>
                                    </div>
                                </div>
                                <div class="flex about">
                                    <div v-if="item.change" class="al">{{item.familyMember.height}} cm</div>
                                    <div v-else class="flex">
                                        <div class="editInp1 al" >
                                            <div class="input"><input type="text" v-model="item.familyMember.height"></div>
                                        </div>
                                        <div class="al">cm</div>
                                    </div>
                                </div>
                                <div class="flex about">
                                    <div v-if="item.change" class="al">{{item.familyMember.weight}} kg</div>
                                    <div v-else class="flex">
                                        <div class="editInp1 al" >
                                            <div class="input"><input type="text" v-model="item.familyMember.weight"></div>
                                        </div>
                                        <div class="al">kg</div>
                                    </div>
                                </div>
                                <div class="flex about">
                                    <div class="al">{{item.familyMedicalRecordDtos? item.familyMedicalRecordDtos[0].createdAt: 'No Date'}}</div>
                                </div>
                                <div class="flex">
                                    <div class="al">
                                        <div class="al record_active">{{item.familyMedicalRecordDtos? item.familyMedicalRecordDtos[0].content: 
                                            'No Medical records'}}</div>
                                        <div class="morePetDetalis cursor" v-if="!item.familyMedicalRecordDtos" @click="record(item)">More</div>
                                        <div class="morePetDetalis" style="color: white" v-else>-</div>
                                    </div>
                                </div>
                                <div class="flex about">
                                    <div class="remarktext al" v-if="item.change">{{item.familyMember.content? item.familyMember.content:'No data'}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="textarea al" v-if="!item.change">
                            <textarea v-model="item.familyMember.content" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>

                <div class="mobile_details sb al" v-for="(item,i) in petLists" :key="i">
                    <div class="flex">
                        <div class="mobile_details_img ju al">
                            <img style="height: 100%;" v-if="item.familyMember.headImg" :src="item.familyMember.headImg" alt="">
                            <img style="height: 100%;" v-else src="@/assets/img/defaultimg.jpg" alt="">
                        </div>
                        <div class="al">
                            <div style="height: 50px">
                                <div style="line-height: 70px" class="collapse_size bold" v-if="item.familyMember.name">{{item.familyMember.name}}</div>
                                <div style="line-height: 70px" class="collapse_size bold" v-else>No Name</div>
                            </div>
                        </div>
                    </div>
                    <div class="mobile_edit tc" @click="updata_pet(item)">Edit</div>
                </div>
            </div>
        </div>
        
        <!-- <el-drawer
            class="el_drawer_mobile"
            title="Pet Detail"
            :visible.sync="drawer"
            size='80%'>
            <div class="mobile_pet_edit size19">
                <div v-if="T_pet.change" class="edit cursor tc" @click="mobile_edit(T_pet)">Edit</div>
                <div v-else class="wrap_save flex">
                    <div class="save cursor tc" @click="mobile_save(T_pet)">Save</div>
                    <div class="cancel cursor tc" @click="mobile_cancel(T_pet)">cancel</div>
                </div>
                <div class="details_image ju margin_mobile">
                    <label for="ava1">
                        <div class="wrap_IMG ju al">
                            <img :class="['pet_IMG', { cursor: !T_pet.change }]" v-if="T_pet.image" :src="T_pet.image" alt="">
                            <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
                        </div>
                        <input id="ava1" type="file" v-if="!T_pet.change" v-show="false" @change="petImage">
                    </label>
                </div>
                <div class="details_message flex">
                    <div class="delete cursor size15" v-if="!T_pet.change" @click="Delete(T_pet)">
                        Delete information
                    </div>
                    <div style="width: 50%;">
                        <div class="size17">
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
                    <div class="size16" style="width: 50%">
                        <div class="flex about">
                            <div class="al">{{T_pet.id}}</div>
                        </div>
                        <div :class="['flex', 'al', 'about']">
                            <div v-if="T_pet.change">{{T_pet.name}}</div>
                            <div class="editInp al" v-else>
                                <input type="text" class="width100" v-model="T_pet.name">
                            </div>
                        </div>
                        <div :class="['flex', 'about']">
                            <div v-if="T_pet.change">{{T_pet.age}}</div>
                            <div class="al" v-else>
                                <div class="years_input al"><input class="tc width100" type="text" v-model="T_pet.yrs"/></div>
                                <div>yrs</div>
                                <div class="month_input al"><input class="tc width100" type="text" v-model="T_pet.mo" ></div>
                                <div>mo</div>
                            </div>
                        </div>
                        <div class="flex about">
                            <div v-if="T_pet.change">{{
                                options.find(op => op.petTypeId == T_pet.petTypeParentId)? 
                                options.find(op => op.petTypeId == T_pet.petTypeParentId).petTypeName
                                : options.find(op => op.petTypeId == T_pet.petType)? 
                                options.find(op => op.petTypeId == T_pet.petType).petTypeName :
                                ''
                            }}</div>
                            <div class="editInp al" v-else>
                                <el-select @change="selectType($event,i)" v-model="T_pet.pet_name">
                                    <el-option v-for="(op) in options" :value="op.petTypeId" :key="op.petTypeId" :label="op.petTypeName"></el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="flex about">
                            <div v-if="T_pet.change">
                                <div>{{
                                    T_pet.breedList?
                                    T_pet.breedList.find(breed => T_pet.petType == breed.petTypeId)?
                                    T_pet.breedList.find(breed => T_pet.petType == breed.petTypeId).petTypeName:
                                    'No More'
                                    : ''
                                }}</div>
                            </div>
                            <div class="editInp al" v-else>
                                <el-select v-model="T_pet.breed_name" @change="cutBreed($event,T_pet)">
                                    <el-option v-for="(breed,i) in T_pet.breedList? T_pet.breedList:[]" :key="i" 
                                    :label="breed.petTypeName"
                                    :value="breed.petTypeId"></el-option>
                                </el-select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="details_message1">
                    <div class="flex" >
                        <div class="message1_child size17" style="width: 50%;">
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
                            <div class="flex about" style="height: 35px">
                                <div style="color:white;">record</div>
                            </div>
                            <div class="flex about">
                                <div>Remarks</div>
                            </div>
                        </div>
                        <div class="size16" style="width: 50%;">
                            <div class="flex about">
                                <div v-if="T_pet.change" class="al">
                                    <span v-if="T_pet.gender == 1">Male</span>
                                    <span v-else-if="T_pet.gender == 2">Female</span>
                                    <span v-else-if="T_pet.gender === null">No data</span>
                                </div>
                                <div class="editInp al" v-else>
                                    <el-select v-model="sex" @change="getSex">
                                        <el-option value="1" label="Male"></el-option>
                                        <el-option value="2" label="Female"></el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="flex about">
                                <div v-if="T_pet.change" class="al">
                                    <span v-if="T_pet.petJueYu == 1">Sterilization</span>
                                    <span v-else-if="T_pet.petJueYu == 2">Unneutered</span>
                                    <span v-else-if="T_pet.petJueYu === null">No data</span>
                                </div>
                                <div v-else class="editInp al">
                                    <el-select v-model="status" @change="neuteredStatus">
                                        <el-option value="1" label="Sterilization"></el-option>
                                        <el-option value="2" label="Unneutered"></el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="flex about">
                                <div v-if="T_pet.change" class="al">{{T_pet.weight}} kg</div>
                                <div v-else class="flex">
                                    <div class="editInp1 al" >
                                        <div class="input"><input type="text" v-model="T_pet.weight"></div>
                                    </div>
                                    <div class="al">kg</div>
                                </div>
                            </div>
                            <div class="flex about">
                                <div class="al">{{T_pet.petMedicalRecordDtos[0]? T_pet.petMedicalRecordDtos[0].createdAt: 'No Date'}}</div>
                            </div>
                            <div class="flex">
                                <div class="al">
                                    <div class="al record_active">{{T_pet.petMedicalRecordDtos[0]? T_pet.petMedicalRecordDtos[0].content: 
                                        'No Medical records'}}</div>
                                    <div class="morePetDetalis cursor" @click="record(T_pet)">More</div>
                                </div>
                            </div>
                            <div class="flex about">
                                <div class="remarktext al" v-if="T_pet.change">{{T_pet.remark? T_pet.remark:'No data'}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="textarea al" v-if="!T_pet.change">
                        <textarea v-model="T_pet.remark" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
        </el-drawer> -->
    </div>
</template>

<script>
import { file, updatePet, deletePet } from "@/axios/request.js"
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
            p_loading: false,               //
            copyList: [],
            drawer: false,
            T_pet: {
                age: 0,
                change:true,
                sex:0,
                userId: localStorage.getItem('userId'),
                id: 0,
                familyRelations: '',
                headImg:"",
                name:"",
                familyMedicalRecordDtos: [],
                platform:null,
                height: '',
                content:"",
                weight:"",
            }
        }
    },
    created () {
        this.getpet_list()
        this.SEX()
    },
    mounted () {
        
    },
    watch: {
        petList: {
            handler (val) {
                this.petLists = JSON.parse(JSON.stringify(val))
                this.copyList = JSON.parse(JSON.stringify(val))
                // this.T_pet = JSON.parse(JSON.stringify(val))[0]
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
        petId: {
            get () {return this.$store.state.user.petId},
            // set (val) {
            //     this.$store.commit("setUser", {
            //         key: "petId",
            //         value: val
            //     })
            // },
        },
        firstPet () { return this.$store.state.user.firstPet },
    },
    methods: {
        cutBreed (e,item) {
            item.petType = e
            this.options.forEach(op => {
                if (op.children.length !== 0) {
                    op.children.forEach(child => {
                        if (item.petType == child.petTypeId) {
                            item.breed_name = child.petTypeName
                            this.petLists = [...this.petLists]
                        }
                    })
                }
            })
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
            })
            this.petLists = [...this.petLists]
        },
        getpet_list () {
            var data = {
                userId: localStorage.getItem("userId"),
                pageNum: 1,
                pageSize: 100
            }
            this.$store.dispatch("getPetList",data)
        },
        setFirstPet () {
            var current = this.petLists[this.firstPet]
            if (current) {
                this.petLists.splice(this.firstPet,1)
                this.petLists.unshift(current)
            }
        },
        cancel (item,i) {
            this.petLists = this.copyList
            this.petLists[i].change = true
        },
        mobile_cancel (item) {
            this.petLists = this.copyList
            this.T_pet.change = true
        },
        Delete (item) {
            this.$confirm('Delete current information?', 'Attention', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                let data = {
                    familyMemberId: item.familyMember.id
                }
                deletePet(data).then(res => {
                    if (res.data.rtnCode == 200) {
                        this.$message({
                            type: "success",
                            message: "success delete !"
                        })
                        var data = {
                            userId: localStorage.getItem("userId"),
                            pageNum: this.pageNum,
                            pageSize: this.pageSize
                        }
                        this.$store.dispatch("getPetList",data)
                    } else {
                        this.$message({
                            type: "error",
                            message: "Failed delete !"
                        })
                    }
                }).catch(e => {
                    this.$message({
                            type: "error",
                            message: "Failed delete !"
                        })
                })
            })
            
        },
        updatePet () {    
            let obj = JSON.parse(JSON.stringify(this.petLists[this.i].familyMember))   
            delete obj.familyMedicalRecordDtos                                                    //更新宠物信息
            delete obj.state                                                    //更新宠物信息
            updatePet(obj).then(res => {
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
        mobile_updatePet () {    
            let obj = JSON.parse(JSON.stringify(this.T_pet))      
            delete obj.familyMedicalRecordDtos                                                    //更新宠物信息
            updatePet(obj).then(res => {
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
        petImage (e) {                                                                     //上传宠物图片
            var formData = new FormData
            formData.append("file",e.target.files[0])
            file(formData).then(res => {
                if (res.data.rtnCode == 200) {
                    this.src = res.data.data
                    this.petList[this.i].familyMember.headImg = res.data.data
                    this.petLists[this.i].familyMember.headImg = res.data.data
                    // this.updatePet()
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
            // this.petLists[this.i].sex = e
            this.petLists[this.i].familyMember.sex = e
        },
        edit (item,i) {
            // item.change = false
            this.petLists.forEach(msg => {
                msg.change = true
            })
            let that = this
            this.$nextTick(() => {
                that.petLists[i].change = false
                // console.log(item.change,i)
                that.i = i
                if (that.petLists[i].gender == 1) {
                    that.sex = 'Male'
                } else if (that.petLists[i].gender == 2) {
                    that.sex = "Female"
                }
                that.petLists = [...that.petLists]
            })
        },
        mobile_edit (item) {
            item.change = false
            if (item.gender == 1) {
                this.sex = 'Male'
            } else if (item.gender == 2) {
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
        mobile_save (item) {
            this.updating = true
            item.age = item.yrs + 'yrs' + item.mo + 'mo'
            this.mobile_updatePet()
            item.change = true
        },
        toPetMessage () {
            this.$router.push({
                name:'petmessage'
            })
        },
        record (item) {
            console.log(item)
            this.$router.push({
                name: 'record',
                query: {
                    pet: item.id
                }
            })
            // this.$router.push("/record")
        },
        updata_pet (item) {
            this.drawer = true
            this.T_pet = item
        }
    }
}
</script>

