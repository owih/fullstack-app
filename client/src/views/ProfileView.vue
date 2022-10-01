<template>
  <div :class="$style.root">
    <div class="container">
      <div :class="$style.panel">
        <ProfilePanel />
      </div>
      <ControlPrimary @click="logout" style="margin-bottom: 32px">
        Logout
      </ControlPrimary>
      <PostsList :posts="getAllPosts"/>
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
  watch: {
    $route (to, from) {
      if (to.fullPath.includes(PROFILE_ROUT)) { this.getPosts() }
    }
  },
  methods: {
    ...mapActions([
      'fetchAllPosts',
      "setUserNotAuth",
      "setUser"
    ]),
    logout () {
      this.setUserNotAuth();
      this.setUser({});
      this.$router.push(AUTH_ROUT);
      localStorage.removeItem('token');
    },
    getPosts () {
      if (this.$route.params.id || this.getUser.id) {
        console.log(this.$route.params.id)
        this.fetchAllPosts(this.$route.params.id || this.getUser.id);
      }
    }
  },
  computed: {
    ...mapGetters([
      'getAllPosts',
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
