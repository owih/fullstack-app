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
import { AUTH_ROUT } from "@/stubs/routes";
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
      this.fetchAllPosts();
    }
  },
  computed: {
    ...mapGetters([
      'getAllPosts'
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
