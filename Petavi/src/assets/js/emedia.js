import emedia from 'easemob-emedia';

emedia.config({
    appkey:'1130201110157617#demo', // 从环信后台 获取的appkey、必填
    restPrefix: 'https://petavi.top',
    consoleLogger: true, // boolean 是否开启打印日志，默认true
    // ... 其他的一些配置
});


export {emedia}


