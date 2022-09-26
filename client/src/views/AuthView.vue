<template>
  <h1>Authorization</h1>
  <label for="">
    <input v-model="email" type="text">
  </label>
  <br>
  <label for="">
    <input v-model="password" type="password">
  </label>
  <br>
  <button v-if="!isRegistration" @click="loginProcess">
    Login
  </button>
  <button v-else @click="loginProcess">
    Registration
  </button>
  <div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { login, registration } from "@/http/userAPI";
import { REGISTRATION_ROUT } from "@/routes";

export default {
  name: 'AuthView',
  data () {
    return {
      email: '',
      password: '',
      isRegistration: false,
    }
  },
  mounted () {
    // TODO: change is register listener method
    this.isRegistrationCheck();
  },
  methods: {
    ...mapMutations([
      "setUserAuth", "setUser"
    ]),
    isRegistrationCheck () {
      if (location.pathname === REGISTRATION_ROUT) this.isRegistration = true;
    },
    async loginProcess () {
      try {
        let user;
        if (this.isRegistration) {
          user = await registration(this.email, this.password);
        } else {
          user = await login(this.email, this.password);
        }
        console.log(user)
        this.setUser(user);
        this.setUserAuth();
        this.$router.push('/')
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  }
}
</script>

<style scoped>

</style>
