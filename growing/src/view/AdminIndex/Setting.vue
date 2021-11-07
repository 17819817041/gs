<template>
    <div class="Setting">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">系統設定
        </div>
        <div class="Settingadvertising_content_wrap bar">
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">廣告地區設定</div>
                        </div>
                        <div class="flex">
                            <div :class="['arrow_m al']" @click="drawer = !drawer"><img :class="[{ rotate: drawer }]" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="[' drawer_h', {'drawer_h1': drawer}]">
                        <div class="menu_title_wrap">
                            <div class="al ">
                                <div class="menu_title bold">地區新增與移除</div>
                                <el-popover
                                    :placement="position"
                                    trigger="manual"
                                    v-model="visible">
                                    <div class="">
                                        <el-form :model="ruleForm" status-icon :rules="rules" ref="form1" class="demo-ruleForm">
                                            <el-form-item prop="area">
                                                <el-input type="text" v-model="ruleForm.area" placeholder="請輸入地區" autocomplete="off"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="Einp">
                                                <el-input type="text" v-model="ruleForm.Einp" autocomplete="off" placeholder="Please enter region"></el-input>
                                            </el-form-item>
                                        </el-form>
                                        <div class="sb">
                                            <div class="addCate cursor al" @click="addArea(ruleForm.area)">
                                                添加
                                            </div>
                                            <div class="addCate cursor al" @click='visible = false'>取消</div>
                                        </div>
                                    </div>
                                    <div class="addArea tc cursor" slot="reference" @click="visible = true">新增地區</div>
                                </el-popover>
                            </div>
                        </div>
                        <div class="area_content clear">
                            <div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in areaList" :key="i">
                                {{item}} 
                                <span class="al" style="margin-left: 5px">
                                    <el-popconfirm
                                        title="確定刪除嗎？"
                                        @confirm='deleArea(i)'
                                        >
                                        <img style="margin-top: 5px;" class="cursor" slot="reference" src="@/assets/img/cha.png" alt="">
                                    </el-popconfirm>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">廣告類型設定</div>
                        </div>
                        <div class="flex">
                            <div :class="['arrow_m al']" @click="drawer1 = !drawer1"><img :class="[{ rotate: drawer1 }]" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['drawer_h', {'drawer_h1': drawer1}]">
                        <div class="menu_title_wrap">
                            <div class="al ">
                                <div class="menu_title bold">類型新增與移除</div>
                                <el-popover
                                    :placement="position"
                                    trigger="manual"
                                    v-model="visible1">
                                    <div class="">
                                        <el-form :model="ruleForm" status-icon :rules="rules1" ref="form" class="demo-ruleForm">
                                            <el-form-item prop="type">
                                                <el-input type="text" v-model="ruleForm.type" placeholder="請輸入類型" autocomplete="off"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="Etype">
                                                <el-input type="text" v-model="ruleForm.Etype" autocomplete="off" placeholder="Please enter the type"></el-input>
                                            </el-form-item>
                                        </el-form>
                                        <div class="sb">
                                            <div class="addCate cursor al" @click="addType(ruleForm.type)">
                                                添加
                                            </div>
                                            <div class="addCate cursor al" @click='visible1 = false'>取消</div>
                                        </div>
                                    </div>
                                    <div class="addArea tc cursor" slot="reference" @click="visible1 = true">新增類型</div>
                                </el-popover>
                            </div>
                        </div>
                        <div class="area_content clear">
                            <div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in typeList" :key="i">
                                {{item}} 
                                <span class="al" style="margin-left: 5px">
                                    <el-popconfirm
                                        title="確定刪除嗎？"
                                        @confirm='deleType(i)'
                                        >
                                        <img style="margin-top: 5px;" class="cursor" slot="reference" src="@/assets/img/cha.png" alt="">
                                    </el-popconfirm>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">醫療九龍店</div>
                        </div>
                        <div class="flex">
                            <div :class="['arrow_m al']" @click="drawer2 = !drawer2"><img :class="[{ rotate: drawer2 }]" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['Setting_table drawer_h', {'drawer_h1': drawer2}]">
                        <el-table :row-class-name="tableRowClassName" 
                            :header-cell-style="{ background: '#E4E4E5', 'text-align': 'center' }"
                            :data="tableData"
                            style="width: 100%"
                            height="95%"
                            >
                            <el-table-column
                                fixed
                                prop="live"
                                label="Live序號"
                                min-width="175"
                                >
                                <template slot="header">
                                    <div class="ju al width100">
                                        <div class="addArea1" style="opacity: 0;">發表Live</div>
                                        <div class="al">Live序號</div>
                                        <div class="addArea cursor" @click="dialogVisible = true">發表Live</div>
                                    </div>
                                </template>
                                <template slot-scope="scope">
                                    {{scope.$index + 1}}
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="發表時間"
                                min-width="150"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="content"
                                label="Live內容"
                                min-width="250"
                                >
                                <template slot-scope="scope">
                                    <div class="ju al">
                                        <img class="content_logo" :src="scope.row.url" v-if="scope.row.url" alt="">{{scope.row.content}}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="edit"
                                label="操作"
                                min-width="155"
                                >
                                <template slot-scope="scope">
                                    <el-popconfirm
                                        triggrt='click'
                                        title="確定刪除嗎？"
                                        @confirm='deleLive(scope.$index)'
                                        >
                                        <div class="ju al" slot="reference"><div class="ju al mg deleMsg cursor">刪除記錄</div></div>
                                    </el-popconfirm>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
            <span slot="footer" class="dialog-footer flexEnd">
                <div class="addArea cursor tc" @click="dialogVisible = false">取 消</div>
                <div class="addArea cursor tc" @click="addLive">添 加</div>
            </span>
            <div class="" style="height: 100%">
                <div class="logoFlie flex">
                    <div>
                        <div class="logo_wrap ju al">
                            <img style="height: 90%" :src="url" alt="">
                        </div>
                        <div class="px tc">300*300</div>
                    </div>
                    <div class="flex al" style="padding-top: 60px;">
                        <label for="liveLogo">
                            <div class="addArea cursor tc">選擇Logo</div>
                            <input type="file" name="" id="liveLogo" @change="getLiveLogo" v-show="false">
                        </label>
                        <div class="unmust" style="margin: 9px 0 0 10px;">(選填)</div>
                    </div>
                </div>
                <div class="liveContent">
                    <textarea name="" id="" v-model="content"></textarea>
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
            url: '',
            position: 'right',
            visible: false,
            visible1: false,
            content: '',
            drawer: false,
            drawer2: false,
            drawer1: false,
            areaList: ['旺角','九龍', '黃大仙'],
            typeList: ['美食','科技'],
            tableData:[
                {live:'1',time: '221-06-06', content: 'AAC3M53Z-vphf4s',edit: true,url: ''},
                {live:'2',time: '221-06-06', content: 'AAC3M53Z-vphf4s',edit: true,url: ''},
                {live:'3',time: '221-06-06', content: 'AAC3M53Z-vphf4s',edit: true,url: ''},
            ],
            ruleForm: {
                area: '',
                Einp: '',
                type: '',
                Etype: ''
            },
            rules: {
                area: [
                    // { required:true, message:'Please enter your email', trigger:"blur" }
                    { required:true, message:'內容不能為空', trigger:"blur" }
                ],
                Einp: [
                    // { required:true, message:'Please enter your email', trigger:"blur" }
                    { required:true, message:'The content cannot be empty', trigger:"blur" }
                ],
            },
            rules1: {
                type: [
                    // { required:true, message:'Please enter your email', trigger:"blur" }
                    { required:true, message:'The content cannot be empty', trigger:"blur" }
                ],
                Etype: [
                    // { required:true, message:'Please enter your email', trigger:"blur" }
                    { required:true, message:'The content cannot be empty', trigger:"blur" }
                ],
            }
        }
    },
    mounted () {
        // location.reload();
    },
    methods: {
        tableRowClassName ({ row,rowIndex }) {
            if (rowIndex%2 == 1) {
                return 'el_color'
            }
            return ''
        },
        back () {
            this.$router.back()
        },
        addType (item) {
            let that = this
            this.$refs.form.validate(flag => {
                if (flag) {
                    that.ruleForm.area = ''
                    that.visible1 = false
                    if (item) {
                        that.typeList.push(item)
                        let arr = new Set(that.typeList)
                        that.typeList = Array.from(arr)
                    }
                }
            })
		},
		addArea (item) {
            let that = this
            this.$refs.form1.validate(flag => {
                if (flag) {
                    that.ruleForm.area = ''
                    that.visible = false
                    if (item) {
                        that.areaList.push(item)
                        let arr = new Set(that.areaList)
                        that.areaList = Array.from(arr)
                    }
                }
            })
		},
		deleType (i) {
			this.typeList.splice(i,1)
		},
		deleArea (i) {
			this.areaList.splice(i,1)
		},
        getLiveLogo (e) {
            let url = URL.createObjectURL(e.target.files[0])
            this.url = url
        },
        deleLive (i) {
            this.tableData.splice(i,1)
            this.tableData.$forceUpdate()
        },
        addLive () {
            this.dialogVisible = false
            let D = new Date()
            let time = D.toLocaleDateString()
            let content = this.content
            let url = this.url
            this.tableData.unshift({ time:time, content: content, url: url, live: '', edit: true })
        }
    },
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    .content_logo {
        width: 23px;
        height: 23px;
        margin-right: 5px;
    }
    .liveContent {
        height: 200px;
        border: solid 1px rgb(196, 196, 196);
        border-radius: 7px;
        overflow: hidden;
        margin-top: 15px;
        padding: 5px;
        textarea {
            width: 99%;
            height: 100%;
            border: none;
            outline: none;
            resize: none;
        }
    }
    .px {
        font-size: 12px;
        color: rgb(204, 204, 204);
    }
    .unmust {
        color: gray;
        font-size: 12px;
    }
    .logo_wrap {
        width: 80px;
        height: 80px;
        border-radius: 4px;
        border: solid 1px rgb(204, 203, 203);
    }
    .Setting_table {
        // height: 100%;
        /deep/.el-table th > .cell {
            text-align: center;
        }
        
        /deep/.el-table .cell {
            text-align: center;
        }
    }
    .deleMsg {
        color: white;
        padding: 4px 20px;
        background: red;
        font-size: 12px;
        margin-right: 20px;
    }
    .list_item {
		border: dashed 2px #d3d3d3;
		margin-right: 15px;
		height: 36px;
		padding: 0 15px;
		white-space: nowrap;
		@media screen and (max-width: 870px) {
			margin-top: 5px;
		}
	}
    .addCate {
        border: solid 1px rgb(206, 206, 206);
        padding: 0 20px;
        box-shadow: 2px 2px 6px rgb(224, 224, 224) inset;
        height: 32px;
		white-space: nowrap;
    }
    .addArea {
        padding: 5px;
        width: 75px;
        font-size: 12px;
        margin-left: 20px;
        color: white;
        background: @themeColor;
        @media screen and (max-width: 564px) {
            padding: 3px;
            width: 70px;
        }
    }
    .addArea1 {
        padding: 5px;
        width: 75px;
        font-size: 12px;
        margin-left: 20px;
        color: white;
        @media screen and (max-width: 1145px) {
			display: none;
		}
    }
    .menu_title_wrap {
        background: #E5E5E5;
        padding: 7px 125px;
        white-space: nowrap;
        @media screen and (max-width: 564px) {
            padding: 7px 75px;
        }
    }
    .area_content {
        padding: 15px 125px;
        @media screen and (max-width: 564px) {
            padding: 7px 15px;
        }
    }
    .menu_title {
        font-size: 14px;
    }
    .Setting {
        height: 100%;
        margin-top: 20px;
        
    }
    .Settingadvertising_content_wrap {
        height: calc(100% - 20px);
        overflow: auto;
    }
    .Settingadvertising_content {
        width: 97%;
        margin-top: 15px;
    }
    .back {
        width: 97%;
        font-size: 20px;
        img {
            width: 20px;
            height: 20px;
            @media screen and (max-width: 960px) {
                width: 15px;
                height: 15px;
            }
        }
        @media screen and (max-width: 960px) {
            font-size: 15px;
        }
    }
    .divider_wrap {
        box-shadow: 0 0 5px rgb(163, 163, 163) inset;
        padding: 4px;
    }
    .divider_message_title {
        padding: 15px 30px;
    }
    .divider {
        width: 0;
        margin-right: 5px;
        background: @themeColor;
        border: solid 2px @themeColor;
    }
    .divider_text {
        color: @themeColor;
        font-size: 14px;
    }
    .setImg {
        img {
            width: 30px;
        }
    }
    .arrow_m {
        width: 20px;
        img {
            width: 17px;
            transform: rotateZ(-180deg);
            transition: 0.2s;
        }
    }
    .rotate {
        transform: rotateZ(0deg) !important;
    }
    .drawer_h {
        transition: 0.2s;
        overflow: hidden;
        max-height: 500px;
    }
    .drawer_h1 {
        max-height: 0;
    }
</style>