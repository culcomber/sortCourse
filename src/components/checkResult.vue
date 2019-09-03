/* eslint-disable */
<template>
  <div style="padding: 30px 0">
    <p class="title">方案展示</p>
    <div :style="{width:'100%',backgroundColor: '#ffffff78'}" class="plan">
      <div v-for="(item,index) in checkResult" v-bind:key="item.id" style="padding: 10px">
        方案{{index+1}}:
        <span v-for="(item1,index) in item" v-bind:key="item1.id" class="plantext">
        <span v-if="index!==item.length-1">{{item1}}-></span>
        <span v-else>{{item1}}</span>
        </span>
      </div>
    </div>
    <el-row class="result">
      <el-button type="primary" @click="outResult()">输出结果</el-button>
      <el-button type="primary" @click="$goRoute('/')">重新输入</el-button>
    </el-row>
  </div>

</template>

<script>
  import {saveAs} from "../javaScript/FileSaver.js"
  import {arrayToMatrix, arrayToData} from "../javaScript/data_change";
  import {allRank} from "../javaScript/topo";

  let topo = []
  export default {
    name: "checkResult",
    data() {
      return {
        checkResult: undefined,
      }
    },
    mounted() {
      this.getResult()
    },
    methods: {

      outResult: function () {
        //topoRank(0,matrix,matrix.length);
        //导出文件
        // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
        // FileSaver.saveAs(blob, "hello world.txt");
        let text = ''
        for(let i = 0; i < topo.length; i++){
          for(let j = 0; j < topo[i].length; j++){
            if(j===0){
              text = text + '方案'+ (i+1) +': '+ topo[i][j]
            }else{
              text =text+ ' -> '+topo[i][j]
            }
          }
          text = text + '\n'
        }
        var blob = new Blob([text], {endings:"native"});
        saveAs(blob, "topoSortResult.txt");
      },
      getResult() {
        topo = []
        // console.log(this.$store.state.tArray);
        let datalink = this.$store.state.tArray;
        let mock_graph = arrayToMatrix(datalink); // 邻接矩阵法存储有向图
        let topoArray = allRank(0,mock_graph,mock_graph.length)
        let data = arrayToData(datalink);
        let nodesLen = data.length;
        let topoLen = topoArray.length;
        // let topo =[];
        for (let i = 0; i < topoLen; i++) {
          topo.push([])
          for (let j = 0; j < nodesLen; j++) {
            topo[i].push(data[topoArray[i][j]].name)
          }
        }
        this.checkResult = topo;

      }
    }

  }
</script>

<style scoped>
  .title {
    text-align: center;
    font-size: x-large;
  }

  .plan {
    padding: 60px 200px;
    font-size: 18px;
  }

  .plantext {

  }

  .result {

  }
</style>
