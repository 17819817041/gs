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
        padding: 5px 10px;
        border: solid rgb(240, 239, 239) 1px;
    }
    .add img {
        width: 40px;
        height: 40px;
        padding-left: 10px;
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
</style>

<template>
    <div class="chatPage">
        <div class="chat_title flex al">
            <div class="chat_img"><img src="@/assets/img/chatLogo.png" alt=""></div>
            <h2>Chat with Admin</h2>
        </div>
        <div class="chat_content" ref="Cus">

        </div>
        <div class="inpMessage al">
            <div class="Input al">
                <input type="text" class="width100" placeholder="Type a message" @keydown.enter="Esend">
            </div>
            <div class="add al">
                <img src="@/assets/img/clip.png" alt="">
            </div>
            <div class="add al">
                <img class="cursor" @click="send" src="@/assets/img/sendImg.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    created () {

    },
    mounted () {

    },
    methods: {
        send () {
            console.log(123)
        },
        Esend () {
            console.log(666)
        },
        createdCustomerMessage () {                 //客户输入内容并且发送
            var name = document.createElement('div')
            var msg = document.createElement("span")
            name.innerHTML = this.userDetailMessage.userName
            name.style.margin = 'auto'
            name.style.width = '95%'
            name.style.textAlign = 'end'
            name.style.transform = `rotateY(${ 180 + 'deg'})`
            
            msg.innerHTML = this.customerInp
            msg.style.background = "rgb(47,187,240)"
            msg.style.borderRadius = '12px 12px 0px 12px'
            msg.style.padding = '3px 10px'
            msg.style.marginLeft = "10px"
            msg.style.display = 'inline-block'
            msg.style.transform = `rotateY(${ 180 + 'deg' })`
            
            this.$refs.Cus.appendChild(name)
            this.$refs.Cus.appendChild(msg)
            if (msg.offsetWidth >= 350) {
                msg.style.display = 'inline-block'
                msg.style.width = '80%'
                msg.style.wordBreak = 'break-word';
            }
        },
    }
}
</script>

