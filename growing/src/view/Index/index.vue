<template>
    <div class="Index">
        <div class="content ju">
            <div class="content_item sb">
                <div class="item_child clear bar">
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">新增廣告</div>
                        </div>
                        <div class="jieshao">
                            为产品团队提供产品迭代所需的数据分析平台,快速迭代造好产品
                        </div>
                        <div class="detailBtn tc cursor" @click="AdvertisingAdd">
                            了解详情
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">廣告管理</div>
                        </div>
                        <div class="jieshao">
                            为产品团队提供产品迭代所需的数据分析平台,快速迭代造好产品
                        </div>
                        <div class="detailBtn tc cursor" @click="advertisingOperation">
                            了解详情
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">廣告統計</div>
                        </div>
                        <div class="jieshao">
                            为产品团队提供产品迭代所需的数据分析平台,快速迭代造好产品
                        </div>
                        <div class="detailBtn tc cursor" @click="statistics">
                            了解详情
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="['child_message']">
                    <div class="child_message_title tc">
                        Title
                    </div>
                    <div class="child_message_content">
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">投放廣告數
                            </div>
                            <div class="al">4</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/area.png" alt="">投放區域
                            </div>
                            <div class="al">九龍</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/category.png" alt="">投放類型
                            </div>
                            <div class="al">食品</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">投放時段
                            </div>
                            <div class="al">繁忙9am-9pm</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">最近活動到期日
                            </div>
                            <div class="al">2021-06-26</div>
                        </div>
                        <div class="moreMsg flexEnd al">
                            <img class="cursor" src="@/assets/img/more.png" alt="">查看更多详细
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
            
        }
    },
    methods: {
        advertisingOperation () {
            this.$router.push('/AdvertisingOperation')    //廣告管理
        },
        AdvertisingAdd () {
            this.$router.push('/AdvertisingAdd')         //新增廣告
        },
        statistics () {
            this.$router.push('/Statistics')          //廣告統計
        }
    }
}
</script>

<style lang='less' scoped>
    .Index {
        height: 100%;
        margin-top: 20px;
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
        // height: 100%;
        overflow: auto;
        @media screen and (max-width: 850px) {
            width: 100%;
        }
        // @media screen and (max-width: 564px) {
        //     width: 88%;
        // }
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
        min-width: 240px;
        font-size: 15px;
        background: white;
        box-shadow: 0px 3px 5px rgb(206, 206, 206) ;
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
            width: 22px;
            height: 22px;
            margin-right: 3px;
        }
    }
</style>