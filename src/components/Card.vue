<style lang="less">
</style>

<template>
  <div class="container">
      <Card style="width:350px">
      <p slot="title">
        <Icon type="ios-attach"></Icon>
        Classic film
      </p>
      <a href="#" slot="extra" @click.prevent="changeLimit">
        <Icon type="ios-bonfire"></Icon>Change
      </a>
      <h1>{{msg}}</h1>
    </Card>
    <br>
    <br>
    <Card style="width:350px">
      <h1>{{msg}}</h1>
    </Card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          msg: "Welcome to Your Vue.js App"
      }
    },
    components: {

    }
  }
</script>

