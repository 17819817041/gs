<template>
    <div class="Financial">
        <div style='color: gray; width: 97%; padding: 0px 0 20px 0' class="mg">Simple Datatable</div>
        <Module :columns="columns" :arr="arr" ref="child">
            <template slot="Status" slot-scope="{ data }">
                <div :class="['btn', { red: data == 'Not Confirmed', green :data == 'Confirmed' }]">{{data}}</div>
            </template>
        </Module>
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
                {title:'Order ID',key:'Order'},
                {title:'Employee ID',key:'Employee'},
                {title:'Date',key:'Date'},
                {title:'Status',slot:'Status'}
            ],
            arr:[
                {Order: 1369548,Employee:1,Date:'2021-06-06',Status: 'Confirmed',active:true},
                {Order: 1653245,Employee:7,Date:'2021-05-02',Status: 'Not Confirmed',active:true},
                {Order: 1357564,Employee:11,Date:'2021-04-26',Status: 'Confirmed',active:true},
                {Order: 1975783,Employee:16,Date:'2021-02-30',Status: 'Not Confirmed',active:true},
                {Order: 1388677,Employee:17,Date:'2021-02-01',Status: 'Confirmed',active:true},
                {Order: 1232553,Employee:20,Date:'2021-01-06',Status: 'Confirmed',active:true},
            ],
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
</style>