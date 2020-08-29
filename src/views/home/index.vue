<template>
  <el-container id="home">
    <img alt="Vue logo" src="assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import HelloWorld from '../../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">

</style>

<style scoped>

</style>
