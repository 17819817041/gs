<template>
    <div class="Sales">
        <div style='color: gray; width: 97%;' class="mg">Simple Datatable</div>
        <div class="flexEnd mg" style="width: 97%;">
            <div class="add cursor"  @click="dialogVisible = true">Add new data</div>
        </div>
        <Module :columns="columns" :arr="arr" ref="child">
            <template slot="Inbound" slot-scope="{ data }">
                <div :class="['btn', { red: data == 'Not Confirmed', green :data == 'Confirmed' }]">{{data}}</div>
            </template>
            <template slot="Details" slot-scope="{ data }">
                <div v-if="data == 'View'" class="Details cursor" @click="detail">View</div>
            </template>
            <template slot="Invoice" slot-scope="{ data }">
                <div v-if="data == 'Generate'" class="Details cursor"  @click="generate">Generate</div>
            </template>
        </Module>
        <div class="flexEnd mg" style="width: 97%;">
            <div class="confirm cursor"  @click="dialogVisible1 = true">
                Confirm Inbound
            </div>
        </div>
        <div class="footer sb">
            <div>2021 © ERP</div>
            <div>Something here</div>
        </div>
        <el-dialog
            title="Add new purchase"
            :visible.sync="dialogVisible"
            width="90%">
            <div class="clear FORM">
                <div class="FORM_item">
                    <el-form :model="ruleForm" :size="size" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position='top'>
                        <el-form-item label="Sale ID" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="Sale time" prop="checkPass">
                            <el-time-select
                                v-model="time"
                                class="width100"
                                :picker-options="{
                                    start: '08:30',
                                    step: '00:15',
                                    end: '18:30'
                                }"
                                placeholder="Select Time">
                            </el-time-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="FORM_item">
                    <el-form :model="ruleForm" :size="size" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position='top'>
                        <el-form-item label="Customer ID:" prop="pass">
                            <el-select v-model="value" class="width100" placeholder="Select">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Payment method:" prop="checkPass">
                            <el-select v-model="value" class="width100" placeholder="Select">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="FORM_item">
                    <el-form :model="ruleForm" :size="size" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position='top'>
                        <el-form-item label="Employee ID:" prop="pass">
                            <el-select v-model="value" class="width100" placeholder="Select">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Expect outbound date:" prop="checkPass">
                            <el-date-picker
                            class="width100"
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="FORM_item">
                    <el-form :model="ruleForm" :size="size" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position='top'>
                        <el-form-item label="Employee ID:" prop="pass">
                            <el-date-picker
                            class="width100"
                                v-model="value2"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="Expect outbound date:" prop="checkPass">
                            <el-select v-model="value" class="width100" placeholder="Select">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">Submit</el-button>
                <el-button @click="dialogVisible = false">Close</el-button>
            </span>
        </el-dialog>

        <el-dialog
            title="Inbound Confirmation"
            :visible.sync="dialogVisible1"
            width="40%">
            <div class="sb FORM">
                <div class="FORM_item1">
                    <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position='top'>
                        <el-form-item label="Inbound ID:" prop="pass">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="Employee ID:" prop="checkPass">
                            <el-select v-model="value" class="width100" placeholder="Select">
                                <el-option>
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Expect outbound date:" prop="checkPass">
                            <el-date-picker
                            class="width100"
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="FORM_item1">
                    <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position='top'>
                        <el-form-item label="Employee ID:" prop="pass">
                            <el-select v-model="value" class="width100" placeholder="Select">
                                <el-option></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Inbound Cost:" prop="pass">
                            <el-select v-model="value" class="width100" placeholder="Select">
                                <el-option></el-option>
                            </el-select>
                        </el-form-item>
                        
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible1 = false">Submit</el-button>
                <el-button @click="dialogVisible1 = false">Close</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
// import htmlToPdf from '@/assets/js/htmlToPdf.js'
export default {
    data () {
        return {
            columns: [
                {title:'Check',type:'checkbox'},
                {title:'Sale ID',key:'Sale'},
                {title:'Customer ID',key:'Customer'},
                {title:'Employee ID',key:'Employee'},
                {title:'Sale Date',key:'SaleDate'},
                {title:'Sale time',key:'SaleTime'},
                {title:'Payment method',key:'method'},
                {title: 'Total sale', key: 'Total'},
                {title:'Details',slot:'Details'},
                {title:'Invoice',slot:'Invoice'},
                {title: 'Inbound Status', slot: 'Inbound'}
            ],
            arr:[
                {Sale: 1369548,Customer:1,Employee: 14,SaleDate: '2021-07-07', SaleTime: 3, Details: 'View', method: 'alipay', 
                Total: 20,Invoice: 'Generate', Inbound: 'Confirmed', active:true},
                {Sale: 1659548,Customer:61,Employee: 106,SaleDate: '2021-01-12', SaleTime: 13, Details: 'View', method: 'wechat', 
                Total: 200,Invoice: 'Generate', Inbound: 'Not Confirmed', active:true},
                {Sale: 1659548,Customer:61,Employee: 84,SaleDate: '2020-11-12', SaleTime: 13, Details: 'View', method: 'wechat', 
                Total: 80,Invoice: 'Generate', Inbound: 'Confirmed', active:true},
                {Sale: 1659548,Customer:61,Employee: 100,SaleDate: '2021-10-19', SaleTime: 13, Details: 'View', method: 'wechat', 
                Total: 100,Invoice: 'Generate', Inbound: 'Not Confirmed', active:true},
                {Sale: 1659548,Customer:61,Employee: 204,SaleDate: '2021-06-22', SaleTime: 13, Details: 'View', method: 'wechat', 
                Total: 130,Invoice: 'Generate', Inbound: 'Confirmed', active:true},
            ],
            ruleForm: {
                pass: '',
                checkPass: ''
            },
            options: [{
                value: '1',
                label: ''
                }, {
                value: '2',
                label: ''
                }, {
                value: '3',
                label: ''
                }, {
                value: '4',
                label: ''
                }, {
                value: '5',
                label: ''
            }],
            dialogVisible: false,
            dialogVisible1: false,
            value: '',
            time: '',
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }]
            },
            value1: '',
            value2: '',
            size: 'medium'
        }
    },
    beforeMount() {
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth <= 564) {
                this.size = 'mini'
            } else {
                this.size = 'medium'
            }
        })
    },
    methods: {
        generate () {
            this.$router.push('/generate')
        },
        detail () {
            this.$router.push('/Sales_detail')
        }
    }
}
</script>

<style lang='less' scoped>
    .btn {
        padding: 2px 5px;
        border-radius: 4px;
        color: white;
        display: inline-block;
        font-size: 14px;
        @media screen and (max-width: 1300px) {
            font-size: 12px;
        }
    }
    .red {
        background: #DC3545;
    }
    .green {
        background: #198754;
    }
    .Details {
        padding: 5px 10px ;
        border-radius: 4px;
        color: white;
        font-size: 14px;
        display: inline-block;
        background: #435EBE;
        @media screen and (max-width: 1300px) {
            font-size: 12px;
        }
    }
    .add {
        display: inline-block;
        padding: 6px 10px;
        border: solid 1px #435EBE;
        color: #435EBE;
        border-radius: 5px;
        @media screen and (max-width: 1300px) {
            font-size: 13px;
        }
        @media screen and (max-width: 564px) {
            font-size: 12px;
        }
    }
    .confirm {
        padding: 10px 16px;
        border-radius: 4px;
        background: #435EBE;
        color: white;
        display: inline-block;
    }
    .FORM {
        width: 100%;
    }
    .FORM .FORM_item {
        width: 23%;
        float: left;
        margin-right: 2%;
        min-width: 152.88px;
        @media screen and (max-width: 800px) {
            width: 48%;
        }
        @media screen and (max-width: 564px) {
            width: 100%;
            margin-right: 0;
        }
    }
    .FORM_item1 {
        width: 49%;
    }
</style>