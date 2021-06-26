<template>
    <div class="vetBooking mg tc">
        <div class="size21">Booking</div>
        <div class="size12">Select an option to book</div>
        <div class="visitAndWay sb mg">
            <div class="phone">
                <div><img src="@/assets/img/phoneWay.png" alt=""></div>
                <div class="size13">Phone Consultation</div>
                <div class="size12">Min session 10 mins . $0.99 per/min</div>
            </div>  
            <div class="video">
                <div><img src="@/assets/img/videoWay.png" alt=""></div>
                <div class="size13">Video Consultation</div>
                <div class="size12">Min session 15 mins . $1.99 per/min</div>
            </div>
            <div class="visit">
                <div><img src="@/assets/img/bookingImg.png" alt=""></div>
                <div class="size13">Physical Visit</div>
                <div class="size12">Book free, all fees are payable at clinic</div>
            </div>
        </div>
        <div class="form_select">
            <el-form>
                <el-form-item>
                    <el-select v-model="text">
                        <el-option v-for="(item,i) in text1" :key="i" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="text">
                        <el-option v-for="(item,i) in text1" :key="i" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <div class="sb">
                        <div class="pet">
                            <el-select v-model="text">
                                <el-option v-for="(item,i) in text1" :key="i" :value="item"></el-option>
                            </el-select>
                        </div>
                        <div class="star_time">
                            <el-select v-model="text">
                                <el-option v-for="(item,i) in text1" :key="i" :value="item"></el-option>
                            </el-select>
                        </div>
                        <div class="end_time">
                            <el-select v-model="text">
                                <el-option v-for="(item,i) in text1" :key="i" :value="item"></el-option>
                            </el-select>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <div class="sb">
                        <div class="day">
                            <el-select v-model="text">
                                <el-option v-for="(item,i) in text1" :key="i" :value="item"></el-option>
                            </el-select>
                        </div>
                        <div class="month">
                            <el-select v-model="text">
                                <el-option v-for="(item,i) in text1" :key="i" :value="item"></el-option>
                            </el-select>
                        </div>
                        <div class="years">
                            <el-select v-model="text">
                                <el-option v-for="(item,i) in text1" :key="i" :value="item"></el-option>
                            </el-select>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <div class="textarea_wrap">
                        <textarea class="width100 textarea" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <el-button class="width100" type="primary" @click="vetConfirm">Book Now</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            text:'',
            text1: [1,2,3,3,6,5,4]
        }
    },
    methods: {
        vetConfirm () {
            this.$router.push("/vetConfirm")
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .vetBooking {
        width: 700px;
    }
    .opacity {
        opacity: 1 !important;
    }
    .visitAndWay {
        width: 99%;
        .phone, .video, .visit {
            padding: 20px 0;
            width: 32%;
            div img {
                opacity: 0.8;
                padding: 13px 0;
            }
        }
    }
    .pet {
        width: 20%;
    }
    .star_time, .end_time {
        width: 38%;
    }
    .textarea_wrap {
        .textarea {
            border: none;
            outline: none;
            background: @content;
            resize: none;
            border-radius: 7px;
        }
    }
</style>