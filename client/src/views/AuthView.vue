<template>
  <h1>
    {{ isRegistration ? registrationText : authorizationText }}
  </h1>
  <div class="authorization-wrapper">
    <AuthorizationPanel :isRegistration="isRegistration" @switchRoute="switchRoute" @sendData="sendData"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { userLogin, userRegistration } from "@/http/userAPI";
import { AUTH_ROUT, REGISTRATION_ROUT } from "@/routes";
import AuthorizationPanel from "@/components/AuthorizationPanel/AuthorizationPanel";

export default {
  name: 'AuthView',
  data () {
    return {
      registrationText: 'Registration',
      authorizationText: 'Authorization',
      isRegistration: window.location.pathname === REGISTRATION_ROUT,
    }
  },
  components: {
    AuthorizationPanel,
  },
  methods: {
    ...mapMutations([
      "setUserAuth", "setUser"
    ]),
    async sendData (email, password, login) {
      try {
        let user;
        console.log(email, password, login)
        if (this.isRegistration) {
          user = await userRegistration(email, password, login);
        } else {
          user = await userLogin(email, password);
        }
        this.setUser(user);
        this.setUserAuth();
        this.$router.push('/')
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    switchRoute () {
      if (this.isRegistration) {
        window.history.pushState({}, '', AUTH_ROUT);
        this.isRegistration = false;
      } else {
        window.history.pushState({}, '', REGISTRATION_ROUT);
        this.isRegistration = true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/mixins";
  .authorization-wrapper {
    display: flex;
    justify-content: center;
  }
</style>
