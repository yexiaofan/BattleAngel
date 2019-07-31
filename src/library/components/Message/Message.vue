<style lang="less">
.container {
    position: fixed;
    top: 10px;
    left: 400px;
}

</style>

<template>
  <div class="container">
      <h1>{{mesg}}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mesg: 'hello message'
      }
    },
    components: {

    },
    created () {
      console.log('create')
    },
    mounted() {
      console.log('mounted')
    },
  }
</script>

