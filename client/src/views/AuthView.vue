<template>
  <h1>
    {{ isRegistration === '/registration'
    ? 'Registration'
    : 'Authorization' }}
  </h1>
  <label for="">
    email
    <input v-model="email" type="text">
  </label>
  <br>
  <label for="">
    login
    <input v-model="login" type="text">
  </label>
  <br>
  <label for="">
    password
    <input v-model="password" type="password">
  </label>
  <br>
  <button @click="loginProcess">
    {{ isRegistration === '/registration'
    ? 'Registration'
    : 'Login' }}
  </button>
  <button @click="switchRoute">
    {{ isRegistration === '/registration'
    ? 'Go to authorization'
    : 'Go to registration' }}
  </button>
  <div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { login, registration } from "@/http/userAPI";
import { AUTH_ROUT, REGISTRATION_ROUT } from "@/routes";

export default {
  name: 'AuthView',
  data () {
    return {
      email: '',
      login: '',
      password: '',
      isRegistration: window.location.pathname,
    }
  },
  methods: {
    ...mapMutations([
      "setUserAuth", "setUser"
    ]),
    async loginProcess () {
      try {
        let user;
        if (this.isRegistration === REGISTRATION_ROUT) {
          user = await registration(this.email, this.login, this.password);
        } else {
          user = await login(this.email, this.login, this.password);
        }
        console.log(user)
        this.setUser(user);
        this.setUserAuth();
        this.$router.push('/')
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    switchRoute () {
      console.log(this.isRegistration)
      if (this.isRegistration === REGISTRATION_ROUT) {
        window.history.pushState({}, '', AUTH_ROUT);
        this.isRegistration = AUTH_ROUT;
      } else if (this.isRegistration === AUTH_ROUT) {
        window.history.pushState({}, '', REGISTRATION_ROUT);
        this.isRegistration = REGISTRATION_ROUT;
      }
    }
  }
}
</script>

<style scoped>

</style>
