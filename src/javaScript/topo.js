var topoSequence = [];  // 拓扑序列
var vis = [];  // 顶点是否被访问的标识符
var topoSet = ''; // 用于存放拓扑序列集合
var cnt = 0;    // 拓扑序列索引
function priorityCheck(judged, cnt, graph) { //在拓扑序列中插入一项新活动之前，检测该项活动的优先级是否与拓扑序列中已有的活动发生冲突
  for(var i=0; i<cnt; i++){
    if(graph[judged][topoSequence[i]])
      return false;
  }
  return true;
}
function topoRank(cnt, graph, vNum) { // 拓扑排序函数
  if (cnt == vNum) {
    topoSet = topoSet + '\n' + topoSequence;  // 递归终点一（拓扑序列包含有vNum个顶点，整个过程没有出现非法解）
  }else {
    for(var i=0; i<vNum; i++){  // 遍历所有顶点
      if(!vis[i]&&priorityCheck(i,cnt, graph)){  // 仅在该活动没有被访问过，并且优先级低于拓扑序列已有的其他所有活动，该活动才能被加入拓扑序列
        topoSequence[cnt] = i;  // 将该活动加入拓扑序列
        vis[i] = true;  // 该活动标志为“已访问”
        topoRank(cnt+1, graph, vNum); // 拓扑序列的索引往后一位移动，递归进行拓扑排序
        vis[i] = false; // 拓扑序列的索引往前一位移动，准备寻找其他可能的拓扑序列
      }
    }
  }  // 递归终点二（拓扑序列包含少于vNum个元素，出现了非法解，假如出现这种情况，递归过程将无法结束在终点一，而只能停在此处）
  // return toposet;
}
// function getTopoSet(graph,vNum) {
//   var index=0;
//   topoRank(index, graph, vNum);
//   return topoSet;
// }
// 以下为模拟数据
// var mock_graph = [[0,1,1,0,0,0,0],[0,0,0,0,1,0,1],[0,0,0,0,0,1,0],[1,1,1,0,0,1,1],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,1,1,0]]; // 邻接矩阵法存储有向图
// var mock_vNum = 7;
// var mock_graph_sec = [[0,0,0,0,0],[1,0,1,0,0],[1,0,0,0,0],[0,1,1,0,0],[1,0,0,0,0]]
// var mock_vNum_sec = 5;

// API接口
/*topoRank(cnt,mock_graph,mock_vNum);
topoSet = topoSet.trim()
console.log(topoSet)*/

export{topoRank,topoSet}
