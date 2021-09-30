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
        // this.getMap()
        this.tencent()
    },
    methods: {
        getMap () {    //高德定位
            fetch('https://restapi.amap.com/v3/ip?key=e3db0da3b984bd6dfdce30798b5edb34')    //获取自身位置
            // fetch('https://restapi.amap.com/v5/ip?key=a89fe83d6d4647b3ba4309c8cdf58cb2')
            .then(response => response.json())
            .then(data => {
                    var m_point = data.rectangle.split(';')
                    var long = m_point[0].split(',')
                    var lati = m_point[1].split(',')
                    var longitude = (long[0]*1 + lati[0]*1) / 2
                    var latitude = (long[1]*1 + lati[1]*1) / 2
                    console.log(longitude, latitude)
                    var map = new AMap.Map('container', {
                        zoom:11,//级别
                        center: [longitude, latitude],//中心点坐标
                        // viewMode:'3D'//使用3D视图
                    })
                    var  marker = new AMap.Marker({
                        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
                        // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
                        position: [longitude,latitude],
                        offset: new AMap.Pixel(-13, -30)
                    });
                    marker.setMap(map);
                }
            )
            .catch(error => console.log('error is', error));
            // // 创建一个 Icon
            // var startIcon = new AMap.Icon({
            //     // 图标尺寸
            //     size: new AMap.Size(25, 34),
            //     // 图标的取图地址
            //     image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
            //     // 图标所用图片大小
            //     imageSize: new AMap.Size(135, 40),
            //     // 图标取图偏移量
            //     imageOffset: new AMap.Pixel(-9, -3)
            // });
            // // 将 icon 传入 marker
            // var startMarker = new AMap.Marker({
            //     position: new AMap.LngLat(116.35,39.89),
            //     icon: startIcon,
            //     offset: new AMap.Pixel(-13, -30)
            // });
            // // 将 markers 添加到地图
            // map.add([ startMarker]);
        },

        tencent () {   //腾讯定位
            fetch('https://apis.map.qq.com/ws/location/v1/ip?key=USHBZ-UOV35-DNUIY-Q6LCS-77SOK-TAFB3')    //获取自身位置
            .then(response => response.json())
            .then(data => {
                var longitude = data.result.location.lng
                var latitude = data.result.location.lat
                var map = new AMap.Map('container', {
                    zoom:11,//级别
                    center: [longitude, latitude],//中心点坐标
                    // viewMode:'3D'//使用3D视图
                })
                var  marker = new AMap.Marker({
                    // icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
                    position: [longitude,latitude],
                    offset: new AMap.Pixel(-13, -30)
                });
                marker.setMap(map);
            })
            .catch(error => console.log('error is', error));
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