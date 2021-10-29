<template>
    <div class="videoList bar" v-loading='loading'>
        <div class="clear">
            <div class="videoList_item_wrap float" v-for="(item,i) in videoList.pageT" :key="i">
                <div class="t_message flex al mg">
                    <div class="t_header ju al">
                        <img v-if="item.doctorHead" :src="item.doctorHead" alt="">
                        <img style="height:100%;" v-else :src="default_img" alt="">
                    </div>
                    
                    <div class="t_title mg">
                        <div class="t_file tag-read cursor" :data-clipboard-text="item.fileUrl" @click="copyMsg">{{item.fileUrl}}</div>
                        <div class="t_date"> {{item.createdAt}} </div>
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
        </div>
        <div class="nomessage tc bold" v-show="!active3">
            {{vdata}}
        </div>

        <div class="ju">
            <el-pagination
                :small="small"
                :pager-count='7'
                :current-page='current_page'
                layout="prev, pager, next"
                :total="videoList.totalRecordsCount"
                @current-change='pageCut'>
            </el-pagination>
        </div>



        <el-dialog
            :visible.sync="dialogVisible"
            width="900px">
            <div class="sb edit_wrap">
                <div class="i_menu">
                    <div class="menu_child">
                        <input type="text" class="tc bold" v-model="obj.title">
                    </div>
                    <div class="menu_child">
                        <textarea name="" id="" class="bold" cols="14" rows="6" v-model="obj.content"></textarea>
                    </div>
                    <div class="save_wrap flexEnd">
                        <span class="save cursor ju al" @click="itemsave">
                            <div class="al"><img src="@/assets/img/save.png" alt=""></div>
                            <div class="size14 bold">Save</div>
                        </span>
                    </div>
                </div>
                <div class="i_video">
                    <div class="mp4" v-if="active">
                        <video class="video_p" :preload="preload" :poster="videoImg" :height="height" :width="width" align="center" :controls="controls" :autoplay="autoplay">
                            <source :src="videoSrc" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Clipboard from 'clipboard'
import { getVideoListByPage, sopupdate } from "@/axios/request.js"
export default {
    data () {
        return {
            dialogVisible: false,
            input: 'TITLE',
            pageNum: 1,
            loading: false,
            videoList: [],
            obj: {},
            active3: true,
            vdata: 'No Video!',
            active: false,
            id: 0,

            videoSrc: '',
            videoImg: '',
            playStatus: '',
            muteStatus: '',
            isMute: true,
            isPlay: false,
            width: '620', // 设置视频播放器的显示宽度（以像素为单位）
            height: '310',  // 设置视频播放器的显示高度（以像素为单位）
            preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            controls: true,  // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            autoplay: '',

            current_page: 1,
            small: false,
        }  
    },
    watch: {
        
    },
    computed: {
        default_img () { return this.$store.state.user.default_img }
    },
    created () {
        
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
    mounted () {
        this.getVideo()
    },
    methods: {
        edit (item) {
            this.id = item.id
            this.videoSrc = ''
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
                    this.$message({
                        type: 'success',
                        message: 'Successfully modified!'
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: 'Fail to edit!'
                    })
                }
            }).catch(e => {
                this.$message({
                    type: 'error',
                    message: 'Fail to edit!'
                })
            })
        },
        pageCut (val) {
            this.pageNum = val
            this.getVideo()
        },
        getVideo () {
            this.loading = true
            let data = {
                search: '',
                doctorId: localStorage.getItem('userId') *1,
                pageNum: this.pageNum,
                glassUserId: localStorage.getItem('glassId'),
                pageSize: 15,
            }
            getVideoListByPage(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    res.data.data.pageT.forEach(item => {
                    let D = new Date(item.createTime)
                        item.createTime = D.toLocaleDateString()
                    })
                    this.videoList = res.data.data
                } else if (res.data.rtnCode == 201) {
                    this.active3 = false
                    this.vdata = 'Please bind glasses!'
                    this.videoList = []
                    this.$message({
                        type: 'warning',
                        message: 'No data!'
                    })
                } else {
                    this.active3 = false
                    this.videoList = []
                }
            }).catch(e => {
                this.loading = false
                this.active3 = false
                this.$message({
                    type: 'error',
                    // message: 'Fail to load!'
                    message: 'No Data!'
                })
            })
        },
        copyMsg () {
            var clipboard = new Clipboard('.tag-read')
            let that = this
            clipboard.on('success', e => {
                that.$message({
                    type: 'success',
                    message: 'Copy successfully'
                })
                // 释放内存
                clipboard.destroy()
            })
            clipboard.on('error', e => {
                // 不支持复制
                that.$message({
                    type: 'error',
                    message: 'The browser does not support the copy function, it is recommended to use Google!'
                })
                // 释放内存
                clipboard.destroy()
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
    .i_menu {
        width: 200px;
        height: 100%;
        border: solid 1px;
        border-radius: 18px;
        margin-right: 15px;
        padding: 5px 10px;
    }
    .i_video {
        width: 620px;
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
    .nomessage {
        font-size: 30px;
        width: 100%;
        height: 100%;
        background: white;
        padding-top: 60px;
    }
</style>