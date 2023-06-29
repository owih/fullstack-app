<template>
  <router-link
    v-if="link"
    :to="link" class="link">
    <slot></slot>
  </router-link>
  <a
    v-if="linkHref"
    :href="linkHref"
    target="_blank"
    class="link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'LinkPrimary',
  props: {
    link: {
      type: String,
      default: '',
    },
    linkHref: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";
  .link {
    display: block;
    text-align: center;
    outline: none;
    border: none;
    text-decoration: none;
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
