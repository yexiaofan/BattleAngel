<style lang="less">
@import '../../css/base.less';
.ba-checkbox-wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .ba-checkbox {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid @border-color;
    border-radius: 2px;
    position: relative;
    input {
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      opacity: 0;
    }
    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 5;
    }
  }
  .ba-checkbox-checked {
    box-shadow: 0 0 0 2px lighten(@light-primary-color, 20%);
    border-color: @primary-color;
    background-color: @primary-color;
    color: white;
  }
  .ba-checkbox-disabled {
    box-shadow: 0 0 0 0;
    border-color: @disabled-color;
    background-color: @disabled-color;
  }
  label {
    margin-left: 8px;
    cursor: pointer;
    font-size: 14px;
  }
}
.ba-checkbox-wrapper-disabled {
  cursor: not-allowed;
  color: @disabled-color;
  span:first-of-type {
    input {
      cursor: not-allowed
    }
  }
}
</style>

<template>
  <div :class="wrapperClasses" @click="toggleValue">
    <span :class="classes">
      <Icon v-if="!this.disabled && currentValue" type="ios-checkmark" size="24"/>
      <input type="checkbox" :checked="currentValue">
    </span>
    <label>
      <slot>
        {{label}}
      </slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    disabled: Boolean
  },
  computed: {
    wrapperClasses () {
      return [
        'ba-checkbox-wrapper',
        {
          'ba-checkbox-wrapper-disabled': this.disabled
        }
      ]
    },
    classes () {
      return [
        'ba-checkbox',
        {
          'ba-checkbox-checked': !this.disabled && this.currentValue,
          'ba-checkbox-disabled': this.disabled
        }
      ]
    },
    currentValue: {
      get: function () {
        if (this.isChildOfCheckBoxGroup()) {
          if (this.label === this.$parent.checked) {
            return true
          } else {
            return false
          }
        } else {
          return this.checked
        }
      },
      set: function (newValue) {
        if (this.isChildOfCheckBoxGroup()) {
          this.$parent.$emit('change', this.label)
        } else {
          this.$emit('change', newValue)
        }
      }
    }
  },
  methods: {
    isChildOfCheckBoxGroup () {
      if (this.$parent && this.$parent.$options.name === 'CheckboxGroup') {
        return true
      } else {
        return false
      }
    },
    toggleValue () {
      if (this.isChildOfCheckBoxGroup()) {
        if (!this.currentValue) {
          this.currentValue = true
        }
      } else {
        this.currentValue = !this.currentValue
      }
    }
  }
}
</script>