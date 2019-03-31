<style lang="less">
@import "../../css/base.less";
.ba-collapse {
  border: 1px solid @border-color;
}
</style>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  model: {
    prop: "names",
    event: "itemOpened"
  },
  props: {
    names: [String, Array],
    accordion: {
        type: Boolean,
        default: false
    }
  },
  computed: {
    classes() {
      return ["ba-collapse"];
    }
  },
  methods: {
    setActived(names, value) {
      this.$children.forEach((child, index) => {
        if (!child.name) {
          child.name = index.toString();
        } else {
          if (Array.isArray(names)) {
            for (let item of names) {
              if (item == child.name) {
                child.isActived = typeof value === "undefined" ? true : value;
                break;
              } else if (this.accordion) {
                child.isActived = false;
              }
            }
          } else {
            if (child.name === names) {
              child.isActived = typeof value === "undefined" ? true : value;
            } else if (this.accordion) {
              child.isActived = false;
            }
          }
        }
      })
      if (typeof value !== 'undefined') {
        this.countItemActived();
      }
    },
    countItemActived() {
      let arr = [];
      this.$children.forEach((child, index) => {
        if (child.isActived) {
          arr.push(child.name);
        }
      });
      this.$emit("on-change", arr);
    }
  },
  mounted() {
    this.setActived(this.names);
  }
};
</script>

