<template>
    <div class="Settingadvertising">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">外來廣告設定
        </div>
        <div class="Settingadvertising_content_wrap bar">
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="flex divider_message_title">
                        <div class="divider"></div>
                        <div class="divider_text">店鋪廣告比例設定</div>
                    </div>
                    <ModuleMin :columns="columns" :arr="arr" ref="child">
                        <template slot="set">
                            <div class="setText cursor">
                                <div class="setImg"><img src="@/assets/img/edit.png" alt=""></div>
                                <div class="size12">編輯比例</div>
                            </div>
                        </template>
                    </ModuleMin>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="flex divider_message_title">
                        <div class="divider"></div>
                        <div class="divider_text">接受外來廣告時段</div>
                    </div>
                    <ModuleMin :columns="columns1" :arr="arr1" ref="child">
                        <template slot="set">
                            <div class="setText cursor">
                                <div class="setImg"><img src="@/assets/img/edit.png" alt=""></div>
                                <div class="size12">編輯比例</div>
                            </div>
                        </template>
                    </ModuleMin>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="flex divider_message_title">
                        <div class="divider"></div>
                        <div class="divider_text">接受外來廣告類型</div>
                    </div>
                    <ModuleMin :columns="columns2" :arr="arr2" ref="child">
                        <template slot="set">
                            <div class="setText cursor">
                                <div class="setImg"><img src="@/assets/img/edit.png" alt=""></div>
                                <div class="size12">編輯比例</div>
                            </div>
                        </template>
                    </ModuleMin>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            columns: [
                {title:'外來廣告比例',key:'name'},
                {title:'操作',slot:'set'},
            ],
            columns1: [
                {title:'外來廣告時段',key:'name'},
                {title:'操作',slot:'set'},
            ],
            columns2: [
                {title:'外來廣告類型',key:'name'},
                {title:'操作',slot:'set'},
            ],
            arr:[
                {name:'接收外来廣告比例:80%',set: 'set',active: true},
            ],
            arr1:[
                {name:'接收外来廣告比例:80%',set: 'set',active: true},
            ],
            arr2:[
                {name:'接收外来廣告比例:80%',set: 'set',active: true},
            ],
        }
    },
    methods: {
        back () {
            this.$router.back()
        }
    },
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    .Settingadvertising {
        height: 100%;
        margin-top: 20px;
    }
    .Settingadvertising_content_wrap {
        height: calc(100% - 20px);
        overflow: auto;
    }
    .Settingadvertising_content {
        width: 97%;
        margin-top: 15px;
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
            width: 20px;
        }
    }
    .setText {
        font-size: 13px;
    }
</style>