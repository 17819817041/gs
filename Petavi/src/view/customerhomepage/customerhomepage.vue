<style lang="less" scoped>
@import "@/less/css.less";
    .customerhomepage {
        height: 100%;
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
            z-index: 1000;
        }
        
    }
    .list img {
        transition: 0.3s;
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
        padding-top: 10px;
        // border: solid red 1px;
        height: 100%;
        overflow: auto;
    }
    .present_message {
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
        transform: rotateZ(180deg);
    }
    .list {
        @media screen and (max-width:1300px) {
            display: none;
        }
    }
</style>

<template>
    <div class="customerhomepage">
        <div><myHeaderL></myHeaderL></div>
        <div class="customer_content flex">
            <div class="list">
                <img @click="showPetList" v-show="active" :class="[ {rotate: rotate} ]" src="@/assets/img/arrow.png" alt="">
                <div :class="['pet_list noBar', {height:show}]">
                    <div class="list_item mg cursor" v-for="(item,i) in petList" :key="i">{{item.name}}</div>
                </div>
            </div>
            <div class="present_message noBar" @scroll="scroll">
                
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
            rotate: false,
            active: true,
            timer: null,
            pageNum: 0,
            pageSize: 100,
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
        
    },
    methods: {
        scroll (val) {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                console.log(val)
                if (val.target.scrollTop >= 40) {
                   this.active = false
                } else {
                    this.active = true
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

