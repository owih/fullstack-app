<template>
  <nav class="navigation">
    <div class="navigation__row" v-if="getIsAuth">
      <div class="navigation__col"
           v-for="navbarItem in navbarDataAuth"
           :key="navbarItem.name"
      >
        <router-link
          class="navigation__item"
          :to="navbarItem.name === 'profile' && getIsAuth ? navbarItem.link + '/' + getUser.id : navbarItem.link"
          :class="{'disabled': navbarItem.disabled}"
        >
          <i
            v-if="navbarItem.name !== 'profile'"
            class="icon"
            :class="'icon-' + navbarItem.icon"
          ></i>
          <div v-else class="navigation__avatar">
            <img v-if="!getUser" :src="require('../../assets/images/profile/profile-empty.jpg')" alt="" class="navigation__image">
            <img v-else :src="getUserProfile.img ? src + getUserProfile.img : require('../../assets/images/profile/profile-empty.jpg')" alt="" class="navigation__image">
          </div>
        </router-link>
      </div>
    </div>
    <div class="navigation__row" v-else>
      <div class="navigation__col"
           v-for="navbarItem in navbarData" :key="navbarItem.name"
      >
        <router-link
          class="navigation__item"
          :to="navbarItem.link"
          :class="{'disabled': navbarItem.disabled}"
        >
          <i
            class="icon"
            :class="'icon-' + navbarItem.icon"
          ></i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavbarVue",
  data () {
    return {
      src: process.env.VUE_APP_API_URL,
    }
  },
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
      "getUser",
      "getUserProfile"
    ])
  },
  methods: {
    ...mapActions([
      "fetchUserProfilePerId"
    ]),
  },
  mounted () {
    this.fetchUserProfilePerId(this.getUser.id);
  },
  watch: {
    getUser (val) { if (val) this.fetchUserProfilePerId(this.getUser.id) }
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
      justify-content: end;
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
      text-decoration: none;
      &:hover {
        color: $primary;
      }
    }
    .disabled {
      pointer-events: none;
      color: darkgray;
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
