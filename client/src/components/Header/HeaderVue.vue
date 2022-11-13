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
            <input v-model="searchValue" id="header-search" required class="header__search-input" type="text">
            <label for="header-search" class="header__search-label">Search profile</label>
            <ControlPrimary :disabled="!this.searchValue.trimStart().trimEnd()" @click="doSearchProfile" style="width: auto;">
              Search
            </ControlPrimary>
          </div>
          <div class="header__navbar-wrapper">
            <NavbarVue :navbarData="navbarData" :navbarDataAuth="navbarDataAuth"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavbarVue from "@/components/Header/NavbarVue";
import { AUTH_ROUT, PROFILE_ROUT } from "@/stubs/routes";
import { mapActions } from "vuex";

export default {
  name: "HeaderVue",
  data () {
    return {
      searchValue: '',
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
          disabled: true,
        },
        {
          icon: 'fire',
          link: PROFILE_ROUT,
          name: 'recommendations',
          disabled: true,
        },
        {
          icon: 'home',
          link: PROFILE_ROUT,
          name: 'favorites',
          authorized: true,
          disabled: true,
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
          name: 'recommendations',
          disabled: true,
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
  },
  methods: {
    ...mapActions([
      'fetchProfilesPerName', 'clearProfiles'
    ]),
    doSearchProfile () {
      if (!this.searchValue.trimStart().trimEnd()) return;
      this.$router.push({ name: 'profiles', query: { search: this.searchValue.trimStart().trimEnd() } });
      this.searchValue = '';
    }
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
      align-items: center;
    }
    &__logo-wrapper,
    &__navbar-wrapper,
    &__search-wrapper {
      padding: 0 8px;
      flex: 0 0 33.33333%;
    }
    &__logo {
      font-size: 24px;
    }
    &__search-wrapper {
      position: relative;
      display: flex;
      justify-content: space-between;
    }
    &__search-label {
      position: absolute;
      top: 50%;
      left: 18px;
      transform: translate(0, -50%);
      font-size: 13px;
      color: $gray-700;
    }
    &__search-input {
      outline: none;
      border: 1px solid $gray-500;
      border-radius: 3px;
      background-color: $gray-100;
      font-size: 14px;
      padding: 5px 12px;
      color: $gray-800;
      width: 100%;
      margin-right: 8px;
    }
    &__search-input:focus + &__search-label,
    &__search-input:valid + &__search-label, {
      display: none;
    }
  }
</style>
