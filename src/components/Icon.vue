<style lang="less" scoped>
</style>

<template>
  <div>
      <!-- <Icon type="md-woman"></Icon> -->
      <template v-for="(value, index) in icons">
          <Icon :type="value"></Icon>
      </template>
  </div>
</template>

<script>
import icons from '../library/components/Icon/Icons.js'
export default {
    computed: {
        icons () {
            let iconsList = []
            for (let value of icons) {
                iconsList.push(value.slice(4))
            } 
            return iconsList
        }
    },
    created() {
    },
};
</script>