<style lang="less">
@import "../../css/base.less";
.ba-btn-group {
  display: inline-block;
  font-size: 0px;
  .ba-btn {
    margin: 0;
    border-radius: 0;
    margin-right: -1px;
  }
  .ba-btn:hover {
    margin-right: 0px;
  }
  .ba-btn:disabled {
    margin-right: -1px;
  }
  .ba-btn:first-of-type {
    border-top-left-radius: @border-radius-normal;
    border-bottom-left-radius: @border-radius-normal;
  }
  .ba-btn:last-of-type {
    border-top-right-radius: @border-radius-normal;
    border-bottom-right-radius: @border-radius-normal;
  }
}
.ba-btn-group-circle {
  .ba-btn:first-of-type {
    border-top-left-radius: @border-radius-normal * 12;
    border-bottom-left-radius: @border-radius-normal * 12;
  }
  .ba-btn:last-of-type {
    border-top-right-radius: @border-radius-normal * 12;
    border-bottom-right-radius: @border-radius-normal * 12;
  }
}
</style>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ButtonGroup",
  computed: {
    classes() {
      let classes = [
        "ba-btn-group",
        {
          [`ba-btn-group-${this.shape}`]: !!this.shape
        }
      ];
      return classes;
    }
  },
  props: {
    size: {
      type: String,
      default: "default"
    },
    shape: String
  }
};
</script>

