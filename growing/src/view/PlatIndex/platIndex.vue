<template>
    <div class="Index" v-loading='loading'>
        <div class="wrap_addPlat" v-show="showadd" @click="showadd = false"></div>
        <div class="content ju">
            <div class="content_item flex">
                <div class="item_child clear noBar">
                    <div class="flexEnd category_button_wrap">
                        <div class="category_button cursor" @click="category_list = !category_list">
                            <img style="height: 100%;" v-show="!category_list" src="@/assets/img/category.png" alt="">
                            <img style="height: 100%;" v-show="category_list" src="@/assets/img/close.png" alt="">
                        </div>
                    </div>
                    <div :class="['child_message1',{ minwidth: $i18n.locale == 'en-US' }]" v-show="category_list">
                        <div class="child_message_title">
                            <div class="tc cursor" @click="showadd = !showadd">
                                {{shopTitle.shopName}}
                                <img class="t_arrow" src="@/assets/img/arrow.png" alt="">
                            </div>

                            <div class="addPlat_wrap boxs" v-show="showadd">
                                <div class="input_msg cursor tc" @click="choose(item)"
                                 v-for="(item,i) in storeList" :key="i">
                                    {{item.shopName}}
                                </div>

                                <div class="addPlat al ju cursor mg" @click="AddStore">
                                    <img src="@/assets/img/plat.png" alt="">{{$t("lang.addstore")}}
                                </div>
                            </div>
                        </div>
                        

                        <div class="child_message_content">
                            <div class="child_message_content_item sb">
                                <div class="al">
                                    <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">{{$t("lang.foreignnum")}}
                                </div>
                                <div class="al">{{shopTitle.guangGaoTotalAccount}}</div>
                            </div>
                            <div class="child_message_content_item sb">
                                <div class="al">
                                    <img class="child_message_content_item_logo" src="@/assets/img/area.png" alt="">{{$t("lang.Acceptancetime")}}
                                </div>
                                <div class="al">{{$t("lang.unbusyhour")}}</div>
                            </div>
                            <div class="child_message_content_item sb">
                                <div class="al">
                                    <img class="child_message_content_item_logo" src="@/assets/img/add-address.png" alt="">{{$t("lang.storeArea")}}
                                </div>
                                <div class="al">{{shopTitle.addressReginName}}</div>
                            </div>
                            <div class="child_message_content_item sb">
                                <div class="al">
                                    <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">{{$t("lang.mynum")}}
                                </div>
                                <div class="al">{{shopTitle.shopGuangGaoTotalAccount}}</div>
                            </div>
                            <!-- <div class="child_message_content_item sb">
                                <div class="al">
                                    <img class="child_message_content_item_logo" src="@/assets/img/bili.png" alt="">{{$t("lang.ads")}}
                                </div>
                                <div class="al">80%</div>
                            </div> -->
                            <div class="moreMsg flexEnd al">
                                <img class="cursor" @click="PlatSetting" src="@/assets/img/more.png" 
                                alt=""><span @click="PlatSetting" class="cursor">{{$t("lang.storeset")}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title al bold">
                                {{$t("lang.Foreign")}}
                            </div>
                        </div>
                        <div class="jieshao">
                            {{$t("lang.jieshao")}}
                        </div>
                        <div class="detailBtn tc cursor" @click="Settingadvertising">
                            {{$t("lang.detail")}}
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">
                                <div class="text_title al bold">
                                    {{$t("lang.revenue")}}
                                </div>
                            </div>
                        </div>
                        <div class="jieshao">
                            {{$t("lang.jieshao")}}
                        </div>
                        <div class="detailBtn tc cursor" @click="Income">
                            {{$t("lang.detail")}}
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title al bold">
                                {{$t("lang.Storemanagement")}}
                            </div>
                        </div>
                        <div class="jieshao">
                            {{$t("lang.jieshao")}}
                        </div>
                        <div class="detailBtn tc cursor" @click="AdministrationStore">
                            {{$t("lang.detail")}}
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="['child_message',{ minwidth: $i18n.locale == 'en-US' }]">
                    <div class="child_message_title">
                        <div class="tc cursor" @click="showadd = !showadd">
                            {{shopTitle.shopName}}
                            <img class="t_arrow" src="@/assets/img/arrow.png" alt="">
                        </div>
                        <div class="addPlat_wrap" v-show="showadd">
                            <div class="input_msg cursor tc" @click="choose(item)"
                                v-for="(item) in storeList" :key="item.id">
                                {{item.shopName}}
                            </div>
                            <div class="line"></div>
                            <div class="addPlat al ju cursor mg" @click="AddStore">
                                <img src="@/assets/img/plat.png" alt="">{{$t("lang.addstore")}}
                            </div>
                        </div>
                    </div>
                    

                    <div class="child_message_content">
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">{{$t("lang.foreignnum")}}
                            </div>
                            <div class="al">{{shopTitle.guangGaoTotalAccount}}</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/area.png" alt="">{{$t("lang.Acceptancetime")}}
                            </div>
                            <div class="al">{{$t("lang.unbusyhour")}}</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/add-address.png" alt="">{{$t("lang.storeArea")}}
                            </div>
                            <div class="al">{{shopTitle.addressReginName}}</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">{{$t("lang.mynum")}}
                            </div>
                            <div class="al">{{shopTitle.shopGuangGaoTotalAccount}}</div>
                        </div>
                        <!-- <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/bili.png" alt="">{{$t("lang.ads")}}
                            </div>
                            <div class="al">80%</div>
                        </div> -->
                        <div class="moreMsg flexEnd al">
                            <img class="cursor" @click="PlatSetting" src="@/assets/img/more.png" 
                            alt=""><span @click="PlatSetting" class="cursor">{{$t("lang.storeset")}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getShopListByUser } from '@/axios/request.js'
export default {
    data () {
        return {
            showadd: false,
            category_list: false,
            storeList: [],
            loading: false,
            shopTitle: {}
        }
    },
    mounted () {
        let that = this
        window.addEventListener('resize', (e) => {
            that.getResize()
        })
		this.getResize()
    },
    created () {
        this.getShopListByUser()
    },
    methods: {
        getShopListByUser () {       //获取用户下所有店铺
            this.loading = true
            let data = { userId: localStorage.getItem('compoundeyesUserId') }
            getShopListByUser(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.storeList = res.data.data
                    this.shopTitle = res.data.data[0]
                } else {
                    // this.$message({
                    // type: 'warning',
                    //     message: res.data.msg
                    // })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '請求失敗'
                })
            })
        },
        choose (item) {
            this.shopTitle = item
            this.showadd = false
        },
        getResize () {
            if (document.getElementsByClassName('wrap_addPlat')[0] != undefined) {
                document.getElementsByClassName('wrap_addPlat')[0].style.width = window.innerWidth + 'px'
                document.getElementsByClassName('wrap_addPlat')[0].style.height = window.innerHeight -30 + 'px'
            }
        },
        Income () {
            this.$router.push('/Income')
        },
        Settingadvertising () {
            this.$router.push('/Settingadvertising')
        },
        AddStore () {
            this.$router.push('/AddStore')
        },
        PlatSetting () {
            this.$router.push('/PlatSetting')
        },
        AdministrationStore () {
            this.$router.push('/AdministrationStore')
        },
        
    }
}
</script>

<style lang='less' scoped>
    .Index {
        height: 100%;
        margin-top: 20px;
        position: relative;
        .wrap_addPlat {
            position: absolute;
            top: -75px;
            left: 0;
            z-index: 10;
        }
    }
    .content {
        margin-top: 28px;
        height: calc(96%);
        .content_item {
            width: 100%;
            max-width: 1450px;
            height: 100%;
            overflow: auto;
            padding: 0 15px;
            @media screen and (max-width: 850px) {
                margin-top: 24px;
                display: block;
            }
        }
    }
    .item_child {
        width: 85%;
        overflow: auto;
        @media screen and (max-width: 850px) {
            width: 100%;
        }
        .category_button {
            width: 35px;
            height: 35px;
            padding: 5px;
            transform: translate(-10px,5px);
        }
        .child {
            // width: 27%;
            // min-width: 197px;
            // background: white;
            // margin: 20px 3%;
            // padding: 17px;
            width: 29%;
            min-width: 197px;
            background: white;
            height: 270px;
            margin: 20px 2%;
            padding: 36px 25px;
            @media screen and (max-width: 1055px) {
                width: 43%;
            }
            @media screen and (max-width: 710px) {
                margin: 0 9% 20px 9%;
                width: 83%;
            }
        }
    }
    .category_button_wrap {
        position: fixed;
        top: 57px;
        right: 10px;
        display: none;
        @media screen and (max-width: 850px) {
            display: flex;
        }
    }
    .child_message {
        width: 30%;
        min-width: 272px;
        padding: 23px 17px;
        // height: 298px;
        height: 257px;
        background: #F7F8FB;
        box-shadow: 0 0 2px #c2c2c2;
        margin-top: 20px;
        transition: 0.2s;
        @media screen and (max-width: 850px) {
            display: none;
            margin: auto;
            margin-bottom: 20px;
            width: 50%;
        }
    }
    .minwidth {
        min-width: 340px !important;
    }
    .line {
        border-bottom: solid 1px rgb(190, 190, 190);
    }
    .child_message1 {
        width: 25%;
        position: fixed;
        top: 100px;
        right: 15px;
        padding: 0 5px;
        z-index: 10;
        min-width: 272px;
        // height: 298px;
        height: 257px;
        padding: 23px 17px;
        background: #F7F8FB;
        box-shadow: 0 0 5px rgb(194, 194, 194);
        margin-top: 20px;
        transition: 0.2s;
        display: none;
        @media screen and (max-width: 900px) and (max-height: 400px) {
            top: 5px;
            right: 65px;
            display: block;
            margin: auto;
            margin-bottom: 20px;
            width: 50%;
            height: 286px;
        }
        @media screen and (max-width: 850px) {
            display: block;
            margin: auto;
            margin-bottom: 20px;
            width: 50%;
        }
    }
    .logo_wrap {
        width: 40px;
        min-width: 40px;
        height: 40px;
        border-radius: 12px;
        box-shadow: 0 0 5px gray;
        margin-right: 15px;
    }
    .text_title {
        min-height: 48px;
        height: 48px;
        font-size: 18px;
        max-height: 48px;
    }
    .jieshao {
        font-size: 15px;
        color: #919B9D;
        height: 62px;
        margin: 20px 0;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 3;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: normal;/*在任何地方换行*/
    }
    .detailBtn {
        background: #3F4F9F;
        padding: 8px 0;
        color: white;
        position: relative;
    }
    .arrow_r {
        position: absolute;
        right: 7%;
        top: 50%;
        transform: translate(0,-50%);
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background: #5C6BB5;
    }
    .child_message_title {
        padding: 5px 0;
        font-size: 15px;
        min-width: 240px;
        background: white;
        box-shadow: 0px 3px 5px rgb(206, 206, 206) ;
        position: relative;
        .t_arrow {
            position: absolute;
            right: 7%;
            top: 50%;
            width: 15px;
            height: 15px;
            transform: translate(0, -50%) rotateZ(180deg);
        }
        .addPlat_wrap {
            position: absolute;
            right: 0;
            top: 40px;
            width: 100%;
            color: gray;
            font-size: 13px;
            background: white;
            z-index: 11;
            border-radius: 3px;
            border: solid 1px #b9b9b9;
            box-shadow: 0 3px 15px #b6b6b6;
        }
    }
    .addPlat {
        // margin: 15px 0;
        // width: 100%;
        // box-shadow: 0 0 5px gray;
        // padding: 5px 0;
        // font-size: 12px;
            padding: 12px 0;
            font-size: 12px;
        img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
    }
    .child_message_content {
        margin-top: 20px;
        min-width: 240px;
    }
    .child_message_content_item {
        font-size: 13px;
        margin-bottom: 15px;
    }
    .child_message_content_item_logo {
        margin-right: 5px;
        width: 20px ;
        height: 20px;
    }
    .moreMsg {
        font-size: 13px;
        img {
            margin-right: 3px;
            width: 23px;
        }  
    }
    .input_msg {
        padding: 10px 0 13px 0;
        font-size: 12px;
    }
</style>