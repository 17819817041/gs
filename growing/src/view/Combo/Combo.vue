<style lang='less' scoped>
    .float1 {
        @media screen and (max-width: 730px) {
            float: left;
        }
        @media screen and (max-width: 730px) {
            float: none;
        }
    }
    .Combo {
        margin-top: 20px;
        height: 100%;
    }
    .AdvertisingOperation_back {
        width: 98%;
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
    .content_wrap {
        height: calc(100% - 36px);
        overflow: auto;
        margin-top: 15px;
    }
    .combo_content {
        width: 100%;
        max-width: 1200px;
        // box-shadow: 0 0 5px rgb(206, 206, 206) inset;
    }
    .combo_wrap {
        @media screen and (max-width: 730px) {
            display: block;
        }
    }
    .combo_item {
        width: 25%;
        background: white;
        border-radius: 7px;
        color: gray;
        padding: 30px;
        @media screen and (max-width: 888px) {
            width: 30%;
        }
        @media screen and (max-width: 730px) {
            width: 80%;
            margin: auto;
        }
        .combo_item_title {
            font-size: 20px;
        }
    }
    .center_item {
        margin: 0 15px;
        @media screen and (max-width: 730px) {
            margin: 20px auto;
        }
    }
    .combo_msg {
        margin-top: 80px;
        @media screen and (max-width: 730px) {
            margin-top: 40px;
        }
    }
    .combo_msg_item {
        font-size: 14px;
        margin-top: 20px;
        margin-left: 20px;
        img {
            width: 18px;
            height: 18px;
        }
    }
    .start {
        margin-top: 30px;
        color: white;
        font-size: 13px;
        padding: 7px 35px;
        border-radius: 20px;
        background: #23D378;
    }
    .kong {
        margin-top: 215px;
        @media screen and (max-width: 730px) {
            margin-top: 0px;
        }
    }
    .kong1 {
        margin-top: 99px;
        @media screen and (max-width: 730px) {
            margin-top: 0px;
        }
    }
    .better {
        color: gray;
        margin-top: 50px;
        .better_title {
            font-size: 40px;
            @media screen and (max-width: 700px) {
                font-size: 30px;
            }
            @media screen and (max-width: 564px) {
                font-size: 20px;
            }
        }
    }
    .table_item {
        font-size: 13px;
        padding: 20px;
        border-bottom: solid rgb(201, 201, 201) 1px;
        @media screen and (max-width: 564px) {
            padding: 10px;
        }
        img {
            width: 24px;
            height: 24px;
        }
    }
    .table_item1 {
        padding: 20px 20px 40px 20px;
        @media screen and (max-width: 564px) {
            padding: 20px 10px 30px 10px;
        }
    }
    .table_title {
        width: calc(100% - 450px);
        @media screen and (max-width: 700px) {
            width: calc(100% - 300px);
        }
        @media screen and (max-width: 564px) {
            font-size: 12px;
            width: calc(100% - 210px);
        }
    }
    .table_title1 {
        width: calc(100% - 450px);
        font-size: 17px;
        color: rgb(66, 66, 66);
        @media screen and (max-width: 700px) {
            width: calc(100% - 300px);
        }
        @media screen and (max-width: 564px) {
            font-size: 13px;
            width: calc(100% - 210px);
        }
    }
    .check1_wrap {
        width: 150px;
        @media screen and (max-width: 700px) {
            width: 100px;
        }
        @media screen and (max-width: 564px) {
            width: 70px;
        }
    }
    .check1_wrap1 {
        width: 150px;
        font-size: 17px;
        color: rgb(66, 66, 66);
        @media screen and (max-width: 700px) {
            width: 100px;
        }
        @media screen and (max-width: 564px) {
            font-size: 13px;
            width: 70px;
        }
    }
    .call_us {
        margin: 80px 0 30px 0;
    }
    .footer_wrap {
        background: #F6F9FC;
        padding: 20px;
    }
    .footer_title {
        padding: 40px 0;
        color: #343352;
        font-size: 20px;
    }
    .wen {
        font-size: 15px;
        color: black;
    }
    .da {
        color: gray;
        font-size: 14px;
        margin-top: 20px;
    }
    .question_wrap {
        margin-top: 30px;
    }
</style>
<template>
    <div class="Combo">
        <div class="AdvertisingOperation_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="goBack">{{$t("lang.newad")}}
        </div>
        <div class="content_wrap noBar">
            <div class="combo_content mg">
                <div class="combo_wrap ju">
                    <div class="combo_item">
                        <div class="combo_item_title tc">Basic廣告計劃</div>
                        <div class="combo_msg">
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 基礎選項
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 自定媒體廣告
                                </div>
                            </div>
                            <div class="clear kong">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 費用規矩透明
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 專業服務文件
                                </div>
                            </div>
                        </div>
                        <div class="ju">
                            <div class="start cursor bold" @click="AdvertisingAdd">開始計劃</div>
                        </div>
                    </div>
                    <div class="combo_item center_item">
                        <div class="combo_item_title tc">Pro廣告計劃</div>
                        <div class="combo_msg">
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 基礎選項
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 自定媒體廣告
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 多店鋪指定投放
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 精準區域/街道投放
                                </div>
                            </div>
                            <div class="clear kong1">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 指定準確時間投放
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 費用規矩透明
                                </div>
                            </div>
                            <div class="">
                                <div class="al combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 專業服務文件
                                </div>
                            </div>
                        </div>
                        <div class="ju">
                            <div class="start cursor bold" @click="AdvertisingAdd">開始計劃</div>
                        </div>
                    </div>
                    <div class="combo_item">
                        <div class="combo_item_title tc">Plus廣告計劃</div>
                        <div class="combo_msg">
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 基礎選項
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 自定媒體廣告
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 多店鋪指定投放
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 精準區域/街道投放
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 指定準確時間投放
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 廣告同步播放效應
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 價格更佳優惠
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 費用規矩透明
                                </div>
                            </div>
                            <div class="">
                                <div class="al combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> 專業服務文件
                                </div>
                            </div>
                        </div>
                        <div class="ju">
                            <div class="start cursor bold" @click="AdvertisingAdd">開始計劃</div>
                        </div>
                    </div>
                </div>
                <div class="better">
                    <div class="better_title bold tc">比較Basic，Pro，Plus廣告計劃</div>
                    <div class="table">
                        <div class="flex table_item1 bold">
                            <div class="table_title1 al">特點</div>
                            <div class="check1_wrap1 ju al">Basic計劃</div>
                            <div class="check1_wrap1 ju al">Pro計劃</div>
                            <div class="check1_wrap1 ju al">Plus計劃</div>
                        </div>
                        <div class="flex table_item">
                            <div class="table_title al">廣告基礎選項</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                        </div>
                        <div class="flex table_item">
                            <div class="table_title al">自定媒體廣告</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">多店鋪指定投放</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">精準區域/街道投放</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">指定準確時間投放</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">更加細緻廣告選項</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">可搜索目標位置投放</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">廣告同步播放效應</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">價格更佳優惠划算！</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check1.png" alt=""></div>
                        </div>
                    </div>
                </div>
                <div class="call_us">
                    <div class="ju">
                        <div class="start cursor bold">聯絡我們獲取專業技術</div>
                    </div>
                </div>
            </div>
            <div class="footer_wrap">
                <div class="combo_content mg">
                    <div class="footer_title bold tc">定價和許可常見問題解答</div>
                    <div class="question">
                        <div class="question_wrap">
                            <div class="wen">關於廣告計劃投放？</div>
                            <div class="da">本廣告計劃投放由Compoundeyes平台所以，並且提供計數支持服務許可。</div>
                        </div>
                        <div class="question_wrap">
                            <div class="wen">關於廣告計劃費用？</div>
                            <div class="da">在您所選擇的廣告計劃中，在選擇廣告計劃的選擇之後，將會有各項費用總覽，您也可以使用我們的費用計算器進行查看。如果您有任何疑問，請直接聯繫我們！我們將不留餘力問你解答。</div>
                        </div>
                        <div class="question_wrap">
                            <div class="wen">我可以在購買廣告計劃之前提出問題嗎？</div>
                            <div class="da">當然可以，如果您對於Compoundeyes廣告平台有任何問題，可以直接聯繫我們！</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    methods: {
        goBack () {
			this.$router.back()
		},
        AdvertisingAdd () {
            this.$router.push('/AdvertisingAdd')         //新增廣告
        },
    }
}
</script>

