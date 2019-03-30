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
    <hr>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    handleClick() {
      alert("iocn clicked!");
    },
    routeTo(target) {
      this.$router.push({
        name: target
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
