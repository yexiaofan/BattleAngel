<style lang="less" scoped>
  
</style>

<template>
  <div>
    <h1>CheckBox</h1>
    <Checkbox v-model="single">Checkbox</Checkbox>
    <br><br>
    <CheckboxGroup v-model="fruit">
      <Checkbox label="香蕉"></Checkbox>
      <Checkbox label="苹果"></Checkbox>
      <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
    <br><br>
    <Checkbox v-model="single" disabled>Checkbox</Checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      single: true,
      fruit: '苹果'
    }
  }
};
</script>