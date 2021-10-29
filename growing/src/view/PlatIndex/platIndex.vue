<template>
    <div class="Index">
        <div class="content ju">
            <div class="content_item flex">
                <div class="item_child clear bar">
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">外來廣告設定</div>
                        </div>
                        <div class="jieshao">
                            为产品团队提供产品迭代所需的数据分析平台,快速迭代造好产品
                        </div>
                        <div class="detailBtn tc cursor" @click="Settingadvertising">
                            了解详情
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">廣告收入統計</div>
                        </div>
                        <div class="jieshao">
                            为产品团队提供产品迭代所需的数据分析平台,快速迭代造好产品
                        </div>
                        <div class="detailBtn tc cursor" @click="Income">
                            了解详情
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">店鋪管理</div>
                        </div>
                        <div class="jieshao">
                            为产品团队提供产品迭代所需的数据分析平台,快速迭代造好产品
                        </div>
                        <div class="detailBtn tc cursor" @click="AdministrationStore">
                            了解详情
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>

                </div>
                <div :class="['child_message']">
                    <div class="child_message_title">
                        <div class="tc cursor" @click="showadd = !showadd">
                            Title1(九龍店)
                            <img class="t_arrow" src="@/assets/img/arrow.png" alt="">
                        </div>

                        <div class="addPlat_wrap" v-show="showadd">
                            <!-- <div class="input_msg">
                                <input type="text">
                            </div>
                            <div class="input_msg">
                                <input type="text">
                            </div>
                            <div class="input_msg">
                                <input type="text">
                            </div> -->

                            <div class="addPlat al ju cursor mg" @click="AddStore">
                                <img src="@/assets/img/plat.png" alt="">新增店鋪
                            </div>
                        </div>
                    </div>
                    

                    <div class="child_message_content">
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">外來廣告數
                            </div>
                            <div class="al">4</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/area.png" alt="">接受時間
                            </div>
                            <div class="al">非繁忙9am-9pm</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/category.png" alt="">店鋪區域
                            </div>
                            <div class="al">九龍</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">本店廣告數
                            </div>
                            <div class="al">1</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">外來廣告比例
                            </div>
                            <div class="al">80%</div>
                        </div>
                        <div class="moreMsg flexEnd al">
                            <img class="cursor" @click="PlatSetting" src="@/assets/img/more.png" alt=""><span @click="PlatSetting" class="cursor">店鋪詳細設定</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showadd: false,
        }
    },
    methods: {
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
        }
    }
}
</script>

<style lang='less' scoped>
    .Index {
        height: 100%;
    }
    .content {
        margin-top: 20px;
        height: calc(100%);
        .content_item {
            width: 100%;
            max-width: 1100px;
            height: 100%;
            overflow: auto;
            @media screen and (max-width: 850px) {
                display: block;
            }
        }
    }
    .item_child {
        width: 75%;
        overflow: auto;
        @media screen and (max-width: 850px) {
            width: 100%;
        }
        .child {
            width: 27%;
            min-width: 197px;
            background: white;
            margin: 20px 3%;
            padding: 17px;
            @media screen and (max-width: 974px) {
                width: 43%;
            }
            @media screen and (max-width: 710px) {
                margin: 20px 9%;
                width: 83%;
            }
        }
    }
    .child_message {
        width: 25%;
        min-width: 255px;
        height: 320px;
        background: #F7F8FB;
        box-shadow: 0 0 5px rgb(194, 194, 194);
        margin-top: 20px;
        transition: 0.2s;
        @media screen and (max-width: 850px) {
            margin: auto;
            margin-bottom: 20px;
            width: 50%;
        }
    }
    .logo_wrap {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        box-shadow: 0 0 5px gray;
        margin-right: 15px;
    }
    .text_title {
        font-size: 14px;
    }
    .jieshao {
        font-size: 12px;
        color: #919B9D;
        height: 70px;
        margin: 20px 0;
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
    .child_message {
        padding: 7px 12px;
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
            left: 0;
            top: 50px;
            width: 100%;
            // height: 300px;
            padding: 5px 17px;
            border-radius: 12px;
            background: white;
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
    .addPlat {
        margin-top: 40px;
        margin-bottom: 20px;
        width: 70%;
        box-shadow: 0 0 5px gray;
        padding: 7px 0;
        font-size: 14px;
        img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
    }
    .input_msg {
        margin-top: 30px;
        border-bottom: solid 1px;
        input {
            border: none;
            outline: none;
            width: 100%;
            font-size: 15px;
        }
    }
</style>