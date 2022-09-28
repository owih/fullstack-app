<template>
  <router-link class="router-link" :to="link">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "RouteLink",
  props: {
    link: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";
  .router-link {
    color: $primary;
    text-decoration: none;
    transition: $transition-base;
    &:hover {
      color: $indigo;
    }
  }
</style>
