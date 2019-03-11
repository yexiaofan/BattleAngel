<style lang="less">
@import "../../css/base.less";
.ba-btn {
  outline: 0;
  cursor: pointer;
  border-radius: @border-radius-normal;
  text-align: center;
  vertical-align: middle;
  span, .ion {
    vertical-align: middle;
  }
  &-small-size {
    font-size: @font-size-small;
    padding: @padding-normal @padding-normal * 2;
  }
  &-default-size {
    font-size: @font-size-normal;
    padding: @padding-normal + 2 @padding-normal * 2.5;
  }
  &-large-size {
    font-size: @font-size-large;
    padding: @padding-normal + 4 @padding-normal * 3;
  }
  &-long {
    width: 100%;
  }
  &-default {
    background-color: @white;
    border: 1px solid @border-color;
    color: @content-color;
  }
  &-default:hover {
    border-color: @light-primary-color;
    color: @light-primary-color;
  }
  &-primary {
    background-color: @primary-color;
    border: 1px solid @primary-color;
    color: @white;
  }
  &-primary:hover {
    border-color: @light-primary-color;
    background-color: @light-primary-color;
  }
  &-dashed {
    background-color: @white;
    border: 1px dashed @border-color;
    color: @content-color;
  }
  &-dashed:hover {
    border-color: @light-primary-color;
    color: @light-primary-color;
  }
  &-text {
    background-color: @white;
    border: 1px dashed transparent;
    color: @content-color;
  }
  &-text:hover {
    color: @light-primary-color;
  }
  &-default:focus,
  &-primary:focus,
  &-dashed:focus,
  &-text:focus {
    box-shadow: 0 0 0 2px lighten(@light-primary-color, 25%);
  }
  &-info {
    background-color: @info-color;
    border: 1px solid @info-color;
    color: @white;
  }
  &-info:hover {
    border-color: @info-color + #2f210f;
    background-color: @info-color + #2f210f;
  }
  &-info:focus {
    box-shadow: 0 0 0 2px lighten(@info-color, 25%);
  }
  &-success {
    background-color: @success-color;
    border: 1px solid @success-color;
    color: @white;
  }
  &-success:hover {
    border-color: @success-color + #2f210f;
    background-color: @success-color + #2f210f;
  }
  &-success:focus {
    box-shadow: 0 0 0 2px lighten(@success-color, 25%);
  }
  
  &-error {
    background-color: @error-color;
    border: 1px solid @error-color;
    color: @white;
  }
  &-error:hover {
    border-color: lighten(@error-color, 10%);
    background-color: lighten(@error-color, 10%);
  }
  &-error:focus {
    box-shadow: 0 0 0 2px lighten(@error-color, 25%);
  }
  &-warning {
    background-color: @warning-color;
    border: 1px solid @warning-color;
    color: @white;
  }
  &-warning:hover {
    border-color: @warning-color + #2f210f;
    background-color: @warning-color + #2f210f;
  }
  &-warning:focus {
    box-shadow: 0 0 0 2px lighten(@warning-color, 25%);
  }
  &-ghost {
    background-color: transparent;
    &.ba-btn-default, 
    &.ba-btn-dashed,
    &.ba-btn-text {
      color: @white;
    }
    &.ba-btn-default:hover, 
    &.ba-btn-dashed:hover,
    &.ba-btn-text:hover {
      color: @light-primary-color;
    }
    &.ba-btn-primary {
      color: @primary-color;
    }
    &.ba-btn-success {
      color: @success-color;
    }
    &.ba-btn-info {
      color: @info-color;
    }
    &.ba-btn-error {
      color: @error-color;
    }
    &.ba-btn-warning {
      color: @warning-color;
    }
    &.ba-btn-primary:hover,
    &.ba-btn-success:hover,
    &.ba-btn-info:hover,
    &.ba-btn-error:hover,
    &.ba-btn-warning:hover {
      color: @white;
    }
  }
  &-circle {
    border-radius: @border-radius-normal * 12;
    color: @white;
  }
  &-icon-only {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 0;
  }
  &:disabled {
    background-color:@background-color;
    border-color: @disabled-color;
    cursor: not-allowed;
    color: @disabled-color;
  }
}
</style>

<template>
  <button :class="classes" :disabled="disabled" @click="handleClick">
    <Icon :type="icon" v-if="!!icon && !loading"></Icon>
    <Icon type="ios-loading" v-if="loading"></Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from '../Icon'
export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: "default"
    },
    ghost: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    shape: String,
    icon: String,
    long: Boolean,
    loading: Boolean
  },
  computed: {
    classes() {
      return [
        "ba-btn",
        {
          [`ba-btn-${this.type}`]: !!this.type,
          [`ba-btn-ghost`]: !!this.ghost,
          [`ba-btn-circle`]: !!this.shape,
          [`ba-btn-icon-only`]: !!this.shape && !(!!this.$slots.default),
          [`ba-btn-${this.size}-size`]: !!this.size,
          [`ba-btn-long`]: this.long
        }
      ];
    }
  },
  components: {
    Icon
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  },
  created() {
  }
};
</script>

