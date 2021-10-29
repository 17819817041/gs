<template>
    <div class="Stock">
        <div style='color: gray; width: 97%; padding: 0px 0 20px 0' class="mg">Simple Datatable</div>
        <Modules :columns="columns" :arr="arr" ref="child">
            <template slot="Status" slot-scope="{ data }">
                <div :class="['btn', { red: data == 'Out of stock', green :data == 'In stock' }]">{{data}}</div>
            </template>
        </Modules>
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
                {title:'No',key:'No'},
                {title:'Name',key:'Name'},
                {title:'P1',key:'P1'},
                {title:'P2',key:'P2'},
                {title:'P3',key:'P3'},
                {title:'Location',key:'Location'},
                {title:'Sake Brewer',key:'Sake'},
                {title:'Volume',key:'Volume'},
                {title:'Unit',key:'Unit'},
                {title:'Stock',key:'Stock'},
                {title:'Status',slot:'Status'}
            ],
            arr:[
                {No: 1,Name:'ORBIAKUNA貴醸酒ワイン樽熟成',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'二兎純米吟醸雄町五十五',P1:'$190', P2: '$210', P3: '$300',Location: '東京', 
                Sake: '丸石醸造',Volume: '500ML',Unit: '12/ctn',Stock: '7',Status: 'Out of stock',active:true},
                {No: 1,Name:'ORBIAKUNA貴醸酒ワイン樽熟成',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: '仙台伊澤家勝山酒造',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'篠峯ろくまる純米吟醸雄町無濾過生原酒うすにごり2020',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: '	伊藤酒造合資',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'ORBIAKUNA貴醸酒ワイン樽熟成',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	富久長レガシ－',P1:'$590', P2: '$820', P3: '$1380',Location: '広島', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
                {No: 1,Name:'	花巴水もと純米木桶仕込無濾過生原酒直汲にごり',P1:'$290', P2: '$320', P3: '$380',Location: '東京', 
                Sake: 'オードヴィ庄内',Volume: '500ML',Unit: '12/ctn',Stock: '67',Status: 'In stock',active:true},
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
    }
    .red {
        background: #DC3545;
    }
    .green {
        background: #198754;
    }
</style>