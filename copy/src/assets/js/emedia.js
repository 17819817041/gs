import emedia from 'easemob-emedia';
import store from "@/vuex/store.js"
import { options } from 'less';
emedia.config({
    appkey:'1130201110157617#demo', // 从环信后台 获取的appkey、必填
    restPrefix: 'https://petavi.top',
    consoleLogger: true, // boolean 是否开启打印日志，默认true
    // ... 其他的一些配置
});

emedia.mgr.onStreamAdded = function(member, stream) {
    // member：发布流人员的信息、stream：流信息
    setTimeout(() => {
        if(!stream.located()) {
            var option = {
                member: member, 
                stream: stream, 
                subVideo: true,
                subAudio: true,
                videoTag: document.getElementById('video')
            }
            emedia.mgr.subscribe(option.member, option.stream, option.subVideo, option.subAudio, option.videoTag)    
       }
       console.log(member,stream,option,666)
       // store.commit("setApp",{ key: 'remoteStream', value: stream })
    },1000)

}


export {emedia}


