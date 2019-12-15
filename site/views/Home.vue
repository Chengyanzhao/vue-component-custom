<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <sider-right :barPosition="{top:'50px'}">
      <div class="box">
        这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文
        字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字
      </div>
    </sider-right>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SiderRight from 'com/SiderRight'
// import '../components/SiderRight/style'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    SiderRight
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: palevioletred;
  .sider-right {
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .box {
    background-color: yellowgreen;
    width: 350px;
    height: 900px;
  }
}
</style>
