<template>
  <div class="authorization">
    <h1>
      {{ isRegistration ? registrationText : authorizationText }}
    </h1>
    <div class="authorization__inner">
      <AuthorizationPanel :isRegistration="isRegistration" @switchRoute="switchRoute" @sendData="sendData"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { AUTH_ROUT, REGISTRATION_ROUT } from "@/stubs/routes";
import AuthorizationPanel from "@/components/Authorization/AuthorizationPanel";

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
    ...mapActions([
      'registrationUser', 'loginUser'
    ]),
    async sendData (email, password, login) {
      if (this.isRegistration) await this.registrationUser({ email, password, login })
      else await this.loginUser({ email, password });
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
  .authorization {
    text-align: center;
    &__inner {
      display: flex;
      justify-content: center;
    }
  }
</style>
