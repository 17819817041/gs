<template>
    <div class="uploadFiles" v-loading='loading'>
        <div class="save_wrap flexEnd">
            <span class="save cursor ju al" @click="save">
                <div class="al"><img src="@/assets/img/save.png" alt=""></div>
                <div class="size14 bold">Save</div>
            </span>
        </div>

        <div class="fileList bar">
            <div class="ju al" v-for="(item,i) in webFiles" :key='i'>
                <div class="file_title cursor bold">{{nameList[i]}}</div>
                <div>
                    <textarea name="" id="" cols="45" rows="5" v-model="item.fileDec"></textarea>
                </div>
                <div class="removeUp flex bold cursor" @click="remove_item(item,i)">
                    <div class="al"><img src="@/assets/img/cha.png" alt=""></div>
                    <div>Remove</div>
                </div>
            </div>
        </div>

        <div class="browse_wrap ju">
            <div class="file_name al">{{fileName}}</div>
            <label for="fileUP">
                <input type="file" id="fileUP" @change="uploadfile" v-show="false">
                <div class="browse flex al cursor">
                    <div class="al browse_img"><img src="@/assets/img/file-open.png" alt=""></div>
                    <div class="white">Browse...</div>
                </div>
            </label>
        </div>

        <div class="ju">
            
            <label for="Attachment">
                <input type="file" id="Attachment" @change="uploadfile" v-show="false">
                <div class="attachment ju al cursor" >
                    <div class="al"><img src="@/assets/img/icon-add.png" alt=""></div>
                    <div class="bold ">Add Attachment</div>
                </div>
            </label>
        </div>
    </div>
</template>

<script>
import { webFileRecord, uploadFile } from "@/axios/request.js"
export default {
    data () {
        return {
            fileName: '',
            loading: false,
            webFiles: [],
            nameList: [],
            type: null,
        }
    },
    methods: {
        uploadfile (e) {
            if (e.target.files[0].size > 20971520) {
                this.$message({
                    type: 'error',
                    message: 'File size cannot exceed 20M!'
                })
            } else {
                this.fileName = e.target.files[0].name
                this.nameList.push(e.target.files[0].name)
                var formData = new FormData();
                formData.append('file', e.target.files[0]);
                let type = e.target.files[0].type.split('/')[0]
                if (type == 'video') {
                    this.type = 2
                    this.FILE(formData)
                } else if (type == 'image') {
                    this.type = 1
                    this.FILE(formData)
                } else {
                    this.$message({
                        type: 'error',
                        message: 'Please upload video or picture'
                    })
                }
            }
        },
        FILE (formData) {
            this.loading = true
            uploadFile(formData).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.webFiles.push({
                        fileType: this.type,       
                        fileUrl: res.data.data,
                        number: this.webFiles.length + 1,
                        fileDec: ''
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: 'File is too large or formatted incorrectly!'
                })
            })
        },
        remove_item (item,i) {
            this.webFiles.splice(i,1)
            this.nameList.splice(i,1)
        },
        save () {
            this.loading = true
            let data = {
                "jo":{
                    "webFiles": this.webFiles,
                    "doctorId": localStorage.getItem('userId') *1
                }
            }
            webFileRecord(data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.webFiles = []
                    this.$message({
                        type: 'success',
                        message: 'Successfully upload!'
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: 'Failed upload!'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: 'Failed upload!'
                })
            })
        },
        AttachmentUpload () {
            this.fileName = e.target.files[0].name
            this.nameList.push(e.target.files[0].name)
            var formData = new FormData();
            formData.append('file', e.target.files[0]);
            this.FILE(formData)
        }
    }
}
</script>

<style lang='less' scoped>
    .uploadFiles {
        width: 100%;
        height: 100%;
        background: white;
        padding-top: 30px;
    }
    .save_wrap {
        margin-right: 30px;
    }
    .save {
        padding: 3px 10px;
        border: solid 2px gray;
        border-radius: 18px;
        img {
            padding-right: 3px;
            width: 20px;
        }
    }
    .file_name {
        width: 300px;
        height: 40px;
        border: rgb(158, 158, 158) solid 1px;
        border-radius: 7px 0 0 7px;
        padding-left: 7px;
        background: #EEEEEE;
    }
    .browse {
        background: #347AB6;
        height: 40px;
        border-radius: 0 7px 7px 0;
        padding: 0 15px;
    }
    textarea {
        outline: none;
        resize: none;
        font-size: 16px;
        line-height: 20px;
        border: rgb(189, 189, 189) 2px solid;
    }
    .browse_img img {
        width: 30px;
    }
    .file_title {
        font-size: 27px;
        text-decoration: underline;
        color: #6591D3;
        margin-right: 30px;
        width: 180px;
        max-width: 180px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 1;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all !important;/*在任何地方换行*/
    }
    .fileList {
        height: calc(100% - 250px);
        overflow: auto;
        margin: 30px 0;
    }
    .removeUp {
        padding: 9px 17px;
        margin-left: 30px;
        border: solid 2px rgb(192, 192, 192);
        border-radius: 3px;
        font-size: 17px;
        img {
            padding-right: 3px;
            width: 20px;
        }
    }
    .attachment {
        padding: 9px 0px;
        width: 200px;
        margin-top: 20px;
        margin-left: 30px;
        border: solid 2px rgb(192, 192, 192);
        border-radius: 3px;
        font-size: 17px;
        img {
            padding-right: 3px;
            width: 20px;
        }
    }
    .browse_wrap {
        margin-top: 60px;
    }
</style>