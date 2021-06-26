<style lang="less" scoped>
    @import "@/less/css.less";
    .notice {
        flex: 10;
        .notice_content {
            height: 100%;
        }
    }
    .notice_content_wrap {
        flex: 10;
        height: 100%;
        background: @content;
    }
    .notice_item {
        width: 98%;
        margin: 15px auto;
        padding: 10px 10px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 2px 1px rgb(192, 191, 191);
    }
    .notice_content_item {
        height: 100%;
    }
    .john {
        width: 50px;
        height: 50px;
        padding: 0 15px;
    }
    .notice_information {
        padding-left: 20px;
        .notice_date {
            color: #60A1E0;
        }
    }
</style>

<template>
    <div class="notice">
        <div class="notice_content">
            <div class="notice_content_wrap">
                <div class="explan al"><img src="@/assets/img/information.png" alt=""> Notice</div>
                <div class="notice_content_item flex">
                    <div v-if="active" style="width:100%">
                        <div class="notice_item flex al" v-for="(item,i) in noticeList" :key="i">
                            <div><img class="john" src="@/assets/img/john.png" alt=""></div> 
                            <div class="notice_information">
                                <div>{{item.title}}</div>
                                <div class="notice_date">{{item.date}}</div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="mg size21">No New Message</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            noticeList: [
                {img:'@/assets/img/john.png',title:'Dr. Vinay Misra sent you the picture.',date:'Today 13:00'}
            ],
            active: true
        }
    },
    created () {
        this.message()
    },
    methods: {
        message () {
            if (this.noticeList.length == 0) {
                this.active = false
            }
        }
    }
}
</script>

