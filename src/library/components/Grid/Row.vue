<style lang="less">
@import './grid.less';
</style>

<template>
  <div :class="classes">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Row',
    props: {
      gutter: [Number, String],
      justify: String,
      align: String
    },
    computed: {
      classes () {
        return [
          'ba-row',
          {
            [`ba-row-justify-${this.justify}`]: !!this.justify,
            [`ba-row-align-${this.align}`]: !!this.align
          }
        ]
      }
    }
  }
</script>

