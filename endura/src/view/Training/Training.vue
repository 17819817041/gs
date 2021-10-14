<style lang="less" scoped>
    @import "@/less/css.less";
    .support {
        flex: 10;
        height: 100%;
    }
    .support_content {
        width: 100%;
        height: 100%;
        overflow: auto;
        background: @content;
    }
    .showMessage {
        width: 100%;
        height: 100%;
        .support_type, .support_title {
            margin: 10px 0;
            padding: 0 20px;
        }
    }
    .support_type {
        width: 100%;
        overflow: auto;
        height: 90%;
    }
    .support_item {
        width: 277px;
        background: white;
        overflow: auto;
        padding: 0 15px;
        @media screen and (max-width: 1510px) {
            display: none;
        }
    }
    .center {
        background: @support;
    }
    .second, .last {
        display: block;
        padding: 17px 0px;
        border-radius: 15px;
        overflow: hidden;
        margin: 15px 0;
    }
    .last {background: #B45E58;}
    .support_introduce {
        width: calc(100% - 280px);
        // background:rgb(255, 255, 255);
        margin-left: 10px;
        color: @support;
        height: 100%;
        overflow: auto;
        @media screen and (max-width: 1510px) {
            margin-left: 0px;
            width: 100%;
        }
    }
    .link {
        display: block;
        padding: 17px 0px;
        border-radius: 15px;
        overflow: hidden;
        margin: 15px 0;
    }
    .dot {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        overflow: hidden;
    }
    .navMenu {
        display: none;
        @media screen and (max-width: 1510px) {
            display: block;
        }
    }
    .dot_h {
        width: 16px;
        height: 16px;
    }
    .active {
        background: @helpBtn !important;
        color: black !important;
    }
    .edit1 {
        padding: 0px 10px;
        width: 100px;
        height: 35px;
        border: solid 2px gray;
        border-radius: 18px;
        img {
            padding-right: 1px;
            width: 25px;
        }
    }
    .wrap {
        width: 70%;
    }
    .add_title {
        width: 100%;
        border-radius: 10px;
        padding: 7px;
        font-size: 20px;
        margin-bottom: 30px;
        color: black !important;
        background: #CDA09D;
    }
    .add_name {
        box-shadow: 2px 1px 5px rgb(172, 172, 172);
        width: 150px;
        padding: 5px 0;
        border-radius: 10px;
        height: 30px;
    }
    .add_content {
        width: calc(100% - 200px);
        box-shadow: 2px 1px 5px rgb(172, 172, 172);
        border-radius: 10px;
        overflow: hidden;
        input {
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
            font-size: 14px;
        }
        textarea {
            width: 100% !important;
            height: 100% !important;
            font-size: 16px;
            border: none;
            outline: none;
            resize: none;
        }
    }
    .input {
        border: solid 1px rgb(182, 182, 182);
        background: white;
        border-radius: 30px;
        overflow: hidden;
        width: 307px;
        position: relative;
        .search_btn {
            position: absolute;
            right: 0px;
            top: 0;
            height: 100%;
            color: white;
            font-size: 13px;
            padding: 0 5px;
            border-radius: 0 30px 30px 0;
            background: gray;
            z-index: 400;
        }
    }
    .attachment {
        padding: 9px 0px;
        width: 200px;
        margin-top: 20px;
        margin-left: 30px;
        border: solid 2px rgb(192, 192, 192);
        border-radius: 3px;
        font-size: 17px;
        img {
            padding-right: 3px;
            width: 20px;
        }
    }
</style>

<template>
    <div class="support" v-loading='loading'>
        <div class="support_content flex noBar">
            <div class="showMessage">
                <div class="support_title sb al">
                    <div class="al">
                        <!-- <div class="al">
                            <img src="@/assets/img/what.png" alt="">
                        </div> -->
                        <div class="explan bold"> Training </div>
                    </div>
                    <div  v-show="show_edit" style="width: 100%" class="sb">
                        <div></div>
                        <div class="input" >
                            <div class="search_btn al ju cursor" @click="search">
                                Search
                            </div>
                            <el-input style="transform:scale(1);border:none;" v-model="inp" @keyup.enter.native="search" @input="search1"
                            prefix-icon="el-icon-search" size="small" placeholder="Search Doctors, Clinics, Hospitals etc."></el-input>
                        </div>
                        <div class="cursor edit1 ju al" v-show="!editsop" @click="edit">
                            <div class="al"><img src="@/assets/img/edit.png" alt=""></div>
                            <div class="size14 bold">Edit</div>
                        </div>
                        <div class="flex" v-show='editsop'> 
                            <div class="cursor edit1 ju al" @click="add">
                                <div class="al"><img src="@/assets/img/add1.png" alt=""></div>
                                <div class="size14 bold">Add</div>
                            </div>
                            <div class="cursor edit1 ju al" style="margin: 0 7px;" @click="deletesop">
                                <div class="al"><img src="@/assets/img/delete1.png" alt=""></div>
                                <div class="size14 bold">Del</div>
                            </div>
                            <div class="cursor edit1 ju al" @click="save">
                                <div class="al"><img src="@/assets/img/save.png" alt=""></div>
                                <div class="size14 bold">Save</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mg navMenu" style="padding: 0 20px">
                    <myNav :list="nav" :active="0" :num="6"> </myNav>
                </div>
                <div class="support_type noBar flex">
                    <div class="support_item noBar tc">
                        <router-link :class="['cursor bold second center', { active: router == 'glass' }]" @click.native="router = 'glass'" to="/glass" 
                        style="color:white;text-decoration: none">Glasses state</router-link>

                        <router-link :class="['cursor bold link white center', { active: router == 'videoList' }]" @click.native="router = 'videoList'" to="/videoList" 
                        style="color: white;width: 100%;text-decoration: none">Uploaded video</router-link>
                    
                        <router-link :class="['cursor bold link white center', { active: router == 'imageList' }]" @click.native="router = 'imageList'" to="/imageList" 
                        style="color: white;width: 100%;text-decoration: none">Uploaded image</router-link>
                    
                        <router-link :class="['cursor bold link white center', { active: router == 'uploadFiles' }]" @click.native="router = 'uploadFiles'" to="/uploadFiles" 
                        style="color: white;width: 100%;text-decoration: none">Upload files</router-link>
                
                        <router-link :class="['cursor bold second last', { active: router == 'sop' }]" @click.native="router = 'sop'" to="sop" 
                        style="color:black;text-decoration: none;position:relative">SOP</router-link>
                    </div>
                    <div class="support_introduce bar">
                        <router-view ref="sop"></router-view>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            title=""
            :visible.sync="dialogVisible"
            width="1100px">
            <div class="wrap mg">
                <div class="add_title mg">SOP Addition</div>
                <div class="sb">
                    <div class="add_name tc">SOP Title</div>
                    <div class="add_content"><input type="text" v-model="sop_Title"></div>
                </div>
                <div class="sb " style="margin-top: 30px;">
                    <div class="add_name tc">Explanation</div>
                    <div class="add_content">
                        <textarea name="" id="" rows="10" v-model="sopContent"></textarea>
                    </div>
                </div>
                <div class="ju">
                    <div class="attachment ju al cursor">
                        <div class="al"><img src="@/assets/img/icon-add.png" alt=""></div>
                        <div class="bold " @click="sopAdd">Add Attachment</div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { deleteByBatch, sopAdd , sopsearch} from "@/axios/request.js"
export default {
    data () {
        return {
            T_userId: localStorage.getItem('userId'),
            nav: [ {name:'Glasses state', path: '/glass'}, {name:'Uploaded video', path: '/videoList'}, {name:'Uploaded image'}, {name:'imageList',path: 'imageList'}, {name:'Upload files', path: 'uploadFiles'}, 
            {name:'SOP', path: '/sop'}],
            platform: localStorage.getItem('platform'),
            router: 'glass',
            dialogVisible: false,
            loading: false,
            sop_Title: '',
            sopContent: '',
            inp: ''
        }
    },
    created () {
        // let name = this.$route.name
        // this.router = name
    },
    mounted () {
            
    },
    updated () {
        let name = this.$route.name
        this.router = name
    },
    watch: {
        newMsg_dot: {
            handler (val) {
                if (val) {
                    this.newMsg_dot = val
                }
            }
        },
        ids: {
            handler (val) {
                if (val) {
                    this.ids = val
                }
            }
        },
        show_edit: {
            handler (val) {
                if (val) {
                    this.show_edit = val
                } else {
                    this.show_edit = val
                }
            }
        },
    },
    computed: {
        newMsg_dot: {
            get () { return this.$store.state.user.newMsg_dot },
            set (val) {
                this.$store.commit('setUser', { key: 'newMsg_dot', value: val })
            }
        },
        ids: {
            get () { return this.$store.state.user.ids },
            set (val) {
                this.$store.commit('setUser', { key: 'ids', value: val })
            }
        },
        editsop: {
            get () { return this.$store.state.user.editsop },
            set (val) {
                this.$store.commit('setUser', {
                    key: 'editsop',
                    value: val
                })
            }
        },
        show_edit: {
            get () { return this.$store.state.user.show_edit },
            set (val) {
                this.$store.commit('setUser', { key: 'show_edit', value: val })
            }
        },
    },
    methods: {
        edit () {
            this.$store.commit('setUser', {
                key: 'editsop',
                value: true
            })
        },
        save () {
            this.$store.commit('setUser', {
                key: 'editsop',
                value: false
            })
        },
        add () {
            this.dialogVisible = true
        },
        deletesop () {
            this.loading = true
            let data = {ids: this.ids}
            deleteByBatch(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.$refs.sop.getsopList()
                    this.$message({
                        type: 'success',
                        message: 'Sucessfully Delete!'
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: 'Failed Delete!'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: 'Failed Delete!'
                })
            })
        },
        sopAdd () {
            this.loading = true
            let data = {
                sopTitle: this.sop_Title,
                userId: localStorage.getItem('userId'),
                sopContent: this.sopContent,
                sopImage: ''
            }
            sopAdd(data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: 'Successfully add'
                    })
                    this.dialogVisible = false
                    this.$refs.sop.getsopList()
                } else {
                    this.$message({
                        type: 'error',
                        message: 'Failed add!'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: 'Failed add!'
                })
            })
        },
        search () {
            let data = {
                search: this.inp,
                doctorId: localStorage.getItem('userId')
            }
            this.$store.commit("setUser", {
                key: "loading_doc",
                value: true
            })
            sopsearch(data).then(res => {
                console.log(res)
                this.$store.commit("setUser", {
                    key: "loading_doc",
                    value: false
                })
                if (res.data.rtnCode == 200) {
                    this.$store.commit("setUser",{ key: "sopList", value: [] })
                    this.$store.commit("setUser",{ key: "sopList", value: res.data.data })
                } else {
                    this.$store.commit("setUser",{ key: "sopList", value: [] })
                }
            }).catch(e => {
                this.$store.commit("setUser", {
                    key: "loading_doc",
                    value: false
                })
            })
        },
        search1 () {
            if (this.inp == '') {
                this.search()
            }
        }
    }
}
</script>

