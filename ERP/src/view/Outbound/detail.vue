<template>
    <div class="Outbound_detail">
        <div style='color: gray; width: 97%; margin-bottom: 30px;' class="mg">Simple Datatable</div>
        <Module :columns="columns" :arr="arr" ref="child"></Module>
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
                {title:'Outbound ID',key:'Outbound'},
                {title:'Items ID',key:'Items'},
                {title:'Items Name',key:'Name'},
                {title:'Price',key:'Price'},
                {title:'Quantity',key:'Quantity'},
            ],
            arr:[
                {Outbound: 1369548,Items :1,Name: 'Tom',Price: '$66', Quantity: 3, Details: 'View', active:true},
            ],
        }
    },
    mounted () {
        this.$store.commit('setUser', { key: 'title', value: 'Outbound Order No: 1000001'})
        this.$store.commit('setUser', { key: 'text', value: 'Details'})
        this.$store.commit('setUser', { key: 'backBtn', value: true})
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