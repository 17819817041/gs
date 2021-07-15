<template>
    <div class="vetConfirm mg">
        <div class="ju"><img class="ok_img" src="@/assets/img/OK.png" alt=""></div>
        <div class="size23 tc thank">THANK YOU!</div>
        <div class="size13 tc" style="padding:0 0 30px 0">We have received your request and confirm you after few minutes.</div>
        <div class="ju" style="padding:20px 0"><span class="size14">REFERENCE ID </span> <span> {{referenceId}}</span></div>
        <svg class="width100" style="height:22px" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <line x1="100%" y1="0" x2="0" y2="0" style="stroke :rgb(192,192,192);stroke-width:5" stroke-dasharray="10,5" />
        </svg>

        <div class="vetConfirm_message sa">
            <div class="vetConfirm_item"><img src="@/assets/img/smile.png" alt=""></div>
            <div class="DATE vetConfirm_item" style="padding-left:20px">
                <div class="vetConfirm_date">
                    <div class="size14">Date</div>
                    <div class="size19">Tue, 27 Mar, 2018</div>
                    <div class="size14">in 3 days</div>
                </div>
                <div class="margin">
                    <div class="size14">TO</div>
                    <div class="size19">Dr. Sherley Billman</div>
                    <div class="size14">General Obstetrics</div>
                </div>
                <div>
                    <div class="size14">FEES</div>
                    <div class="size19">$30.40 per/sesstion</div>
                </div>
            </div>
            <div class="vetConfirm_item">
                <div style="padding-left:50px">
                    <div class="size14">APPTS. TIME</div>
                    <div class="size19">9:00 AM</div>
                    <div style="height:19px"></div>
                </div>
                <div class="margin" style="padding-left:50px">
                    <div class="size14">CONST. TYPE</div>
                    <div class="size19">Video</div>
                </div>
            </div>
        </div>
        <div class="ju" style="margin-top:50px">
            <el-button style="width:200px;border-radius:10px" type="primary">OK, THANK!</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            referenceId: 'MQ50355404'
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .vetConfirm {
        width: 820px;
        height: 100%;
        .thank {
            padding: 20px 0;
        }
    }
    // .vetConfirm_message {
    //     border: solid 1px;
    // }
    .ok_img {
        width: 130px;
    }
    .size23 {
        font-size: 23px;
    }
    .vetConfirm_item {
        width: 30%;
    }
    .margin {
        margin: 35px 0;
    }
    .size14 {
        font-size: 14px;
        color: #9F9F9F;
    }
    .size19 {
        font-size: 19px;
        padding: 3px 0;
    }
</style>