<template>
    <div class="chatRoom">
        <div class="wrap">
            <div class="al">
                <div class="al">
                    <img class="chatLogo" src="@/assets/img/chatLogo.png" alt="">
                </div>
                <div class="explan bold"> Help & Suppot </div>
            </div>
            <div class="chat_item flex">
                <div class="friendsList">
                    <div class="friend_item tc">666</div>
                </div>
                <div class="chat_ui">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .chatRoom {
        flex: 10;
        height: 100%;
        border: solid 1px;
    }
    .wrap {
        width: 100%;
        height: 100%;
        border: solid 1px;
        padding: 0 20px;
    }
    .chatLogo {
        width: 40px;
        margin-right: 7px;
    }
    .chat_item {
        border: solid 1px;
        height: 500px;
    }
    .friendsList {
        width: 270px;
        border: solid 1px rgb(185, 181, 181);
    }
    .friend_item {
        padding: 20px 0;
        background: @logout;
    }
    .chat_ui {
        flex: 10;
        height: 100%;
    }
</style>