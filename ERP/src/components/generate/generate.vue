<template>
    <div class="generate">
        <div class="flex" style="padding: 20px">
            <div class="download cursor" @click="handleWindowPrint('#generate', 'generate')">
                Download
            </div>
            <div class="back cursor" @click="back">
                Back
            </div>
        </div>
        <div id="generate" style="width: 800px; margin: auto;">
            <div style= "text-align: center;font-size: 50px;padding: 90px 0 40px 0;">Hanabi International Limited</div>
            <div style="padding:10px 0 20px 0; text-align: center;">FLAT 05 9/F YUEN FAT INDUSTRIAL BUILDING 25 WANG CHIU ROAD KOWLOON BAY</div>
            <div style=" text-align: center;">Customer Service Hotline - What's App : (852) 6514 4411internationalhanabi@gmail.com</div>

            <div style="padding: 55px 0 20px 0; text-align: center;">INVOICE</div>
            <div class="message">
                <div style="display: flex;justify-content: space-between;">
                    <div>
                        <span class="title_m">Messer: </span>
                        <span>酒蛙Sakewa Eugene </span>
                    </div>
                    <div style="width: 200px;">
                        <span class="title_m">Invoice No:</span>
                        <span>JP123456</span>
                    </div>
                </div>
                <div style="display: flex;justify-content: space-between;">
                    <div>
                        <span class="title_m">Customer:</span>
                        <span>Halipot</span>
                    </div>
                    <div style="width: 200px;">
                        <span class="title_m">Invoice Data:</span>
                        <span>2021/06/17</span>
                    </div>
                </div>
                <div>
                    <span class="title_m">Tel:</span>
                    <span>6515466</span>
                </div>
                <div>
                    <span class="title_m">Eamil:</span>
                    <span>3574613@qq.com</span>
                </div>
                <div>
                    <span class="title_m">Address:</span>
                    <span>1305室 香港觀塘巧明街106號冠力工業大廈</span>
                </div>
            </div>

            <table border="1" style="border-collapse: collapse;border: none;">
                <tr style="text-align: center;">
                    <th style="width: 40px; padding: 5px 10px;"></th>
                    <th style="width: 500px; padding: 5px 10px;">商品名稱</th>
                    <th style="width: 70px; padding: 5px 10px;">容量</th>
                    <th style="width: 130px; padding: 5px 10px;">售價</th>
                    <th style="width: 100px; padding: 5px 10px;">數量</th>
                    <th style="width: 80px; padding: 5px 10px;">金額</th>
                </tr>
                <tr style="text-align: center;">
                    <td>1</td>
                    <td style="text-align: start; padding: 5px 10px;">醸し人九平次純米大吟醸黒田庄に生まれて</td>
                    <td style=" padding: 5px 10px;">700ML</td>
                    <td style=" padding: 5px 10px;">$360</td>
                    <td style=" padding: 5px 10px;">2</td>
                    <td style=" padding: 5px 10px;">$720</td>
                </tr>
                <tr style="text-align: center;">
                    <td style="border: none;"></td>
                    <td style="border: none;"></td>
                    <td style="border: none;"></td>
                    <td style=" padding: 5px 10px;">Total:</td>
                    <td style=" padding: 5px 10px;">2</td>
                    <td></td>
                </tr>
                <tr style="text-align: center;">
                    <td colspan="2" style="text-align: start;border: none;">Payment Terms </td>
                    <td style="border: none;"></td>
                    <td style="border: none;"></td>
                    <td style=" padding: 5px 10px;">Amount:</td>
                    <td style=" padding: 5px 10px;">$720</td>
                </tr>
            </table>
            <div style="text-align: center; font-size: 14px;">
                **Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor in the course of business**
            </div><br><br>
            <div>Account Info</div>
            <div>HSBC</div>
            <div>521-013805-001</div>
            <div>Hanabi international Limited</div><br><br>

            <div>123123</div>
        </div>
    </div>
</template>

<script>
export default {
    mounted () {
        // this.handleWindowPrint('#generate', 'generate')
    },
    methods: {
        handleWindowPrint (ele, fileName) {
            // 留存原来的 html
            // let bdHtml = window.document.body.innerHTML;
            // let bdHtml = document.querySelector('#app').innerHTML;

            // 要打印的 内容 html
            // document.body.innerHTML =  document.querySelector('#demo').innerHTML;
            // document.body.innerHTML =  document.querySelector('#demo').outerHTML;
            // document.querySelector('#app').innerHTML =  document.querySelector('#demo').outerHTML;
            // document.querySelector('#main').innerHTML =  document.querySelector('#demo').outerHTML;
        // 去除页面不必要的 head 标签内  内容， 避免影响打印页 ， title 为保存为 pdf 的文件时的 文件名
            document.head.innerHTML = '<meta charset="utf-8">\n' +
            ' <title> ' + fileName + '</title>\n' +
            ' <meta name="format-detection" content="telephone=no">\n' +
            ' <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n' +
            ' <meta name="viewport" content="width=device-width,initial-scale=1.0">\n' +
            ' <link rel="stylesheet" href="./static/css/contract.css"/>'  // 生成pdf的外部css样式
        // document.body.innerHTML =  document.querySelector('#demo').outerHTML;
        // document.querySelector('#main').innerHTML =  document.querySelector('#demo').outerHTML;
        // document.body.innerHTML =  document.querySelector('#demo').outerHTML;
            document.body.innerHTML = document.querySelector(ele).outerHTML

        // window.print();

        // 转异步 等待dom元素渲染（样式）完毕在打印
            setTimeout(() => {
            // 打印
            window.print()
            // 刷新页面
            window.location.reload()
            }, 20)

            // 重新设会当前页面
            // window.document.body.innerHTML = bdHtml;
            // document.querySelector('#app').innerHTML =  bdHtml;
            // 刷新页面
            // window.location.reload();
        },
        back () {
            this.$router.back()
        }
    }
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    .download {
        padding: 3px 7px;
        border-radius: 7px;
        background: rgb(2, 233, 106);
        color: white;
        font-size: 14px;
        margin-right: 10px;
    }
    .back {
        background: @theme;
        color: white;
        padding: 3px 5px;
        border-radius: 7px;

    }
</style>