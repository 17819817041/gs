<template>
    <div class="Customer">
        <div style='color: gray; width: 97%; padding: 0px 0 0px 0' class="mg">Simple Datatable</div>
        <div class="flexEnd mg" style="width: 97%;">
            <div class="add cursor" @click="dialogVisible = true">Add new customer</div>
        </div>
        <Module :columns="columns" :arr="arr" ref="child">
            <template slot="Status" slot-scope="{ data }">
                <div :class="['btn', { red: data == 'Not Confirmed', green :data == 'Confirmed' }]">{{data}}</div>
            </template>
            <template slot="Action1" slot-scope="{ data }">
                <div v-if="data == 'Update'" class="Details">Update</div>
            </template>
        </Module>
        <el-dialog
            title="Add new customer"
            :visible.sync="dialogVisible"
            width="90%">
            <div class="sb FORM">
                <div class="FORM_item">
                    <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm sb width100" label-position='top'>
                        <el-form-item label="First Name:" prop="f_name" style="width: 33%;">
                            <el-input type="text" v-model="ruleForm.f_name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="Surname:" prop="s_name" style="width: 33%;">
                            <el-input type="text" v-model="ruleForm.s_name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="Email:" prop="email" style="width: 33%;">
                            <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">Submit</el-button>
                <el-button @click="dialogVisible = false">Close</el-button>
            </span>
        </el-dialog>
        <div class="footer sb">
            <div>2021 © ERP</div>
            <div>Something here</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            columns: [
                // {title:'全选',type:'checkbox'},
                {title:'ID',key:'ID'},
                {title:'First Name',key:'First'},
                {title:'Surname',key:'Surname'},
                {title:'Email',key:'Email'},
                {title:'Action',slot:'Action1'}
            ],
            arr:[
                {ID: 1,First: 'Tom', Surname: 'jhon',Email:'12346@qq.com',Action: 'Update',active:true},
                {ID: 1,First: 'Tom', Surname: 'jhon',Email:'12346@qq.com',Action: 'Update',active:true},
            ],
            ruleForm: {
                email: '',
                f_name: '',
                s_name: ''
            },
            rules: {
                email: [
                    { required:true, message:'Please enter your email', trigger:"blur" }
                ],
                f_name: [
                    { required: true, message:'Please enter your First Name', trigger:'blur' }
                ],
                s_name: [
                    { required: true, message:'Please enter your Surname', trigger:'blur' }
                ]
            },
            dialogVisible: false,
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
    .FORM {
        width: 100%;
        .FORM_item {
            width: 100%;
        }
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
</style>