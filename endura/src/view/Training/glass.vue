<template>
    <div class="glass">
        glass
        <img :src="imgUrl" alt="">
    </div>
</template>

<script>
import qrcode from "qrcode"
export default {
    data () {
        return {
            imgUrl:''
        }
    },
    created () {
        this.qrcode()
    },
    methods: {
        qrcode () {
            let url = '11903.150.173/partner-ui/'
            qrcode.toDataURL(url).then(url => {
                this.imgUrl = url
            })
        }
    }
}
</script>

<style lang='less' scoped>
</style>