<style lang="less" scoped>
@import "@/less/css.less";
    .setting {
        flex: 10;
        height: 100%;
        background: @content;
        .myMessage {
            position: relative;
            width: 95%;
            min-height: 180px;
            padding: 25px 0;
            height: 50%;
            border-radius: 15px;
            background: white;
        }
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
    .head {
        width: 24%;
        height: 100%;
        border-radius: 50%;
        position: relative;
        z-index: 100;
        overflow: hidden;
        .set_img {
            height: 70%;
        }
    }
    .msg_item {
        width: 73%;
        height: 80%;                                                //
        .title_a, .msg_b {
            font-size: 17px;
            div {
                padding: 3px 15px 3px 0;
                margin: 7px 15px 7px 0;
            }
        }
    }
    .set_title {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        padding: 20px 15px;
    }
    .buttom_i {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        padding: 20px 15px;
    }
    .reset_b {
        padding: 7px 37px;
        border-radius: 12px;
        background: @ThemeColor;
        color: white;
        box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
        font-size: 13px;
    }
    .edit_b {
        width: 69px;
        border-radius: 12px;
        font-size: 13px;
        margin: 0 15px;
        overflow: hidden;
        box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
        .edit_btn {
            padding: 7px 0px;
            width: 100%;
            height: 100%;
            background: @helpBtn;
        }
    }
    .save_b {
        font-size: 13px;
        margin: 0 15px;
        .save_i .save_btn {
            width: 69px;
            border-radius: 12px;
            padding: 7px 0px;
            height: 100%;
            background: @logoutBtn;
            box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
            margin-left: 10px;
        }
        .save_i .cancle_btn {
            width: 69px;
            border-radius: 12px;
            padding: 7px 0px;
            height: 100%;
            background: @helpBtn;
            box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
        }
    }
    .admin_inp {
        width: 150px;
        border: solid gray 1px;
        border-radius: 10px;
        overflow: hidden;
        input {
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
            font-size: 16px
        }
    }
</style>
<template>
    <div class="setting">
        <div class="explan al Explan_title">
            <img class="setting_img" src="@/assets/img/setting.png" alt="">
            Setting
        </div>
        <div class="myMessage mg flex">
            <div class="set_title ju">
                <div class="bold" style="font-size: 18px">My Profile</div>
            </div>
            <div class="flex al buttom_i flexEnd">
                <div class="reset_b bold cursor" v-if="edit == 1">Reset Password</div>
                <div :class="[ 'ju al tc', {'edit_b': edit == 1}, {'save_b': edit == 2}]">
                    <div class="edit_btn cursor" v-if="edit == 1" @click="edit = 2">Edit</div>
                    <div v-else-if="edit == 2" class="flex save_i">
                        <div class="cancle_btn cursor" @click="edit = 1">Cancel</div>
                        <div class="save_btn cursor" @click="save">Save</div>
                    </div>
                </div>
            </div>
            <div class="head ju al">
                <label for="img" style="height:100%">
                    <img :class="['set_img ', { cursor: edit == 2 }]" :src="userDetail.image" alt="">
                    <input type="file" id="img" v-show="false" v-if="edit == 2" @change="getImage" >
                </label>
            </div>
            <div class="msg_item flex al">
                <div class="title_a">
                    <div class="al">User ID </div>
                    <div class="al">Name </div>
                </div>
                <div class="msg_b">
                    <div class="al">{{userDetail.userId}}</div>
                    <!-- <div class="admin_inp al" v-if="edit == 2">
                        <input type="text" />
                    </div> -->
                    <div v-if="edit == 1">{{userDetail.name}}</div>
                    <div class="admin_inp al" v-if="edit == 2">
                        <input type="text" v-model="name" :placeholder="userDetail.name" @keydown.enter="save"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { updateAdmin, file } from "@/axios/request.js"
export default {
    data () {
        return {
            edit: 1,
            name: ''
        }
    },
    // watch: {
    //     userDetail: {
    //         handler (val) {
    //             if (val) {
    //                 this.userDetail = val
    //             }
    //         },
    //         deep: true
    //     }
    // },
    computed: {
        userDetail: {
            get () { return this.$store.state.user.userDetail },
            set (val) {
                this.$store.commit("setUser", {
                    key: "userDetail",
                    value: val
                })
            },
        }
    },
    methods: {
        save () {
            if (this.name == '') {
                this.$message({
                    type: 'info',
                    message: 'Name cannot be empty!',

                })
            } else {
                let data = {
                    userId: localStorage.getItem('adminUserId'),
                    name: this.name,
                    image: this.userDetail.image
                }
                updateAdmin(data).then(res => {
                    if (res.data.rtnCode == 200) {
                        this.$store.dispatch('getUser',this)
                        this.$message({
                            type: 'success',
                            message: 'Successfully modified!'
                        })
                        this.edit = 1
                    } else {
                        this.$message({
                            type: 'error',
                            message: 'Fail to edit!'
                        })
                    }
                }).catch(e => {
                    this.$message({
                        type: 'error',
                        message: 'Fail to edi!'
                    })
                })
            }
        },
        getImage (e) {
            this.dealImg(e.target.filse[0],(img) => {
                var formData = new FormData();
                formData.append('file', img);
                file(formData).then(res => {
                    console.log(res)
                    if (res.data.rtnCode == 200) {
                        this.userDetail.image = res.data.data
                    } else {
                        this.userDetail.image = ''
                    }
                })
            })
            
        }
    }
}
</script>

