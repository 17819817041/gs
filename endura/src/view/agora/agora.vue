<style lang="less" scoped>
@import "@/less/css.less";
    .agora {
        width: 100%;
        overflow: hidden;
        height: 100%;
        position: relative;
    }
    .logo_wrap {
        position: relative;
        height: 109px;
        margin-bottom: 10px;
        
    }
    .LOGO {
        position: absolute;
        left: 12px;
        top: 5px;
        width: 170px;
        // height: 153px;
        z-index: 500;
        background: white;
        @media screen and (max-width: 1300px) {
            width: 75px;
            height: 85px;
        }
        @media screen and (max-width: 564px) {
            width: 50px;
            height: 60px;
        }
    }
    .showVideo {
        background: black;
        flex: 8;
        height: 100%;
        overflow: auto;
        position: relative;
        .longTime {
            position: absolute;
            bottom: 135px;
            left: 50%;
            z-index: 103;
            transform: translate(-50%,0);
            color: white;
            @media screen and (max-width: 1200px) {
                bottom: 165px;
            }
            @media screen and (max-width: 564px) {
                bottom: 125px;
            }
        }
        .video_wrap {
            height: 100%;
            position: relative;
        }
        // height: 100%;
        .video_child {
            position: absolute;
            width: 123px;
            height: 150px;
            // border: solid 1px green;
            bottom: 20px;
            right: 20px;
            z-index: 100;
            // background: black;
            // box-shadow: 0 0 5px #999;
            @media screen and (max-width: 1600px) {
                bottom: 45px;
            }
            @media screen and (max-width: 1200px) {
                right: 10px;
                top: 20px;
            }
        }
        .video_child_cut {
            position: absolute;
            width: 123px;
            height: 150px;
            // border: solid 1px green;
            bottom: 20px;
            right: 20px;
            z-index: 102;
            // background: black;
            // box-shadow: 0 0 5px #999;
            @media screen and (max-width: 1600px) {
                bottom: 45px;
            }
            @media screen and (max-width: 1200px) {
                right: 10px;
                top: 20px;
            }
        }
        .video_parent {
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0px;
            right: 0px;
            z-index: 100;
            // border:solid red 1px;
            // background: black;
        }
        .answer {
            position: absolute;
            width: 385px;
            bottom: 40px;
            left: 50%;
            transform: translate(-50%,0);
            z-index: 600;
            @media screen and (max-width: 1600px) {
                bottom: 65px;
            }
            @media screen and (max-width: 1200px) {
                bottom: 60px;
            }
            @media screen and (max-width: 564px) {
                width: 100%;
                bottom: 55px;
            }
        }
    }
    .doctorMessage_wrap {
        width: 454px;
        height: 100%;
        position: relative;
        transition: 0.3s;
        @media screen and (max-width: 1300px) {
            width: 370px;
        }
        @media screen and (max-width: 660px) {
            display: none;
        }
        .drawer {
            position: absolute;
            left: -15px;
            height: 109px;
            overflow: hidden;
            width: 15px;
            top: 10px;
            z-index: 600;
            user-select: none;
            transition: 0.1s;
        }
    }
    .box1 {
        width: 0;
        height: 0;
        border: solid 15px;
        border-color:  transparent rgb(245, 243, 243) transparent  transparent;
        transform: translate(-50%,50%);
    }
    .box2 {
        width: 15px;
        height: 60px;
        // transform: translate(100%,0);
        background: rgb(245, 244, 244);
    }
    .box3 {
        width: 0;
        height: 0;
        border: solid 15px;
        border-color: transparent rgb(243, 240, 240) transparent transparent;
        transform: translate(-50%,-50%);
    }
    .doctorMessage {
        // flex: 2;
        width: 450px;
        height: 100%;
        overflow: auto;
        transition: 0.3s;
        @media screen and (max-width: 1300px) {
            transform: translate(-40px,-75px) scale(0.8);
            height: calc(100% + 150px);
        }
        // @media screen and (min-width: 1600px) and (max-width: 2000px) {
        //     width: 26%;
        // }
        // @media screen and (min-width: 1200px) and (max-width: 1600px) {
        //     width: 29%;
        // }
    }
    .Drawer {
        width: 0 !important;
        transition: 0.3s;
        // transform: translate(100%,0) !important;
    }
    .Drawer1 {
        transition: 0.3s;
        opacity: 0;
    }
    .about_me {
        padding: 30px 0 28px 0;
        // @media screen and (max-width: 1300px) {
        //     transform: scale(0.9,0.6);
        // }
    }
    .myName {
        width: 35%;
        padding: 0 5px;
    }
    .myOperation{
        width: 60%;
        height: 50px;
        padding: 0 10px;
    }
    .outLogo {
        width: 45%;
        height: 36px;
        border-radius: 15px;
        background: @logout;
        color: white;
    }
    .helpAbout {
        width: 50%;
        height: 36px;
        padding: 0 5px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: 100;
        background: @helpBtn;
        img {
            padding-right: 5px;
        }
        position: relative;
        @media screen and (max-width: 564px) {
            transform: scale(0.8);
        }
        span {
            position: absolute;
            right: -10px;
            top: -3px;
            .dot_h {
                width: 16px;
                height: 16px;
                overflow: hidden;
                border-radius: 50%;
            }
        }
    }
    .DOCTOR {
        padding: 10px 20px;
    }
    .about_the_doctor {
        margin-top: 30px;
        width: 300px;
        height: 65px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 3;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }
    .chat_user {
        width: 95%;
        border: solid 1px #ddd9d9;
        border-bottom: none;
        margin-top: 60px;
        box-shadow: 0 -1px 2px 1px rgb(219, 217, 217);
        .INP {
            width: 100%;
            padding: 7px 0;
            border-top: solid 1px rgb(212, 203, 203);
            border-bottom: solid 1px rgb(196, 190, 190);
        }
        .user_content {
            width: 100%;
            height: 520px;
            overflow: auto;
        }
    }
    .chat {
        width: 95%;
        border: #E9E9E9 solid 2px;
        border-bottom: none;
        margin-top: 10px;
        position: relative;
        // box-shadow: 0 -1px 2px 1px rgb(219, 217, 217);
        .INP {
            // position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 7px 0;
            border-top: solid 1px rgb(212, 203, 203);
            border-bottom: solid 1px rgb(196, 190, 190);
        }
    }
    .INP_item {
        width: 75%;
        // height: 35px;
        border: solid 1px rgb(185, 183, 183);
        border-radius: 30px;
        overflow: hidden;
        input {
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
            padding: 7px 5px;
            font-size: 20px;
            background: #F3F3F3;
        }
    }
    .send_img {
        width: 15%;
        img {
            width: 45px;
            height: 45px;
        }
    }
    .userHead_img {
        width: 50px;
        height: 50px;
        border: solid 1px rgb(217, 223, 219);
        border-radius: 50%;
        overflow: hidden;
        background: white;
        margin-right: 5px;
    }
    .userHead {
        height: 100%;
    }
    .docHead_img {
        width: 70px;
        height: 70px;
        border: solid 1px rgb(199, 192, 192);
        border-radius: 50%;
        overflow: hidden;
    }
    .docHead {
        // width: 100%;
        height: 100%;
    }
    .atPresentDoctor {
        width: 95%;
        color: #828282;
        border: #E9E9E9 solid 2px;
        padding: 10px 20px 20px 20px;
    }
    .get_day {
        width: 100%;
    }
    .day_time {
        width: 15%;
        border-radius: 15px;
        height: 30px;
        overflow: hidden;
    }
    .time {
        background: #F3F3F3;
        width: 25%;
        border-radius: 15px;
        overflow: hidden;
        margin-left: 10px;
        height: 30px;
    }
    .textarea {
        border-radius: 20px;
        overflow: hidden;
        textarea {
            width: 100%;
            resize: none;
            border: none;
            outline: none;
            background: #F3F3F3;
            padding: 10px;
        }
    }
    .button {
        padding: 10px 10px;
        .save {
            background: @hdColor;
            width: 30%;
            border-radius: 20px;
            color: white;
            overflow: hidden;
        }
        .clipImg {
            padding-left: 15px;
            height: 100%;
        }
    }
    .submit {
        width: 100px;
        border-radius: 20px;
        overflow: hidden;
        color: white;
    }
    .MESSAGE {
        height: calc(100% );    
        @media screen and (max-width: 660px) {
            display: none;
        }
    }
    .cus_message {
        height: calc(100% - 123px);
        overflow: auto;
        width: 100%;
    }
    .wrap_message {
        width: 100%;
        height: 300px;
        overflow: auto;
        transition: 0.2s;
    }
    .message_item {
        width: 100%;
        height: 100%;
    }
    .arrow_drawer {
        width: 15px;
        transition: 0.3s !important;
    }
    .rotate {
        transform: rotateZ(180deg);
        transition: 0.3s;
    }
    .msgItem {
        margin-top: 15px;
        >div {
            max-width: 80%;
            // border: solid red 1px;
            display: inline-block;
            margin-left: 10px;
        }
    }
    .mySend {
        background: rgb(47,187,240);
        border-radius: 12px 12px 0px 12px;
        padding: 3px 10px;
        word-wrap: break-word;
    }
    .Mright {
        margin-right: 10px;
        margin-left: 0px !important;
    }
    .adverse {
        background: #EEEEEE;
        border-radius: 0px 12px 12px 12px;
        padding: 3px 10px;
        word-wrap: break-word;
    }
    .video_fun {
        width: 30%;
        margin: 0 8.5%;
        img {
            width: 100%;
        }
        @media screen and (max-width: 930px) {
            margin: 0 1.5%;
        }
        @media screen and (max-width: 600px) {
            cursor: none;
        }
    }
    .video_fun img {
        @media screen and (max-width: 930px) {
            width: 62px;
            height: 62px;
        }
    }
    .z_index {
        z-index: 101 !important;
    }
    .v_opacity {
        opacity: 0;
    }
    .chatPage {
        position: absolute;
        width: 700px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 400px;
        background: white;
        z-index: 1000;
        @media screen and (max-width: 800px) {
            width: 300px;
            height: 500px;
        }
    }
    .chat_title {
        background: #FAFAFA;
        position: relative;
        z-index: 1;
        user-select: none;
        font-size: 23px;
        padding: 10px 0;
        box-shadow: 0px 3px 3px 0px #D0D0D0; 
        @media screen and (max-width: 564px) {
            font-size: 15px;
        }
    }
    .chat_img {
        padding: 0 10px;
        img{
            width: 32px;
            user-select: none;
            @media screen and (max-width: 564px) {
                width: 25px;
            }
        }
    }
    .chat_content {
        height: calc(100% - 120px);
        padding: 5px 15px;
        overflow: auto;
    }
    .msg_item_wrap {
        height: 100%;
    }
    .inpMessage {
        padding: 5px 10px;
        border: solid rgb(240, 239, 239) 1px;
    }
    .add img {
        height: 36px;
        margin-left: 10px;
    }
    .Input {
        width: 100%;
        border: solid rgb(197, 195, 195) 1px;
        border-radius: 25px;
        background: @content;
        overflow: hidden;
        input {
            border: none;
            outline: none; 
            background: @content;
            height: 100%;
            padding: 10px;
        }
        input::placeholder {
            padding-left: 15px;
        }
    }
    .msg_item {
        padding: 5px 10px;
        
    }
    .msg_child {
        max-width: 80%;
        min-width: 75px;
        display: inline-block;
        margin-bottom: 20px;
        position: relative;
        .msg_time {
            position: absolute;
            bottom: 5px;
            right: 5px;
            font-size: 12px;
        }
    }
    .gray {
        color: gray !important;
    }
    .mySend {
        background: #1976D2;
        border-radius: 12px 12px 0px 12px;
        padding: 3px 35px 30px 15px;
        word-wrap: break-word;
        color: white;
    }
    .theySend {
        background: #EEEEEE;
        border-radius: 0px 12px 12px 12px;
        padding: 3px 35px 30px 15px;
        word-wrap: break-word;
    }
    .adverse_img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 25px;
        img {
            height: 100%;
        }
    }
    .msg_T {
        font-size: 12px;
        color: gray;
    }
    .fixed_wrap {
        height: 100%;
        @media screen and (max-width: 1100px) {
            position: fixed;
            top: 0;
            right: 0;
            background: white;
            z-index: 700;
        }
    }
    .disnone {
        display: none;
    }
    .chatLogo {
        width: 35px;
        height: 35px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 12px;
    }
    .file_zip {
        width: 200px;
        // display: block;
        padding-top: 10px;
        position: relative;
        margin-bottom: 20px;
        .file_name {
            min-width: 125px;
            text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
            display: -webkit-box;
            -webkit-line-clamp: 2;/*规定超过两行的部分截断*/
            -webkit-box-orient: vertical;
            overflow : hidden; 
            word-break: break-all;/*在任何地方换行*/
        }
        .file_zip_img {
            width: 45px;
            height: 45px;
            margin-left: 10px;
        }
        .file_zip_child {
            position: absolute;
            bottom: 5px;
            right: 5px;
            font-size: 12px;
        }
        .loading_file {
            position: absolute;
            top: 50%;
            left: -60px;
            width: 40px;
            height: 40px;
            transform: translate(0, -50%);
        }
    }
    .file_img {
        width: 220px;
        height: 125px;
        position: relative;
        padding-bottom: 25px !important;
        margin-bottom: 20px;
        .file_img_wrap {
            width: 200px;
            height: 95px;
            border-radius: 8px;
            overflow: hidden;
        }
        .file_img_wrap img {
            height: 100%;
            border-radius: 8px;
        }
        .file_img_child {
            position: absolute;
            bottom: 5px;
            right: 5px;
            font-size: 12px;
        }
    }
    .delete {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right:10px;
    }
</style>

<template>
    <div class="agora">
        <div class="chatPage" v-show="admin_mask" id="box" v-drag>
            <div class="chat_title bold flex al">
                <div class="chat_img"><img src="@/assets/img/chatLogo.png" alt=""></div>
                <div>Chat with Admin</div>
                <div class="delete al cursor" @click="cutDown_mask"><img src="@/assets/img/delete.png" alt=""></div>
            </div>
            <div class="chat_content noBar" ref="Cus">
                <div class="msg_item_wrap">
                    <div v-for="(item,i) in adminList['admin'].messageList" :key="i" :class="[{ 'flexEnd':item.type == 1 }, 'flex' ]">
                        <div class="chatLogo" v-show="item.type == 2 && item.userId == userId">
                            <img style="height: 100%;" src="@/assets/img/admin_img.png" alt="">
                        </div>
                        <div class="msg_T width100 tc" v-if="item.type == 3">{{item.time.split(' ')[0] == Today? 
                        'Today': item.time.split(' ')[0]}} {{item.time.split(' ')[1]}}</div>

                        <div v-else-if="item.msg_type && item.msg_type != 'jpg' && item.msg_type != 'png'" 
                            :class="['file_zip flex', { mySend: item.type == 1 }, 
                            { theySend: item.type == 2 }]">
                            <div class="file_name">
                                {{item.fileName}}
                            </div>
                            <img v-if="item.type == 1" class="file_zip_img" src="@/assets/img/file-zip.png" alt="">
                            <img v-else class="file_zip_img" src="@/assets/img/file-zip1.png" alt="">
                            <div :class="['file_zip_child', { gray:item.type == 2, white: item.type == 1 }]" v-show="item.type != 3">{{item.time}} {{item.APM}}</div>

                            <div class="loading_file" v-loading='item.location == location && item.type == 1 && file_loading'></div>
                            <div class="loading_file ju al" v-show="item.fail == 'fail'">
                                <el-tooltip class="item" effect="dark" content="Upload Failed!" placement="top">
                                    <img class="fail_img_h" src="@/assets/img/fail.png" alt="">
                                </el-tooltip>
                            </div> 
                        </div>

                        <div v-else-if="item.msg_type == 'jpg' || item.msg_type == 'png' " :class="['file_img ju al', { mySend: item.type == 1 }, 
                            { theySend: item.type == 2 }]">
                            <div class="file_img_wrap">
                                <img v-if="item.value" :src="item.value" alt="">
                                <div v-else v-loading='true'></div>
                            </div>
                            <div :class="['file_img_child', { gray:item.type == 2, white: item.type == 1 }]" v-show="item.type != 3">{{item.time}} {{item.APM}}</div>
                        </div>
                        
                        <div :class="['msg_child', { mySend: item.type == 1 }, 
                            { theySend: item.type == 2 },]" v-if="item.userId == userId && !item.msg_type"
                            >{{item.value}}
                            <div :class="['msg_time', { gray:item.type == 2, white: item.type == 1 }]" v-show="item.type != 3">{{item.time}} {{item.APM}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inpMessage al" @mousedown.stop @mousemove.stop >
                <div class="Input al">
                    <input type="text" v-model="customerInp1" class="width100" placeholder="Type a message">
                </div>
                <div class="add al">
                    <label for="file_img" class="al">
                        <input type="file" id="file_img" v-show="false" @change="getFile">
                        <img class="cursor" draggable="false" @mousedown.stop @mousemove.stop  src="@/assets/img/clip.png" alt="">
                    </label>
                </div>
                <div class="add al">
                    <img class="cursor" draggable="false" @click="send" @mousedown.stop @mousemove.stop src="@/assets/img/msg_send.png" alt="">
                </div>
            </div>
        </div>

        <div class="flex" style="height:100%">
            <div class="MESSAGE">
                <div class="logo_wrap">
                    <img class="LOGO" src="@/assets/img/topimg.png" alt="">
                </div>
                <div v-if="platform == 1"  class="cus_message noBar">
                    <message></message>
                    <!-- <div class="cus_message">
                        123
                    </div> -->
                </div>
                <div v-else-if="platform == 2"  class="cus_message noBar">
                    <agoraMsg></agoraMsg>
                </div>
            </div>
            <div class="showVideo">

                <div class="longTime"> {{t_H}}{{H}}:{{ten_M}}{{M}}:{{t_num}}{{num}}</div>

                <div class="video_wrap">
                    <div class="answer flex">
                        <div class="cursor video_fun ju">
                            <img :class="[{'disnone': none}]" @click="unMute" src="@/assets/img/answer_audeo.png" alt="">
                            <img :class="[{'disnone': !none}]" @click="mute" src="@/assets/img/mute.png" alt="">
                        </div>
                        <div class="cursor video_fun ju"><img @click="video_active" src="@/assets/img/answer_video.png" alt=""></div>
                        <div class="cursor video_fun ju" @click="removeStream"><img src="@/assets/img/answer_phone.png" alt=""></div>    <!--//结束通话 -->
                    </div>
                    <div :class="[{'video_parent': type, 'video_child': !type, 'z_index': !type}]" autoplay id="player_a1" ref="video"></div>
                    <div :class="[{'video_parent': !type, 'video_child': type, 'z_index': type, 'v_opacity': videoActive}]" autoplay id="player_a2"></div>
                    <div class="video_child_cut" @click="type = !type" ></div>
                </div>
            </div>
            <div class="fixed_wrap">
                <div :class="[ 'doctorMessage_wrap', { Drawer: drawer } ]">
                    <div class="drawer cursor" @click="DRAWER">
                        <div class="box1"></div>
                        <div class="box2 al ju">
                            <img :class="[ 'arrow_drawer', {rotate: drawer} ]" src="@/assets/img/arrow_drawer.png" alt="">
                        </div>
                        <div class="box3"></div>
                    </div>
                    <div :class="['doctorMessage noBar', { Drawer: drawer },{ Drawer1: drawer } ]">
                        <div class="about_me sb">
                            <div class="myName al">
                                <div class="al" style="width:80%">
                                    <div class="userHead_img ju al">
                                        <!-- <img class="userHead" src="@/assets/img/john.png" alt=""> -->
                                        <img v-if="userDetailMessage.userImage" class="userHead" :src="userDetailMessage.userImage" alt="">
                                        <img style="height:100%;" v-else :src="default_img" alt="">
                                    </div>
                                    <div class="tc size14" v-if="userDetailMessage.userName">{{userDetailMessage.userName}}</div>
                                    <div v-else class="tc" style="font-size:12px">No Name</div>
                                </div>
                                <div><img @click="notice" style="width:17px;height:22px;margin-left:5px" src="@/assets/img/information.png" alt=""></div>
                            </div>
                            <div class="myOperation sb al">
                                <div class="outLogo size12 bold cursor al ju" @click="logout">Logout</div>
                                <div class="helpAbout cursor al ju" @click="show_mask_admin">
                                    <span v-if="newMsg_dot !== null">
                                        <img class="dot_h" v-show="newMsg_dot.boo && newMsg_dot.user == T_userId" src="@/assets/img/dot.png" alt="">
                                    </span>
                                    <span v-else><img class="dot_h" v-show="false" src="@/assets/img/dot.png" alt=""></span>
                                    <img src="@/assets/img/what.png" alt="">
                                    Help & Support
                                </div>
                            </div>
                        </div>
                        <div v-if="platform == 1">
                            <div class="atPresentDoctor mg sa">
                                <div class="DOCTOR">
                                    <div class="docHead_img mg ju">
                                        <img v-if="callToDoctor.userHead" :src="callToDoctor.userHead" alt="">
                                        <img style="height:100%;" v-else :src="default_img" alt="">
                                    </div>
                                    <div class="tc">{{callToDoctor.doctorName}}</div>
                                    <div class="tc">Hispital Name</div>
                                </div>
                                <div class="about_the_doctor">
                                    Dr. Beck is a vet in Hong Kong and has an experience of 8+ years in this field. We provide services in hospitalsonline consultation as video and audio
                                </div>
                            </div>
                            <div class="chat_user mg">
                                <div ref="customerChat" class="user_content noBar">
                                    <div ref="CmsgHeight" >
                                        <div v-for="(item,i) in messageList" :key="i" 
                                            :class="['msgItem',{'flexEnd': item.type==1},]">
                                            <div :class="[ { Mright: item.type == 1 } ]">
                                                <div :class="[ { flexEnd: item.type == 1 } ]">{{userDetailMessage.userName}}</div>
                                                <div :class="[ {mySend: item.type == 1},{ adverse: item.type == 2 } ]">{{item.value}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="INP sa al">
                                    <div class="INP_item al ju">
                                        <input placeholder="Type a message" v-model="customerInp" @keydown.enter="customerSend" />
                                    </div>
                                    <div class="send_img al ju"><img class="cursor" src="@/assets/img/msg_send.png" @click="customerSend" alt=""></div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="platform == 2" >
                            <div class="atPresentDoctor mg">
                                <div>Medical Record</div>
                                <div style="padding:13px 0">Date</div>
                                <div class="get_day flex">
                                    <div class="day_time ju al">
                                        <el-select v-model="day" placeholder="Day" :disabled="!disabled">
                                            <el-option v-for="(item,i) in daySelect" :key="i" :value="item"></el-option>
                                        </el-select>
                                    </div>
                                    <div class="time al ju">
                                        <el-select v-model="month" placeholder="Month" @change="chooseMonth" :disabled="!disabled">
                                            <el-option v-for="(item,i) in monthSelect" :key="i" :label="item.label" :value="item.value"></el-option>
                                        </el-select>
                                    </div>
                                    <div class="time al ju">
                                        <!-- year
                                        <img class="min_arrow" src="@/assets/img/minarrow.png" alt=""> -->
                                        <el-select v-model="years" placeholder="Year" :disabled="!disabled">
                                            <el-option v-for="(item,i) in yearsSelect" :key="i" :value="item"></el-option>
                                        </el-select>
                                    </div>
                                </div>
                                <div style="padding:25px 0 10px 0">Details</div>
                                <div class="textarea">
                                    <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
                                </div>
                                <div class="button sb tc">
                                    <div class="save ju cursor al">
                                        <el-button type="primary" :disabled="disabled" @click="editPetMedicalRecord" class="width100">Edit</el-button>
                                    </div>
                                    <div class="sb tc">
                                        <div class="submit ju cursor al">
                                            <el-button type="warning" @click="addPetMedicalRecord" :disabled="!disabled" class="width100">Submit</el-button>
                                        </div>
                                        <div>
                                            <label for="medicalFile">
                                                <input type="file" id="medicalFile" @change="updateFile" v-show="false"> 
                                                <img class="clipImg cursor" src="@/assets/img/clip.png" alt="">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="chat mg">
                                <div class="wrap_message noBar" ref="vetChat">
                                    <div class="message_item" ref="VmsgHeight">
                                        <div>
                                            <div v-for="(item,i) in messageList" :key="i" 
                                                :class="['msgItem',{'flexEnd': item.type==1},]">
                                                <div :class="[ { Mright: item.type == 1 } ]">
                                                    <div :class="[ { flexEnd: item.type == 1 } ]">{{userDetailMessage.doctorName}}</div>
                                                    <div :class="[ {mySend: item.type == 1},{ adverse: item.type == 2 } ]">{{item.value}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="INP sa al">
                                    <div class="INP_item al ju">
                                        <input placeholder="Type a message" v-model="vetInp" @keydown.enter="vetSend"/>
                                    </div>
                                    <div class="send_img al ju"><img class="cursor" @click="vetSend" src="@/assets/img/msg_send.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { delMetting, PetMedicalRecord, s_online, getAgoraToken, docGoodsId, order, orderDetail, addMetting } from "@/axios/request.js"
import Agora from "@/assets/js/Agora.js"
import initRtc from '@/assets/js/rtcAgora.js'
export default {
    data () {
        return {
            platform: localStorage.getItem("platform"),
            callToDoctor: {},
            userDetailMessage: {},
            years: '',
            yearsSelect: [],
            day: '',
            daySelect: [],
            month: '',
            videoActive: false,
            monthSelect: [ 
                { label: 'Jan', value: '1' }, 
                { label: 'Feb', value: '2' }, 
                { label: 'Mar', value: '3' }, 
                { label: 'Apr', value: '4' }, 
                { label: 'May', value: '5' }, 
                { label: 'Jun', value: '6' }, 
                { label: 'Jul', value: '7' }, 
                { label: 'Aug', value: '8' }, 
                { label: 'Sep', value: '9' }, 
                { label: 'Oct', value: '10' }, 
                { label: 'Nov', value: '11' }, 
                { label: 'Dec', value: '12' }, 
            ],
            customerInp: '',
            vetInp: "",
            drawer: false,
            msgRecord: {},
            content: '',
            recordDate: '',
            disabled: true,
            timer: '',
            type:true,      // 切换摄像头
            remoteUsers : {},
            num:0,
            t_num: 0,
            M: 0,
            ten_M: 0,
            H: 0,
            t_H: 0,
            none: false,
            customerInp1: '',
            list: [],
            userId: localStorage.getItem('userId'),
            Today: '',
            T_userId: localStorage.getItem('userId'),
            admin_mask: false,
            originX: 0,
            originY: 0,
            isMouseDown: false,
            location: 0,
            file_loading: false,
            rtc: {
                client: null,
                joined: false,
                published: false,
                localStream: null,
                remoteStreams: [],
                params: {}
            }
        }
    },
    mounted () {
        if (localStorage.getItem('platform') == 1) {
            this.joinAgora()
        } else {
            this.joinAgora2()
        }
        this.initRecord_mask()
    },
    created () {
        this.callToDoctor = this.callTo
        this.userDetailMessage = this.userDetail
        this.getDay()
        let D = new Date().toLocaleDateString().split('/')
        this.years = D[0]
        this.month = D[1]
        this.day = D[2]
        this.$store.commit('setUser', { key: 'mobile_b', value: false})
        this.$store.commit("setUser", {
            key: "scrollTop",
            value: false
        })
        this.mask_chat()
        var adminList = {
            'admin': {
                messageList: [
                    // { type: 1, value: "star",userId: '486' },
                    // { type: 2, value: "12123" },
                ]
            },
        }
        var newsList = []
        if (localStorage.getItem('adminList')) {

        } else {
            localStorage.setItem('adminList',JSON.stringify(adminList))
        }
        if (localStorage.getItem('newsList')) {
            
        } else {
            localStorage.setItem('newsList',JSON.stringify(newsList))
        }
    },
    watch: {
        messageList: {
            handler (val) {
                if (val) {
                    this.messageList = val
                    this.saveRecord_mask(val)
                }
            },
        },
        callerIM: {
            handler (val) {
                if (val) {
                    this.initRecord()
                }
            },
            immediate: true
        },
        setTime_S: {
            handler (val) {
                this.S()
            }
        },
        adminList: {
            handler (val) {
                if (val) {  
                    this.saveRecord_mask()
                }
            }
        },
        newMsg_dot: {
            handler (val) {
                console.log(val)
                if (val !== null) {
                    if (val.boo !== null) {
                        if (this.admin_mask) {
                            this.$store.commit('setUser', { key: 'newMsg_dot', value: false })
                        } else {
                            this.$store.commit('setUser', { key: 'newMsg_dot', value: val })
                        }
                        localStorage.setItem('new_msg', {boo: false, value: localStorage.getItem('userId')})
                    }
                }
            },
            immediate: true
        }
    },
    computed: {
        remoteStream () { return this.$store.state.app.remoteStream },
        localStream () { return this.$store.state.app.localStream },
        callTo () {return this.$store.state.user.callTo},
        userDetail () {return this.$store.state.user.userDetail},
        caller () { return this.$store.state.user.caller },
        callerIM () { return this.$store.state.user.callerIM },
        mettingId: {
            get () { return this.$store.state.user.mettingId },
            set (val) {
                this.$store.commit("setUser", {
                    key: "mettingId",
                    value: val
                })
            },
        },
        messageList: {
            get () { return this.$store.state.user.messageList },
            set (val) {
                this.$store.commit("setUser", {
                    key: "messageList",
                    value: val
                })
            },
        },
        petId: {
			get () { return this.$store.state.user.petId },
			set (val) {
				this.$store.commit("setUser", {
                    key: "petId",
                    value: val
                })
			}
		},
        pet () {return this.$store.state.user.pet},
        // rtc: {
		// 	get () { return this.$store.state.user.rtc },
		// 	set (val) {
		// 		this.$store.commit("setUser", {
        //             key: "rtc",
        //             value: val
        //         })
		// 	}
		// },
        setTime_S: {
			get () { return this.$store.state.user.setTime_S },
			set (val) {
				this.$store.commit("setUser", {
                    key: "setTime_S",
                    value: val
                })
			}
		},
        adminList: {
            get () { return this.$store.state.user.adminList },
            set (val) {
                this.$store.commit("setUser", {
                    key: "adminList",
                    value: val
                })
            },
        },
        newMsg_dot: {
            get () { return this.$store.state.user.newMsg_dot },
            set (val) {
                this.$store.commit('setUser', { key: 'newMsg_dot', value: val })
            }
        },
        default_img () { return this.$store.state.user.default_img }
    },
    beforeMount() {
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth <= 1100) {
                this.drawer = true
            } else {
                this.drawer = false
            }
        })
    },
    methods: {
        unMute () {
            this.none = true
            this.rtc.remoteStreams[0].setAudioVolume(100);
        },
        mute () {
            this.none = false
            this.rtc.remoteStreams[0].setAudioVolume(0);
        },
        show_mask_admin () {
            this.admin_mask = !this.admin_mask
            this.$nextTick(() => {
                document.getElementsByClassName('chat_content')[0].scrollTop = 100000
            })
            this.$store.commit('setUser', { key: 'newMsg_dot', value: false })
        },
        cutDown_mask () {
            this.admin_mask = false
        },
        mask_chat () {
            var adminList = {
                'admin': {
                    messageList: [
                        // { type: 1, value: "star",userId: '486' },
                        // { type: 2, value: "12123" },
                    ]
                },
            }
            var newsList = []
            if (localStorage.getItem('adminList')) {

            } else {
                localStorage.setItem('adminList',JSON.stringify(adminList))
            }
            if (localStorage.getItem('newsList')) {
                
            } else {
                localStorage.setItem('newsList',JSON.stringify(newsList))
            }
            var D = new Date()
            this.Today = D.toLocaleDateString()
        },
        saveRecord_mask (val) {
            this.$nextTick(() => {
                this.$refs.Cus.scrollTop = 10000
            })
        },
        initRecord_mask () {
            if (localStorage.getItem('adminList') || localStorage.getItem('newsList')) {
                if (localStorage.getItem('adminList')) {
                    this.adminList = JSON.parse(localStorage.getItem('adminList'))
                } else {
                    this.adminList = []
                }
                
                this.list = JSON.parse(localStorage.getItem('newsList'))
                // this.$nextTick(() => {
                //     this.$refs.Cus.scrollTop = 10000
                // })
            }
        },
        send () {
            if (this.customerInp1) {
                let D = new Date()
                let T = D.getTime()
                if (T - localStorage.getItem('msgTime') >= 180000 && localStorage.getItem('msgTime') !== null) {
                    this.timeSend()
                    this.adminList['admin'].messageList.push({
                        type: 3,
                        value: '',
                        userId: localStorage.getItem('userId'),
                        time:this.Today + ' ' + D.getHours() + ':' + D.getMinutes(),
                        APM: ''
                    })
                    localStorage.setItem('msgTime', T )
                } else {
                    if (localStorage.getItem('msgTime') === null) {
                        this.adminList['admin'].messageList.push({
                            type: 3,
                            value: '',
                            userId: localStorage.getItem('userId'),
                            time:this.Today + ' ' + D.getHours() + ':' + D.getMinutes(),
                            APM: ''
                        })
                    }
                    localStorage.setItem('msgTime', T)
                }
                let hour = D.getHours()
                let minute = D.getMinutes()
                this.adminList['admin'].messageList.push({
                    type: 1,
                    value: this.customerInp1,
                    userId: localStorage.getItem('userId'),
                    time: D.getHours() + ':' + D.getMinutes(),
                    APM: hour >= 12 && minute >= 0? 'PM':'AM'
                })
                localStorage.setItem('newsList',JSON.stringify(this.list))
                let data = {
                    type: "needHelp",
                    value: this.customerInp1,
                    key: this.userDetail,
                    platform: localStorage.getItem('platform'),
                    time: D.getHours() + ':' + D.getMinutes(),
                    APM: hour >= 12 && minute >= 0? 'PM':'AM',
                    localTime: T
                }
                let id = this.$conn.getUniqueId();                 // 生成本地消息id
                let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
                msg.set({
                    msg: JSON.stringify(data),                // 消息内容
                    to: 'admin',     
                    // to: '322_2',                     // 接收消息对象（用户id）
                    chatType: 'singleChat',                  // 设置为单聊    
                    ext: {
                        
                    },                    
                    success: function (id, serverMsgId) {
                        // console.log('send private text Success',id,serverMsgId);  
                    }, 
                    fail: function(e){
                        console.log(e)
                        console.log("Send private text error");  
                    }
                });
                this.$conn.send(msg.body);
                this.$nextTick(() => {
                    this.$refs.Cus.scrollTop = 100000
                })
                this.customerInp1 = ''
            } else {

            }
        },
        timeSend () {
            var D = new Date()
            var date = D.toLocaleDateString() + ' ' + D.getHours() + ':' + D.getMinutes()
            let data = {
                type: "needHelp_T",
                platform: localStorage.getItem('platform'),
                key: this.userDetail,
                time: date,
                localTime: D.getTime()
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: JSON.stringify(data),                // 消息内容
                to: 'admin',                     // 接收消息对象（用户id）
                chatType: 'singleChat',                  // 设置为单聊    
                ext: {
                    
                },                    
                success: function (id, serverMsgId) {
                    console.log('send private text Success',id,serverMsgId);  
                }, 
                fail: function(e){
                    console.log(e)
                    console.log("Send private text error");  
                }
            });
            this.$conn.send(msg.body);
        },
        S () {
            this.timer = setInterval(this.A, 1000)
        },
        A () {
            this.num++
            if (this.num > 9) {
                this.num = 0
                this.t_num++
            }
            if (this.t_num > 5) {
                this.t_num = 0
                this.M++
            }
            if (this.M > 9) {
                this.M = 0
                this.ten_M++
            }
            if (this.ten_M > 5) {
                this.ten_M = 5
                this.H++
            }
            if (this.H > 9) {
                this.H = 0
                this.t_H++
            }
        },
        video_active () {
            this.type = true
            this.videoActive = !this.videoActive
        },
        joinAgora () {
            if (localStorage.getItem('bookingDoc')) {
                let bookingAgo = JSON.parse(localStorage.getItem('bookingDoc'))
                let data = {
                    expirationTime: bookingAgo.booking.bookingTime,
                    userId: localStorage.getItem('userId'),
                    roomNumber: 'petavi_' + localStorage.getItem('sroom')
                }
                getAgoraToken(data).then(res => {
                    // console.log(res,'token111')
                    if (res.data.rtnCode == 200) {
                        this.initRtc({
                            token: res.data.data,
                            uid: localStorage.getItem('userId') * 1,
                            channel: data.roomNumber,
                            appId: 'e65091c05b1b4403b3130bfce4f9e7a1',
                            rtc: this.$V
                        })
                        localStorage.removeItem('bookingDoc')
                    }
                })
            } else {
                let docId = {
                    userId: this.callTo.doctorId
                }
                docGoodsId(docId).then(res => {
                    let data = {
                        expirationTime: res.data.data.min,
                        // expirationTime: 1,
                        userId: localStorage.getItem('userId'),
                        roomNumber: 'petavi_' + localStorage.getItem('sroom')
                    }
                    getAgoraToken(data).then(msg => {
                        if (msg.data.rtnCode == 200) {
                            this.initRtc({
                                token: msg.data.data,
                                uid: localStorage.getItem('userId') * 1,
                                channel: data.roomNumber,
                                appId: 'e65091c05b1b4403b3130bfce4f9e7a1'
                            })
                        }
                    })
                    let addorder = {
                        userId: localStorage.getItem('userId'),
                        doctorId: this.callTo.doctorId,
                        doctorType: 2,
                        goodsId: res.data.data.id
                    }
                    order(addorder).then(msg => {
                        // console.log(msg,'生成订单')
                        localStorage.setItem('order_1',JSON.stringify({orderId: msg.data.data.id, goodsId: res.data.data.id}))
                    })
                })
            }
        },
        //医生加入视频
        joinAgora2 () {
            let data = {
                expirationTime: 99999999,
                userId: localStorage.getItem('userId'),
                roomNumber: 'petavi_' + localStorage.getItem('sroom')
            }
            getAgoraToken(data).then(res => {
                console.log(res,'医生加入')
                if (res.data.rtnCode == 200) {
                    this.initRtc({
                        token: res.data.data,
                        uid: localStorage.getItem('userId') * 1,
                        channel: data.roomNumber,
                        appId: 'e65091c05b1b4403b3130bfce4f9e7a1',
                    })
                }
            })
        },
        removeStream () {
            this.removeStream1()
            // this.$router.back()
            if (this.content == '' && localStorage.getItem('platform') == 2) {    //医生挂断添加record
                this.addPetMedicalRecord()
            }
            this.$store.commit("setUser", {
                key: "setTime_S",
                value: false
            })
            this.dele()
        },
        dele () {
            let data = { webId: this.mettingId }
            delMetting(data).then(res => {})
        },
        addPetMedicalRecord () {
            let D = new Date()
            let time = D.toTimeString().split(' ')[0]
            // this.disabled = false
            this.recordDate = this.years + '-' + this.month + '-' + this.day + ' ' + time.split(':')[0] + ':' + time.split(':')[1]
            let data = {
                userId: this.caller.userId,
                doctorId: localStorage.getItem('userId'),
                petId: this.petId,
                content: this.content,
                createdAt: this.recordDate,
                medicineIds: 2
            }
            PetMedicalRecord(data).then(res => {
                // console.log(res,'tianjiarecord')
                if (res.data.rtnCode == 200) {
                    this.disabled = false
                    let data = {
                        type: "getPetDetails"
                    }
                    let id = this.$conn.getUniqueId();                 // 生成本地消息id
                    let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
                    msg.set({
                        msg: JSON.stringify(data),                // 消息内容
                        to: 'admin',                       // 接收消息对象（用户id）
                        chatType: 'singleChat',                  // 设置为单聊    
                        ext: {},                    
                        success: function (id, serverMsgId) {
                            // console.log('send private text Success',id,serverMsgId);  
                        }, 
                        fail: function(e){
                            console.log(e)
                            console.log("Send private text error");  
                        }
                    });
                    this.$conn.send(msg.body);
                } else {}
            }).catch(e =>{ console.log(e) })
        },
        editPetMedicalRecord () {
            this.disabled = true
        },
        saveRecord (val) {
            let that = this
            var record = {
                [that.callerIM]:{
                    messageList: val
                }
            }
            this.msgRecord = record
            localStorage.setItem('msgRecord',JSON.stringify(this.msgRecord))
        },
        initRecord () {
            let msgRecord = localStorage.getItem('msgRecord')
            if (msgRecord) {
                this.msgRecord = JSON.parse(msgRecord)

                if (this.msgRecord[this.callerIM]) {
                    this.messageList = this.msgRecord[this.callerIM].messageList
                }
            }
        },
        DRAWER () {
            this.drawer = !this.drawer
        },
        getDay () {
            // let month = new Date().getMonth() + 1      //获取月份
            // let Day = new Date(2021,month,0).getDate()//  获取每月天数
            for (let i=1;i<=31;i++) {
                this.daySelect.push(i)
            }
            for (let i=1;i<10;i++) {
                this.yearsSelect.push('202' + i)
            }
        },
        chooseMonth (val) {
            this.judge_month = val
            let Day = new Date(2021,this.judge_month,0).getDate()//  获取每月天数
            this.daySelect = []
            for (let i=1;i<=Day;i++) {
                this.daySelect.push(i)
            }
            if (this.day > this.daySelect.length) {
                this.day = this.daySelect.length
            }
        },
        customerSend () {
            if (this.customerInp == '') {
                this.$message({
                    type: 'info',
                    message: 'The content cannot be empty!'
                })
            } else {
                this.messageList.push({
                    type: 1,
                    value: this.customerInp
                })
                let data = {
                    type: "danmu",
                    value: this.customerInp,
                    key: this.userDetailMessage,
                    platform: localStorage.getItem('platform')
                }
                let id = this.$conn.getUniqueId();                 // 生成本地消息id
                let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
                msg.set({
                    msg: JSON.stringify(data),                // 消息内容
                    to: JSON.stringify(this.callToDoctor.doctorId) + 'A2',     
                    // to: '322_2',                     // 接收消息对象（用户id）
                    chatType: 'singleChat',                  // 设置为单聊    
                    ext: {
                        
                    },                    
                    success: function (id, serverMsgId) {
                        console.log('send private text Success',id,serverMsgId);  
                    }, 
                    fail: function(e){
                        console.log(e)
                        // 失败原因:
                        // e.type === '603' 被禁言
                        // e.type === '605' 群组不存在
                        // e.type === '602' 不在群组或聊天室中
                        // e.type === '504' 撤回消息时超出撤回时间
                        // e.type === '505' 未开通消息撤回
                        // e.type === '506' 没有在群组或聊天室白名单
                        // e.type === '503' 未知错误
                        console.log("Send private text error");  
                    }
                });
                this.$conn.send(msg.body);
                this.$nextTick(() => {
                    this.$refs.customerChat.scrollTop = this.$refs.CmsgHeight.scrollHeight
                    this.customerInp = ''
                })
                
            }
        },
        vetSend () {
            console.log(this.caller,666)
            if (this.vetInp == '') {
                this.$message({
                    type: 'info',
                    message: 'The content cannot be empty!'
                })
            } else {
                this.messageList.push({
                    type: 1,
                    value: this.vetInp
                })
                let data = {
                    type: "danmu",
                    value: this.vetInp,
                    key: this.userDetailMessage,
                    platform: localStorage.getItem('platform')
                }
                let id = this.$conn.getUniqueId();                 // 生成本地消息id
                let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
                msg.set({
                    msg: JSON.stringify(data),                  // 消息内容
                    to: this.caller.userId + 'A1',                          // 接收消息对象（用户id）
                    chatType: 'singleChat',                  // 设置为单聊    
                    ext: {
                        
                    },                    
                    success: function (id, serverMsgId) {
                        console.log('send private text Success',id,serverMsgId);  
                    }, 
                    fail: function(e){
                        console.log(e,66666)
                        // 失败原因:
                        // e.type === '603' 被禁言
                        // e.type === '605' 群组不存在
                        // e.type === '602' 不在群组或聊天室中
                        // e.type === '504' 撤回消息时超出撤回时间
                        // e.type === '505' 未开通消息撤回
                        // e.type === '506' 没有在群组或聊天室白名单
                        // e.type === '503' 未知错误
                        console.log("Send private text error");  
                    }
                });
                this.$nextTick(() => {
                    this.vetInp = ''
                    this.$refs.vetChat.scrollTop = this.$refs.VmsgHeight.scrollHeight
                })
                this.$conn.send(msg.body);
                
            }
            
        },
        getFile (e) {
            this.file_send()
        },
        file_send () {
            let D = new Date()
            let T = D.getTime()
            let that = this
            let hour = D.getHours()
            let minute = D.getMinutes()
            var id = this.$conn.getUniqueId();                   // 生成本地消息id
            var msg = new this.$WebIM.message('file', id);        // 创建文件消息
            var input = document.getElementById('file_img');  // 选择文件的input
            var file = this.$WebIM.utils.getFileUrl(input);      // 将文件转化为二进制文件
            this.location = T
            this.file_loading = true
            if (T - localStorage.getItem('msgTime') >= 180000 && localStorage.getItem('msgTime') !== null) {
                if (file.data.size <= 10485760) {
                    this.timeSend()
                }
                this.adminList['admin'].messageList.push({
                    type: 3,
                    value: '',
                    userId: localStorage.getItem('userId'),
                    time:this.Today + ' ' + D.getHours() + ':' + D.getMinutes(),
                    APM: ''
                })
                localStorage.setItem('msgTime', T )
            } else {
                if (localStorage.getItem('msgTime') === null) {
                    this.adminList['admin'].messageList.push({
                        type: 3,
                        value: '',
                        userId: localStorage.getItem('userId'),
                        time:this.Today + ' ' + D.getHours() + ':' + D.getMinutes(),
                        APM: ''
                    })
                }
                localStorage.setItem('msgTime', T)
            }
            var obj = {
                type: 1,
                value: file.url,
                time: D.getHours() + ':' + D.getMinutes(),
                APM: hour >= 12 && minute >= 0? 'PM':'AM',
                msg_type: file.filetype,
                fileName: file.filename,
                userId: localStorage.getItem('userId'),
                url: file.url,
                location: T
            }
            var f_obj = {
                type: 1,
                value: file.url,
                time: D.getHours() + ':' + D.getMinutes(),
                APM: hour >= 12 && minute >= 0? 'PM':'AM',
                msg_type: file.filetype,
                fileName: file.filename,
                userId: localStorage.getItem('userId'),
                url: file.url,
                location: T,
                fail: 'fail'
            }
            if (file.data.size > 10485760) {
                this.adminList['admin'].messageList.push(f_obj)
                that.file_loading = false
                this.$nextTick(() => {
                    this.$refs.Cus.scrollTop = 100000
                })
                return false
            } else {
                this.adminList['admin'].messageList.push(obj)
            }
            //自定义发送消息类型
            var id = this.$conn.getUniqueId();                 // 生成本地消息id
            var msg = new this.$WebIM.message('file', id);   // 创建自定义消息
            var customEvent = "flie";             // 创建自定义事件
            var customExts = {'file': file.url};                         // 消息内容，key/value 需要 string 类型
            msg.set({
                file: file,
                to: 'admin',                          // 接收消息对象（用户id）
                customEvent,
                customExts,
                ext: {
                    fileName: file.filename,
                    file_length: file.data.size,
                    detail: this.userDetail,
                    platform: localStorage.getItem('platform'),
                    time: D.getHours() + ':' + D.getMinutes(),
                    APM: hour >= 12 && minute >= 0? 'PM':'AM',
                    localTime: T,
                    fileType: file.filetype
                },                                 // 消息扩展
                roomType: false,
                flashUpload: this.$WebIM.flashUpload,
                success: function (id, serverMsgId) {
                    that.file_loading = false
                },
                fail: function(e){
                    that.file_loading = false
                }
            });
            this.$conn.send(msg.body);
            this.$nextTick(() => {
                this.$refs.Cus.scrollTop = 100000
            })
        },
        updateFile (e) {
            let self = this;
            let files = e.target.files || e.dataTransfer.files;//e.target.files[0]可直接上传，因为我是多个文件，所以files是一个数组
            console.log(files)
            if (!files.length) return;
            for(var i=0;i<files.length;i++){//循环这个数组，创建fomeDate
                var formData = new FormData();
                formData.append('file',files[i])//append到数组里，如果有参数可以加参数
                console.log(formData)
                return false
                axios({
                    method: "POST",
                    url: "/eastmud/v1/FileManagement/uploadFile",
                    "content-type": "application/json;charset=UTF-8",
                    "withCredentials":true,
                    data:formData
                }).then(res => {
                    console.log(res)
                }).catch(err => {
                    alert("拉去信息失败，请检查您的网络")

                })
            }
            /*如果需要预览，则执行下面,同样是循环，此处略过*/
        /*let reader = new FileReader();
            reader.readAsDataURL(files[i]);

            reader.onload = function(e){
            self.imgsrc = e.target.result;//imgsrc放到img标签即可
            }*/
        },
        logout () {
            this.$store.dispatch("logout", this)
            // var auth2 = gapi.auth2.getAuthInstance();
            // auth2.signOut().then(function(res) {
            //     console.log(res)
            // });
        },
        notice () {
            if (localStorage.getItem("platform") == 1) {
                this.$router.push("/notice")
            } else if (localStorage.getItem("platform") == 2) {
                this.$router.push("/vetNotice")
            }
        },
        initRtc (data) {
            Agora.getDevices(function (items) {
                // items.filter(function (item) {
                //     return ["audioinput", "videoinput"].indexOf(item.kind) !== -1
                // })
                // .map(function (item) {
                //     return {
                //         name: item.label,
                //         value: item.deviceId,
                //         kind: item.kind,
                //     }
                // })
                // var videos = []
                // var audios = []
                // for (var i = 0; i < items.length; i++) {
                // var item = items[i]
                // if ("videoinput" == item.kind) {
                //     var name = item.label
                //     var value = item.deviceId
                //     if (!name) {
                //         name = "camera-" + videos.length
                //     }
                //     videos.push({
                //         name: name,
                //         value: value,
                //         kind: item.kind
                //     })
                // }
                // if ("audioinput" == item.kind) {
                //     var name = item.label
                //     var value = item.deviceId
                //     if (!name) {
                //         name = "microphone-" + audios.length
                //     }
                //     audios.push({
                //         name: name,
                //         value: value,
                //         kind: item.kind
                //     })
                // }
                // }
                // next({videos: videos, audios: audios})
            })
            this.rtc.client = Agora.createClient({mode: "live", codec: "h264"})
            initRtc(this.rtc)
            var option = {
                appID: data.appId,
                channel: data.channel,
                uid: data.uid,
                token: data.token,
                mode: "live",
                codec: "h264"
            }
            let that = this
            this.rtc.client.init(option.appID, function () {
                that.rtc.client.join(option.token ? option.token : null, option.channel, option.uid ? +option.uid : null, function (uid) {
                    that.rtc.joined = true
                    that.rtc.params.uid = uid
                    that.rtc.localStream = Agora.createStream({
                        streamID: that.rtc.params.uid,
                        audio: true,
                        video: true,
                        screen: false,
                        // microphoneId: 'default',
                        // cameraId: store.state.deviceId
                    })
                    that.rtc.localStream.init(function () {
                        console.log("init local stream success")
                        if (localStorage.getItem('platform') == 2) {                    //医生成功加入频道         !!!!!!!!!!!!
                            const caller = that.caller
                            let data0 = {
                                type: "confirmCall"
                            }
                            let id = that.$conn.getUniqueId();                 // 生成本地消息id
                            let msg = new that.$WebIM.message('txt', id);      // 创建文本消息
                            msg.set({
                                msg: JSON.stringify(data0),                  // 消息内容
                                to: JSON.stringify(caller.userId) + 'A1',     
                                chatType: 'singleChat',                  // 设置为单聊   
                            });
                            that.$conn.send(msg.body);
                            let D = new Date
                            var date = D.toLocaleDateString()
                            let detail = {
                                petName: that.pet.petName,
                                petId: that.petId,                 
                                caller: that.caller,
                                callTo: that.callTo,
                                createdTime: date,
                                roomNumber: 'petavi_' + localStorage.getItem('sroom'),
                                bookingDetail: localStorage.getItem('bookingDoc')? localStorage.getItem('bookingDoc') : 'Temporary call'
                            }
                            let metting = {
                                'jo': [{
                                    userId: that.caller.userId + 'A1',
                                    doctorId: that.callTo.userId + 'A2',
                                    password: JSON.stringify(detail),
                                }]
                            }
                            addMetting(metting).then(res => {
                                that.$store.commit('setUser', { key: 'mettingId', value: res.data.data[0].id })
                                let data0 = {
                                    type: "mettingId",
                                    mettingId: res.data.data[0].id
                                }
                                let id = that.$conn.getUniqueId();                 // 生成本地消息id
                                let msg = new that.$WebIM.message('txt', id);      // 创建文本消息
                                msg.set({
                                    msg: JSON.stringify(data0),                  // 消息内容
                                    to: JSON.stringify(caller.userId) + 'A1',     
                                    chatType: 'singleChat',                  // 设置为单聊   
                                });
                                that.$conn.send(msg.body);
                            })
                        }
                        that.rtc.localStream.play("player_a2")
                        that.$store.commit('setUser',{ key: 'setTime_S', value: true })
                        that.rtc.client.publish(that.rtc.localStream, function (err) {
                            alert(JSON.stringify(err))
                        })
                    }, function (err)  {
                        console.log(err)
                        if (localStorage.getItem('platform') == 2) {                       //医生加入频道失败并发送通知至拨号者
                            const caller = that.caller
                            let fail = {
                                type: "callToJoinFail"
                            }
                            let id = that.$conn.getUniqueId();                 // 生成本地消息id
                            let msg = new that.$WebIM.message('txt', id);      // 创建文本消息
                            msg.set({
                                msg: JSON.stringify(fail),                  // 消息内容
                                to: JSON.stringify(caller.userId) + 'A1',     
                                chatType: 'singleChat',                  // 设置为单聊   
                            });
                            that.$conn.send(msg.body);
                            router.replace('/myCustomer')
                        } else {
                            const caller = that.callTo
                            let fail = {
                                type: "callToJoinFail"
                            }
                            let id = that.$conn.getUniqueId();                 // 生成本地消息id
                            let msg = new that.$WebIM.message('txt', id);      // 创建文本消息
                            msg.set({
                                msg: JSON.stringify(fail),                  // 消息内容
                                to: JSON.stringify(caller.userId) + 'A2',     
                                chatType: 'singleChat',                  // 设置为单聊   
                            });
                            that.$conn.send(msg.body);
                            // that.$router.replace('/myDoctor')
                        }
                        that.$message({
                            type: 'error',
                            message: 'The browser cannot get the camera or the device does not support!!!'
                        })
                    })
                }, function(err) {
                    if (localStorage.getItem('platform') == 2) {                       //医生加入频道失败并发送通知至拨号者
                        const caller = that.caller
                        let fail = {
                            type: "callToJoinFail"
                        }
                        let id = that.$conn.getUniqueId();                 // 生成本地消息id
                        let msg = new that.$WebIM.message('txt', id);      // 创建文本消息
                        msg.set({
                            msg: JSON.stringify(fail),                  // 消息内容
                            to: JSON.stringify(caller.userId) + 'A1',     
                            chatType: 'singleChat',                  // 设置为单聊   
                        });
                        that.$conn.send(msg.body);
                        that.$router.replace('/myCustomer')
                    } else {
                        that.$router.replace('/myDoctor')
                    }
                    that.$message({
                        type: 'error',
                        message: 'The browser cannot get the camera or the device does not support!!'
                    })
                })
            }, (err) => {
                this.$message.error('Client join failed')
                this.$router.back()
                console.error(err,'catchCamera')
            })
        },
        removeStream1 () {   //退出agora
            let that = this
            this.rtc.client.leave(function () {
                if(that.rtc.localStream.isPlaying()) {
                    that.rtc.localStream.stop()
                }
                that.rtc.localStream.close()
                // rtc.localStream = null
                // rtc.remoteStreams = []
                // console.log("client leaves channel success")
                that.rtc.client.unpublish(that.rtc.localStream)
                if (localStorage.getItem('platform') == 2) {
                    let data = {
                        userId: localStorage.getItem('userId'),
                        platform: localStorage.getItem('platform')
                    }
                    s_online(data).then(res => {
                        // console.log(res,'在线')
                    })
                } else if (localStorage.getItem('platform') == 1) {
                    let data = {
                        userId: that.callTo.doctorId,
                        platform: 2
                    }
                    s_online(data).then(res => {
                        // console.log(res,'在线')
                    })
                }
                this.$router.back()
            }, function (err) {
                console.log("channel leave failed")
                that.$message({
                    type: 'error',
                    message: 'Channel leave failed!'
                })
                console.error(err)
            })
        },
    }
}
</script>

