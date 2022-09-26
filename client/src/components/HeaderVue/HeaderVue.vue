<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__row">
          <div class="header__logo-wrapper">
            <div class="header__logo">
              <router-link class="text-link" to="/">Example</router-link>
            </div>
          </div>
          <div class="header__search-wrapper">
            <input id="header-search" class="header__search" type="text">
            <label for="header-search">Search</label>
          </div>
          <div class="header__navbar">
            <NavbarVue :navbarData="navbarData"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavbarVue from "@/components/HeaderVue/NavbarVue";
import { PROFILE_ROUT } from "@/routes";

export default {
  name: "HeaderVue",
  data () {
    return {
      navbarData: [
        {
          icon: 'home',
          link: '/',
          name: 'home'
        },
        {
          icon: 'bubbles',
          link: PROFILE_ROUT,
          name: 'messenger'
        },
        {
          icon: 'fire',
          link: PROFILE_ROUT,
          name: 'recommendations'
        },
        {
          icon: 'home',
          link: PROFILE_ROUT,
          name: 'favorites'
        },
        {
          icon: 'user',
          link: PROFILE_ROUT,
          name: 'profile'
        },
      ]
    }
  },
  components: {
    NavbarVue,
  }
}
</script>

<style scoped lang="scss">
  .header {
    padding: 16px 0;
    border-bottom: 1px solid #e6e6e6;
    &__row {
      display: flex;
      justify-content: space-between;
      margin: 0 -8px;
    }
    &__logo-wrapper,
    &__navbar-wrapper,
    &__search-wrapper {
      padding: 0 8px;
    }
    &__logo {
      font-size: 24px;
    }
  }
</style>
