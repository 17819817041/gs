<template>
    <div class="sop">
        <div class="sopList" v-loading='loading' v-if='sopList[0]'>
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
                <div class="al">
                    Total {{item.sopSteps}} Step
                </div>
            </div>
        </div>
        <div class="sopList nosop tc" v-else>
            No SOP !
        </div>
    </div>
</template>

<script>
import { sopList } from "@/axios/request.js"
export default {
    data () {
        return {
            pageNum: 1,
            ids: ''
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
        getsopList () {
            let data = {
                userId: localStorage.getItem("userId"),
                pageNumber: this.pageNum,
                pageSize: 15
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
        
    }
}
</script>

<style lang='less' scoped>
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
</style>