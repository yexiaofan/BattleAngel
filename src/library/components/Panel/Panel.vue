<style lang="less">
@import "../../css/base.less";
.ba-collapse-item {
  &-header {
    height: 38px;
    line-height: 38px;
    background-color: @divider-color;
    font-size: @font-size-normal;
    padding-left: @padding-normal + 10;
    position: relative;
    cursor: pointer;
    z-index: 10;
    i {
      margin-right: @padding-normal + 10;
      transition: all 0.2s ease-in-out;
    }
    .icon-arrow-down {
      transform: rotate(90deg);
    }
  }
  &-content {
    padding: @padding-normal + 14;
    font-size: @font-size-large;
    transition: height 0.2s ease-in-out;
    transition: padding 0.2s ease-in-out;
    position: relative;
    z-index: 1;
  }
}
</style>

<template>
  <div :class="itemClasses">
    <div :class="headerClasses" @click="toggleItemOpened">
      <Icon :type="iconType" :class="iconClasses" v-if="!hideArrow"></Icon>
      <slot></slot>
    </div>
    <div :class="contentClasses" :style="contentStyles">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  name: "Panel",
  data() {
    return {
      isActived: false,
      iconType: "ios-arrow-forward"
    };
  },
  computed: {
    itemClasses() {
      return ["ba-collapse-item"];
    },
    headerClasses() {
      return ["ba-collapse-item-header"];
    },
    iconClasses() {
      return [this.isActived ? "icon-arrow-down" : ""];
    },
    contentClasses() {
      return ["ba-collapse-item-content"];
    },
    contentStyles() {
      return {
        height: this.isActived ? "auto" : "0px",
        opacity: this.isActived ? "1" : "0",
        padding: this.isActived ? "24px" : "0 24px"
      };
    }
  },
  props: {
    name: {
      type: String
    },
    hideArrow: {
        type: Boolean,
        default: false
    }
  },
  methods: {
    toggleItemOpened() {
      this.$parent.setActived(this.name, !this.isActived);
    }
  }
};
</script>

