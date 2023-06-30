<template>
  <div :class="$style.root">
    <div class="container">
      <div v-if="!this.getCurrentProfileData" class="profile__error">
        Profile not found...
      </div>
      <div v-if="this.requestError" class="profile__error">
        "{{ requestError }}" is not an id ;(
        Try /profile/1
      </div>
      <div v-else-if="!this.requestError && this.getCurrentProfileData">
        <div :class="$style.panel">
          <ProfilePanel />
        </div>
        <PostsList :posts="getCurrentProfilePosts"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { AUTH_ROUT, PROFILE_ROUT } from '@/stubs/routes';
import PostsList from '@/components/Profile/PostsList';
import ProfilePanel from '@/components/Profile/ProfilePanel';

export default {
  name: 'ProfileView',
  data () {
    return {
      requestError: '',
    }
  },
  components: {
    PostsList, ProfilePanel
  },
  mounted () {
    this.getPosts();
  },
  unmounted () {
    this.clearProfileState();
    this.clearPostsState();
  },
  watch: {
    $route (to, from) {
      if (to.fullPath.includes(PROFILE_ROUT) && to.params.id !== from.params.id) {
        this.getPosts()
        this.fetchCurrentProfilePerId(this.$route.params.id || this.getUser.id);
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchPostsPerCurrentProfile',
      'fetchCurrentProfilePerId',
      'clearCurrentProfileState',
      'clearPostsState',
      'clearProfileState',
    ]),
    getPosts () {
      if (this.getUser.id && !Number(this.$route.params.id)) {
        this.$router.push(PROFILE_ROUT + '/' + this.getUser.id);
      }

      if (!this.getUser.id && !Number(this.$route.params.id)) {
        this.$router.push(AUTH_ROUT);
      }

      if (this.$route.params.id) {
        this.fetchPostsPerCurrentProfile(this.$route.params.id || this.getUser.id);
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentProfilePosts',
      'getCurrentProfileData',
      'getUser',
      'getIsAuth'
    ]),
  },
}
</script>

<style module lang="scss">
  .root {
    padding: 40px 0;
    .panel {
      margin-bottom: 32px;
    }
  }
</style>
