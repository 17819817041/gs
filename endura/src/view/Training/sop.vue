<template>
    <div class="sop">
        <div class="sopList bar" v-loading='loading' v-if='sopList[0]'>
            <div class="sopItem cursor1 sb mg" v-for="(item,i) in sopList" :key="i" @click="stepDetail(item)" v-show="!editsop1">
                <div class="al">
                    <div v-show="editsop1" @click.stop=''><el-checkbox v-model="item.checked" @change="getIds(item.id)"></el-checkbox></div>
                    <div class="sop_header ju al">
                        <img :src="item.doctorImage" v-if="item.doctorImage" alt="">
                        <img style="height:100%;" v-else :src="default_img" alt="">
                    </div>
                    <div class="sop_msg">
                        <div class="sop_title">{{item.sopTitle}}</div>
                        <div class="sop_date">{{item.sopCreateTime}}</div>
                    </div>
                    <div class="sopContent">
                        {{item.sopContent}}
                    </div>
                </div>
                <div class="al">
                    Total {{item.sopSteps}} Step
                </div>
            </div>
            <div class="sopItem cursor1 sb mg" v-for="(item) in sopList" :key="item.id" @click="getIds(item,item.id)" v-show="editsop1">
                <div class="al">
                    <div @click.stop=''><el-checkbox v-model="item.checked"></el-checkbox></div>
                    <div class="sop_header ju al">
                        <img :src="item.doctorImage" v-if="item.doctorImage" alt="">
                        <img style="height:100%;" v-else :src="default_img" alt="">
                    </div>
                    <div class="sop_msg">
                        <div class="sop_title">{{item.sopTitle}}</div>
                        <div class="sop_date">{{item.sopCreateTime}}</div>
                    </div>
                    <div class="sopContent">
                        {{item.sopContent}}
                    </div>
                </div>

                <div class="flex al">
                    <div class="sopEdit cursor ju al" @click.stop='sopEdit(item)'> Edit </div>
                    <div class="al">
                        Total {{item.sopSteps}} Step
                    </div>
                </div>
                <div class="al">
                    Total {{item.sopSteps}} Step
                </div>
            </div>
        </div>
        <div class="sopList nosop tc" v-else v-loading='loading'>
            No SOP !
        </div>
        <div class="ju">
            <el-pagination
                :small="small"
                :pager-count='7'
                :current-page='current_page'
                layout="prev, pager, next"
                :total="sop_totalRecordsCount"
                @current-change='pageCut'>
            </el-pagination>
        </div>

        <el-dialog
            title=""
            :visible.sync="dialogVisible"
            width="1100px">
            <div class="wrap mg">
                <div class="add_title mg">SOP Modification</div>
                <div class="sb">
                    <div class="add_name tc">SOP Title</div>
                    <div class="add_content"><input type="text" v-model="sopmsg.sopTitle"></div>
                </div>
                <div class="sb " style="margin-top: 30px;">
                    <div class="add_name tc">Explanation</div>
                    <div class="add_content">
                        <textarea name="" id="" rows="10" v-model="sopmsg.sopContent"></textarea>
                    </div>
                </div>
                <div class="ju">
                    <div class="attachment ju al cursor" @click="sopAdd">
                        <div class="al"><img src="@/assets/img/icon-add.png" alt=""></div>
                        <div class="bold ">Save</div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { updateSop } from '@/axios/request.js'
export default {
    data () {
        return {
            pageNum: 1,
            ids: '',
            dialogVisible: false,
            sopmsg: {},

            current_page: 1,
            small: false,
        }
    },
    watch: {
        editsop1: {
            handler (val) {
                this.editsop1 = val
            }
        },
        sopList: {
            handler (val) {
                if (val) {
                    this.sopList = val
                }
            }
        },
        loading: {
            handler (val) {
                this.loading = val
            }
        },
        tinp: {
            handler (val) {
                this.tinp = val
            }
        },
        sop_totalRecordsCount: {
            handler (val) {
                this.sop_totalRecordsCount = val
            }
        },
    },
    beforeMount() {
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth <= 564) {
                this.small = true
            } else {
                this.small = false
            }
        })
    },
    created () {
        this.getsopList()
    },
    computed: {
        editsop1: {
            get () { return this.$store.state.user.editsop },
            set (val) {
                this.$store.commit('setUser', {
                    key: 'editsop',
                    value: val
                })
            }
        },
        value: {
            get () { return this.$store.state.user.value },
            set (val) {
                this.$store.commit('setUser', {
                    key: 'value',
                    value: val
                })
            }
        },
        sopList: {
            get () { return this.$store.state.user.sopList },
            set (val) {
                this.$store.commit('setUser', {
                    key: 'sopList',
                    value: val
                })
            }
        },
        sop_totalRecordsCount: {
            get () { return this.$store.state.user.sop_totalRecordsCount },
            set (val) {
                this.$store.commit('setUser', {
                    key: 'sop_totalRecordsCount',
                    value: val
                })
            }
        },
        default_img () { return this.$store.state.user.default_img },
        loading: {
            get () { return this.$store.state.user.loading_doc },
            set (val) {
                this.$store.commit("setUser", {
                    key: "loading_doc",
                    value: val
                })
            }
        },
        tinp: {
            get () { return this.$store.state.user.tinp },
            set (val) {
                this.$store.commit("setUser", {
                    key: "tinp",
                    value: val
                })
            }
        },
    },
    methods: {
        stepDetail (item) {
            // console.log(item)
            this.$router.push({
                name: 'editstep',
                query: {
                    id: item.id
                }
            })
        },
        pageCut (val) {
            this.pageNum = val
            this.getsopList()
        },
        getsopList () {
            let data = {
                userId: localStorage.getItem("userId"),
                pageNumber: this.pageNum,
                pageSize: 10,
                search: this.tinp
            }
            this.$store.dispatch('getsopList', data)
        },
        getIds (item,id) {
            item.checked = !item.checked
            if (this.ids == '') {
                this.ids += '' + id
            } else {
                this.ids += ',' + id
            }
            this.$store.commit('setUser', {
                key: 'ids',
                value: this.ids
            })
        },
        sopEdit (item) {
            this.dialogVisible = true
            this.sopmsg = item
        },
        sopAdd () {
            this.loading = true
            let data = {
                id: this.sopmsg.id,
                sopContent: this.sopmsg.sopContent,
                sopTitle: this.sopmsg.sopTitle
            }
            updateSop(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: 'Successfully update'
                    })
                    this.dialogVisible = false
                    this.$store.commit('setUser', {
                        key: 'editsop',
                        value: false
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: 'Failed update!'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: 'Failed update!'
                })
            })
        },
        
    }
}
</script>

<style lang='less' scoped>
    @import "@/less/css.less";
    .sop {
        width: 100%;
        height: 100%;
        background: white;
    }
    .edit {
        padding: 0px 10px;
        border: solid 2px gray;
        border-radius: 18px;
        img {
            padding-right: 1px;
            width: 25px;
        }
    }
    .sopList {
        padding-top: 20px;
        overflow: auto;
        height: calc(100% - 35px);
    }
    .sopItem {
        width: 95%;
        padding: 5px 10px;
        border-radius: 9px;
        margin-bottom: 20px;
        box-shadow: 0px 1px 6px rgb(180, 180, 180);
    }
    .cursor1:hover {
        cursor: pointer;
    }
    .sop_header {
        width: 50px;
        min-width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 30px;
        margin-left: 20px;
        img {
            height: 100%;
        }
    }
    .sop_date {
        color: #67A2E0;
    }
    .sopContent {
        width: 300px;
        height: 45px;
        max-width: 300px;
        margin-left: 30px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 2;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }
    .nosop {
        padding-top: 50px;
        font-size: 30px;
    }
    .sopEdit {
        padding: 0px 15px;
        height: 25px;
        border-radius: 8px;
        background: @hdColor;
        color: white;
        margin-right: 30px;
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