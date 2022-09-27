<template>
  <nav class="navigation">
    <div class="navigation__row">
      <div class="navigation__col"
           v-for="navbarItem in navbarData" :key="navbarItem.name"
           :class="{
             'empty': !navbarItem.authorized || getIsAuth,
           }"
      >
        <div class="navigation__item"
             @click="this.$router.push(navbarItem.link)"
             v-if="!navbarItem.authorized || getIsAuth"
        >
          <i class="icon" :class="'icon-' + navbarItem.icon"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: "NavbarVue",
  props: {
    navbarData: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      "getIsAuth"
    ])
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables";
  .navigation {
    padding: 0;
    &__row {
      display: flex;
      margin: 0 -8px;
    }
    &__col {
      padding: 0 8px;
      &.empty {
        padding: 0;
      }
    }
    &__item {
      font-size: 22px;
      transition: $transition-base;
      cursor: pointer;
      &:hover {
        color: $primary;
      }
    }
  }
</style>
