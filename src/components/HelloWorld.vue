<template>
  <div class="hello">
    <h1>Icon</h1>
    <Icon type="md-alert" @click="handleClick"></Icon>
    <hr>
    <h1>Button</h1>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <hr>
    <Button ghost>Default</Button>
    <Button type="primary" ghost>Primary</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="text" ghost>Text</Button>
    <Button type="info" ghost>Info</Button>
    <Button type="success" ghost>Success</Button>
    <Button type="warning" ghost>Warning</Button>
    <Button type="error" ghost>Error</Button>
    <hr>
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle">Circle</Button>
    <hr>
    <Button type="info" size="small">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning" size="default">Warning</Button>
    <Button type="error" size="large">Error</Button>
    <hr>
    <Button type="success" long>Success</Button>
    <Button type="error" long>Error</Button>
    <hr>
    <Button type="info" disabled>Info</Button>
    <Button type="success" disabled>Success</Button>
    <Button type="warning" disabled>Warning</Button>
    <Button type="error" disabled>Error</Button>
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
