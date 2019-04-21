<template>
  <div class="hello">
    <h1>Icon</h1>
    <Button type="primary" @click="routeTo('icon')">点击查看所有Icon</Button>
    <hr>
    <h1>Button</h1>
    <Button type="primary" @click="routeTo('button')">点击查看所有Button</Button>
    <hr>
    <h1>Row/Col</h1>
    <Button type="primary" @click="routeTo('grid')">点击查看所有Grid布局</Button>
    <hr>
    <h1>Card</h1>
    <Button type="primary" @click="routeTo('card')">点击查看所有Card</Button>
    <hr>
    <h1>Collapse</h1>
    <Button type="primary" @click="routeTo('collapse')">点击查看所有Collapse</Button>
    <hr>
    <h1>Input</h1>
    <Button type="primary" @click="routeTo('input')">点击查看所有Input</Button>
    <hr>
    <h1>Radio</h1>
    <Button type="primary" @click="routeTo('radio')">点击查看所有Input</Button>
    <hr>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  },
  methods: {
    handleClick() {
      alert("iocn clicked!");
    },
    routeTo(target) {
      this.$router.push({
        name: target
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 20px;
}
hr {
  margin: 20px 0;
}
</style>
