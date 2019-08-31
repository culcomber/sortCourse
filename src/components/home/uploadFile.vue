<template>
    <div>
      <!--隐藏输入按钮-->
      <!--<input type="file" id="fileElem" multiple accept="txt/*" style="display:none" onchange="handleFiles(this.files)">-->
      <!--<label for="fileElem">Select some files</label>-->
      <input type="file" id="files1" @change="uploadFile()">
    </div>
</template>

<script>
    export default {
      name: "uploadFile",
      methods: {
        uploadFile :  function () {
          let textContent; // 保存文件内容
          let firData = []; // 将textContent转变为数组保存在firData
          let secData = []; // 将firData转换为二维数组

          const selectedFile = document.getElementById('files1').files[0]
          const reader = new FileReader()
          reader.readAsText(selectedFile) // readAsText是个异步操作，只有等到onload时才能显示数据。
          reader.onload = function () {
            //保存文本内容到txxtContent
            textContent = this.result;
            //初步处理数组，得到的数组有些元素值为“”
            let re = /[\n,><]/;
            firData = textContent.split(re)
            //再次处理数组，删除值为“”的元素
            let n = 0;
            for (let i=0; i<firData.length; i++) {
               if(firData[i] !== firData[0] && firData[i] !== firData[3] &&firData[i] !== firData[4] ){
                secData[n]=firData[i];
                console.log(secData[n]);
                n++;
              }
            }
            //构建目标数据
            let m = 0;
            let len = (secData.length) / 2;
            let tArray = []; //先声明一维
            for(let p=0; p<len; p++){ //一维长度为i,i为变量，可以根据实际情况改变
              tArray[p]=[]; //声明二维，每一个一维数组里面的一个元素都是一个数组；
              for(let q=0; q<2; q++){ //一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
                tArray[p][q]=""; //这里将变量初始化，我这边统一初始化为空，后面在用所需的值覆盖里面的值
              }
            }

            for (let k=0; k<secData.length; k++) {
              tArray[m][0] = secData[k];
              k++;
              tArray[m][1] = secData[k];
              m++;
            }
            console.log(tArray);
          }
        },
      }
    }

</script>

<style scoped>
  /*隐藏输入按钮*/
  /* .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  } */

  /* Separate rule for compatibility, :focus-within is required on modern Firefox and Chrome */
  /* input.visually-hidden:focus + label {
    outline: thin dotted;
  }
  input.visually-hidden:focus-within + label {
    outline: thin dotted;
  } */
</style>
