<template>
  <input
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateInput"
      :id="uniqueId"
      :type="type || 'text'"
  >
  <label :for="uniqueId">
    <slot></slot>
  </label>
</template>
<script>
import { v4 } from 'uuid';

export default {
  name: "InputField",
  data () {
    return {
      uniqueId: '',
    }
  },
  props: {
    modelValue: {
      type: [String, Number],
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    }
  },
  emits: {
    'update:modelValue': {
      type: [String, Number]
    }
  },
  mounted () {
    this.getUniqueId()
  },
  methods: {
    getUniqueId () {
      this.uniqueId = v4();
    },
    updateInput (event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";
  input {
    font-size: 14px;
    padding: 12px;
    border: 1px solid $gray-500;
    background-color: $gray-100;
    outline: none;
    border-radius: 2px;
    transition: $transition-base;
    width: 100%;
    &:focus {
      border-color: $gray-700;
    }
  }
</style>
