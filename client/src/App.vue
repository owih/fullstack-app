<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/auth">Auth</router-link> |
    <router-link to="/registration">Registration</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { check } from "@/http/userAPI";
import { mapMutations } from "vuex";

export default {
  name: 'App',
  beforeCreate () {
    check().then((data) => {
      this.setUserState(data);
      // TODO: loading page after check is authorized user
    }).finally(() => console.log('load failed'));
  },
  methods: {
    ...mapMutations([
      'setUser', 'setUserAuth'
    ]),
    setUserState (user) {
      this.setUser(user);
      this.setUserAuth();
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
