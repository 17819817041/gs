<style lang="less" scoped>
    .All {
        width: 100%;
        overflow: auto;
    }
    .Table {
        width: 97%;
        min-width: 1187px;
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
            >.menu_item {
                width: 100%;
                min-width: 50px;
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
                    min-width: 50px;
                }
            }
        }
    }
    .width40 {
        width: 40px !important;
    }
    .padding {
        padding-right: 18.5px;
    }
    .child_item {
        // text-align: center;
        color: #607080;
        font-size: 15px;
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
    // .slot {
    //     display: flex;
    //     justify-content: center;
    // }
    // .btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus { 
    //     outline: none;   
    //     border-color: transparent;  
    //     box-shadow:none;
    //     background:#77bc1f;
    //     color:#fff;
    // }background: white;
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
    .width500 {
        min-width: 500px !important;
    }
    .width200 {
        min-width: 200px !important;
    }
    .width95 {
        min-width: 95px !important;
    }
    .width70 {
        min-width: 30px !important;
        max-width: 60px !important;
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
                    <div v-for="(item,i) in columns" :key="i" :class="['menu_item',{width40:item.type == 'checkbox', 
                    width500: item.title == 'Name', width200: item.title == 'Sake Brewer', width95: item.title == 'Status'},
                    {padding:item.type == 'checkbox', width70: item.title == 'No'}]">
                        <div v-if="item.type == 'checkbox'"> <input type="checkbox" class="check_box" v-model="all" @change="chooseAll"> </div>
                        <div v-else>{{item.title}}</div>
                    </div>
                </div>
            </div>
            <div class="content noBar">
                <div class="check">
                    <div :class="['check_child',{ 'back_color': i%2 == 0 }]" v-for="(item,i) in arr" :key="i" style="display:flex;width:100%;" v-show="item.active ">                   
                        <div :class="['content_item',{width40:child.type == 'checkbox', width500: child.key == 'Name', 
                        width70: child.title == 'No', width200: child.title == 'Sake Brewer', width95: child.title == 'Status'}]" 
                        v-for="(child,k) in columns" :key="k">
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
            deg:0
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

