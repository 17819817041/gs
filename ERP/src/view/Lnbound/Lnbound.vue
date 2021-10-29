<template>
    <div class="Inbound">
        <div style='color: gray; width: 97%;' class="mg">Simple Datatable</div>
        <div class="flexEnd mg" style="width: 97%;">
            <div class="add cursor">Add new data</div>
        </div>
        <Module :columns="columns" :arr="arr" ref="child">
            <template slot="Inbound" slot-scope="{ data }">
                <div :class="['btn', { red: data == 'Not Confirmed', green :data == 'Confirmed' }]">{{data}}</div>
            </template>
            <template slot="Details" slot-scope="{ data }">
                <div v-if="data == 'View'" class="Details cursor" @click="detail">View</div>
            </template>
            <template slot="Invoice" slot-scope="{ data }">
                <div v-if="data == 'Generate'" class="Details">Generate</div>
            </template>
        </Module>
        <!-- <div class="flexEnd mg" style="width: 97%;">
            <div class="confirm cursor">
                Confirm Inbound
            </div>
        </div> -->
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
                {title:'Inbound ID',key:'InboundId'},
                {title:'Employee ID',key:'Employee'},
                {title:'Inbound Date',key:'Inbound'},
                {title:'Inbound Way',key:'InboundWay'},
                {title:'Inbound Cost', key: 'InboundCost'},
                {title:'Details',slot:'Details'},
            ],
            arr:[
                {InboundId:1662352,Employee: 14,Inbound: '2021-07-07', InboundWay: 'plan',InboundCost: 66, Details: 'View',  active:true},
                {InboundId:1683354,Employee: 28,Inbound: '2021-06-30', InboundWay: 'car',InboundCost: 88, Details: 'View',  active:true},
            ],
        }
    },
    methods: {
        detail () {
            this.$router.push('/Lnbound_detail')
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
    }
    .confirm {
        padding: 10px 16px;
        border-radius: 4px;
        background: #435EBE;
        color: white;
        display: inline-block;
    }
</style>