<template>
  <router-link
    :to="profileLink + '/' + profile.id"
    class="profile-list-item"
  >
    <div class="profile-list-item__row">
      <div class="profile-list-item__left">
        <div class="profile-list-item__avatar">
          <img :src="profile && profile.img ? dbAppSrc + profile.img : require('@/assets/images/profile/profile-empty.jpg')"
               alt=""
               class="image">
        </div>
      </div>
      <div class="profile-list-item__right">
        <div class="profile-list-item__info">
          {{ profile.login }}
        </div>
        <div class="profile-list-item__info">
          <div class="profile-list-item__status">
            <strong>{{ profile.status }}</strong>
          </div>
          <div>{{ profile.description }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { PROFILE_ROUT } from "@/stubs/routes";

export default {
  name: "ProfileListItem",
  data () {
    return {
      dbAppSrc: process.env.VUE_APP_API_URL,
      profileLink: PROFILE_ROUT,
    }
  },
  props: {
    profile: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";
  .profile-list-item {
    border: 1px solid $gray-400;
    padding: 16px;
    cursor: pointer;
    color: $dark;
    text-decoration: none;
    display: block;
    transition: $transition-base;
    &:hover {
      box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
      .profile-list-item__info {
        color: $primary;
      }
    }
    &__row {
      display: flex;
      align-items: center;
    }
    &__left {
      margin-right: 16px;
    }
    &__right {
      flex: 1 0 auto;
      font-size: 16px;
    }
    &__info {
      transition: $transition-base;
      &:first-child {
        font-size: 20px;
      }
      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
    &__status {
      margin-bottom: 8px;
    }
    &__avatar {
      width: 120px;
      height: 120px;
      border-radius: 20%;
      overflow: hidden;
      margin-right: 6px;
      vertical-align: middle;
      display: inline-block;
      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
