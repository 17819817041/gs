<style lang="less" scoped>
    .All {
        width: 100%;
        height: 91%;
        overflow: auto;
    }
    .Table {
        width: 100%;
        min-width: 980px;
        margin:0px auto;
    }
    .top {
        width: 100%;
        height: 40px;
        // background: black;
        // border-radius: 15px 15px 0 0;
        box-sizing: border-box;
        // border: solid white 1px;
        display: flex;
        position: relative;
        >.menu_top {
            display: flex;
            width: 100%;
            margin: auto;
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
        background: #E5E5E5;
    }
    .check_box {
        box-shadow: 0 0px 4px rgb(155, 155, 155);
    }
</style>
<template>
    <div class="All">
        <div class="Table" style="position:relative">
            <div class="top back_color">
                <div class="menu_top" style="display:flex;">
                    <div v-for="(item,i) in columns" :key="i" :class="['menu_item tc',{width40:item.type == 'checkbox'},{padding:item.type == 'checkbox'}]">
                        <div v-if="item.type == 'checkbox'"> <input type="checkbox" class="check_box" v-model="all" @change="chooseAll"> </div>
                        <div v-else>{{item.title}}</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="check">
                    <div :class="['check_child al',{ 'back_color': i%2 == 1 }]" v-for="(item,i) in arr" :key="i" style="display:flex;width:100%;" v-show="item.active ">                   
                        <div :class="['content_item tc',{width40:child.type == 'checkbox'}]" 
                        v-for="(child,k) in columns" :key="k">
                            <div class="check_item width40" 
                                v-if="child.type == 'checkbox'">
                                <input type="checkbox" 
                                class="check_box"
                                @change="getItem(item)" 
                                v-model="item.checked" />
                            </div>
                            <div v-else-if="(child.slot == 'content')" class="slot">
                                <slot name="content" :data="item.content"></slot>
                            </div>
                            <div v-else-if="(child.slot == 'state')" class="slot">
                                <slot name="state" :data="item.state"></slot>
                            </div>
                            <div v-else-if="(child.slot == 'edit')" class="slot">
                                <slot name="edit" :data="item.state"></slot>
                            </div>
                            <div v-else-if="(child.slot == 'income')" class="slot">
                                <slot name="income"></slot>
                            </div>
                            <div v-else-if="(child.slot == 'busy')" class="slot">
                                <slot name="busy" :data="item.busy"></slot>
                            </div>
                            <div v-else-if="(child.slot == 'unbusy')" class="slot">
                                <slot name="unbusy" :data="item.unbusy"></slot>
                            </div>
                            <div v-else-if="(child.slot == 'totalIncome')" class="slot">
                                <slot name="totalIncome" :data="item.totalIncome"></slot>
                            </div>
                            <div :class="['child_item']" v-else>{{item[child.key]}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

