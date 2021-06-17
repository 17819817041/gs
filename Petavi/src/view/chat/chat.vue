<style lang="less" scoped>
    @import "@/less/css.less";
    .chatPage {
        flex: 10;
        height: 100%;
    }
    .chat_title {
        background: #FAFAFA;
        box-shadow: 0px 3px 3px 0px #D0D0D0; 
    }
    .chat_img {
        padding: 0 10px;
        img{
            width: 32px;
        }
    }
    .chat_content {
        height: calc(100% - 113px);
    }
    .inpMessage {
        border: solid rgb(240, 239, 239) 1px;
    }
    .add img {
        width: 20px;
        height: 20px;
        padding: 10px;
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
            padding: 6px;
        }
        input::placeholder {
            padding-left: 15px;
        }
    }
</style>

<template>
    <div class="chatPage">
        <div class="chat_title flex al">
            <div class="chat_img"><img src="@/assets/img/chatLogo.png" alt=""></div>
            <h2>Chat with Admin</h2>
        </div>
        <div class="chat_content">

        </div>
        <div class="inpMessage al">
            <div class="add al">
                <img src="@/assets/img/add.png" alt="">
            </div>
            <div class="Input al">
                <input type="text" class="width100" placeholder="Type a message">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

