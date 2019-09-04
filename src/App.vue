/* eslint-disable */

<template :style="card">
  <div style="margin: -8px">
    <img src="https://i.loli.net/2019/09/04/HdTk7wF5nf9lPbQ.png" width="100%" style="position: fixed;z-index: -1;">
<!--跳转页面 数据共享-->
    <ul>
      <!--<li><a @click="$goRoute('/home')">输入数据</a></li>-->
      <!--<li ><a @click="$goRoute('/relationGraph')">查看数据</a></li>
      <li><a @click="$goRoute('/checkResult')">查看结果</a></li>-->
<!--      都可以实现,区别?? -->
<!--      <li><router-link to="/home">输入数据</router-link></li>-->
<!--      <li><router-link to="/checkData">查看数据</router-link></li>-->
<!--      <li><router-link to="/checkResult">查看结果</router-link></li>-->
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
    import Form from './components/home'
  export default {
    name: 'App',
      components:{
          "app-form":Form
      },
    data () {
        return{
          card:{
            backgroundImage:'url("https://i.loli.net/2019/09/03/erwnatMTb197K8F.png")',
          },
            dialogCreate:'false',
            links: [
                {
                    text: '输入数据',
                    route: '/home'
                },
                {
                    text: '查看数据',
                    route: '/relationGraph'
                },
                {
                    text: '查看结果',
                    route: '/checkResult'
                }
            ]
        }
    },
      methods: {
          check(){
              alert(1);
          },
          success(res){
              this.dialogCreate = res;
          }
      }

      // methods:{
      //     clickByRouter(){
      //         this.$router.push('/checkInput')
      //     }
      // }

  }
</script>

<style>
#web {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.text-center {
  text-align: center;
}
.spacing {
  margin-top: 30px;
}
.red {
  color: darkred;
}
ul li {
  display: inline-block;
  margin-right: 10px;
}
ul li a{
  display: inherit;
  padding: 5px 10px;
  border: 1px solid #ccc;
}
ul li a:hover{
  cursor: pointer;
  color: #fff;
  background-color: #138bec;
  border: 1px solid #138bec;
}
</style>
