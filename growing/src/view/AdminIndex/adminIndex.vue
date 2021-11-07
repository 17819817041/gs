<template>
    <div class="Index">
        <div class="content ju">
            <div class="content_item flex">
                <div class="item_child clear bar">
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">廣告商管理</div>
                        </div>
                        <div class="jieshao">
                            为产品团队提供产品迭代所需的数据分析平台,快速迭代造好产品
                        </div>
                        <div class="detailBtn tc cursor" @click="AdvertiserManagement">
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
                        <div class="detailBtn tc cursor" @click="StoreAdministrator">
                            了解详情
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">審核申請列表</div>
                        </div>
                        <div class="jieshao">
                            为产品团队提供产品迭代所需的数据分析平台,快速迭代造好产品
                        </div>
                        <div class="detailBtn tc cursor" @click="AuditList">
                            了解详情
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">廣告活動統計數據</div>
                        </div>
                        <div class="jieshao">
                            为产品团队提供产品迭代所需的数据分析平台,快速迭代造好产品
                        </div>
                        <div class="detailBtn tc cursor" @click="EchartsMsg">
                            了解详情
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">收入和支出</div>
                        </div>
                        <div class="jieshao">
                            为产品团队提供产品迭代所需的数据分析平台,快速迭代造好产品
                        </div>
                        <div class="detailBtn tc cursor" @click="TradingRecord">
                            了解详情
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="child float">
                        <div class="child_title al">
                            <div class="logo_wrap ju al"><img style="height: 70%;" src="@/assets/img/logo_ie.png" alt=""></div>
                            <div class="text_title bold">系統設定</div>
                        </div>
                        <div class="jieshao">
                            为产品团队提供产品迭代所需的数据分析平台,快速迭代造好产品
                        </div>
                        <div class="detailBtn tc cursor" @click="Setting">
                            了解详情
                            <div class="arrow_r ju al">
                                <img style="height: 100%;" src="@/assets/img/arrow_r.png" alt="">
                            </div>
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
        AdvertiserManagement () {
            this.$router.push('/AdvertiserManagement')
        },
        StoreAdministrator () {
            this.$router.push('/StoreAdministrator')
        },
        AuditList () {
            this.$router.push('/AuditList')
        },
        Setting () {
            this.$router.push('/Setting')
        },
        EchartsMsg () {
            this.$router.push('/EchartsMsg')
        },
        TradingRecord () {
            this.$router.push('/TradingRecord')
        }
    }
}
</script>

<style lang='less' scoped>
    .Index {
        height: 100%;
    }
    .content {
        margin-top: 28px;
        height: calc(100% - 6px);
        .content_item {
            width: 100%;
            max-width: 1450px;
            height: 100%;
        }
    }
    .item_child {
        width: 100%;
        height: 100%;
        overflow: auto;
        .child {
            width: 27%;
            min-width: 197px;
            background: white;
            margin: 20px 3%;
            height: 270px;
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
    .logo_wrap {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        box-shadow: 0 0 5px gray;
        margin-right: 15px;
    }
    .text_title {
        font-size: 18px;
    }
    .jieshao {
        font-size: 15px;
        color: #919B9D;
        height: 70px;
        margin: 20px 0;
    }
    .detailBtn {
        background: #3F4F9F;
        padding: 8px 0;
        color: white;
        position: relative;
        box-shadow: 0 3px 5px rgb(224, 224, 224);
    }
    .detailBtn1 {
        background: #fdfdfd;
        padding: 8px 0;
        position: relative;
        box-shadow: 0 3px 5px rgb(224, 224, 224);
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
    .arrow_r_black {
        position: absolute;
        right: 7%;
        top: 50%;
        transform: translate(0,-50%);
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background: #d4d4d4;
    }
</style>