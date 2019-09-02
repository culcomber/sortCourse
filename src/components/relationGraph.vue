<template>
  <div>
       <div id="myChart" :style="{width:'100%',height:'600px'}"></div>
       <el-button type="primary"  v-show="isShow"  round class="exportClass" @click="department_exportFigure()">导出</el-button>
  </div>
</template>
<script>
    import {arrayToData, arrayToLinks} from "../javaScript/data_change";

  //引入基本模板

  let echarts = require('echarts/lib/echarts');
  //引入图形
  require('echarts/lib/chart/graph');
  //引入提示框和title组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  //转换数据
  // require('echarts/lib/data_change');
    export default {
        name: "relationGraph",
        data(){
          return {
            msg:'Welcome to Your Vue.js App',
            isShow:false,
            tArr:this.$store.state.tArray,

          }
        },
        mounted() {

          this.drawLine();
          window.addEventListener('resize',()=>{
           echarts.init(document.getElementById('myChart')).resize()//自适应屏幕
          })

        },
        methods:{

          department_exportFigure(){
            let  myChart =echarts.init(document.getElementById('myChart'));
            setTimeout(function() {
              var img = new Image();
              img.src = myChart.getDataURL({
                type:"png",
                pixelRatio: 2, //放大2倍
                backgroundColor: '#fff'
              });

              img.onload=function(){
                var canvas=document.createElement("canvas");
                canvas.width=img.width;
                canvas.height=img.height;
                var ctx=canvas.getContext('2d');
                ctx.drawImage(img,0,0);
                var  dataURL=canvas.toDataURL('image/png');

                var a = document.createElement('a');
                // 创建一个单击事件
                var event = new MouseEvent('click');
                // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
                a.download = '关系图.png' || '下载图片名称';
                // 将生成的URL设置为a.href属性
                a.href = dataURL;
                // 触发a的单击事件
                a.dispatchEvent(event);
              };
            }, 3000)
          },
          drawLine(){
            //基于准备好的dom，初始化echarts实例
           // let name=arrayToData(dataLink);
           //  for (let i=0;i<name.length;i++)
           // let data3=arrayToLinks(dataLink);
            //改成调用过来的数据
             console.log(this.$store)
              console.log(this.$store.state)
            let  myChart =echarts.init(document.getElementById('myChart'));
            myChart.showLoading();
             let nodes=arrayToData(this.tArr)
             let links=arrayToLinks(this.tArr)
            /*   let nodes=[
                  {name: 'C1'},
                  { name:'C2'},
                  { name:'C3'},
                  { name:'C4'
                  },
                  {name: 'C5'},
                  { name:'C6'},
                  { name:'C7'},
                  { name:'C8'
                  }
              ]
              let links=[{
                  source:'C2',
                  target:'C8',
              },
                  {
                      source: 'C1',
                      target:'C5'
                  },
                  {
                      source: 'C2',
                      target:'C6'
                  },
                  {
                      source: 'C1',
                      target:'C4'
                  },
                  {
                      source:'C4',
                      target:'C8',
                  },
                  {
                      source: 'C2',
                      target:'C7'
                  },
                  {
                      source: 'C8',
                      target:'C6'
                  },
                  {
                      source: 'C7',
                      target:'C3'
                  },
              ];*/
            let linkss=[];
            //线条配置
            for(let i=0;i<links.length;i++){
               let link={
                 source:links[i].source,
                 target:links[i].target,
                 label:{
                   normal:{
                     show:false,//线条上是否有字
                     formatter: links[i].name
                   }
                 },
                 lineStyle:{
                   opacity: 0.9,
                   width: 2,
                  curveness: 0

                 }
               };
              linkss.push(link);

            }
           // console.log(linkss);
           let option={

             tooltip:{},
             series:[{//图片配置
               type:'graph',
               layout:'force',//图的布局，为力导向图
               legendHoverLink : true,//是否其用图例hover时联动高亮
               hoverAnimation:true,//是否开启鼠标悬停节点的显示动画
               coordinateSystem:null,//坐标系
               xAxisIndex:0,//x轴坐标
               yAxisIndex:0,//Y轴坐标
               force:{
                 repulsion:700,//相距距离
                 edgeLength:[100,200],//边的两个节点的距离
                 layoutAnimation:true//是否显示迭代动画，数据节点较多的时候需要显示
               },
               roam:'scale',//鼠标缩放
               label: {
                 normal: {
                   show: true,
                   textStyle:{
                     fontSize:18
                   }
                 }
               },
               nodeScaleRatio:0.5,//鼠标缩放比例，
               draggable:false,//节点是否可拖拽
               symbol:'circle',
               symbolSize:50,
               edgeSymbol:['none','arrow'],//边的标记类型，箭头
               edgeSymbolSize:[5,10],//边两端的大小
               itemStyle:{
                  label:{
                    show:true
                  },
                  emphasis:{}//高亮状态
               },

               lineStyle:{//关系边的公用线条样式
                 normal:{
                   color:'#31354B',
                   width:'1',
                   type:'solid',
                   curveness:0,
                   opacity:1
                 },
                 emphasis:{}
               },
               data:[],
               links :[]


             }]
           };
            //绘制图表
            myChart.setOption(option);
            setTimeout(()=>{
              myChart.hideLoading();//隐藏加载动画;
                this.isShow=true;
              myChart.setOption({
                title:{
                  text:'输入数据的关系图',
                  left:'center'
                },
                dataZoom:{
                  orient:"vertical", //水平显示
                  show:true, //显示滚动条
                  start:0, //起始值为20%
                  end:100,  //结束值为60%
                },
                 series:[{
                    data:nodes,
                    links:linkss
                 }]


              });


            },2000)

          },
        }
    }

</script>

<style scoped>

</style>
