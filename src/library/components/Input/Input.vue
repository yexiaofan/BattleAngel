<style lang="less">
@import "../../css/base.less";
.ba-input {
  border: 0;
  outline: 0;
  .ba-input-wrapper {
    position: relative;
    display: flex;
    border: 1px solid @border-color;
    border-radius: @border-radius-normal - 2;
    input {
      width: 1px;
      flex-grow: 1;
      padding: @padding-normal;
      outline: 0;
      border: 0;
      border-radius: @border-radius-normal - 2;
    }
    input:focus {
      outline: 0;
      border: 0;
    }
    .clearable {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 8px;
      color: @content-color;
      display: none;
    }
    span {
      padding: 0 6px;
      background-color: @border-color;
    }
    span:first-of-type {
      border-top-left-radius: @border-radius-normal - 3;
      border-bottom-left-radius: @border-radius-normal - 3;
    }
    span:last-of-type {
      border-top-right-radius: @border-radius-normal - 3;
      border-bottom-right-radius: @border-radius-normal - 3;
    }
    .enter-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: @primary-color;
      text-align: center;
      border-top-right-radius: @border-radius-normal - 3;
      border-bottom-right-radius: @border-radius-normal - 3;
      font-size: @font-size-small;
      padding: 4px 6px;
      cursor: pointer;
      span {
        background-color: transparent;
      }
    }
    .enter-button:hover {
      background-color: @light-primary-color;
    }
    //文本域
    textarea {
      width: 100%;
      height: 100%;
      border-radius: @border-radius-normal - 2;
      outline: 0;
      border: 0;
      padding: @padding-normal;
    }
    textarea:focus {
      outline: 0;
      border: 0;
    }
  }
  .ba-input-wrapper-focus {
    outline: 0;
    border-color: @light-primary-color;
    box-shadow: 0 0 0 2px lighten(@light-primary-color, 20%);
  }
  .ba-input-wrapper:hover {
    border-color: @primary-color;
    .clearable {
      display: inline-block;
    }
  }
}
.ba-input-small {
  font-size: @font-size-small;
  .ba-input-wrapper {
    input {
      height: 24px;
    }
    i {
      width: 24px;
      height: 24px;
      text-align: center;
      line-height: 24px;
    }
    .enter-button {
      height: 24px;
    }
    textarea {
      min-height: 24px;
    }
  }
}
.ba-input-default {
  font-size: @font-size-normal;
  .ba-input-wrapper {
    input {
      height: 32px;
    }
    i {
      width: 32px;
      height: 32px;
      text-align: center;
      line-height: 32px;
    }
    span {
      height: 32px;
      line-height: 32px;
    }
    .enter-button {
      height: 32px;
    }
    textarea {
      min-height: 32px;
      line-height: 24px;
    }
  }
}
.ba-input-large {
  font-size: @font-size-large;
  .ba-input-wrapper {
    input {
      height: 36px;
    }
    i {
      width: 36px;
      height: 36px;
      text-align: center;
      line-height: 36px;
    }
    .enter-button {
      height: 36px;
    }
    textarea {
      min-height: 36px;
    }
  }
}
</style>

<template>
  <div :class="classes">
    <div :class="inputClasses" tabindex="2" @focus="isOnFocus = true" @blur="isOnFocus = false">
      <template v-if="type !== 'textarea'">
        <slot name="prepend"></slot>
        <slot name="prefix">
          <Icon :type="prefix" v-if="!!prefix"></Icon>
        </slot>
        <input
          v-model="inputValue"
          :type="type"
          :placeholder="placeholder"
          @focus="isOnFocus = true"
          @blur="isOnFocus = false"
          :disabled="disabled"
          :readonly="readonly">
        <Icon class="clearable" type="ios-close-circle" v-if="isClearable" @click="clearInput"></Icon>
        <Icon :type="icon" v-if="!!icon" @click="$emit('on-click')"></Icon>
        <Icon type="ios-search" v-if="search && !(!!enterButton)" @click="$emit('on-click')"></Icon>
        <span class="enter-button" v-if="!!enterButton">
          <Icon
            type="ios-search"
            v-if="typeof enterButton === 'boolean' && enterButton"
            @click="$emit('on-click')"></Icon>
          <span v-else>{{enterButton}}</span>
        </span>
        <slot name="suffix">
          <Icon :type="suffix" v-if="!!suffix"></Icon>
        </slot>
        <slot name="append"></slot>
      </template>
      <template v-else>
        <textarea :rows="rows" 
          v-model="inputValue"
          :placeholder="placeholder"
          @focus="isOnFocus = true"
          @blur="isOnFocus = false"
          :disabled="disabled"
          :readonly="readonly">
        </textarea>
      </template>
    </div>
  </div>
</template>

<script>
import Button from "../Button/index.js";
export default {
  name: "Input",
  data() {
    return {
      isOnFocus: false
    };
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {},
    placeholder: String,
    size: {
      type: String,
      default: "default"
    },
    clearable: Boolean,
    icon: String,
    prefix: String,
    suffix: String,
    search: {
      type: Boolean,
      default: false
    },
    enterButton: {
      type: [Boolean, String],
      default: false
    },
    rows: {
      type: Number,
      default: 1
    },
    readonly: Boolean,
    disabled: Boolean
  },
  computed: {
    inputValue: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        this.$emit("input", newValue);
      }
    },
    classes() {
      return [
        "ba-input",
        {
          [`ba-input-${this.size}`]: !!this.size
        }
      ];
    },
    inputClasses() {
      return [
        "ba-input-wrapper",
        {
          ["ba-input-wrapper-focus"]: this.isOnFocus
        }
      ];
    },
    isClearable() {
      return this.clearable && this.inputValue !== "";
    }
  },
  methods: {
    clearInput() {
      this.inputValue = "";
    }
  }
};
</script>

