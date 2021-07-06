import emedia from 'easemob-emedia';
import store from "@/vuex/store.js"
import router from "@/router/router.js"
import { options } from 'less';
emedia.config({
    appkey:'1130201110157617#demo', // 从环信后台 获取的appkey、必填
    restPrefix: 'https://petavi.top',
    consoleLogger: true, // boolean 是否开启打印日志，默认true
    // ... 其他的一些配置
});

emedia.mgr.onStreamAdded = function(member, stream) {
    // member：发布流人员的信息、stream：流信息
    // setTimeout(() => {
        if(!stream.located()) {
            var dom = document.getElementsByClassName('mutual_video')[0]
            console.log(dom)
            var video = document.createElement('video')
            video.classList.add('mutual_video_item')
            video.autoplay = true
            dom.appendChild(video)
            var option = {
                member: member, 
                stream: stream, 
                subVideo: true,
                subAudio: true,
                videoTag: video
            }
            emedia.mgr.subscribe(option.member, option.stream, option.subVideo, option.subAudio, option.videoTag)    
            console.log('----------------------------------远程',option.stream)
       } else {
           console.log(stream,'++++++++++++++++++++++++++++++++++本地')
        //    let dom = document.getElementById('localVideo')
        //    emedia.mgr.streamBindVideo(stream,dom)
       }
       // store.commit("setApp",{ key: 'remoteStream', value: stream })
    // },1000)

}

emedia.mgr.onStreamRemoved = function (member, stream) {
    console.log('onStreamRemoved',member,stream);
};
emedia.mgr.onMemberJoined = function (member) {
    console.log('onMemberJoined',member);
    // alert(`${member.nickName || member.name} 加入了会议`);
};

emedia.mgr.onMemberLeave = function (member, reason, failed) {
    router.back()
    console.log('onMemberLeave', member, reason, failed);
    window.eMedia.mgr.exitConference()
    // alert(`${member.nickName || member.name} 退出了会议`);

};


export {emedia}


