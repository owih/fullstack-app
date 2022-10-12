<template>
  <div :class="$style.root">
    <div class="container">
      <div v-if="!this.getCurrentProfileData" class="profile__error">
        Profile not found...
      </div>
      <div v-else>
        <div :class="$style.panel">
          <ProfilePanel />
        </div>
        <PostsList :posts="getCurrentProfilePosts"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { AUTH_ROUT, PROFILE_ROUT } from "@/stubs/routes";
import PostsList from "@/components/Profile/PostsList";
import ProfilePanel from "@/components/Profile/ProfilePanel";

export default {
  name: "ProfileView",
  components: {
    PostsList, ProfilePanel
  },
  mounted () {
    this.getPosts();
  },
  beforeUnmount () {
    console.log('unmount');
    this.clearCurrentProfileState();
  },
  watch: {
    $route (to, from) {
      if (to.fullPath.includes(PROFILE_ROUT)) { this.getPosts() }
    }
  },
  methods: {
    ...mapActions([
      'fetchPostsPerCurrentProfile',
      'clearCurrentProfileState',
      'clearPostsState'
    ]),
    getPosts () {
      if (this.$route.params.id || this.getUser.id) {
        this.fetchPostsPerCurrentProfile(this.$route.params.id || this.getUser.id);
      } else {
        this.$router.push(AUTH_ROUT);
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
