<template>
  <div>foo{{$store.state.name}}</div>
</template>
<script>
export default {
  asyncData(store){
    return store.dispatch('changeName')
  },
  mounted () {
    this.$store.dispatch('changeName')
  }
}
</script>
<style scoped>
div {
  color: red;
}
</style>