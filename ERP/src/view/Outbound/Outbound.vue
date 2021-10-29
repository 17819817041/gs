<template>
    <div class="Outbound">
        <div style='color: gray; width: 97%;padding: 0 0 20px 0' class="mg">Simple Datatable</div>
        <!-- <div class="flexEnd mg" style="width: 97%;">
            <div class="add cursor">Add new data</div>
        </div> -->
        <Module :columns="columns" :arr="arr" ref="child">
            <template slot="Outbound" slot-scope="{ data }">
                <div :class="['btn', { red: data == 'Not Confirmed', green :data == 'Confirmed' }]">{{data}}</div>
            </template>
            <template slot="Details" slot-scope="{ data }">
                <div v-if="data == 'View'" class="Details cursor" @click="detail">View</div>
            </template>
            <template slot="Invoice" slot-scope="{ data }">
                <div v-if="data == 'Generate'" class="Details cursor" @click="generate">Generate</div>
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
                {title:'Outbound ID',key:'OutboundId'},
                {title:'Employee ID',key:'Employee'},
                {title:'Outbound Date',key:'Outbound'},
                {title:'Outbound Way',key:'OutboundWay'},
                {title:'Outbound Cost', key: 'OutboundCost'},
                {title:'Details',slot:'Details'},
                {title:'Invoice',slot:'Invoice'},
            ],
            arr:[
                {OutboundId:1662352,Employee: 14,Outbound: '2021-07-07', OutboundWay: 'plan',OutboundCost: 66, Details: 'View',Invoice: 'Generate',  active:true},
                {OutboundId:1683354,Employee: 28,Outbound: '2021-06-30', OutboundWay: 'car',OutboundCost: 88, Details: 'View',Invoice: 'Generate',  active:true},
            ],
        }
    },
    methods: {
        detail () {
            this.$router.push('/Outbound_detail')
        },
        generate () {
            this.$router.push('/generate')
        },
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
        font-size: 15px;
        display: inline-block;
        background: #435EBE;
        @media screen and (max-width: 1300px) {
            font-size: 12px;
        }
    }
</style>