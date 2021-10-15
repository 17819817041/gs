<style lang='less' scoped>
    .editstep {
        width: 100%;
        height: 100%;
        background: white;
        overflow: auto;
    }
    .videoDetail {
        width: 65%;
        min-width: 600px;
        height: 100%;
    }
    .stepDatail {
        width: 30%;
        min-width: 330px;
        height: 100%;
        padding: 10px;
    }
    .mp4 {
        width: 100%;
        min-width: 350px;
        border: solid 1px;
    }
    .Explanation {
        width: 60%;
        height: 60px;
        font-size: 15px;
        border: solid 1px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 3;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
        textarea {
            border: none;
            outline: none;
            resize: none;
            width: 100% !important;
            height: 100% !important;
        }
    }
    .soptitle {
        width: 35%;
        height: 60px;
        font-size: 17px;
        text-align: center;
        line-height: 60px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 1;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
        input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
        }
        border: solid 1px;
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
    .videoList_item_wrap {
        width: 46%;
        margin: 0px 2% 20px 2%;
        box-shadow: 1px 1px 3px rgb(180, 180, 180);
        border-radius: 12px;
        background: white;
    }
    .t_message {
        padding: 20px 0;
        width: 85%;
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
    .t_file {
        max-width: 257px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 1;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }
    .TITLE {
        border-bottom: solid 2px;
    }
    .content_item {
        margin-top: 20px;
        width: 100%;
        text-decoration: underline;
        line-height: 30px;
        height: 125px;
        min-height: 150px;
        max-height: 150px;
        overflow: auto;
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
    .edit {
        padding: 0px 10px;
        border: solid 2px gray;
        border-radius: 18px;
        img {
            padding-right: 1px;
            width: 25px;
        }
    }
    .title_child {
        width: 200px;
        height: 60px;
        border: solid 1px;
        overflow: hidden;
        margin-top: 20px;
        input {
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
        }
    }
    .Description {
        width: 100%;
        height: 100px;
        margin-top: 15px;
        overflow: hidden;
        border: solid 1px;
        textarea {
            width: 100% !important;
            height: 100% !important;
            border: none;
            outline: none;
            resize: none;

        }
    }
    .wrap_step {
        height: 400px;
        overflow: auto;
    }
    .step_item {
        margin-top: 15px;
        .item {
            margin-bottom: 10px;
            cursor: pointer;
        }
    }
    .title_c {
        width: calc(100% - 125px);
    }
    .showImg {
        width: 125px;
        background: white;
        height: 70px ;
        border: solid 1px;
        margin-right: 7px;
    }
    .choose {
        width: 25px;
        height: 25px;
        img {
            height: 100%;
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
    .video_p {
        width: 100% !important;
        height: auto;
    }
    .title_date {
        font-size: 13px;
        color: gray;
        height: calc(100% - 21px);
        flex-direction: column;
    }
    .background {
        background: rgb(235, 235, 235);
    }
    .image_show {
        // width: 820px;
        height: 500px;
        img {
            height: 100%;
        }
    }
    .el_checkvue {
        padding: 0 5px;
    }
    .nodata {
        padding-top: 50px;
        font-size: 23px;
    }
</style>
<template>
    <div class="editstep sb bar" v-loading='loading'>
        <div class="videoDetail">
            <div class="sb" style="margin-bottom: 10px">
                <div class="soptitle bold ju al"> {{sopDetail.sopTitle}} </div>
                <div class="Explanation bold ju al">
                    <!-- <textarea name="" id="" cols="30" rows="10" v-model="sopDetail.sopContent"></textarea> -->
                    {{sopDetail.sopContent}}
                </div>
            </div>
            <div class="mp4" v-if="active && fileType_show == 2">
                <video class="video_p" :preload="preload" :poster="videoImg" :height="height" :width="width" align="center" :controls="controls" :autoplay="autoplay">
                    <source :src="videoSrc" type="video/mp4">
                </video>
            </div>
            <div class="mp4 image_show ju al" v-else>
                <img style="height: 100%" :src="videoSrc" alt="">
            </div>
            <div class="title_child">
                <!-- <input type="text" v-model="item_title"> -->
                <div class="ju al">{{item_title}}</div>
            </div>
            <div class="Description">
                <!-- <textarea name="" id="" cols="30" rows="10" v-model="item_content"></textarea> -->
                <div class="ju al">{{item_content}}</div>
            </div>
        </div>
        <div class="stepDatail">
            <div class="flexEnd" v-if="editShow"> 
                <div class="cursor edit1 ju al" @click="edit">
                    <div class="al"><img src="@/assets/img/add1.png" alt=""></div>
                    <div class="size14 bold">Edit</div>
                </div>
            </div>
            <div class="flexEnd" v-else> 
                <div class="cursor edit1 ju al" @click="add">
                    <div class="al"><img src="@/assets/img/add1.png" alt=""></div>
                    <div class="size14 bold">Add</div>
                </div>
                <div class="cursor edit1 ju al" style="margin: 0 7px;" @click="DEL">
                    <div class="al"><img src="@/assets/img/delete1.png" alt=""></div>
                    <div class="size14 bold">Del</div>
                </div>
                <div class="cursor edit1 ju al" style="margin: 0 7px;" @click="editShow = true">
                    <div class="al"><img src="@/assets/img/delete1.png" alt=""></div>
                    <div class="size14 bold">Cancel</div>
                </div>
            </div>
            <div class="step_item">
                <div :class="['item flex', {background: B == index.number}]" 
                v-for="(index,i) in sopDetail.sopStepList" :key="i" @click="cut(index)" v-show="editShow">
                    <div class="showImg ju al"> Step{{index.number}} </div>
                    <div class="title_c">
                        <div>{{index.title}}</div>
                        <div class="title_date flexEnd">{{index.createTime}}</div>
                    </div>
                </div>

                <div :class="['item flex', {background: B == index.number}]" v-for="(index,i) in checkList.sopStepList" :key="index.id" @click="delchecked(index,i)" v-show="!editShow">
                    <div class="ju al el_checkvue">
                        <el-checkbox v-model="index.checked" @change="delchecked(index,i)"></el-checkbox>
                    </div>
                    <div class="showImg ju al"> Step{{index.number}} </div>
                    <div class="title_c">
                        <div>{{index.title}}</div>
                        <div class="title_date flexEnd">{{index.createTime}}</div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            :title=" 'Selected' + step + 'Step' "
            :visible.sync="dialogVisible"
            width="1100px">
            <div slot='title' class="flex al">
                <h2>Selected {{step}} Step</h2>
                <div class="input" style="margin-left: 30px">
                    <div class="search_btn al ju cursor" @click="search">
                        Search
                    </div>
                    <el-input style="transform:scale(1);border:none;" v-model="inp" @keyup.enter.native="search" @input="search1"
                    prefix-icon="el-icon-search" size="small" placeholder="Search Doctors, Clinics, Hospitals etc."></el-input>
                </div>
            </div>
            <div class="wrap_step mg clear" v-loading='dialoading' v-if="videoList[0]">
                <div class="videoList_item_wrap float" v-for="(item,i) in videoList" :key="i">
                    <div class="t_message flex al mg">
                        <div class="t_header ju al">
                            <img src="@/assets/img/john.png" alt="">
                            <!-- <img style="height:100%;" v-else :src="default_img" alt=""> -->
                        </div>
                        
                        <div class="t_title mg">
                            <div class="t_file">{{item.fileUrl}}</div>
                            <div class="t_date">{{item.createTime}}</div>
                        </div>
                    </div>
                    <div class="t_content">
                        <div class="TITLE tc bold">{{item.title}} <span style="color:white;">-</span> </div>
                        <div class="content_item bar">
                            {{item.content}}
                        </div>
                        <div class="sb" style="margin-top: 10px;">
                            <div class="choose al">
                                <img src="@/assets/img/check.png" @click="check(item)" v-if="!item.change" alt="">
                                <img src="@/assets/img/choose.png" @click="choose(item)" v-else alt="">
                            </div>
                            <!-- <span class="edit cursor ju al">
                                <div class="al"><img src="@/assets/img/edit.png" alt=""></div>
                                <div class="size14 bold">Edit</div>
                            </span> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap_step mg nodata bold tc" v-else  v-loading='dialoading'>
                No data!
            </div>
            <span slot="footer" class="dialog-footer flexEnd">
                <div class="cursor edit1 ju al" style="margin: 0 25px;" @click="sopStepUpdate">
                    <div class="al"><img src="@/assets/img/add1.png" alt=""></div>
                    <div class="size14 bold">Add</div>
                </div>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { getSopStep, getListByPage, sopStepUpdate, stepSearch } from "@/axios/request.js"
export default {
    data () {
        return {
            dialogVisible: false,
            step: 1,
            show: false,
            inp: '',
            loading: false,
            dialoading: false,
            editShow: true,
            pageNum: 1,
            B: 1,
            sopDetail: {},
            fileType: 1,
            fileType_show: null,
            videoList: [],
            sopStepList: [],
            active: false,
            checkList: [],
            copyList: [],

            item_title: '',
            item_content: '',
            videoSrc: '',
            videoImg: '',
            playStatus: '',
            muteStatus: '',
            isMute: true,
            isPlay: false,
            width: '820', // 设置视频播放器的显示宽度（以像素为单位）
            height: '500',  // 设置视频播放器的显示高度（以像素为单位）
            preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            controls: true,  // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            autoplay: '',
        }
    },
    created () {
        this.getSopStep()
        this.getVideo()
    },
    methods: {
        add () {
            if (this.inp != '') {
                this.inp = ''
                this.getVideo()
            } else {
                this.videoList.forEach(item => {
                    item.change = false
                })
            }
            this.dialogVisible = true
        },
        check (item) {
            this.sopDetail.sopStepList.push({
                sopDetailsId: item.id,
                number: (this.sopDetail.sopStepList.length+1) *1,
                title: item.title,
                blogger: 'kk'
            })
            item.change = true
        },
        choose (item) {
            item.change = false
            for (let i=0;i<=this.sopDetail.sopStepList.length;i++) {
                if (this.sopDetail.sopStepList[i].sopDetailsId == item.id) {
                    this.sopDetail.sopStepList.splice(i,1)
                }
            }
        },
        search () {
            let data = {
                doctorId: localStorage.getItem('userId'),
                glassUserId: localStorage.getItem('glassId'),
                search: this.inp
            }
            this.dialoading = true
            stepSearch(data).then(res => {
                console.log(res)
                this.dialoading = false
                if (res.data.rtnCode == 200) {
                    this.videoList = res.data.data
                } else if (res.data.rtnCode == 201) {
                    this.videoList = []
                    this.$message({
                        type: 'warning',
                        message: 'No data!'
                    })
                } else {
                    this.$message({
                        type: 'warning',
                        message: 'No data!'
                    })
                    this.videoList = []
                }
            }).catch(e => {
                this.dialoading = false
                this.$message({
                    type: 'error',
                    message: 'Failed load!'
                })
            })
        },
        edit () {
            this.copyList = JSON.parse(JSON.stringify(this.sopDetail))
            this.checkList.sopStepList.forEach(item => {
                item.checked = false
            })
            // this.copyList = [...this.copyList]
            this.editShow = false
        },
        getSopStep () {
            this.loading = true
            let data = { sopId: this.$route.query.id }
            getSopStep(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    if (res.data.data.sopDetailsDtoList == null) {
                        res.data.data.sopDetailsDtoList = []
                    } else {
                        this.fileType = res.data.data.sopDetailsDtoList[0].fileType
                    }
                    if (res.data.data.sopStepList == null) {
                        res.data.data.sopStepList = []
                    } else {
                        res.data.data.sopStepList.forEach(item => {
                        let D = new Date(item.createTime)
                            item.createTime = D.toLocaleDateString()
                        })
                    }
                    res.data.data.sopStepList.forEach(msg => {
                        msg.checked = false
                    })
                    this.checkList = JSON.parse(JSON.stringify(res.data.data))
                    this.sopDetail = JSON.parse(JSON.stringify(res.data.data))
                    this.copyList = JSON.parse(JSON.stringify(res.data.data))
                    this.cut(res.data.data.sopStepList[0])
                }
            }).catch(e => {
                this.loading = false
            })
        },
        cut (index) {
            this.videoSrc = ''
            this.active = false
            this.B = index.number
            this.sopDetail.sopDetailsDtoList.forEach(item => {
                if (item.id == index.sopDetailsId) {
                    this.videoSrc = item.fileUrl
                    this.item_title = item.title
                    this.item_content = item.content
                    this.fileType_show = item.fileType
                }
            })
            this.$nextTick(() => {
                this.active = true
            })
        },
        delchecked (item,i) {
            this.B = item.number
            item.checked = !item.checked
            this.copyList.sopStepList[i].checked = true
            if (item.checked) {
                for (let k=0;k<this.sopDetail.sopStepList.length;k++) {
                    if (k == i) {
                        this.copyList.sopStepList[k].number --
                    }
                }
            } else {
                this.copyList.sopStepList[i].checked = false
                this.copyList.sopStepList[i].number = i
                for (let k=0;k<this.sopDetail.sopStepList.length;k++) {
                    if (k==i) {
                        this.copyList.sopStepList[k].number +=1
                    }
                }
            }
        },
        delitem () {
            let arr = []
            this.copyList.sopStepList.forEach(item => {
                if (!item.checked) {
                    arr.push(item)
                }
                delete item.checked
            })
            this.dialogVisible = false
            this.loading = true
            let data = {
                "jo":{
                    "sopStepList": arr,
                    "sopId": this.$route.query.id *1
                }
            }
            sopStepUpdate(data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.getSopStep()
                    this.$message({
                        type: 'success',
                        message: 'Successfully deleted!'
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: 'Failed deleted!'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: 'Failed deleted!'
                })
            })
        },
        getVideo () {
            this.dialoading = true
            let data = {
                doctorId: localStorage.getItem('userId') *1,
                pageNum: this.pageNum,
                pageSize: 105,
                fileType: 3,            //1 image    2 video    3 all file
                glassUserId: localStorage.getItem('glassId')
            }
            getListByPage(data).then(res => {
                console.log(res)
                this.dialoading = false
                if (res.data.rtnCode == 200) {
                    res.data.data.pageT.forEach(item => {
                        item.change = false
                        let D = new Date(item.createTime)
                        item.createTime = D.toLocaleDateString()
                    })
                    this.videoList = res.data.data.pageT
                } else {
                    this.videoList = []
                }
            }).catch(e => {
                this.dialoading = false
                this.$message({
                    type: 'error',
                    message: 'Fail to load!!!'
                })
            })
        },
        search1 () {
            if (this.inp == '') {
                this.search()
            }
        },
        sopStepUpdate () {
            this.sopDetail.sopStepList.forEach(item => {
                delete item.checked
            })
            this.dialogVisible = false
            this.loading = true
            let data = {
                "jo":{
                    "sopStepList": this.sopDetail.sopStepList,
                    "sopId": this.$route.query.id *1
                }
            }
            sopStepUpdate(data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.editShow = true
                    this.getSopStep()
                    this.$message({
                        type: 'success',
                        message: 'Successfully added!'
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: 'Failed added!'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: 'Failed added!'
                })
            })
        },
        DEL () {
            this.$confirm('Are you sure to empty it?', 'Attention', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.videoSrc = ''
                this.item_title = ''
                this.item_content = ''
                this.active = false
                this.editShow = true
                this.delitem()
            }).catch (e => {
                this.editShow = true
                console.log(e)
            })
        }
    }
}
</script>

