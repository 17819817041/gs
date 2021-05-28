<template>
    <div class="vetSetting">
        <div class="explan al Explan_title mg">
            <img class="setting_img" src="@/assets/img/setting.png" alt="">
            Setting
        </div>
        <div class="vetSetting_content mg">
            <div class="vetSetting_content_item">
                <div class="vetSetting_content_item_title">
                    <div class=" size26 bold tc">My Profile</div>
                    <div class="edit cursor tc" v-if="edit" @click="editBtn">Edit</div>    
                    <div class="save cursor tc" v-else @click="saveBtn">Save</div>
                </div>
                <div class="profile flex">
                    <div class="profile_img ju">
                        <img class="profileimg" src="@/assets/img/profileimg.png" alt="">
                    </div>
                    <div class="profile_message">
                        <div class="message_wrap flex">
                            <div class="title al">User ID</div>
                            <div class="mean al">0000001</div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al">Name</div>
                            <div class="mean al">Dr Beck</div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al">Age</div>
                            <div class="mean al">-</div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al">Location</div>
                            <div class="mean al">Hong Kong,China</div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al">Mobile</div>
                            <div class="mean al">(852)2211 3355</div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al">Gender</div>
                            <div class="mean al">Male</div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al">Education</div>
                            <div class="mean al">-</div>
                        </div>
                        <div class="message_wrap flex">
                            <div class="title al">Gertification</div>
                            <div class="mean al">-</div>
                        </div>

                        <div class="aboutMe">
                            <div>More about you</div>
                            <div>KKKKKKKKKKKKKKKKKKKKK</div>
                        </div>
                    </div>
                    <div class="profile_message1">
                        <div>
                            <div class="message_wrap flex">
                                <div class="title al">Veterinary Hospital</div>
                                <div class="mean al">AAA Hospital</div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="title al">Work experience</div>
                                <div class="mean al">8+ years</div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="al">Working address and Timing</div>
                            </div>
                            <div class="message_wrap address_child">
                                <div>Manning House, Queen's Road Central, Central, Hong Kong</div>
                                <div style="margin-top:10px">9:00 - 18:30 Monday to Friday</div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="title al">Professional field</div>
                                <div class="mean al">-</div>
                            </div>
                        </div>

                        <div class="vetReset sa">
                            <div></div>
                            <div class="resetBtn al ju cursor" @click="reset">Reset Password</div>
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
            edit: true
        }
    },
    methods: {
        editBtn () {
            this.edit = false
        },
        saveBtn () {
            this.edit = true
        },
        reset () {
            this.$router.push("/vetReset")
        }
    }
}
</script>

<style lang="less" scoped>
    @import "@/less/css.less";
    .vetSetting {
        flex: 10;
        height: 100%;
        background: @content;
    }
    .setting_img {
        width: 37px;
        padding-right: 5px;
    }
    .Explan_title {
        width: 96.5%;
        margin: auto;
        padding: 15px 0;
    }
    .size26 {
        font-size: 26px;
        color: #5E5E5E;
    }
    .vetSetting_content {
        width: 96.5%;
        .vetSetting_content_item {
            padding: 25px 0;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 2px 1px gray;
        }
    }
    .vetSetting_content_item_title {
        position: relative;
        .edit, .save {
            position: absolute;
            right: 20px;
            top: 10%;
            width: 80px;
            padding: 5px 0;
            border-radius: 10px;
        }
        .edit {
            background: @helpBtn;
        }
        .save {
            background: @hdColor;
        }
    }
    .profile_message1 {
        width: 45%;
        .address_child {
            color: #333333;
            font-size: 12px;
        }
        .message_wrap {
            width: 300px;
            padding: 20px 0;
            .title{    
                width: 260px;
            }
            .mean {
                width: 200px;
            }
        }
    }
    .profile_message {
        width: 25%;
        .message_wrap {
            width: 300px;
            padding: 10px 0;
            .title, .mean {    
                width: 250px;
            }
        }
        .aboutMe {
            margin-top: 50px;
        }
    }
    .profile_img {
        width: 25%;
        .profileimg {
            width: 300px;
            height: 300px;
        }
    }
    .vetReset {
        width: 600px;
        margin-top: 90px;
    }
    .resetBtn {
        background: @logout;
        width: 220px;
        border-radius: 17px;
        color: white;
        padding: 7px 0;
    }
</style>