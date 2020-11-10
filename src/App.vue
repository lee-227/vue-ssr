<template>
  <div id="app">
    <router-link to="/">foo</router-link>
    <router-link to="/bar">bar</router-link>
    <a href="/bar">服务端渲染</a>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
}
</script>