const OSS = require('ali-oss')

const OSSConfig = {
  uploadHost: 'http://osshongk.oss-cn-hongkong.aliyuncs.com', //OSS上传地址
  ossParams: {
    success_action_status: '200', // 默认200
    region: 'oss-cn-hongkong', // oss-cn-shenzhen.aliyuncs.com
    accessKeyId: 'LTAI5tC8ATStbhT4SSoEmBNa',
    accessKeySecret: 'C2UTDKQtCOI0dJXVZbPs4QqgMgayJ7',
    bucket: 'osshongk'
  },
}

function random_string(len) {
  len = len || 32
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  var maxPos = chars.length
  var pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

function uploadOSS(file) {
  return new Promise(async (resolve, reject) => {
    const fileName = `${random_string(6)}_${file.name}`
    let client = new OSS({
      region: OSSConfig.ossParams.region,
      accessKeyId: OSSConfig.ossParams.accessKeyId,
      accessKeySecret: OSSConfig.ossParams.accessKeySecret,
      bucket: OSSConfig.ossParams.bucket,
    })
    const res = await client.multipartUpload(fileName, file)
    // resolve(res)
    // 或者返回如下：
    resolve({
        fileUrl: `${OSSConfig.uploadHost}/${fileName}`,
        fileName: file.name
    })
  })
}

export { uploadOSS }

