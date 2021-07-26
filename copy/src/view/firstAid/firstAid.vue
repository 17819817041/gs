<template>
    <div class="firstAid al ju">
        <div class=" first_item">
            <div class="firstAid_title tc">EMERGENCY FIRST AID CALL</div>
            <div class="choose tc">Choose the Pet</div>
            <div class="sb first_pet" v-if="more">
                <div class="first_pet_item sb">
                    <div class="ju al first_pet_item_i">
                        <div class="ju al img_ia">
                            <img class="cursor" :src="petList[0]? petList[0].image:''" v-if="petList[0]" alt="" @click="first_pet(petList[0])">
                            <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
                        </div>
                    </div>
                    <div class="ju al first_pet_item_i">
                        <div class="ju al img_ia">
                            <img class="cursor" :src="petList[1]? petList[1].image:''" v-if="petList[1]" alt="" @click="first_pet(petList[1])">
                            <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
                        </div>
                    </div>
                    <div class="ju al first_pet_item_i">
                        <div class="ju al img_ia">
                            <img class="cursor" src="@/assets/img/other.png" alt="" @click="other">
                        </div>
                    </div>
                </div>
            </div>
            <div class="sb first_pet" v-else>
                <div class="first_pet_item"> 
                    <el-carousel indicator-position="false" :autoplay='false' class="sb">
                        <el-carousel-item v-for="(item,i) in length1" :key="i" style="height: 100%">
                            <div class="ju al img_i float" v-for="(item,i) in petList.slice((i+1)*3-3,(i+1)*3)" :key="i">
                                <img class="cursor" :src="item.image" v-if="item.image" alt="" @click="first_pet(item)">
                                <i class="el-icon-picture-outline" v-else style="font-size:60px;color:gray"></i>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            more: true,
            length1: 0,
            a: {},
        }
    },
    created () {
        this.$store.dispatch('getDoctorList', 1)
    },
    watch: {
        petList: {
            handler (val) {
                this.length1 = Math.ceil(this.petList.length/3)
            }
        },
        immediate: true
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
		userDetail () { return this.$store.state.user.userDetail },
    },
    methods: {
        other () {
            this.more = false
        },
        first_pet (item) {
            console.log(item)
            this.$store.commit('setUser', {
                key: 'pet',
                value: item
            })
            this.$router.push({
                name: 'changeBatch',
                query: item
            })
            // this.starBook(item)
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .firstAid {
        width: 100%;
        height: 100%;
        overflow: hidden;
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
    }
    .first_pet {
        width: 100%;
    }
    .first_pet_item {
        width: 100%;
        min-width: 100%;
        // position: absolute;
        // top: 0;
        // left: 0;
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
        width: 243px;
        height: 243px;
        border-radius: 50%;
        overflow: hidden;
        img {
            height: 100%;
        }
    }
    .img_ia {
        width: 243px;
        height: 243px;
        border-radius: 50%;
        overflow: hidden;
        img {
            height: 100%;
        }
    }
</style>