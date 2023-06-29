<template>
  <div class="profile-panel">
    <div class="profile-panel__row">
      <div class="profile-panel__left">
        <div class="profile-panel__image-wrapper">
          <img :src="getCurrentProfileData && getCurrentProfileData.img ? dbAppSrc + getCurrentProfileData.img : require('@/assets/images/profile/profile-empty.jpg')"
               alt=""
               class="profile-panel__image">
        </div>
      </div>
      <div class="profile-panel__center">
        <div class="profile-panel__header">
          <div class="profile-panel__name">
            {{ getCurrentProfileData ? getCurrentProfileData.login : 'User not found' }}
          </div>
        </div>
        <div class="profile-panel__statistics">
          <div class="profile-panel__statistic-item">
            <strong>{{ getCurrentProfilePosts ? getCurrentProfilePosts.length : 0 }}</strong> posts
          </div>
        </div>
        <div class="profile-panel__about">
          <div><strong>{{ getCurrentProfileData && getCurrentProfileData.status }}</strong></div>
          <div>{{ getCurrentProfileData && getCurrentProfileData.description || 'Here will be some information...'}}</div>
        </div>
      </div>
      <div class="profile-panel__right">
        <div
          class="profile-panel__control-item"
          v-if="getCurrentProfileData.id === getUser.id"
        >
          <ControlPrimary @click="this.goToSettings()">
            Profile settings
          </ControlPrimary>
        </div>
        <div
          class="profile-panel__control-item"
        >
          <LinkPrimary :link="profilesLink">
            Go to profiles list
          </LinkPrimary>
        </div>
        <div
          class="profile-panel__control-item"
          v-if="getCurrentProfileData.id === getUser.id"
        >
          <ControlPrimary @click="logout">
            Logout
          </ControlPrimary>
        </div>
        <div
          class="profile-panel__control-item"
          v-else
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { AUTH_ROUT, PROFILE_LIST, PROFILE_SETTINGS } from '@/stubs/routes';

export default {
  name: 'ProfilePanel',
  data () {
    return {
      dbAppSrc: process.env.VUE_APP_API_URL,
      profilesLink: PROFILE_LIST,
    }
  },
  mounted () {
    this.fetchCurrentProfilePerId(this.$route.params.id || this.getUser.id);
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getCurrentProfileData',
      'getCurrentProfilePosts'
    ]),
  },
  methods: {
    ...mapActions([
      'fetchCurrentProfilePerId',
      'logoutUser',
      'clearUserProfileState',
    ]),
    goToSettings () {
      this.$router.push(PROFILE_SETTINGS);
    },
    logout () {
      this.logoutUser();
      this.clearUserProfileState();
      localStorage.removeItem('token');
      this.$router.push(AUTH_ROUT);
    },
  }
}
</script>

<style scoped lang="scss">
  @import "src/assets/styles/variables";
  @import "src/assets/styles/mixins";
  .profile-panel {
    text-align: left;
    &__row {
      display: flex;
      margin: -8px;
      flex-wrap: wrap;
      align-items: center;
    }
    &__left {
      padding: 8px;
      flex: 0 0 100%;
      @include media-breakpoint-up(sm) {
        flex: 0 0 50%;
      }
      @include media-breakpoint-up(lg) {
        flex: 0 0 33.33333%;
      }
    }
    &__image-wrapper {
      text-align: center;
    }
    &__image {
      border-radius: 100%;
      overflow: hidden;
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
    &__center {
      padding: 8px;
      flex: 0 0 100%;
      max-width: 300px;
      margin: 0 auto;
      @include media-breakpoint-up(sm) {
        margin: 0;
        flex: 0 0 50%;
        max-width: none;
      }
      @include media-breakpoint-up(md) {
        flex: 0 0 33.33333%;
      }
    }
    &__right {
      padding: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 0 0 100%;
      @include media-breakpoint-up(sm) {
        flex: 0 0 50%;
        margin: 24px auto 0;
      }
      @include media-breakpoint-up(lg) {
        margin: 0;
        justify-content: center;
        flex: 0 0 33.33333%;
      }
    }
    &__right & {
      &__control-item {
        max-width: 300px;
        width: 100%;
        @include media-breakpoint-up(lg) {
          width: 50%;
        }
      }
    }
    &__header {
      display: flex;
      margin: 0 -8px 16px;
      align-items: center;
      justify-content: space-between;
    }
    &__name {
      padding: 0 8px;
      font-size: 24px;
    }
    &__statistics {
      display: flex;
      margin: 0 -8px 16px;
      justify-content: space-between;
    }
    &__statistic-item {
      padding: 0 8px;
    }
    &__control-item {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
</style>
