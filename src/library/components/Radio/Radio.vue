<style lang="less">
@import '../../css/base.less';
.ba-radio-wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: @font-size-normal;
  .ba-radio {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid @border-color;
    border-radius: 50%;
    position: relative;
    input {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      visibility: hidden;
    }
  }
  .ba-radio-checked {
    box-shadow: 0 0 0 2px lighten(@light-primary-color, 20%);
    border-color: @primary-color;
  }
  .ba-radio-checked:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: @primary-color;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  .ba-radio-disabled {
    cursor: not-allowed;
  }
  .ba-radio-disabled:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: @disabled-color;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  label {
    margin-left: 8px;
    cursor: pointer;
  }
}

</style>

<template>
  <div class="ba-radio-wrapper" @click="toggleValue">
    <span :class="classes">
      <input :checked="currentValue" type="radio">
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
    name: 'Radio',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      label: {
        type: String
      },
      disabled: Boolean
    },
    computed: {
      classes () {
        return [
          'ba-radio',
          {
            'ba-radio-checked': !this.disabled && this.currentValue,
            'ba-radio-disabled': this.disabled
          }
        ]
      },
      currentValue: {
        get: function () {
          if (this.isRadioGroupModel()) {
            return this.label === this.$parent.value
          } else {
            return this.value
          }
        },
        set: function (newValue) {
          if (this.isRadioGroupModel()) {
            //设置父类的value值
            this.$parent.$emit('input', this.label)
          } else {
            this.$emit('input', newValue)
          }
        }
      }
    },
    methods: {
      toggleValue () {
        if (this.disabled) {
          return
        }
        if (this.isRadioGroupModel()) {
            if (!this.currentValue) {
              this.currentValue = true
            }
        } else {
            this.currentValue = !this.currentValue
        }
      },
      isRadioGroupModel () {
        if (this.$parent && this.$parent.$options.name === 'RadioGroup') {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

