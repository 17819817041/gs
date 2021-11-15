<template>
    <div class="technology">
        <div class="technology_content mg">
            <div class="content_item clear">
                <div class="float title_p sa al">
                    <div>
                        <div class="technology_bold">3分鐘</div>
                        <div class="technology_size12">廣告媒體時長</div>
                    </div>
                    <div>
                        <div class="technology_bold">5天</div>
                        <div class="technology_size12">廣告週期</div>
                    </div>
                    <div class="width166">
                        <div class="technology_bold">區域/街道</div>
                        <div class="technology_size12">精確投放</div>
                    </div>
                </div>
                <div class="float title_p1 sa al">
                    <div>
                        <div class="technology_bold_red">計劃原價</div>
                        <div class="technology_bold_red">$666666 HKD</div>
                    </div>
                    <div>
                        <div class="youhui"><img src="@/assets/img/youhui.png" alt=""></div>
                    </div>
                    <div class="flex al">
                        <div class="technology_bold dor radius ju al">$</div>
                        <div class="technology_bold">999</div>
                        <div class="hkd">HKD</div>
                        <div class="choose_btn cursor technology_bold">選中</div>
                    </div>
                </div>
                <div class="content_msg">
                    <div class="bold">套餐內容</div>
                    <div class="msg_item">廣告媒體時長3分鐘，可自選媒體內容</div>
                    <div class="msg_item">廣告週期5天，可按需求進行選擇</div>
                    <div class="msg_item">精確投放到區域/街道，可按需要進行選取</div>
                    <div class="msg_item">可指定時段的某個準確時間進行投放廣告媒體內容</div>
                    <div class="msg_item">套餐所選的區域/街道，在廣告計劃播放時段，會同步播放廣告媒體內容</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .technology {
        height: 102%;
        padding-top: 20px;
        background: white;
    }
    .content_item {
        border: solid 2px #3DFFFC;
        position: relative;
        border-radius: 5px;
        .content_msg {
            position: absolute;
            left: 0;
            top: 100px;
            font-size: 13px;
            width: 100%;
            padding: 10px 20px 20px 20px;
            border-radius: 4px;
            border: solid 1px rgb(230, 230, 230);
            @media screen and (max-width: 753px) {
                top: 130px;
            }
        }
    }
    .msg_item {
        color: rgb(156, 156, 156);
        font-size: 13px;
        padding: 25px 10px 10px 10px;
        border-bottom: solid 1px rgb(230, 230, 230);
    }
    .technology_content {
        width: 100%;
        max-width: 900px;
        height: 100%;
    }
    .title_p {
        min-width: 300px;
        width: 45%;
        height: 100px;
        @media screen and (max-width: 753px) {
            height: 75px;
            width: 100%;
        }
    }
    .title_p1 {
        min-width: 300px;
        width: 55%;
        height: 100px;
        @media screen and (max-width: 753px) {
            height: 55px;
            width: 100%;
        }
    }
    .width166 {
        @media screen and (max-width: 753px) {
            min-width: 166px;
            width: 166px;
        }
    }
    .youhui {
        width: 105px;
        @media screen and (max-width: 753px) {
            width: 55px;
        }
        img {
            width: 100%;
        }
    }
    .technology_bold {
        font-size: 14px;
        font-weight: bold;
        @media screen and (max-width: 753px) {
            font-size: 12px;
        }
    }
    .technology_bold_red {
        font-size: 14px;
        font-weight: bold;
        color: red;
        @media screen and (max-width: 753px) {
            font-size: 12px;
        }
    }
    .technology_size12 {
        font-size: 12px;
        color: gray;
    }
    .dor {
        width: 45px;
        height: 45px;
        background: rgb(235, 235, 235);
        margin-right: 10px;
    }
    .hkd {
        color: gray;
        font-size: 12px;
        margin: 0 10px;
    }
    .choose_btn {
        color: white;
        background: #1BFEF7;
        border-radius: 17px;
        padding: 5px 17px;
    }
</style>