<template >
  <div>
    <div  v-for="item in checkResult" v-bind:key="item.id" >
    <span v-for="(item1,index) in item"  v-bind:key="item1.id">
      <span v-if="index!==item.length-1">{{item1}}-></span>
      <span v-else>{{item1}}</span>
    </span>
    </div>
  </div>
</template>

<script>
    import {arrayToMatrix,arrayToData} from "../javaScript/data_change";
    import {priorityCheck,topoArray, topoSet,topoRank} from "../javaScript/topo";
    export default {
        name: "checkResult",
        data(){
            return{
                checkResult:undefined
            }
        },
        mounted(){
            this.getResult()
        },
        methods:{
            getResult(){
                // console.log(this.$store.state.tArray);
                let datalink=this.$store.state.tArray;
                let mock_graph = arrayToMatrix(datalink); // 邻接矩阵法存储有向图
                priorityCheck(0,0,mock_graph);
                topoRank(0,mock_graph,mock_graph.length)
                let toposet=topoSet.trim();
                let data=arrayToData(datalink);
                let nodesLen=data.length;
                let topoLen=topoArray.length;
                console.log(topoArray);
                let topo =[];
                for(let i=0;i<topoLen;i++){
                    topo.push([])
                    for(let j=0;j<nodesLen;j++){
                        topo[i].push(data[topoArray[i][j]].name)
                    }
                }
                console.log(topo);
                this.checkResult=topo;

            }
        }

    }
</script>

<style scoped>

</style>
