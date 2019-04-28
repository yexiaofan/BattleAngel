<style lang="less">
  
</style>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: String
    }
  },
  computed: {
    classes () {
        return [
          'ba-checkbox-group-wrapper'
        ]
    }
  }
};
</script>