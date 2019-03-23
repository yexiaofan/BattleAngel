<style lang="less">
</style>

<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Col",
  props: {
    span: [Number, String],
    order: [Number, String],
    offset: [Number, String],
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    xxl: [Number, Object],
  },
  computed: {
    classes() {
      return [
        "ba-col",
        {
          [`ba-col-span-${this.span}`]: !!this.span,
          [`ba-col-order-${this.order}`]: !!this.order,
          [`ba-col-offset-${this.offset}`]: !!this.offset,
          [`ba-col-span-xs-${this.xs}`]: !!this.xs,
          [`ba-col-span-sm-${this.sm}`]: !!this.sm,
          [`ba-col-span-md-${this.md}`]: !!this.md,
          [`ba-col-span-lg-${this.lg}`]: !!this.lg,
          [`ba-col-span-xl-${this.xl}`]: !!this.xl,
          [`ba-col-span-xxl-${this.xxl}`]: !!this.xxl
        }
      ];
    },
    styles() {
      let styles = {};
      if (this.$parent.gutter && Number(this.$parent.gutter) > 0) {
        styles = {
          paddingLeft: this.$parent.gutter / 2 + "px",
          paddingRight: this.$parent.gutter / 2 + "px"
        };
      }
      return styles;
    }
  }
};
</script>

