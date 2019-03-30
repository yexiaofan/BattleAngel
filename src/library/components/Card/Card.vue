<style lang="less">
@import "../../css/base.less";
.ba-card {
  border: 1px solid @border-color;
  border-radius: @border-radius-normal;
  position: relative;
  padding: 16px;
  &-header {
    * {
      font-size: @font-size-large;
      margin: 0;
      padding: 0;
    }
    font-size: @font-size-large;
    font-weight: bold;
  }
  &-extra {
    * {
      font-size: @font-size-large;
      margin: 0;
      padding: 0;
    }
    font-size: @font-size-large;
    position: absolute;
    top: 16px;
    right: 16px;
  }
}
</style>

<template>
  <div class="ba-card">
    <div class="ba-card-header">
      <slot name="title">
        <p v-if="!!title || !!icon">
          <Icon v-if="!!icon" :type="icon"></Icon>
          <template v-if="!!title">
            {{title}}
          </template>
        </p>
      </slot>
    </div>
    <div class="ba-card-extra">
      <slot name="extra"></slot>
    </div>
    <div class="ba-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    icon: String
  }
};
</script>

