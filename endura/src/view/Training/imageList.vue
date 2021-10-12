<template>
    <div class="videoList clear">
        <div class="videoList_item_wrap float" v-for="item in 6" :key="item">
            <div class="t_message flex al mg">
                <div class="t_header ju al"><img src="@/assets/img/smile.png" alt=""></div>
                <div class="t_title mg">
                    <div class="t_file">https://baidu.be/alkshfw2684kjhkju</div>
                    <div class="t_date">2021/6/16 22:51</div>
                </div>
            </div>
            <div class="t_content">
                <div class="TITLE tc bold">TITLE</div>
                <div class="content_item">
                    College of Internet of Things (IOT) Engineering, Hohai University, is formerly known as Department of Electronic Engineering in College of Mechanical Engineering, Hohai University,founded in 1986. The college’s name was changed to College of Computer Science and Information Engineering (Changzhou) in 2009 and its name was changed to College of Computer Science and Information (Changzhou) in 2009 respectively, finally the college name was changed to College of Internet of Things Engineering in November 2012.
                </div>
                <div class="flexEnd">
                    <span class="edit cursor ju al" @click="edit(item)">
                        <div class="al"><img src="@/assets/img/edit.png" alt=""></div>
                        <div class="size14 bold">Edit</div>
                    </span>
                </div>
            </div>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="1100px">
            <div class="sb edit_wrap">
                <div class="i_menu">
                    <div class="menu_child">
                        <input type="text" class="tc bold" :value="input">
                    </div>
                    <div class="menu_child">
                        <textarea name="" id="" class="bold" cols="19" rows="10">
                            College of Internet of Things (IOT) Engineering, Hohai University, is formerly known as Department of Electronic Engineering in College of Mechanical Engineering, Hohai University,founded in 1986. The college’s name was changed to College of Computer Science and Information Engineering (Changzhou) in 2009 and its name was changed to College of Computer Science and Information (Changzhou) in 2009 respectively, finally the college name was changed to College of Internet of Things Engineering in November 2012.
                        </textarea>
                    </div>
                    <div class="save_wrap flexEnd">
                        <span class="save cursor ju al">
                            <div class="al"><img src="@/assets/img/save.png" alt=""></div>
                            <div class="size14 bold">Save</div>
                        </span>
                    </div>
                </div>
                <div class="i_video">

                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dialogVisible: false,
            input: 'TITLE'
        }  
    },
    methods: {
        edit (item) {
            console.log(item)
            this.dialogVisible = true
        },
    }
}
</script>

<style lang='less' scoped>
    .videoList_item_wrap {
        width: 46%;
        margin: 0px 2% 20px 2%;
        box-shadow: 1px 1px 3px rgb(180, 180, 180);
        border-radius: 12px;
        background: white;
    }
    .edit_wrap {
        height: 450px;
    }
    .i_menu {
        width: 250px;
        height: 100%;
        border: solid 1px;
        border-radius: 18px;
        margin-right: 15px;
        padding: 5px 10px;
    }
    .i_video {
        width: 850px;
        height: 100%;
        border: solid 1px;
        border-radius: 18px;
    }
    input {
        border: none;
        outline: none;
        width: 100%;
        font-size: 16px;
        color: black;
    }
    .menu_child {
        border-bottom: solid 2px gray;
        padding: 10px;
    }
    textarea {
        resize: none;
        border: none;
        outline: none;
        font-size: 17px;
        line-height: 30px;
        text-decoration: underline;
    }
    .t_message {
        padding: 20px 0;
        width: 85%;
    }
    .t_file {
        max-width: 257px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 1;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }
    .t_header {
        width: 50px;
        min-width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        img {
            height: 100%;
        }
    }
    .t_date {
        color: #5FB3EF;
        font-style: oblique;
    }
    .t_content {
        width: 85%;
        // height: 200px;
        border-radius: 12px;
        box-shadow: 2px 1px 5px rgb(172, 172, 172);
        margin: 15px auto;
        padding: 20px;
    }
    .TITLE {
        border-bottom: solid 2px;
    }
    .save_wrap {
        margin-top: 20px;
    }
    .content_item {
        margin-top: 20px;
        text-decoration: underline;
        line-height: 30px;
    }
    .edit {
        padding: 0px 10px;
        border: solid 2px gray;
        border-radius: 18px;
        img {
            padding-right: 1px;
            width: 25px;
        }
    }
    .save {
        padding: 3px 10px;
        border: solid 2px gray;
        border-radius: 18px;
        img {
            padding-right: 3px;
            width: 20px;
        }
    }
</style>