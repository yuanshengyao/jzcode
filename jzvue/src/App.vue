<template>
  <div id="app">
    <jz-layout></jz-layout>
  </div>
</template>

<script>
import JzLayout from './components/JzLayout'

export default {
  name: 'App',
  components: {
    JzLayout
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  /* background: #191a20; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
