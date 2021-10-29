<template>
    <div class="AdvertisingOperation">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="back">廣告管理
        </div>
        <div class="table mg">
            <Module :columns="columns" :arr="arr" ref="child">
                <template slot="state" slot-scope="{data}">
                    <div :class="['cursor toufang', {'sure_state': data == 1, 'no_state': data == 2}]">
                        <span v-if="data == 1" >已投放</span>
                        <span v-else-if="data == 2">未投放</span>
                    </div>
                </template>
                <template slot="content">
                    <div class="preview cursor">
                        <img src="@/assets/img/eye.png" alt="">
                        <div>查看預覽</div>
                    </div>
                </template>
                <template slot="edit" slot-scope="{ data }">
                    <div class="putaway sb">
                        <div class="putaway_logo" v-if="data == 2">
                            <img src="@/assets/img/edit.png" alt="">
                            <div>編輯計劃</div>
                        </div>
                        <div v-else></div>
                        <div class="putaway_logo centerL" v-if="data == 2">
                            <img src="@/assets/img/up.png" alt="">
                            <div>上架計劃</div>
                        </div>
                        <div class="putaway_logo centerL" v-else-if="data == 1">
                            <img src="@/assets/img/down.png" alt="">
                            <div>下架計劃</div>
                        </div>
                        <div class="putaway_logo" v-if="data == 2">
                            <img src="@/assets/img/delete.png" alt="">
                            <div>刪除計劃</div>
                        </div>
                        <div v-else></div>
                    </div>
                </template>
            </Module>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            columns: [
                {title:'廣告計劃名稱',key:'name'},
                {title:'廣告類型',key:'category'},
                {title:'廣告區域',key:'area'},
                {title:'廣告投放時段',key:'time'},
                {title:'廣告投放過期', key: 'outTime'},
                {title:'廣告投放總價',key:'price'},
                {title:'廣告計劃狀態',slot:'state'},
                {title:'廣告媒體內容',slot:'content'},
                {title:'操作',slot:'edit'},
            ],
            arr:[
                {name:'食品會',category: '食品，美食，時尚',area: '九龍', time: '繁忙時段(9am-9pm);非繁忙時段(9pm-9am)',
                outTime: '2021-06-21~2021-06-28', price: '$6000HKD', state: 1, content: '查看預覽', edit: '操作',  active:true},
                {name:'食品會',category: '食品，美食，時尚',area: '九龍', time: '繁忙時段(9am-9pm);非繁忙時段(9pm-9am)',
                outTime: '2021-06-21~2021-06-28', price: '$6000HKD', state: 2, content: '查看預覽', edit: '操作',  active:true},
            ],
        }
    },
    methods: {
        back () {
             this.$router.back()
        }
    }
}
</script>

<style lang='less' scoped>
    .AdvertisingOperation {
        margin-top: 20px;
        height: calc(100% - 30px);
    }
    .back {
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
    .btn {
        padding: 2px 5px;
        border-radius: 4px;
        color: white;
        display: inline-block;
        font-size: 14px;
        @media screen and (max-width: 1300px) {
            font-size: 12px;
        }
    }
    .table {
        width: 97%;
        background: #F7F7F7;
        height: 100%;
        margin-top: 20px;
    }
    .red {
        background: #DC3545;
    }
    .green {
        background: #198754;
    }
    .sure_state {
        color: #75F97E;
    }
    .no_state {
        color: #FA3A3A;
    }
    .preview {
        font-size: 13px;
        @media screen and (max-width: 1300px) {
            font-size: 12px;
        }
        img {
            width: 40px;
            @media screen and (max-width: 1500px) {
                width: 35px;
            }
            @media screen and (max-width: 1300px) {
                width: 30px;
            }
        }
    }
    .add {
        display: inline-block;
        padding: 6px 10px;
        border: solid 1px #435EBE;
        color: #435EBE;
        border-radius: 5px;
    }
    .confirm {
        padding: 10px 16px;
        border-radius: 4px;
        background: #435EBE;
        color: white;
        display: inline-block;
    }
    .toufang {
        @media screen and (max-width: 1300px) {
            font-size: 12px;
        }
    }
    .putaway_logo {
        font-size: 14px;
        @media screen and (max-width: 1300px) {
            font-size: 12px;
        }
        img {
            width: 40px;
            @media screen and (max-width: 1500px) {
                width: 35px;
            }
            @media screen and (max-width: 1300px) {
                width: 30px;
            }
        }
    }
    .centerL {
        margin: 0 5px;
    }
</style>