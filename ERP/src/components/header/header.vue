<template>
    <div class="header sb">
        <div style="height: 81px;">
            <div class="title">{{title}}</div>
            <div class="c_title">{{text}}</div>
        </div>
        <div class="flexEnd dataTable">
            <div style="display: inline-block; height: 21px;margin-top: 10px" v-if="!backBtn">
                <span class="cursor Dashboard" style="color: #435EBE" @click="home">{{$t("lang.Dashboard.name")}}</span> 
                <span class="padding">/</span>
                <span class="DataTable" style="color: gray">{{$t("lang.DataTable.name")}}</span>
            </div>
            <div class="backBtn al cursor" v-else @click="back">
                {{$t('lang.Back.name')}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    watch: {
        title: {
            handler (val) {
                if (val) {
                    this.title = val
                }
            }
        },
        text: {
            handler (val) {
                if (val) {
                    this.text = val
                }
            }
        },
        backBtn: {
            handler (val) {
                if (val) {
                    this.backBtn = val
                }
            }
        }
    },
    computed: {
        title: {
            get () { return this.$store.state.user.title },
            set (val) {
                this.$store.commit('setUser', { key: 'title', value: val})
            }
        },
        text: {
            get () { return this.$store.state.user.text },
            set (val) {
                this.$store.commit('setUser', { key: 'text', value: val})
            }
        },
        backBtn: {
            get () { return this.$store.state.user.backBtn },
            set (val) {
                this.$store.commit('setUser', { key: 'backBtn', value: val})
            }
        },
    },
    methods: {
        home () {
            this.$router.push('Home')
            setTimeout(() => {
                this.$nextTick(() => {
                    this.$emit('getback')
                })
            },10)
        },
        back () {
            this.backBtn = false
            this.$router.back()
            setTimeout(() => {
                this.$nextTick(() => {
                    this.$emit('getback')
                })
            },10)
            
        }
    }
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    .header {
        padding: 50px 20px 20px 0;
    }
    .backBtn {
        color: white;
        padding: 5px 10px;
        background: @theme;
        border-radius: 7px;
        height: 40px;
        @media screen and (max-width: 800px) {
            padding: 2px 7px;
        }
    }
    .padding {
        padding: 0 10px;
        @media screen and (max-width: 800px) {
            padding: 0 5px;
        }
    }
    .DataTable, .Dashboard {
        font-size: 15px;
        @media screen and (max-width: 1300px) {
            font-size: 14px;
        }
        @media screen and (max-width: 800px) {
            font-size: 12px;
        }
    }
</style>