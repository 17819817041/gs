<style lang='less' scoped>
    .editstep {
        width: 100%;
        height: 100%;
        background: white;
        overflow: auto;
    }
    .videoDetail {
        width: 65%;
        height: 100%;
    }
    .stepDatail {
        width: 30%;
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
        overflow: hidden;
        border: solid 1px;
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
        overflow: hidden;
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
        text-decoration: underline;
        line-height: 30px;
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
            margin-bottom: 15px;
        }
    }
    .showImg {
        width: 125px;
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
</style>
<template>
    <div class="editstep sb bar">
        <div class="videoDetail">
            <div class="sb" style="margin-bottom: 10px">
                <div class="soptitle tc"><input type="text"></div>
                <div class="Explanation tc">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="mp4">
                <video class="video_p" :preload="preload" :poster="videoImg" :height="height" :width="width" align="center" :controls="controls" :autoplay="autoplay">
                    <source :src="videoSrc" type="video/mp4">
                </video>
            </div>
            <div class="title_child"><input type="text"></div>
            <div class="Description">
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div class="stepDatail">
            <div class="flex"> 
                <div class="cursor edit1 ju al" @click="add">
                    <div class="al"><img src="@/assets/img/add1.png" alt=""></div>
                    <div class="size14 bold">Add</div>
                </div>
                <div class="cursor edit1 ju al" style="margin: 0 7px;">
                    <div class="al"><img src="@/assets/img/delete1.png" alt=""></div>
                    <div class="size14 bold">Del</div>
                </div>
                <div class="cursor edit1 ju al">
                    <div class="al"><img src="@/assets/img/save.png" alt=""></div>
                    <div class="size14 bold">Save</div>
                </div>
            </div>
            <div class="step_item">
                <div class="item flex" v-for="index in 3" :key="index">
                    <div class="showImg ju al"> Step{{index}} </div>
                    <div class="title_c">
                        <div>Uploaded imag</div>
                        <div>32465464</div>
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
                <div class="cursor edit1 ju al" style="margin: 0 25px;">
                    <div class="al"><img src="@/assets/img/add1.png" alt=""></div>
                    <div class="size14 bold">Save</div>
                </div>
                <div class="input" >
                    <div class="search_btn al ju cursor" @click="search">
                        Search
                    </div>
                    <el-input style="transform:scale(1);border:none;" v-model="inp" @keyup.enter.native="search"
                    prefix-icon="el-icon-search" size="small" placeholder="Search Doctors, Clinics, Hospitals etc."></el-input>
                </div>
            </div>
            <div class="wrap_step mg clear">
                <div class="videoList_item_wrap float" v-for="item in 6" :key="item">
                    <div class="t_message flex al mg">
                        <div class="t_header ju al"><img src="@/assets/img/john.png" alt=""></div>
                        <div class="t_title mg">
                            <div class="t_file">https://youtu.be/dQw4w9WgXcQ</div>
                            <div class="t_date">2021/5/12 12:41</div>
                        </div>
                    </div>
                    <div class="t_content">
                        <div class="TITLE tc bold">TITLE</div>
                        <div class="content_item">
                            Hey guys, my name is Baba and I’m from the United States. I am ahumorous and outgoing person, you guys can also call me baba.
                        </div>
                        <div class="sb" style="margin-top: 10px;">
                            <div class="choose al">
                                <img src="@/assets/img/check.png" @click="check" v-if="!show" alt="">
                                <img src="@/assets/img/choose.png" @click="choose" v-else alt="">
                            </div>
                            <!-- <span class="edit cursor ju al">
                                <div class="al"><img src="@/assets/img/edit.png" alt=""></div>
                                <div class="size14 bold">Edit</div>
                            </span> -->
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dialogVisible: false,
            step: 1,
            show: false,
            inp: '',

            videoSrc: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
            videoImg: '../../assets/img/videoWay.png',
            playStatus: '',
            muteStatus: '',
            isMute: true,
            isPlay: false,
            width: '820', // 设置视频播放器的显示宽度（以像素为单位）
            height: '500',  // 设置视频播放器的显示高度（以像素为单位）
            preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            controls: true,  // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            autoplay: ''
        }
    },
    created () {
        console.log(this.$route.query.msg)
    },
    methods: {
        add () {
            this.dialogVisible = true
        },
        check () {
            this.show = true
        },
        choose () {
            this.show = false
        },
        search () {

        }
    }
}
</script>

