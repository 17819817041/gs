<style lang='less' scoped>
    // .float1 {
    //     @media screen and (max-width: 730px) {
    //         float: left;
    //     }
    //     @media screen and (max-width: 564px) {
    //         float: none;
    //     }
    // }
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
        width: 30%;
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
        padding: 12px 45px;
        border-radius: 20px;
        background: #23D378;
    }
    .kong {
        height: 19px;
        margin-left: 20px;
        max-width: 136px;
        min-width: 100px;
        width: 20%;
        border-bottom: solid 1px rgb(187, 187, 187);
        margin-top: 20px;
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
        // padding: 20px 0;
        
    }
    .footer_title {
        padding: 40px 0;
        color: #343352;
        font-size: 20px;
    }
    .skk {
        width: 80%;
        margin: auto;
        @media screen and (max-width: 564px) {
            width: 100%;
        }
    }
</style>
<template>
    <div class="Combo">
        <div class="AdvertisingOperation_back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="" @click="goBack">{{$t("lang.newad")}}
        </div>
        <div class="content_wrap noBar">
            <div class="combo_content mg">
                <div class="combo_wrap ju">
                    <div class="combo_item">
                        <div class="combo_item_title tc">Basic{{$t("lang.comboPlan")}}</div>
                        <div class="combo_msg">
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.basic")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.custom")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="clear">
                                    <div class="al float1 kong"></div>
                                    <div class="al float1 kong"></div>
                                </div>
                                <div class="clear">
                                    <div class="al float1 kong"></div>
                                    <div class="al float1 kong"></div>
                                    <div class="al float1 kong"></div>
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.fee")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.serviceFile")}}
                                </div>
                            </div>
                        </div>
                        <div class="ju">
                            <div class="start cursor bold" @click="AdvertisingAdd">{{$t("lang.startPlan")}}</div>
                        </div>
                    </div>
                    <div class="combo_item center_item">
                        <div class="combo_item_title tc">Pro{{$t("lang.comboPlan")}}</div>
                        <div class="combo_msg">
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.basic")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.custom")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.moreShop")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.Precise")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 kong"></div>
                                <div class="al float1 kong"></div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.specify")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.fee")}}
                                </div>
                            </div>
                            <div class="">
                                <div class="al combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.serviceFile")}}
                                </div>
                            </div>
                        </div>
                        <div class="ju">
                            <div class="start cursor bold" @click="AdvertisingAddPro">{{$t("lang.startPlan")}}</div>
                        </div>
                    </div>
                    <div class="combo_item">
                        <div class="combo_item_title tc">Plus{{$t("lang.comboPlan")}}</div>
                        <div class="combo_msg">
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.basic")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.custom")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.moreShop")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.Precise")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.specify")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.effect")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.bprice")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.fee")}}
                                </div>
                            </div>
                            <div class="">
                                <div class="al combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.serviceFile")}}
                                </div>
                            </div>
                        </div>
                        <div class="ju">
                            <div class="start cursor bold" @click="AdvertisingAddPlus">{{$t("lang.startPlan")}}</div>
                        </div>
                    </div>
                </div>
                <div class="better">
                    <div class="better_title bold tc">{{$t("lang.compare")}}</div>
                    <div class="table">
                        <div class="flex table_item1 bold">
                            <div class="table_title1 al">{{$t("lang.Features")}}</div>
                            <div class="check1_wrap1 ju al">{{$t("lang.basic_plan")}}</div>
                            <div class="check1_wrap1 ju al">{{$t("lang.pro_plan")}}</div>
                            <div class="check1_wrap1 ju al">{{$t("lang.plus_plan")}}</div>
                        </div>
                        <div class="flex table_item">
                            <div class="table_title al">{{$t("lang.adBasic")}}</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                        </div>
                        <div class="flex table_item">
                            <div class="table_title al">{{$t("lang.custom")}}</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">{{$t("lang.moreShop")}}</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">{{$t("lang.Precise")}}</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">{{$t("lang.specify")}}</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">{{$t("lang.moredetail")}}</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">{{$t("lang.Searchable")}}</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">{{$t("lang.effect")}}</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                        </div><div class="flex table_item">
                            <div class="table_title al">{{$t("lang.bprice")}}！</div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/close.png" alt=""></div>
                            <div class="check1_wrap ju al"><img src="@/assets/img/check2.png" alt=""></div>
                        </div>
                    </div>
                </div>
                <div class="call_us">
                    <div class="ju">
                        <div class="start cursor bold" @click="technology">{{$t("lang.contact")}}</div>
                    </div>
                </div>
            </div>
            <div class="footer_wrap">
                <div class=" mg skk">
                    <div class="footer_title bold tc">{{$t("lang.faq")}}</div>
                    <div class="question">
                        <el-collapse v-model="activeNames" @change="handleChange">
                            <el-collapse-item :title="$t('lang.tit1')" name="1">   
                                <div>{{$t("lang.con1")}}</div>
                            </el-collapse-item>
                            <el-collapse-item :title="$t('lang.tit2')" name="2">
                                <div>{{$t("lang.con2")}}</div>
                            </el-collapse-item>
                            <el-collapse-item :title="$t('lang.tit3')" name="3">
                                <div>{{$t("lang.con3")}}</div>
                            </el-collapse-item>
                        </el-collapse>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
        goBack () {
			this.$router.back()
		},
        AdvertisingAdd () {
            this.$router.push('/AdvertisingAdd')         //新增廣告
        },
        AdvertisingAddPro () {
            this.$router.push('/AdvertisingAddPro')
        },
        AdvertisingAddPlus () {
            this.$router.push('/AdvertisingAddPlus')
        },
        technology () {
            // this.$router.push('/technology')
        },
        handleChange(val) {
            console.log(val);
        }
    }
}
</script>

