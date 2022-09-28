<template>
  <div class="authorization-panel">
    <div class="authorization-panel__item">
      <InputField v-model="email" placeholder="Email" />
    </div>
    <div class="authorization-panel__item" v-if="isRegistration">
      <InputField v-model="login" placeholder="Login"/>
    </div>
    <div class="authorization-panel__item">
      <InputField v-model="password"
                  placeholder="Password"
                  type="password"
      />
    </div>
    <div class="authorization-panel__item">
      <ControlPrimary @click="sendData">
        {{ isRegistration ? 'Registration' : 'Login' }}
      </ControlPrimary>
    </div>
    <div class="authorization-panel__item">
      <div class="authorization-panel__or">
        <span>OR</span>
      </div>
      <a href="#" class="authorization-panel__switcher" @click="switchRoute">
        {{ isRegistration ? 'Log in' : 'Sign up' }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorizationPanel",
  data () {
    return {
      email: '',
      login: '',
      password: '',
      registrationText: 'registration',
      authorizationText: 'authorization',
    }
  },
  props: {
    isRegistration: {
      type: Boolean,
      required: true,
    }
  },
  emits: {
    sendData: {
      type: String,
    },
    switchRoute: {}
  },
  methods: {
    sendData () {
      this.$emit('sendData', this.email, this.password, this.login)
    },
    switchRoute () {
      this.$emit('switchRoute')
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables";
@import "../../assets/styles/mixins";
.authorization-panel {
  @include media-breakpoint-up(md) {
    max-width: 400px;
    flex: 1 0 auto;
  }
  &__switcher {
    color: $primary;
    text-decoration: none;
    transition: $transition-base;
    &:hover {
      color: $indigo;
    }
  }
  &__or {
    position: relative;
    margin-bottom: 8px;
    color: $gray-800;
    span {
      padding: 4px 8px;
      background-color: $white;
      position: relative;
      display: inline-block;
    }
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      background-color: $gray-500;
      height: 1px;
      width: 100%;
    }
  }
  &__item {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}

</style>
