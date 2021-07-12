<template>
    <div class="firstAid al ju">
        <div class=" first_item">
            <div class="firstAid_title tc">EMERGENCY FIRST AID CALL</div>
            <div class="choose tc">Choose the Pet</div>
            <div class="sb first_pet" v-if="more">
                <div class="first_pet_item sb">
                    <div class="ju al first_pet_item_i">
                        <div class="ju al img_i">
                            <img class="cursor" :src="petList[0].image" v-if="petList[0].image" alt="">
                            <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
                        </div>
                    </div>
                    <div class="ju al first_pet_item_i">
                        <div class="ju al img_i">
                            <img class="cursor" :src="petList[1].image" v-if="petList[1].image" alt="">
                            <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
                        </div>
                    </div>
                    <div class="ju al first_pet_item_i">
                        <div class="ju al img_i">
                            <img class="cursor" src="@/assets/img/other.png" alt="" @click="other">
                        </div>
                    </div>
                </div>
            </div>
            <div class="sb first_pet" v-else>
                <div class="first_pet_item sb box" @mousedown="move">
                    <div v-for="(item,i) in petList" :key="i" class="ju al first_pet_item_i">
                        <div class="ju al img_i">
                            <img class="cursor" :src="item.image" v-if="item.image" alt="">
                            <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
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
            more: false
        }
    },
    created () {
        
    },
    computed: {
        petList: {
            get () {return this.$store.state.user.petList},
            set (val) {
                this.$store.commit("setUser", {
                    key: "petList",
                    value: val
                })
            },
        },
    },
    methods: {
        other () {
            this.more = false
        },
        move (e) {
            console.log(e,123)
            var box = document.getElementsByClassName("box")[0];//获取元素
            var x;//存储div的坐标
            var isDrop = true;//移动状态的判断鼠标按下才能移动
            x = e.clientX - box.offsetLeft;
            if(isDrop) {
    　　　　    var e = e || window.event;
            　　var moveX = e.clientX - x;//得到距离左边移动距离
        　　    box.style.left = moveX + "px";
　　　　　　 } else{
                return ;
　　　　　　 }
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .firstAid {
        flex: 10;
        height: 100%;
        .firstAid_title {
            font-size: 45px;
            font-weight:bold;
            color: #707070;
        }
        .choose {
            font-size: 25px;
            color: #4A4B4D;
            padding: 50px 0;
        }
    }
    .first_item {
        width: 70%;
        border: solid 1px;
    }
    .first_pet {
        width: 100%;
    }
    .first_pet_item {
        width: 100%;
        min-width: 100%;
        overflow: auto;
        .first_pet_item_i {
            min-width: 33.33%;
        }
    }
    .first_pet_item::-webkit-scrollbar {
        width: 8px;
    }
    .first_pet_item::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: rgb(216, 216, 216);
    }
    .img_i {
        width: 235px;
        height: 235px;
        border-radius: 50%;
        overflow: hidden;
        img {
            height: 100%;
        }
    }
</style>