<template>
    <div class="videoList clear" v-loading='loading'>
        <div class="videoList_item_wrap float" v-for="item in videoList" :key="item">
            <div class="t_message flex al mg">
                <div class="t_header ju al">
                    <img src="@/assets/img/john.png" alt="">
                    <!-- <img style="height:100%;" v-else :src="default_img" alt=""> -->
                </div>
                
                <div class="t_title mg">
                    <div class="t_file">{{item.fileUrl}}</div>
                    <div class="t_date">2021/5/12 12:41</div>
                </div>
            </div>
            <div class="t_content">
                <div class="TITLE tc bold">TITLE</div>
                <div class="content_item">
                    Hey guys, my name is Baba and I’m from the United States. I am ahumorous and outgoing person, you guys can also call me baba.
                </div>
                <div class="flexEnd">
                    <span class="edit cursor ju al" @click="edit(item)">
                        <div class="al"><img src="@/assets/img/edit.png" alt=""></div>
                        <div class="size14 bold">Edit</div>
                    </span>
                </div>
            </div>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="1100px">
            <div class="sb edit_wrap">
                <div class="i_menu">
                    <div class="menu_child">
                        <input type="text" class="tc bold" :value="input">
                    </div>
                    <div class="menu_child">
                        <textarea name="" id="" class="bold" cols="19" rows="10">
                            Hey guys, my name is Baba and I’m from the United States. I am ahumorous and outgoing person, you guys can also call me baba.
                        </textarea>
                    </div>
                    <div class="save_wrap flexEnd">
                        <span class="save cursor ju al">
                            <div class="al"><img src="@/assets/img/save.png" alt=""></div>
                            <div class="size14 bold">Save</div>
                        </span>
                    </div>
                </div>
                <div class="i_video">

                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { getListByPage } from "@/axios/request.js"
export default {
    data () {
        return {
            dialogVisible: false,
            input: 'TITLE',
            pageNum: 1,
            loading: false,
            videoList: []
        }  
    },
    computed: {
        default_img () { return this.$store.state.user.default_img }
    },
    created () {
        this.getVideo()
        let D = new Date(1634031479000)
        console.log(D)
    },
    methods: {
        edit (item) {
            console.log(item)
            this.dialogVisible = true
        },
        getVideo () {
            this.loading = true
            let data = {
                doctorId: localStorage.getItem('userId') *1,
                pageNum: this.pageNum,
                pageSize: 15,
                fileType: 2            //1 image   2 video    3 all file
            }
            getListByPage(data).then(res => {
                console.log(res)
                this.loading = false
                // res.data.data.forEach(item => {
                //     let D = new Date(item.createTime)
                //     item.createTime = D
                // })
                if (res.data.rtnCode == 200) {
                    this.videoList = res.data.data
                } else {
                    this.videoList = []
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: 'Fail to load!'
                })
            })
        }
    }
}
</script>

<style lang='less' scoped>
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
</style>