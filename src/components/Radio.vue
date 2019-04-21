<style lang="less">

</style>

<template>
  <div class="container">
      <h1>Radio</h1>
    <Radio v-model="single">Radio</Radio>
    <br><br>
    <RadioGroup v-model="animal">
      <Radio label="金斑蝶"></Radio>
      <Radio label="爪哇犀牛"></Radio>
      <Radio label="印度黑羚"></Radio>
    </RadioGroup>
    <br><br>
    <Radio v-model="disabledSingle" disabled>Radio</Radio>
    <br><br>
    <RadioGroup v-model="disabledGroup">
        <Radio label="金斑蝶" disabled></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        single: true,
        animal: '印度黑羚',
        disabledSingle: true,
        disabledGroup: '爪哇犀牛'
      }
    },
    components: {

    }
  }
</script>

