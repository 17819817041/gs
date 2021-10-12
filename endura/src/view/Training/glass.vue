<template>
    <div class="glass">
        <div class="binding mg tc">Binding Glasses</div>
        <!-- <img :src="imgUrl" alt=""> -->
        <div class="ju">
            <div class="qrcode" ref="qrCodeUrl"></div>
        </div>
    </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
    data () {
        return {
            imgUrl:''
        }
    },
    created () {
        
    },
    mounted() {
        this.creatQrCode();
    },
    methods: {
        creatQrCode() {
            var qrcode = new QRCode(this.$refs.qrCodeUrl, {
                text: 'xxxx', // 需要转换为二维码的内容
                width: 350,
                height: 350,
                colorDark: 'gray',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            })
        },
    }
}
</script>

<style lang='less' scoped>
    .glass {
        background: white;
        height: 100%;
        padding-top: 30px;
    }
    .binding {
        width: 70%;
        border-radius: 10px;
        background: #FC6011;
        padding: 7px;
        font-size: 20px;
        margin-bottom: 30px;
        color: black !important;
    }
    .qrcode{
        display: inline-block;
        padding: 20px;
        margin: 20px ;
        border: solid rgb(238, 54, 54) 10px;
        border-radius: 10px;    
    }
</style>