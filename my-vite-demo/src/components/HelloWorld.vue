<template>
  <h1 class="a">{{ msg }}22222</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import A from './demo'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    console.log(A);
    console.log(1111)
    console.log(import.meta.hot)
  }
}
</script>
<style lang="less">
.a {
  margin-top: 101px
}
</style>
