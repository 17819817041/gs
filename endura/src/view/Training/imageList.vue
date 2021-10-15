<template>
    <div class="videoList clear bar" v-loading='loading'>
        <div class="videoList_item_wrap float" v-for="(item,i) in videoList" :key="i">
            <div class="t_message flex al mg">
                <div class="t_header ju al">
                    <img src="@/assets/img/john.png" alt="">
                    <!-- <img style="height:100%;" v-else :src="default_img" alt=""> -->
                </div>
                
                <div class="t_title mg">
                    <div class="t_file">{{item.fileUrl}}</div>
                    <div class="t_date">{{item.createdAt}}</div>
                </div>
            </div>
            <div class="t_content">
                <div class="TITLE tc bold">{{item.title}}</div>
                <div class="content_item">
                     {{item.content}}
                </div>
                <div class="flexEnd">
                    <span class="edit cursor ju al" @click="edit(item)">
                        <div class="al"><img src="@/assets/img/edit.png" alt=""></div>
                        <div class="size14 bold">Edit</div>
                    </span>
                </div>
            </div>
        </div>
        <div class="nomessage tc bold" v-show="!active2">
            {{vdata}}
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="1100px">
            <div class="sb edit_wrap">
                <div class="i_menu">
                    <div class="menu_child">
                        <input type="text" class="tc bold" v-model="obj.title">
                    </div>
                    <div class="menu_child">
                        <textarea name="" id="" class="bold" cols="19" rows="10" v-model="obj.content"></textarea>
                    </div>
                    <div class="save_wrap flexEnd">
                        <span class="save cursor ju al" @click="itemsave">
                            <div class="al"><img src="@/assets/img/save.png" alt=""></div>
                            <div class="size14 bold">Save</div>
                        </span>
                    </div>
                </div>
                <div class="i_video">
                    <div class="mp4 image_wrap_p ju al">
                        <img style="height: 100%;" :src="obj.fileUrl" alt="">
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { getImgListByPage, sopupdate } from "@/axios/request.js"
export default {
    data () {
        return {
            active: false,
            dialogVisible: false,
            input: 'TITLE',
            pageNum: 1,
            loading: false,
            videoList: [],
            obj: {},
            active2: true,
            vdata: 'No data!',
            id: 0,
        }  
    },
    computed: {
        default_img () { return this.$store.state.user.default_img }
    },
    created () {
        this.getVideo()
    },
    methods: {
        edit (item) {
            this.videoSrc = ''
            this.id = item.id
            this.active = false
            console.log(item)
            this.obj = item
            this.videoSrc = item.fileUrl
            this.dialogVisible = true
            this.$nextTick(() => {
                this.active = true
            })
        },
        itemsave () {
            let data = {
                id: this.id,
                title: this.obj.title,
                content: this.obj.content
            }
            sopupdate(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.dialogVisible =false
                }
            })
        },
        getVideo () {
            this.loading = true
            let data = {
                doctorId: localStorage.getItem('userId') *1,
                pageNum: this.pageNum,
                pageSize: 15,
                glassUserId: localStorage.getItem('glassId')
            }
            getImgListByPage(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    res.data.data.pageT.forEach(item => {
                        let D = new Date(item.createTime)
                        item.createTime = D.toLocaleDateString()
                    })
                    this.videoList = res.data.data.pageT
                } else if (res.data.rtnCode == 201) {
                    this.active2 = false
                    this.vdata = 'Please bind glasses!'
                    this.videoList = []
                    this.$message({
                        type: 'warning',
                        message: 'No data!'
                    })
                } else {
                    this.active2 = false
                    this.videoList = []
                }
            }).catch(e => {
                this.loading = false
                this.active2 = false
                this.$message({
                    type: 'error',
                    // message: 'Fail to load!'
                    message: 'No Data!'
                })
            })
        }
    }
}
</script>

<style lang='less' scoped>
    .videoList {
        height: 100%;
        overflow: auto;
    }
    .videoList_item_wrap {
        width: 46%;
        margin: 0px 2% 20px 2%;
        box-shadow: 1px 1px 3px rgb(180, 180, 180);
        border-radius: 12px;
        background: white;
    }
    .edit_wrap {
        height: 450px;
    }
    .i_menu {
        width: 250px;
        height: 100%;
        border: solid 1px;
        border-radius: 18px;
        margin-right: 15px;
        padding: 5px 10px;
    }
    .i_video {
        width: 850px;
        height: 100%;
        border: solid 1px;
        border-radius: 18px;
        overflow: hidden;
    }
    input {
        border: none;
        outline: none;
        width: 100%;
        font-size: 16px;
        color: black;
    }
    .menu_child {
        border-bottom: solid 2px gray;
        padding: 10px;
    }
    textarea {
        resize: none;
        border: none;
        outline: none;
        font-size: 17px;
        line-height: 30px;
        text-decoration: underline;
    }
    .t_message {
        padding: 20px 0;
        width: 85%;
    }
    .t_file {
        max-width: 257px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 1;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }
    .t_header {
        width: 50px;
        min-width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        img {
            height: 100%;
        }
    }
    .t_date {
        color: #5FB3EF;
        font-style: oblique;
    }
    .t_content {
        width: 85%;
        // height: 200px;
        border-radius: 12px;
        box-shadow: 2px 1px 5px rgb(172, 172, 172);
        margin: 15px auto;
        padding: 20px;
    }
    .TITLE {
        border-bottom: solid 2px;
    }
    .save_wrap {
        margin-top: 20px;
    }
    .content_item {
        margin-top: 20px;
        text-decoration: underline;
        line-height: 30px;
        min-height: 200px;
        max-height: 200px;
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
    .save {
        padding: 3px 10px;
        border: solid 2px gray;
        border-radius: 18px;
        img {
            padding-right: 3px;
            width: 20px;
        }
    }
    .mp4 {
        width: 100%;
        height: 100%;
    }
    .nomessage {
        font-size: 30px;
        width: 100%;
        height: 100%;
        padding-top: 60px;
        background: white;
    }
    .image_wrap_p {
        overflow: hidden;
    }
</style>