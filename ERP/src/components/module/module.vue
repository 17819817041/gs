<style lang="less" scoped>
    .All {
        width: 100%;
        overflow: auto;
    }
    .Table {
        width: 97%;
        min-width: 820px;
        border-radius: 15px;
        margin:10px auto;
    }
    .top {
        width: 100%;
        height: 40px;
        // background: black;
        border-radius: 15px 15px 0 0;
        box-sizing: border-box;
        // border: solid white 1px;
        display: flex;
        position: relative;
        >.menu_top {
            display: flex;
            width: 100%;
            margin: auto;
            color: #607080;
            font-size: 16px;
            font-weight: bold;
            align-items: center;
            @media screen and (max-width: 1300px) {
                font-size: 13px;
            }
            >.menu_item {
                width: 100%;
                // min-width: 150px;
            }
        }
        >.image {
            position: absolute;
            right: 0;
            top: 0%;
            transform: translate(-50%,50%);
            >.arrow {
                width: 20px;
                height: 20px;
                transition: 0.3s linear;
            }
        }
    }
    .content {
        width: 100%;
        >.check {
            width: 100%;
            // padding: 5px;
            margin: 5px auto;
            // border: solid 1px rgb(197, 193, 193);
            >.check_child {
                padding: 12px 0;
                // border-bottom: solid 1px rgb(207, 203, 203);
                >.content_item {
                    width: 100%;
                    // min-width: 150px;
                }
            }
        }
    }
    .width40 {
        width: 40px !important;
        max-width: 40px !important;
        min-width: 40px !important;
    }
    .padding {
        padding-right: 18.5px;
    }
    .child_item {
        color: #607080;
        font-size: 15px;
        @media screen and (max-width: 1300px) {
            font-size: 12px;
        }
    }
    .input {
        display: flex;
        width: 98%;
        margin: auto;
        overflow: hidden;
        transition: linear 0.3s !important;
        >.input_item {
            width: 100%;
            padding: 5px 0;
            text-align: center;
        }
    }
    .Input {
        // border: solid 0px;
        outline: none;
    }
    .compile {
        margin: auto;
        border-bottom: gray solid 1px;
        width: 95%;
        padding: 30px 0 10px 0;
        display: flex;
        justify-content: space-between;
    }
    .back_color {
        background: #F2F2F2;
    }
    .check_box {
        box-shadow: 0 0px 4px rgb(155, 155, 155);
    }
</style>
<template>
    <div class="All">
        <div class="Table" style="position:relative">
            <div class="top">
                <div class="menu_top" style="display:flex;">
                    <div v-for="(item,i) in columns" :key="i" :class="['menu_item',{width40:item.type == 'checkbox'},{padding:item.type == 'checkbox'}]">
                        <div v-if="item.type == 'checkbox'"> <input type="checkbox" class="check_box" v-model="all" @change="chooseAll"> </div>
                        <div v-else>{{item.title}}</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="check">
                    <div :class="['check_child al',{ 'back_color': i%2 == 0 }]" v-for="(item,i) in arr" :key="i" style="display:flex;width:100%;" v-show="item.active ">                   
                        <div :class="['content_item',{width40:child.type == 'checkbox'}]" v-for="(child,k) in columns" :key="k">
                            <div class="check_item width40" 
                                v-if="child.type == 'checkbox'">
                                <input type="checkbox" 
                                class="check_box"
                                @change="getItem(item)" 
                                v-model="item.checked" />
                            </div>
                            <div v-else-if="(child.slot == 'Status')" class="slot">
                                <slot name="Status" :data="item.Status"></slot>
                            </div>
                            <div v-else-if="(child.slot == 'Purchase_Status')" class="slot">
                                <slot name="Purchase_Status" :data="item.Status"></slot>
                            </div>
                            <div v-else-if="(child.slot == 'Inbound')" class="slot">
                                <slot name="Inbound" :data="item.Inbound"></slot>
                            </div>
                            <div v-else-if="(child.slot == 'Details')" class="slot">
                                <slot name="Details" :data="item.Details"></slot>
                            </div>
                            <div v-else-if="(child.slot == 'Invoice')" class="slot">
                                <slot name="Invoice" :data="item.Invoice"></slot>
                            </div> 
                            <div v-else-if="(child.slot == 'Action')" class="slot cursor" @click="dialogVisible = true">
                                <slot name="Action" :data="item.Action"></slot>
                            </div>
                            <div v-else-if="(child.slot == 'Action1')" class="slot cursor" @click="dialogVisible1 = true">
                                <slot name="Action1" :data="item.Action"></slot>
                            </div>
                            <div class="child_item" v-else>{{item[child.key]}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            title="Add new supplier"
            :visible.sync="dialogVisible"
            width="90%">
            <div class="sb FORM width100">
                <div class="FORM_item width100">
                    <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm sb width100" label-position='top'>
                        <el-form-item label="Name:" prop="name" style="width: 49%;">
                            <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="Email:" prop="email" style="width: 49%;">
                            <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">Submit</el-button>
                <el-button @click="dialogVisible = false">Close</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="Add new customer"
            :visible.sync="dialogVisible1"
            width="90%">
            <div class="sb FORM width100">
                <div class="FORM_item width100">
                    <el-form :model="ruleForm1" :rules="rules1" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm sb width100" label-position='top'>
                        <el-form-item label="First Name:" prop="f_name" style="width: 33%;">
                            <el-input type="text" v-model="ruleForm1.f_name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="Surname:" prop="s_name" style="width: 33%;">
                            <el-input type="text" v-model="ruleForm1.s_name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="Email:" prop="email" style="width: 33%;">
                            <el-input type="text" v-model="ruleForm1.email" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible1 = false">Submit</el-button>
                <el-button @click="dialogVisible1 = false">Close</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            inputActive:30,
            active:true,
            all:false,
            deg:0,
            dialogVisible: false,
            dialogVisible1: false,
            ruleForm: {
                name: '',
                email: ''
            },
            rules: {
                email: [
                    { required:true, message:'Please enter your email', trigger:"blur" }
                ],
                name: [
                    { required: true, message:'Please enter your name', trigger:'blur' }
                ]
            },
            ruleForm1: {
                email: '',
                f_name: '',
                s_name: ''
            },
            rules1: {
                email: [
                    { required:true, message:'Please enter your email', trigger:"blur" }
                ],
                f_name: [
                    { required: true, message:'Please enter your First Name', trigger:'blur' }
                ],
                s_name: [
                    { required: true, message:'Please enter your Surname', trigger:'blur' }
                ]
            },
        }
    },
    props: {
        columns: {
            type: Array,
            default: () => []
        },
        arr: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        matching (val,key) {
            this.arr.forEach(item => {
                console.log(item[key],item[key].includes(val),val)
                if (item[key].includes(val) ) {
                    console.log(item[key])
                    item.active = true
                } else {
                    // console.log(item[key])
                    item.active = false
                }

                if (val == '') {
                    item.active = true
                }
            })
        },
        chooseAll () {
            this.arr.forEach(item=> {
                item.checked = this.all
            })
        },
        getItem (obj) {
            console.log(obj)
            let boo = this.arr.every(item => {
                return item.checked
            })
            console.log(boo,'boo')
            this.all = boo
        },
        translate () {
            this.active = !this.active
            if (this.active) {
                this.inputActive = 30
                this.deg = 180
            } else {
                this.inputActive = 0
                this.deg = 0
            }
        }
    }
}
</script>

