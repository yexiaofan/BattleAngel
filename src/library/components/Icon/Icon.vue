<style lang="less">
@import "../../css/ionicons.min.css";
</style>

<template>
  <!-- <i :class="`ion icon-${type}`" :style="style"></i> -->
  <i :class="`ion ion-${type}`" :style="style"></i>
</template>

<script>
export default {
  data() {
    return {
      style: {
        'font-size': `${this.size}px`,
        'color': this.color
      }
    };
  },
  props: {
    type: {
      type: String
    },
    size: {
      type: [Number, String],
      default: 40
    },
    color: {
      type: String,
      default: "#515a6e"
    }
  }
};
</script>