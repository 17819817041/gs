<style lang="less" scoped>
    @import "@/less/css.less";
    .record {
        // width: 100%;
        height: 100%;
        flex: 10;
    }
    .recordContent {
        height: 100%;
    }
    .recordContent_item {
        background: @content;
        flex: 10;
        height: 100%;
        .itemChild {
            width: 98%;
        }
    }
    .record_message {
        .record_item {
            margin-bottom: 15px;
            width: 98%;
            background: white;
            border-radius: 10px;
        }
        .about {
            padding: 0 0 7px 30px;
        }
    }
    .petMessage_title {
        color: #5E5E5E;
    }
    .record_wrap {
        padding: 25px 0;
    }
    .noPadding {
        padding: 0 0 4px 30px !important;
    }
    .record_message1 {
        margin-left: 60px;
        width: 50%;
        position: relative;
    }
    .record_image {
        width: 15%;
    } 
    .dog_img{
        padding: 25px 0;
        width: 200px;
        height: 200px;
        transition: 0.25s;
        @media screen and (max-width:1500px) {
            width: 150px;
            height: 150px;
        }
    }
    .children {
        transition: 0.25s;
        @media screen and (max-width:1430px) {
            width: 40% !important;
        }
    }
    .about {
        padding: 0 0 12px 30px;
        transition: 0.25s;
        @media screen and (max-width:1299px) {
            padding: 0 0 11px 20px !important;
        }
    }
    .size22 {
        font-size: 22px;
    }
    .medialRecord {
        padding: 20px 0 20px 30px;
    }
    .vetRecord {
        width: 80%;
        word-wrap: break-word;
    }
</style>

<template>
    <div class="record">
        <div class="recordContent">
            <div class="recordContent_item">
                <div class="itemChild mg">
                    <div class="explan al">
                        <img src="@/assets/img/recordImg.png" alt="">
                        Medical Record History
                    </div>
                    <div class="record_message">
                        <div class="record_item flex mg">
                            <div class="record_image ju">
                                <img class="dog_img" src="@/assets/img/dog.png" alt="">
                            </div>
                            <div style="flex:10">
                                <div class="record_wrap flex">
                                    <div class="record_message flex size22">
                                        <div>
                                            <div class="flex about">
                                                <div>Pet ID</div>
                                            </div>
                                            <div class="about">
                                                <div>Name</div>
                                            </div>
                                            <div class="about">
                                                <div>Age</div>
                                            </div>
                                            <div class="about">
                                                <div>Pet Type</div>
                                            </div>
                                            <div class="about">
                                                <div>Breed</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="about">
                                                <div>Pet ID66666666</div>
                                            </div>
                                            <div class="about">
                                                <div>Pet ID</div>
                                            </div>
                                            <div class="about">
                                                <div>Pet ID</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="record_message1 flex">
                                        <div class="children size22">
                                            <div class="about">
                                                <div>Gender</div>
                                            </div>
                                            <div class="about">
                                                <div>Neutered status</div>
                                            </div>
                                            <div class="about">
                                                <div>Weight</div>
                                            </div>
                                            <div class="about">
                                                <div>Remarks</div>
                                            </div>
                                        </div>
                                        <div class="children size22">
                                            <div class="about">
                                                <div>Gender</div>
                                            </div>
                                            <div class="about">
                                                <div>Neutered status</div>
                                            </div>
                                            <div class="about">
                                                <div>Weight</div>
                                            </div>
                                            <div class="about">
                                                <div>Remarks</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="medialRecord size22">
                                    <div>Medical Record</div>
                                    <div>Date: 2021/5/24</div>
                                    <div>Vet: Dr Beck</div>
                                    <div class="vetRecord">
                                        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                        XXXXXXXXXXXXXXXXXXXXXXXXX
                                    </div>
                                </div>
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

}
</script>

