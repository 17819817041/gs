<template>
    <div class="PlatSetting">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">店鋪詳細設定
        </div>
        <div class="Settingadvertising_content_wrap bar">
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">美食九龍店</div>
                        </div>
                        <div class="flex">
                            <div class="delUSer cursor">註銷店鋪</div>
                            <div class="arrow_m al" @click="drawer = !drawer"><img src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['drawer_h', {'drawer_h1': drawer}]">
                        <ModuleMin1 :columns="columns" :arr="arr" ref="child">
                            <template slot="id" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                            <template slot="key" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                        </ModuleMin1>
                    </div>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">美食中環店</div>
                        </div>
                        <div class="flex">
                            <div class="delUSer cursor">註銷賬戶</div>
                            <div class="arrow_m al" @click="drawer1 = !drawer1"><img src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['drawer_h', {'drawer_h1': drawer1}]">
                        <ModuleMin1 :columns="columns1" :arr="arr1" ref="child">
                            <template slot="id" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                            <template slot="key" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                        </ModuleMin1>
                    </div>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">醫療九龍店</div>
                        </div>
                        <div class="flex">
                            <div class="delUSer cursor">註銷賬戶</div>
                            <div class="arrow_m al" @click="drawer2 = !drawer2"><img src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['drawer_h', {'drawer_h1': drawer2}]">
                        <ModuleMin1 :columns="columns2" :arr="arr2" ref="child">
                            <template slot="id" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                            <template slot="key" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                        </ModuleMin1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
    data () {
        return {
            drawer: false,
            drawer2: false,
            drawer1: false,
            columns: [
                {title:'店鋪設備配置',key:'name'},
                {title:'賬戶設備ID',slot:'id'},
                {title:'賬戶設備Key',slot:'key'},
                {title:'',key:''},
            ],
            columns1: [
                {title:'店鋪設備配置',key:'name'},
                {title:'賬戶設備ID',slot:'id'},
                {title:'賬戶設備Key',slot:'key'},
                {title:'',key:''},
            ],
            columns2: [
                {title:'店鋪設備配置',key:'name'},
                {title:'賬戶設備ID',slot:'id'},
                {title:'賬戶設備Key',slot:'key'},
                {title:'',key:''},
            ],
            arr:[
                {name:'設備賬戶',id: 'AAC3M53Z-vphf4sCVP7Pruiwa', key: 'AAC3M53Z-vphf4s', active: true},
            ],
            arr1:[
                {name:'設備賬戶',id: 'AAC3M53Z-vphf4sCVP7Pruiwa', key: 'AAC3M53Z-vphf4s',active: true},
            ],
            arr2:[
                {name:'設備賬戶',id: 'AAC3M53Z-vphf4sCVP7Pruiwa', key: 'AAC3M53Z-vphf4s',active: true},
                {name:'設備賬戶',id: 'AAC3M53Z-vphf4sCVP7Pruiwa', key: 'AAC3M53Z-vphf4s',active: true},
                {name:'設備賬戶',id: 'AAC3M53Z-vphf4sCVP7Pruiwa', key: 'AAC3M53Z-vphf4s',active: true},
            ],
        }
    },
    methods: {
        back () {
            this.$router.back()
        },
        copyMsg () {
            var clipboard = new Clipboard('.tag-read')
            console.log(clipboard)
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
    },
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    .PlatSetting {
        height: 100%;
        margin-top: 20px;
        
    }
    .Settingadvertising_content_wrap {
        height: calc(100% - 50px);
        overflow: auto;
    }
    .Settingadvertising_content {
        width: 97%;
        margin-top: 20px;
    }
    .back {
        width: 97%;
        font-size: 20px;
        img {
            width: 20px;
            height: 20px;
            @media screen and (max-width: 960px) {
                width: 15px;
                height: 15px;
            }
        }
        @media screen and (max-width: 960px) {
            font-size: 15px;
        }
    }
    .divider_wrap {
        box-shadow: 0 0 5px rgb(163, 163, 163) inset;
        padding: 4px;
    }
    .divider_message_title {
        padding: 15px 30px;
    }
    .divider {
        width: 0;
        margin-right: 5px;
        background: @themeColor;
        border: solid 2px @themeColor;
    }
    .divider_text {
        color: @themeColor;
        font-size: 14px;
    }
    .setImg {
        img {
            width: 30px;
        }
    }
    .setText {
        font-size: 13px;
        img {
            width: 13px;
            margin-left: 3px;
        }
    }
    .delUSer {
        color: white;
        padding: 4px 20px;
        background: red;
        font-size: 12px;
        margin-right: 20px;
    }
    .arrow_m {
        width: 20px;
        img {
            width: 17px;
        }
    }
    .drawer_h {
        transition: 0.2s;
        overflow: hidden;
        max-height: 500px;
    }
    .drawer_h1 {
        max-height: 0;
    }
</style>