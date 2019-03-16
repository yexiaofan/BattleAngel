<template>
  <div class="hello">
    <h1>Icon</h1>
    <Button type="primary" @click="routeTo('icon')">点击查看所有Icon</Button>
    <hr>
    <h1>Button</h1>
    <Button type="primary" @click="routeTo('button')">点击查看所有Button</Button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleClick () {
      alert('iocn clicked!')
    },
    routeTo (target) {
      this.$router.push({
        name: target
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
