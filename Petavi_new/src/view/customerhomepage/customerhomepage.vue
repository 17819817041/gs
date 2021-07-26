<style lang="less" scoped>
@import "@/less/css.less";
    .customerhomepage {
        height: 100%;
        .list_wrap {
            position: absolute;
            opacity: 0.5;
            left: 0;
            top: 0;
            width: 100%;
            height: calc(100% + 119px);
            z-index: 600;
            transform: translate(0,-119px);
        }
        .background {
            position: absolute;
            top: -119px;
            left: 0;
            width: calc(100%);
            height: calc(100% + 119px);
            z-index: 900;
            background: gray;
            opacity: 0.5;
        }
    }
    .present_message {
        background: white;
        z-index: 500;
        height: 100%;
        overflow: auto;
        transition: 0.2s;
        @media screen and (max-width:950px) {
            background: white;
            position: fixed;
            top: 90px;
            left: 0;
            border-right: rgb(236, 236, 236) solid 1px;
            width: 180px;
            transform: translate(-180px,0);
            height: 100%;
            // opacity: 0;
        }
    }
    .drawer_width {
        transform: translate(0px,0) !important;
    }

    .customer_content {
        width: 100%;
        box-sizing: border-box;
        height: calc(100% - 119px);
        // border:  solid green;
        position: relative;
        .list {
            position: absolute;
            top: 65px;
            left: 165px;
            z-index: 800;
        }
    }
    .list {
        transition: 0.2s;
        @media screen and (max-width:1300px) {
            left: 141px !important;
            top: 65px;
        }
        @media screen and (max-width:950px) {
            left: -30px !important;
            top: 65px;
        }
    }
    .po_lisy {
        left: 141px !important;
        top: 65px !important;
    }
    .list .img1 {
        transition: 0.2s;
    }
    .img2 {
        transition: 0.3S;
        @media screen and (max-width: 1300px) {
            opacity: 0;
        }
    }
    .pet_list {
        background: white;
        width: 150px;
        max-height: 0;
        position: absolute;
        left: 0;
        top: 100%;
        transition: 0.3s;
        overflow: hidden;
        border-radius: 10px;
    }
    .pet_message {
        flex: 10;
        // padding-top: 10px;
        // border: solid red 1px;
        height: 100%;
        overflow: auto;
    }
    .height {
        max-height: 200px !important;
        border: solid 1px #C9C9C9;
        overflow: auto;
    }
    .list_item {
        display: block;
        width: 96%;
        padding: 2px;
        margin: 10px auto;
        color: #C9C9C9;
        padding-bottom: 5px;
        border-bottom: solid 1px #C9C9C9;
    }
    .list_item:hover {
        background: #f5f4f4;
    }
    .rotate {
        transform: rotateZ(-180deg);
    }
    // .rotate1 {
    //     transform: rotateZ(-180deg);
    // }
</style>

<template>
    <div class="customerhomepage">
        <div><myHeaderL></myHeaderL></div>
        <div class="customer_content flex">
            <div v-show="showback" class="background" @click="closeback"></div>
            <div class="list_wrap" v-if="show" @click="showPetList"></div>
            <div :class="['list', { po_lisy: drawer }]" v-show="nameList">
                <img class="img1" @click="showPetList" :class="[ 'cursor', {rotate: rotate} ]" src="@/assets/img/arrow.png" alt="">
                <!-- <img class="img2" @click="showPetList" v-show="showList" :class="[ 'cursor', {rotate1: rotate} ]" src="@/assets/img/arrow.png" alt=""> -->
                <div :class="['pet_list noBar', {height:show}]">
                    <div class="list_item mg cursor"  @click="cutPet(item,i)" v-for="(item,i) in petList" :key="i">{{item.name}}</div>
                </div>
            </div>
            <div :class="['present_message noBar',{ drawer_width: drawer }]" @scroll="scroll">
                <message></message>
            </div>
            <div class="pet_message noBar">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            show: false,
            Hide: true,
            rotate: false,
            pageNum: 0,
            pageSize: 100,
            pet: {}
        }
    },
    created () {
        this.getPetList()
    },
    watch: {
        petList: {
            handler (val) {
                if (val[0]) {
                    this.pet = val[0]
                } else {
                    this.pet = {}
                }
            },
            immediate: true
        }
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
        firstPet: {
            get () {return this.$store.state.user.firstPet},
            set (val) {
                this.$store.commit("setUser", {
                    key: "firstPet",
                    value: val
                })
            },
        },
        active () { return this.$store.state.user.rotate },
        drawer () { return this.$store.state.user.rotate },
        nameList () { return this.$store.state.user.nameList },
        showback () { return this.$store.state.user.showback },
    },
    methods: {
        closeback () {
            this.$store.commit("setUser", {
                key: "showback",
                value: false
            })
        },
        cutPet (item,i) {
            this.firstPet = i
            this.$store.commit("setUser", { key: "pet",value: item })
            this.$store.commit("setUser", { key: "petId",value: item.id })
            this.rotate = !this.rotate
            this.show = false
        },
        scroll (val) {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                if (val.target.scrollTop >= 30) {
                    this.$store.commit("setUser", { key: "nameList",value: false })
                } else {
                    this.$store.commit("setUser", { key: "nameList",value: true })
                }   
            },10)
        },
        getPetList () {
            var data = {
                userId: localStorage.getItem("userId"),
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            this.$store.dispatch("getPetList",data)
        },
        showPetList () {
            this.show = !this.show
            this.rotate = !this.rotate
        },
    }
}
</script>

