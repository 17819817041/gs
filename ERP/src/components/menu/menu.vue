<template>
    <div class="Menu noBar">
        <div class="ju Logo"><img src="@/assets/img/sake_logo.png" alt=""></div>
        <div style="color: #25396F; padding: 17px 25px;">{{$t(`lang.Menu.name`)}}</div>
        <div class="menu_content">
            <el-menu
                :default-active="index"
                class="el-menu-vertical-demo"
                @select="select"
                text-color="#25396F"
                active-text-color="#ffffff">
                <el-menu-item index="Home" :class="['el-menu-item1',{back_menu: index == 'Home'}]" @click="home">
                    <i class="el-icon-menu"></i>
                    <span slot="title"> {{$t("lang.Dashboard.name")}} </span>
                </el-menu-item>
                <el-submenu index="2" :class="['el-menu-item1',{back_menu: index == 2}]">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>{{$t("lang.General.name")}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item :class="['menu-item el-menu-item1',{back_menu: index == 'Items'}]" index="Items" @click="Items">{{$t("lang.Items.name")}}</el-menu-item>
                        <el-menu-item :class="['menu-item el-menu-item1',{back_menu: index == 'Supplier'}]" index="Supplier" @click="Supplier">{{$t("lang.Supplier.name")}}</el-menu-item>
                        <el-menu-item :class="['menu-item el-menu-item1',{back_menu: index == 'Customer'}]" index="Customer" @click="Customer">{{$t("lang.Customer.name")}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="Financial" :class="['el-menu-item1',{back_menu: index == 'Financial'}]" @click="Financial">
                    <i class="el-icon-document"></i>
                    <span slot="title">{{$t("lang.Financial.name")}}</span>
                </el-menu-item>
                <el-menu-item index="Stock" :class="['el-menu-item1',{back_menu: index == 'Stock'}]" @click="Stock">
                    <i class="el-icon-document"></i>
                    <span slot="title">{{$t("lang.Stock.name")}}</span>
                </el-menu-item>
                <el-menu-item index="Purchase" :class="['el-menu-item1',{back_menu: index == 'Purchase'}]" @click="Purchase">
                    <i class="el-icon-document"></i>
                    <span slot="title">{{$t("lang.Purchase.name")}}</span>
                </el-menu-item>
                <el-menu-item index="Sales" :class="['el-menu-item1',{back_menu: index == 'Sales'}]" @click="Sales">
                    <i class="el-icon-document"></i>
                    <span slot="title">{{$t("lang.Sales.name")}}</span>
                </el-menu-item>
                <el-menu-item index="Lnbound" :class="['el-menu-item1',{back_menu: index == 'Lnbound'}]" @click="Lnbound">
                    <i class="el-icon-document"></i>
                    <span slot="title">{{$t("lang.Inbound.name")}}</span>
                </el-menu-item>
                <el-menu-item index="Outbound" :class="['el-menu-item1',{back_menu: index == 'Outbound'}]" @click="Outbound">
                    <i class="el-icon-document"></i>
                    <span slot="title">{{$t("lang.Outbound.name")}}</span>
                </el-menu-item>
                <div class="Login_btn tc cursor" @click="login">{{$t("lang.login")}}</div>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            index: 'Home'
        }
    },
    mounted () {
        this.index = this.$route.name
        this.pushTItle()
    },
    methods: {
        select (val) {
            this.index = val
        },
        menuName () {
            this.$nextTick(() => {
                this.index = this.$route.name
                this.pushTItle()
            })
        },
        pushTItle () {
            var name = this.$route.name
            if (name == 'Home') {
                this.$store.commit('setUser', { key: 'title', value: ''})
                this.$store.commit('setUser', { key: 'text', value: ''})
            } else if (name == 'Financial') {
                this.$store.commit('setUser', { key: 'title', value: this.$t("lang.Financial.title") })
                this.$store.commit('setUser', { key: 'text', value: 'For user to check they list'})
            } else if (name == 'Stock') {
                this.$store.commit('setUser', { key: 'title', value: this.$t("lang.Stock.title")})
                this.$store.commit('setUser', { key: 'text', value: 'For user to check they list'})
            } else if (name == 'Purchase') {
                this.$store.commit('setUser', { key: 'title', value: this.$t("lang.Purchase.title")})
                this.$store.commit('setUser', { key: 'text', value: 'For user to check they list'})
            } else if (name == 'Sales') {
                this.$store.commit('setUser', { key: 'title', value: this.$t("lang.Sales.title")})
                this.$store.commit('setUser', { key: 'text', value: 'For user to check they list'})
            } else if (name == 'Lnbound') {
                this.$store.commit('setUser', { key: 'title', value: this.$t("lang.Inbound.title")})
                this.$store.commit('setUser', { key: 'text', value: 'For user to check they list'})
            } else if (name == 'Outbound') {
                this.$store.commit('setUser', { key: 'title', value: this.$t("lang.Outbound.title")})
                this.$store.commit('setUser', { key: 'text', value: 'For user to check they list'})
            } else if (name == 'Items' || name == 'Supplier' || name == 'Customer') {
                this.$store.commit('setUser', { key: 'title', value: this.$t("DataTable")})
                this.$store.commit('setUser', { key: 'text', value: 'For user to check they list'})
            }
        },
        login () {
            this.$router.push('/Login')
        },
        home () {
            this.$router.push('Home')
            setTimeout(() => {
                this.$nextTick(() => {
                    this.pushTItle()
                })
            },10)
        },
        Financial () {
            this.$router.push('/Financial')
            setTimeout(() => {
                this.$nextTick(() => {
                    this.pushTItle()
                })
            },10)
        },
        Stock () {
            this.$router.push('/Stock')
            setTimeout(() => {
                this.$nextTick(() => {
                    this.pushTItle()
                })
            },10)
        },
        Purchase () {
            this.$router.push('/Purchase')
            setTimeout(() => {
                this.$nextTick(() => {
                    this.pushTItle()
                })
            },10)
        },
        Sales () {
            this.$router.push('/Sales')
            setTimeout(() => {
                this.$nextTick(() => {
                    this.pushTItle()
                })
            },10)
        },
        Lnbound () {
            this.$router.push('/Lnbound')
            setTimeout(() => {
                this.$nextTick(() => {
                    this.pushTItle()
                })
            },10)
        },
        Outbound () {
            this.$router.push('/Outbound')
            setTimeout(() => {
                this.$nextTick(() => {
                    this.pushTItle()
                })
            },10)
        },
        Items () {
            this.$router.push('/Items')
            setTimeout(() => {
                this.$nextTick(() => {
                    this.pushTItle()
                })
            },10)
        },
        Supplier () {
            this.$router.push('/Supplier')
            setTimeout(() => {
                this.$nextTick(() => {
                    this.pushTItle()
                })
            },10)
        },
        Customer () {
            this.$router.push('/Customer')
            setTimeout(() => {
                this.$nextTick(() => {
                    this.pushTItle()
                })
            },10)
        }
    }
}
</script>

<style lang="less" scoped>
    .Menu {
        width: 80%;
        max-width: 290px;
        min-width: 290px;
        height: 100%;
        padding: 0 20px;
        overflow: auto;
    }
    .Logo {
        min-width: 250px;
    }
    .Logo img {
        width: 30%;
        margin: 30px 0;
    }
    .el-menu-vertical-demo {
        border: none !important;
    }
    .el-menu-item1 {
        border-radius: 9px !important;
    }
    .back_menu {
        background: #435EBE !important;
    }
    .menu-item {
        transition: 0.2s;
    }
    .menu-item:hover {
        margin-left: 7px !important;
    }
    .Login_btn {
        background: white;
        border: solid 1px #435EBE;
        color: #435EBE;
        border-radius: 9px;
        padding: 11px 0;
        margin-top: 20px;
        margin-bottom: 15px;
    }
    .Login_btn:hover {
        background: #435EBE !important;
        color: white !important;
    }
</style>