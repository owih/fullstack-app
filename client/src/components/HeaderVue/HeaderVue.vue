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
            <input id="header-search" required class="header__search-input" type="text">
            <label for="header-search" class="header__search-label">Search</label>
          </div>
          <div class="header__navbar">
            <NavbarVue :navbarData="navbarData" :navbarDataAuth="navbarDataAuth"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavbarVue from "@/components/HeaderVue/NavbarVue";
import { AUTH_ROUT, PROFILE_ROUT } from "@/routes";

export default {
  name: "HeaderVue",
  data () {
    return {
      navbarDataAuth: [
        {
          icon: 'home',
          link: '/',
          name: 'home'
        },
        {
          icon: 'bubbles',
          link: PROFILE_ROUT,
          name: 'messenger',
          authorized: true,
        },
        {
          icon: 'fire',
          link: PROFILE_ROUT,
          name: 'recommendations'
        },
        {
          icon: 'home',
          link: PROFILE_ROUT,
          name: 'favorites',
          authorized: true,
        },
        {
          icon: 'user',
          link: PROFILE_ROUT,
          name: 'profile'
        },
      ],
      navbarData: [
        {
          icon: 'home',
          link: '/',
          name: 'home'
        },
        {
          icon: 'fire',
          link: PROFILE_ROUT,
          name: 'recommendations'
        },
        {
          icon: 'user',
          link: AUTH_ROUT,
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
@import "../../assets/styles/variables";
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
    &__search-wrapper {
      position: relative;
    }
    &__search-label {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 13px;
      color: $gray-700;
    }
    &__search-input {
      outline: none;
      border: 1px solid $gray-500;
      border-radius: 3px;
      background-color: $gray-100;
      font-size: 14px;
      padding: 4px 12px;
      color: $gray-800;
    }
    &__search-input:focus + &__search-label,
    &__search-input:valid + &__search-label, {
      display: none;
    }
  }
</style>
