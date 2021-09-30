<template>
    <div class="videoList clear">
        <div class="videoList_item_wrap float cursor" v-for="item in 30" :key="item" @click="edit(item)">
            <div class="video_item">

            </div>
            <div class="title_text tc bold">
                title
            </div>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="1100px">
            <div class="sb edit_wrap">
                <div class="i_menu">
                    <div class="menu_child">
                        <input type="text" class="tc" :value="input">
                    </div>
                    <div class="menu_child">
                        <textarea name="" id="" cols="26" rows="10"></textarea>
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
            input: 123
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

<style scoped lang='less'>
    .videoList_item_wrap {
        width: 160px;
        margin: 20px 30px;
    }
    .video_item {
        width: 150px;
        height: 150px;
        border: solid 1px;
        border-radius: 12px;
        margin: 10px auto;
    }
    .title_text {
        padding: 10px;
        size: 17px;
        border-bottom: solid 2px;
    }
    .edit_wrap {
        height: 450px;
    }
    .i_menu {
        width: 250px;
        height: 100%;
        border: solid 1px;
        border-radius: 15px;
        margin-right: 15px;
        padding: 5px 10px;
    }
    .i_video {
        width: 850px;
        height: 100%;
        border: solid 1px;
        border-radius: 15px;

    }
    input {
        border: none;
        outline: none;
        width: 100%;
    }
    .menu_child {
        border-bottom: solid 1px;
        padding: 10px;
    }
</style>