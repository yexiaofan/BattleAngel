<style lang="less">

</style>

<template>
  <div class="container">
      <h1>Input</h1>
    <Input v-model="msg" placeholder="Enter something..." style="width: 300px" />{{msg}}
    <br><br>
    <Input v-model="msg" size="large" placeholder="large size" />
    <br>
    <Input v-model="msg" placeholder="default size" />
    <br>
    <Input v-model="msg" size="small" placeholder="small size" />
    <br>
    <Input v-model="msg" placeholder="Enter something..." clearable style="width: 300px" />
    <br>
    <Input v-model="msg" icon="ios-clock" placeholder="Enter something..." style="width: 300px" />
    <br>
    <div>
        Props：
        <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
        <br>
        <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
    </div>
    <br>
    <div style="margin-top: 6px">
        Slots：
        <Input placeholder="Enter name" style="width: auto">
            <Icon type="ios-contact" slot="prefix" />
        </Input>
        <br>
        <Input placeholder="Enter text" style="width: auto">
            <Icon type="ios-search" slot="suffix" />
        </Input>
    </div>
    <br>
    <div>
        Search
        <Input search placeholder="Enter something..." />
        <br>
        <Input search enter-button placeholder="Enter something..." />
        <br>
        <Input search enter-button="Search" placeholder="Enter something..." />
    </div>
    <br>
    <Input v-model="msg" type="textarea" placeholder="Enter something..." />
    <br>
    <Input v-model="msg" type="textarea" :rows="4" placeholder="Enter something..." />
    <hr>
    <br>
    <Input v-model="msg" disabled placeholder="Enter something..." />
    <br>
    <Input v-model="msg" disabled type="textarea" placeholder="Enter something..." />
    <br>
    <Input v-model="msg">
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
    </Input>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

