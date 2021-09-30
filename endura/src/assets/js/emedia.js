import emedia from 'easemob-emedia';
emedia.config({
    appkey:'1130201110157617#security', // 从环信后台 获取的appkey、必填
    restPrefix: 'https://47.52.255.24:9015',
    consoleLogger: true, // boolean 是否开启打印日志，默认true
    // ... 其他的一些配置
});
export {emedia}


