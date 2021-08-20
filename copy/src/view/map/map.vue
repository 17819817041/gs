<template>
    <div class="map">
        <div id="container"></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    created () {
       
    },
    mounted () {
        this.getMap()


        fetch('https://restapi.amap.com/v5/ip?key=a89fe83d6d4647b3ba4309c8cdf58cb2')
            .then(response => response.json())
            .then(data => console.log('data is', data))
            .catch(error => console.log('error is', error));
        },
    methods: {
        getMap () {
            var map = new AMap.Map('container', {
                zoom:11,//级别
                center: [116.397428, 39.90923],//中心点坐标
                // viewMode:'3D'//使用3D视图
            })
            var  marker = new AMap.Marker({
                icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
                position: [116.406315,39.908775],
                offset: new AMap.Pixel(-13, -30)
            });
            marker.setMap(map);


            // 创建一个 Icon
            var startIcon = new AMap.Icon({
                // 图标尺寸
                size: new AMap.Size(25, 34),
                // 图标的取图地址
                image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
                // 图标所用图片大小
                imageSize: new AMap.Size(135, 40),
                // 图标取图偏移量
                imageOffset: new AMap.Pixel(-9, -3)
            });
            // 将 icon 传入 marker
            var startMarker = new AMap.Marker({
                position: new AMap.LngLat(116.35,39.89),
                icon: startIcon,
                offset: new AMap.Pixel(-13, -30)
            });
            // 将 markers 添加到地图
            map.add([ startMarker]);
        }
    }
}
</script>

<style lang="less" scoped>
    .map {
        width: 100%;
        height: 100%
    }
    #container {width:100%; height: 100%; }  
</style>