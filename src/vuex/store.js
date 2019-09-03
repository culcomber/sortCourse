import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    tArray:undefined,
    topoSequence:[],
    topoArray : [],//将多种拓扑序列变成二维数组；
    vis : [],  // 顶点是否被访问的标识符
    topoSet : '', // 用于存放拓扑序列集合
    cnt : 0,    // 拓扑序列索引
    arrayCurrent : 0, //用于记录二维数组的一维序号；
    topo : []
  }
})

export default store
