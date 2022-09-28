<template>
  <ControlPrimary @click="logout">
    Logout
  </ControlPrimary>
</template>

<script>
import { mapMutations } from "vuex";
import { AUTH_ROUT } from "@/routes";

export default {
  name: "ProfileView",
  methods: {
    ...mapMutations([
      "setUserNotAuth",
      "setUser"
    ]),
    logout () {
      this.setUserNotAuth();
      this.setUser({});
      this.$router.push(AUTH_ROUT);
      localStorage.removeItem('token');
    }
  }
}
</script>

<style scoped>

</style>
