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
  &-circle {
    .ba-btn:first-of-type {
      border-top-left-radius: @border-radius-normal * 12;
      border-bottom-left-radius: @border-radius-normal * 12;
    }
    .ba-btn:last-of-type {
      border-top-right-radius: @border-radius-normal * 12;
      border-bottom-right-radius: @border-radius-normal * 12;
    }
  }
  &-default-size {
    .ba-btn {
      font-size: @font-size-normal;
      padding: @padding-normal + 2 @padding-normal * 2.5;
    }
  }
  &-small-size {
    .ba-btn {
      font-size: @font-size-small;
      padding: @padding-normal @padding-normal * 2;
    }
  }
  &-large-size {
    .ba-btn {
      font-size: @font-size-large;
      padding: @padding-normal + 4 @padding-normal * 3;
    }
  }
  &-vertical {
    display: inline-flex;
    flex-direction: column;
    .ba-btn {
      margin: 0;
      border-radius: 0;
      margin-bottom: -1px;
    }
    .ba-btn:hover {
      margin-bottom: 0px;
    }
    .ba-btn:disabled {
      margin-bottom: -1px;
    }
    .ba-btn:first-of-type {
      border-top-left-radius: @border-radius-normal;
      border-top-right-radius: @border-radius-normal;
      border-bottom-left-radius: 0;
    }
    .ba-btn:last-of-type {
      border-bottom-left-radius: @border-radius-normal;
      border-bottom-right-radius: @border-radius-normal;
      border-top-right-radius: 0;
    }
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
          [`ba-btn-group-${this.shape}`]: !!this.shape,
          [`ba-btn-group-${this.size}-size`]: !!this.size,
          [`ba-btn-group-vertical`]: this.vertical
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
    shape: String,
    vertical: Boolean
  }
};
</script>

