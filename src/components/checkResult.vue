<template>
  <div>
<!--    <input type="button"  @click="outResult()" placeholder="输出结果">-->
    <button @click="outResult()">输出结果</button>
  </div>
</template>

<script>
    //导出文件
    import { saveAs } from "../javaScript/FileSaver.js"
    import {arrayToMatrix,arrayToData} from '../javaScript/data_change.js';
    import {topoRank,topoArray} from "../javaScript/topo.js";

    export default {
        name: "checkResult",
        methods: {
            outResult:  function(){
                //topoRank(0,matrix,matrix.length);
                //导出文件
                // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
                // FileSaver.saveAs(blob, "hello world.txt");
                var blob = new Blob([arrayToData(topoArray)], {type: "text/plain;charset=utf-8"});
                saveAs(blob, "topoSortResult.txt");
            }
        }

    }
</script>

<style scoped>

</style>
