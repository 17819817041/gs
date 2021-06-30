<style lang="less" scoped>
    @import "@/less/css.less";
    .notice {
        flex: 10;
        height: 100%;
        .notice_content {
            height: 100%;
        }
    }
    .notice_content_wrap {
        flex: 10;
        height: calc(100% - 59px);
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
    .noData {
        width: 100%;
        height: 100%;
        background: white;
    }
    .notice_list {
        width:100%;
        height: 100%;
    }
</style>

<template>
    <div class="notice">
        <div class="notice_content">
            <div class="notice_content_wrap">
                <div class="explan al"><img src="@/assets/img/information.png" alt=""> Notice</div>
                <div class="notice_content_item flex">
                    <div v-if="noticeList" class="notice_list">
                        <div class="notice_item flex al" v-for="(item,i) in noticeList" :key="i">
                            <div><img class="john" src="@/assets/img/john.png" alt=""></div> 
                            <div class="notice_information">
                                <div>{{item.title}}</div>
                                <div class="notice_date">{{item.date}}</div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="noticeList === null" class="noData">
                        <div class="ju"><img style="width:100px; margin: 15px" src="@/assets/img/info.png" alt=""></div>
                        <div class="tc " style="font-size: 20px;color:gray;">No notice</div>
                    </div>
                    <div v-else class="mg size21">No New Message</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { notice } from "@/axios/request.js"
export default {
    data () {
        return {
            // noticeList: [
            //     {img:'@/assets/img/john.png',title:'Dr. Vinay Misra sent you the picture.',date:'Today 13:00'}
            // ],
            active: true,
            pageNum: 1,
            pageSize: 10,
            noticeList: []
        }
    },
    created () {
        this.getNoticeList()
    },
    methods: {
        getNoticeList () {
            let data = {
                userId: localStorage.getItem('userId'),
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            notice(data).then(res => {
                console.log(res,'notice')
                if (res.data.rtnCode == 200) {

                } else if (res.data.rtnCode == 201) {
                    this.noticeList = null
                }
            })
        }
    }
}
</script>

