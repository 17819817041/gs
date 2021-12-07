<template>
    <div class="Index">
        <div class="content ju">
            <div class="content_item sb">
                <div class="item_child clear noBar">
                    <div class="flexEnd category_button_wrap">
                        <div class="category_button cursor" @click="category_list = !category_list">
                            <img style="height: 100%;" v-show="!category_list" src="@/assets/img/category.png" alt="">
                            <img style="height: 100%;" v-show="category_list" src="@/assets/img/close.png" alt="">
                        </div>
                    </div>
                    <div :class="['child_message1']" v-show="category_list">
                        <div class="child_message_title tc">
                            Title
                        </div>
                        <div class="child_message_content">
                            <div class="child_message_content_item sb">
                                <div class="al">
                                    <img class="child_message_content_item_logo" src="@/assets/img/guanggao.png" alt="">{{$t("lang.gindex")}}
                                </div>
                                <div class="al">4</div>
                            </div>
                            <div class="child_message_content_item sb">
                                <div class="al">
                                    <img class="child_message_content_item_logo" src="@/assets/img/area.png" alt="">{{$t("lang.garea")}}
                                </div>
                                <div class="al">{{$t("lang.Kowloon")}}</div>
                            </div>
                            <div class="child_message_content_item sb">
                                <div class="al">
                                    <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">{{$t("lang.gtype")}}
                                </div>
                                <div class="al">{{$t("lang.food")}}</div>
                            </div>
                            <div class="child_message_content_item sb">
                                <div class="al">
                                    <img class="child_message_content_item_logo" src="@/assets/img/time.png" alt="">{{$t("lang.gtime")}}
                                </div>
                                <div class="al">{{$t("lang.busy")}}9am-9pm</div>
                            </div>
                            <div class="child_message_content_item sb">
                                <div class="al" style="width: 61%;">
                                    <img class="child_message_content_item_logo" src="@/assets/img/endTime.png" alt="">{{$t("lang.maturity")}}
                                </div>
                                <div class="al">2021-06-26</div>
                            </div>
                            <!-- <div class="moreMsg flexEnd al">
                                <img class="cursor" src="@/assets/img/more.png" alt=""><span class="cursor">查看更多详细</span>
                            </div> -->
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title al bold">{{$t("lang.add")}}</div>
                        </div>
                        <div class="jieshao">
                            {{$t("lang.jieshao")}}
                        </div>
                        <div class="detailBtn tc cursor" @click="AdvertisingAdd">
                            {{$t("lang.detail")}}
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title al bold">{{$t("lang.management")}}</div>
                        </div>
                        <div class="jieshao">
                            {{$t("lang.jieshao")}}
                        </div>
                        <div class="detailBtn tc cursor" @click="advertisingOperation">
                            {{$t("lang.detail")}}
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title al bold">{{$t("lang.statistics")}}</div>
                        </div>
                        <div class="jieshao">
                            {{$t("lang.jieshao")}}
                        </div>
                        <div class="detailBtn tc cursor" @click="statistics">
                            {{$t("lang.detail")}}
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
                                <img class="child_message_content_item_logo" src="@/assets/img/guanggao.png" alt="">{{$t("lang.gindex")}}
                            </div>
                            <div class="al">4</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/area.png" alt="">{{$t("lang.garea")}}
                            </div>
                            <div class="al">{{$t("lang.Kowloon")}}</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/num.png" alt="">{{$t("lang.gtype")}}
                            </div>
                            <div class="al">{{$t("lang.food")}}</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/time.png" alt="">{{$t("lang.gtime")}}
                            </div>
                            <div class="al">{{$t("lang.busy")}}9am-9pm</div>
                        </div>
                        <div class="child_message_content_item sb">
                            <div class="al">
                                <img class="child_message_content_item_logo" src="@/assets/img/endTime.png" alt="">{{$t("lang.maturity")}}
                            </div>
                            <div class="al" style="min-width: 72px; white-space: nowrap;">2021-06-26</div>
                        </div>
                        <!-- <div class="moreMsg flexEnd al">
                            <img class="cursor" src="@/assets/img/more.png" alt=""><span class="cursor">查看更多详细</span>
                        </div> -->
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
            category_list: false,
        }
    },
    methods: {
        advertisingOperation () {
            this.$router.push('/AdvertisingOperation')    //廣告管理
        },
        AdvertisingAdd () {
            // this.$router.push('/AdvertisingAdd')         //新增廣告
            this.$router.push('/Combo')
        },
        statistics () {
            this.$router.push('/Statistics')          //廣告統計
        },
        
    }
}
</script>

<style lang='less' scoped>
    .Index {
        height: 100%;
        margin-top: 20px;
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
        height: 298px;
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
    .child_message1 {
        width: 25%;
        position: fixed;
        top: 100px;
        right: 15px;
        padding: 0 5px;
        z-index: 10;
        min-width: 272px;
        height: 298px;
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
        margin-bottom: 25px;
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