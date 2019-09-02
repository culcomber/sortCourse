/* eslint-disable */
<template>
  <div>
      <p>请选择输入方式</p>
  <ul class="text-center spacing" style="padding: 0">
<!--    <li v-for="item in links" : key='item'><a @click="$goRoute(item.route)">{{item.text}}</a></li>-->
    <li><router-link to="/home/uploadFile">读取文件</router-link></li>
    <li><router-link to="/home/inputData">输入数据</router-link></li>
  </ul>
  <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "home",
    }
</script>

<style scoped>
p{
  margin: 0px auto;
}
</style>
