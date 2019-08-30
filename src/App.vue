<template>
  <div id="web">
    <p class="question">请选择输入方式</p>
    <router-link to="/uploadFile">读入文件</router-link>
    <router-link to="/inputData">输入数据</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
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

</style>
