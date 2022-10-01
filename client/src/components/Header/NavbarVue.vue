<template>
  <nav class="navigation">
    <div class="navigation__row" v-if="getIsAuth">
      <div class="navigation__col"
           v-for="navbarItem in navbarDataAuth"
           :key="navbarItem.name"
      >
        <div class="navigation__item"
             @click="this.$router.push(navbarItem.name === 'profile' && getIsAuth ? navbarItem.link + '/' + getUser.id : navbarItem.link)"
        >
          <i
            v-if="navbarItem.name !== 'profile'"
            class="icon"
            :class="'icon-' + navbarItem.icon"
          ></i>
          <div v-else class="navigation__avatar">
            <img :src="require('../../assets/images/profile/profile-empty.jpg')" alt="" class="navigation__image">
          </div>
        </div>
      </div>
    </div>
    <div class="navigation__row" v-else>
      <div class="navigation__col"
           v-for="navbarItem in navbarData" :key="navbarItem.name"
      >
        <div class="navigation__item"
             @click="this.$router.push(navbarItem.link)"
        >
          <i
            class="icon"
            :class="'icon-' + navbarItem.icon"
          ></i>
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
    },
    navbarDataAuth: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      "getIsAuth",
      "getUser"
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
      align-items: center;
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
    &__avatar {
      width: 32px;
      height: 32px;
      border-radius: 32px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
</style>
