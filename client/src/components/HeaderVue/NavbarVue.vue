<template>
  <nav class="navigation">
    <div class="navigation__row">
      <div class="navigation__col" v-for="navbarItem in navbarData" :key="navbarItem.name">
        <div class="navigation__item">
          <i class="icon" :class="'icon-' + navbarItem.icon"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarVue",
  props: {
    navbarData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .navigation {
    padding: 0;
    &__row {
      display: flex;
      margin: 0 -8px;
    }
    &__col {
      padding: 0 8px;
    }
    &__item {
      font-size: 22px;
    }
  }
</style>
