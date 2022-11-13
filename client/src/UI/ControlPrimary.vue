<template>
  <button class="button" :class="{'disabled': this.disabled}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ControlPrimary",
  props: {
    disabled: Boolean,
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";
  .button {
    outline: none;
    border: none;
    background-color: $primary;
    color: $white;
    font-size: 14px;
    padding: 6px 16px;
    border-radius: 3px;
    width: 100%;
    cursor: pointer;
    transition: $transition-base;
    &:hover {
      background-color: $yellow;
    }
  }
  .disabled {
    pointer-events: none;
    background-color: darkgray;
  }
</style>
