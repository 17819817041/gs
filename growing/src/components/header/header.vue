<template>
    <div class="header">
        <div class="Back" v-show="visible" @click="visible = false"></div>
        <div class="Back1" v-show="active" @click="active = false"></div>
        <div class="header_item sb">
            <div class="al"><img class="LOGO" @click="home" src="@/assets/img/logo.png" alt=""></div>
            <div class="ju al">
                <div class="lang bold al">
                    <div class="al cursor lang_item" @click="active = !active">
                        <div class="al" v-if="$i18n.locale == 'zh-CN'">
                            <img src="@/assets/img/hk.gif" alt=""><span class="media564" style="margin: 0 27px 0 5px;white-space: nowrap;">中文</span> 
                            <img :class="['l_arrow', { 'rota': active } ]" src="@/assets/img/arrow_up.png" alt="">
                        </div>
                        <div class="al" v-else-if="$i18n.locale == 'en-US'">
                            <img src="@/assets/img/us.gif" alt=""><span class="media564" style="margin: 0 8px 0 5px;">English</span> 
                            <img :class="['l_arrow', { 'rota': active } ]" src="@/assets/img/arrow_up.png" alt="">
                        </div>
                    </div>
                    <div :class="['changeLang',{ 'height': !active }]">
                        <div class="al cursor" @click="zh">
                            <img src="@/assets/img/hk.gif" alt=""><span style="margin: 0 25px 0 5px;">中文</span>
                        </div>
                        <div class="al cursor" @click="en">
                            <img src="@/assets/img/us.gif" alt=""><span style="margin: 0 18px 0 5px;">English</span>
                        </div>
                    </div>
                </div>
                <div class="headImg radius ju al cursor" @click="UserMessage">
                    <img style="height: 100%;" v-if="user.userHead" :src="user.userHead" alt="">
                    <img style="height: 160%;" v-else src="@/assets/img/defaultImg.png" alt="">
                </div>
                <div class="al my_wrap" slot="reference" @click="visible = !visible" style="height: 100%">
                    <img class="my cursor" src="@/assets/img/arrow-down_set.png" alt="">
                    <div class="userMsg tc" v-show="visible">
                        <div class="cursor" @click.stop="UserMessage">個人中心</div>
                        <div class="cursor" @click.stop="outLogin">登出</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { setLang } from "@/axios/request.js"
export default {
    data () {
        return {
            visible: false,
            active: false,
        }
    },
    created () {
        this.$store.dispatch('getUser', this)
    },
    watch: {
		user: {
			handler (val) {
				if (val) {
					this.user = val
				}
			},
		},
    },
    computed: {
		user:{             //類型列表
			get () { return this.$store.state.user.user },
			set (val) {
				this.$store.commit('setUser', {
					key: 'user',
					value: val
				})
			}
		},
    },
    mounted () {
        let that = this
        window.addEventListener('resize', (e) => {
            that.getResize()
        })
		this.getResize()
    },
    methods: {
        getResize () {
            if (document.getElementsByClassName('Back')[0] != undefined) {
                document.getElementsByClassName('Back')[0].style.width = window.innerWidth + 'px'
                document.getElementsByClassName('Back')[0].style.height = window.innerHeight + 'px'
            }
            if (document.getElementsByClassName('Back1')[0] != undefined) {
                document.getElementsByClassName('Back1')[0].style.width = window.innerWidth + 'px'
                document.getElementsByClassName('Back1')[0].style.height = window.innerHeight + 'px'
            }
        },
        home () {
            if (localStorage.getItem('platform') == 1) {
                this.$router.push('/Index')
            } else if (localStorage.getItem('platform') == 2) {
                this.$router.push('/platIndex')
            } else if (localStorage.getItem('platform') == 3) {
                this.$router.push('/AdminIndex')
            }
        },
        UserMessage () {
            this.visible = false
            this.$router.push('/UserMessage')
        },
        outLogin () {
            localStorage.removeItem('compoundeyesToken')
            localStorage.removeItem('compoundeyesUserId')
            this.$router.push('/Login')
        },
        zh () {
            localStorage.setItem('locale','zh-CN')
            this.$i18n.locale = 'zh-CN'
            this.active = false
            this.setLang('zh-TW')
        },
        en () {
            localStorage.setItem('locale','en-US')
            this.$i18n.locale = 'en-US'
            this.active = false
            this.setLang('en-US')
        },
        setLang (val) {           //修改語言
            let data = {
                lang: val
            }
            setLang(data).then(res => {
                // console.log(res)
            })
        }
    }
}
</script>

<style lang='less' scoped>
    .header {
        position: relative;
        height: 50px;
        .Back {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9;
        }
        .Back1 {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9;
        }
    }
    .LOGO {
        height: 70px;
        margin-left: -30px;
    }
    .header_item {
        padding: 5px 20px;
        height: 55px;
        background: white;
    }
    .headImg {
        width: 40px;
        height: 40px;
        margin-left: 7px;
        margin: 3px 5px;
    }
    .my {
        height: 20px;
        width: 20px;
        margin-right: 40px;
        @media screen and (max-width: 564px) {
            margin-right: 10px;
        }
    }
    .my_wrap {
        position: relative;
        .userMsg {
            position: absolute;
            padding: 5px;
            top: 50px;
            right: 0;
            background: white;
            z-index: 10;
            width: 109px;
            border-radius: 3px;
            border: solid 1px rgb(185, 185, 185);
            box-shadow: 0 3px 15px rgb(182, 182, 182);
        }
        .userMsg>div {
            padding: 7px 0;
            color: gray;
            font-size: 13px;
        }
        .userMsg>div:hover {
            background: #F5F5F5;
        }
    }
    .lang {
        width: 100px;
        height: 30px;
        background: rgb(255, 255, 255);
        font-size: 12px !important;
        border: solid 1px rgb(231, 231, 231);
        border-radius: 2px;
        color: gray;
        position: relative;
        @media screen and (max-width: 564px) {
            width: 40px;
        }
        .lang_item {
            white-space: nowrap;
            padding: 5px;
        }
    }
    .changeLang {
        position: absolute;
        z-index: 10;
        left: -1px;
        top: 28px;
        width: 100px;
        overflow: hidden;
        font-size: 12px !important;
        color: gray;
        border-top: none;
        border: solid 1px rgb(231, 231, 231);
        border-radius: 0 0 2px 2px;
        background: white;
        transition: 0.2s;
        max-height: 60px;
        div {
            padding: 5px;
        }
    }
    .rota {
        transform: rotateZ(0deg) !important;
    }
    .height {
        max-height: 0 !important;
        transition: 0.2s;
        border: none;
        div {
            padding: 6px;
        }
    }
    .l_arrow {
        width: 16px;
        height: 16px;
        transition: 0.2s;
        transform: rotateZ(180deg);
    }
    .media564 {
        @media screen and (max-width: 564px) {
            display: none;
        }
    }
</style>