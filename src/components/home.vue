/* eslint-disable */
<template>
  <div>
      <p>请选择输入方式</p>
<!--      <router-link to="/uploadFile">读入文件</router-link>-->
<!--      <router-link to="/inputData">输入数据</router-link>-->
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
        data() {
            return {
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
        }
    }
</script>

<style scoped>

</style>
