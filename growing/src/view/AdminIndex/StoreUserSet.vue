<template>
    <div class="PlatSetting" v-loading='loading'>
        <div class="back al mg">
            <div class="ju al block">
                <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" @click="back" alt="">
                <span class="size20">店鋪賬戶設定</span>
            </div>
            <span class="size12">(設備賬戶用於登錄平台投影設備)</span>
        </div>
        <div class="Settingadvertising_content_wrap bar">
            <!-- <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">美食九龍店</div>
                        </div>
                        <div class="flex">
                            <div class="delUSer cursor">註銷店鋪</div>
                            <div class="arrow_m al" @click="drawer = !drawer"><img :class="[{ rotate: drawer }]" src="@/assets/img/pull_down.png" alt=""></div>
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
                            <template slot="deleUser">
                                <div class="ju al">
                                    <div class='deleUser cursor'>
                                        刪除設備賬戶
                                    </div>
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
                            <div class="arrow_m al" @click="drawer1 = !drawer1"><img :class="[{ rotate: drawer1 }]" src="@/assets/img/pull_down.png" alt=""></div>
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
                            <template slot="deleUser">
                                <div class="ju al">
                                    <div class='deleUser cursor'>
                                        刪除設備賬戶
                                    </div>
                                </div>
                            </template>
                        </ModuleMin1>
                    </div>
                </div>
            </div> -->
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">{{shopName}}</div>
                        </div>
                        <div class="flex">
                            <el-popconfirm
                                :title="$t('lang.setting_del') + '？'"
                                @confirm='admincancelShop'
                                >
                                <div class="delUSer cursor" slot="reference" @click.stop="">註銷店鋪</div>
                            </el-popconfirm>
                            <div class="arrow_m al" @click="drawer2 = !drawer2"><img :class="[{ rotate: drawer2 }]" src="@/assets/img/pull_down.png" alt=""></div>
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
                            <template slot="deleUser" slot-scope="{ data }">
                                <div class="ju al">
                                    <el-popconfirm
                                        :title="$t('lang.setting_del') + '？'"
                                        @confirm='admincancelAccount(data)'
                                        >
                                        <div class='deleUser cursor' slot="reference">
                                            刪除設備賬戶
                                        </div>
                                    </el-popconfirm>
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
import { getShopDeviceList, admincancelAccount, admincancelShop } from '@/axios/request.js'
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
                {title:'操作',slot:'slot'},
            ],
            columns1: [
                {title:'店鋪設備配置',key:'name'},
                {title:'賬戶設備ID',slot:'id'},
                {title:'賬戶設備Key',slot:'key'},
                {title:'操作',slot:'slot'},
            ],
            columns2: [
                {title:'店鋪設備配置',key:'name'},
                {title:'賬戶設備ID',slot:'id'},
                {title:'賬戶設備Key',slot:'key'},
                {title:'操作',slot:'slot'},
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
            loading: false,
            shopName: ''
        }
    },
    created () {
        this.getShopDeviceList()
    },
    methods: {
        getShopDeviceList () {
            this.arr2 = []
            this.loading = true
			let data = {
				shopId: this.$route.query.id
			}
			getShopDeviceList(data).then(res => {
                this.loading = false
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.shopName = res.data.data.shopName
                    res.data.data.deviceList.forEach(item => {
                        this.arr2.push({
                            name: '設備賬戶',
                            id: item.userName,
                            key: item.pwd,
                            active: true,
                            shopId: res.data.data.shopId,
                            accountId: item.id
                        })
                    })
                } else {
                    this.$message({
                        type: 'warning',
                        message: this.$t('lang.loading')
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: this.$t('lang.loading')
                })
            })
		},
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
        },
        admincancelAccount (id) {
            let data = {
                id: id.accountId
            }
            this.loading = true
            admincancelAccount(data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: '註銷成功'
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: '註銷失敗'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '註銷失敗'
                })
            })
        },

        admincancelShop () {
            let data = {
                shopId: this.$route.query.id
            }
            admincancelShop(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: '註銷成功'
                    })
                    this.$router.back()
                } else {
                    this.$message({
                        type: 'error',
                        message: '註銷失敗'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '註銷失敗'
                })
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
        @media screen and (max-width: 345px) {
            display: block;
        }
    }
    .block {
        @media screen and (max-width: 345px) {
            display: block;
        }
    }
    .size20 {
        font-size: 20px;
    }
    .size12 {
        margin: 7px 0 0 20px;
        font-size: 12px;
        color: rgb(211, 211, 211);
        @media screen and (max-width: 345px) {
            margin-left: 5px;
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
        @media screen and (max-width: 564px) {
            margin-right: 15px;
            padding: 4px 15px;
        }
    }
    .deleUser {
        color: white;
        padding: 6px 20px;
        background: red;
        font-size: 12px;
        margin-right: 20px;
    }
    .arrow_m {
        width: 20px;
        img {
            width: 17px;
            transform: rotateZ(-180deg);
            transition: 0.2s;
        }
    }
    .rotate {
        transform: rotateZ(0deg) !important;
    }
    .drawer_h {
        transition: 0.2s;
        overflow: hidden;
        max-height: 500px;
    }
    .drawer_h1 {
        max-height: 0;
        transition: 0.2s;
    }
</style>