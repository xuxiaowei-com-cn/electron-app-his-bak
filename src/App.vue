<template>
    <div id="app">
        <img alt="Vue logo" src="assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    const { ipcRenderer } = require('electron');

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        created() {
            ipcRenderer.send('calculation', ['sum', 223, 443]);
            ipcRenderer.on('reply-calculation', (event, arg) => {
                console.log(arg)
            });
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
