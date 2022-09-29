<template>
  <div :class="$style.root">
    <div class="container">
      <ControlPrimary @click="logout">
        Logout
      </ControlPrimary>
      <PostsList :posts="posts"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { AUTH_ROUT } from "@/routes";
import PostsList from "@/components/Profile/PostsList";

export default {
  name: "ProfileView",
  components: {
    PostsList,
  },
  data () {
    return {
      posts: [],
    }
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
  }
}
</script>

<style module lang="scss">
  .root {
    padding: 40px 0;
  }
</style>
