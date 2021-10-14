<template>
    <div class="glass noBar">
        <div v-if="!glassState.state">
            <div class="binding mg tc">Binding Glasses</div>
            <div class="ju">
                <div class="qrcode"> <img :src="imgUrl" alt=""></div>
            </div>
        </div>
        <div v-else>
            <div class="binding mg tc">Connected Glasses</div>
            <div class="ju al glass_img mg">
                <img style="width: 100%" src="@/assets/img/glass.png" alt="">
            </div>
            <div class="brand ju">
                <div style="display: inline-block; margin-top: 20px" class="size15 bold">
                    <div>D/EnduraP: Android</div>
                    <div>D/EnduraP: Glass Enterprise Edition 2.0</div>
                </div>
            </div>
            <div class="ju al" style="margin: 20px 0;">
                <img v-if="70<=glassState.power<=100" src="@/assets/img/power1.png" alt="">
                <img v-else-if="20<=glassState.power<=70" src="@/assets/img/power2.png" alt="">
                <img v-else-if="10<=glassState.power<=20" src="@/assets/img/power3.png" alt="">
                <img v-else-if="0<=glassState.power<=10" src="@/assets/img/power4.png" alt="">
            </div>
            <div class="xuhang tc">
                Estimated remaining usage time: {{glassState.power}}%
            </div>
            <div class="unBinding mg tc cursor" @click="unBinding">Disconnect Glasses</div>
        </div>
    </div>
</template>

<script>
import qrcode from 'qrcode'   
import { unBinding } from "@/axios/request.js"
export default {
    data () {
        return {
            imgUrl:'',
                userId: localStorage.getItem('userId') *1,
                userName: localStorage.getItem('userId'),
                platform: localStorage.getItem('platform') *1
        }
    },
    created () {
        
    },
    mounted() {
        this.creatQrCode();
    },
    watch: {
        glassState: {
            handler (val) {
                this.glassState = val
            }
        }
    },
    computed: {
        glassState: {
            get () { return this.$store.state.user.glassState },
            set (val) {
                this.$store.commit('setUser', {
                    key: 'glassState',
                    value: val
                })
            }
        }
    },
    methods: {
        creatQrCode() {
            let url = 'userName=' + this.userName + ';' + 'userId=' + this.userId + ';' + 'platform=' + this.platform
            qrcode.toDataURL(url).then(url => {
                this.imgUrl = url
            })
        },
        unBinding () {
            let data = {
                userId: localStorage.getItem('userId')
            }
            unBinding(data).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style lang='less' scoped>
    .glass {
        background: white;
        height: 100%;
        padding-top: 30px;
        overflow: auto;
    }
    .binding {
        width: 70%;
        border-radius: 10px;
        background: #FC6011;
        padding: 7px;
        font-size: 20px;
        margin-bottom: 30px;
        color: rgb(255, 255, 255) !important;
    }
    .unBinding {
        width: 70%;
        margin-top: 50px;
        border-radius: 10px;
        background: #FF0000;
        padding: 7px;
        font-size: 20px;
        margin-bottom: 30px;
        color: rgb(255, 255, 255) !important;
    }
    .qrcode{
        display: inline-block;
        padding: 0px;
        margin: 20px ;
        border: solid rgb(238, 54, 54) 10px;
        border-radius: 10px;    
        img {
            width: 300px;
            height: 300px;
        }
    }
    .glass_img {
        width: 300px;
    }
    .xuhang {
        font-size: 20px;
        margin-top: 25px;
    }
</style>