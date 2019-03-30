<style lang="less" scoped>
.main-wrapper {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  .wrapper {
    flex: 0 0 10%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 8px;
  }
}
</style>

<template>
  <div class="main-wrapper">
    <template v-for="(value, index) in icons">
      <span class="wrapper" :key="index">
        <Icon :type="value" size="36"></Icon>
        <span>{{value}}</span>
      </span>
    </template>
  </div>
</template>

<script>
import icons from "../library/components/Icon/Icons.js";
export default {
  computed: {
    icons() {
      let iconsList = [];
      for (let value of icons) {
        iconsList.push(value.slice(4));
      }
      return iconsList;
    }
  },
  created() {}
};
</script>