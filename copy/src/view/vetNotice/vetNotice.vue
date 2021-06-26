<style lang="less" scoped>
    @import "@/less/css.less";
    .vetNotice {
        flex: 10;
        .vetNotice_content {
            height: 100%;
        }
    }
    .vetNotice_content_wrap {
        flex: 10;
        height: 100%;
        background: @content;
    }
    .vetNotice_item {
        width: 98%;
        margin: 15px auto;
        padding: 10px 10px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 2px 1px rgb(192, 191, 191);
    }
    .vetNotice_content_item {
        height: 100%;
    }
    .john {
        width: 50px;
        height: 50px;
        padding: 0 15px;
    }
    .vetNotice_information {
        padding-left: 20px;
        .vetNotice_date {
            color: #60A1E0;
        }
    }
</style>

<template>
    <div class="vetNotice">
        <div class="vetNotice_content">
            <div class="vetNotice_content_wrap">
                <div class="explan al"><img src="@/assets/img/information.png" alt="">Notice</div>
                <div class="vetNotice_content_item flex">
                    <div v-if="active" style="width:100%">
                        <div class="vetNotice_item flex al" v-for="(item,i) in vetNoticeList" :key="i">
                            <div><img class="john" src="@/assets/img/john.png" alt=""></div> 
                            <div class="vetNotice_information">
                                <div>{{item.title}}</div>
                                <div class="vetNotice_date">{{item.date}}</div>
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
            vetNoticeList: [
                {img:'@/assets/img/john.png',title:'Dr. Vinay Misra sent you the picture.',date:'Today 13:00'},
                {img:'@/assets/img/john.png',title:'Dr. Vinay Misra sent you the picture.',date:'Today 13:00'},
                {img:'@/assets/img/john.png',title:'Dr. Vinay Misra sent you the picture.',date:'Today 13:00'},
            ],
            active: true
        }
    },
    created () {
        this.message()
    },
    methods: {
        message () {
            if (this.vetNoticeList.length == 0) {
                this.active = false
            }
        },
        
    }
}
</script>

