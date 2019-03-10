<style lang="less">
@import "../../css/ionicons.min.css";
</style>

<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
export default {
  computed: {
    classes () {
      return `ion ion-${this.type}`
    },
    styles () {
      let style = {
        'font-size': `${this.size}px`,
        'color': this.color
      }
      return style
    }
  },
  props: {
    type: {
      type: String
    },
    size: {
      type: [Number, String],
      default: 16
    },
    color: {
      type: String
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  },
};
</script>