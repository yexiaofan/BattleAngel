<style lang="less">
.ba-radio-group {
  .ba-radio-wrapper {
      margin-right: 8px;
  }
}
</style>

<template>
  <div class="ba-radio-group">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'RadioGroup',
    props: {
      value: {
        type: String
      }
    }
  }
</script>

