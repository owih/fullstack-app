<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ControlPrimary"
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
</style>
