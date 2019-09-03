/* eslint-disable */
<template>
  <div >
    <p class="choose" v-if="flag">请选择输入方式</p>
    <ul class="text-center spacing" style="padding: 0" v-if="flag">
      <!--    <li v-for="item in links" : key='item'><a @click="$goRoute(item.route)">{{item.text}}</a></li>-->
      <el-button class="g" @click="file" circle>读取文件</el-button>
      <el-button class="g" @click="read" circle>输入数据</el-button>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        flag: true,
        links: [
          {
            text: 'inputData',
            route: '/home/inputData'
          },
          {
            text: 'uploadFile',
            route: '/home/uploadFile'
          }
        ]
      }
    },
    methods:{
      file: function () {
        this.$router.push({ path:'/home/uploadFile'  })
        this.flag = false
      },
      read: function () {
        this.$router.push({ path:'/home/inputData'  })
        this.flag = false
      }
    }
  }
</script>

<style scoped>
  .g {
    padding: 140px 100px;
    background-color: #65b0ee;
    font-size: x-large;
    margin: 90px 100px;
  }

  .choose {
    font-size: xx-large;
    text-align: center;
    margin: 0;
    padding-top: 32px;
  }
</style>
