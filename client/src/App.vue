<template>
  <HeaderVue />
  <main class="main">
    <router-view/>
  </main>
</template>

<script>
import { check } from "@/http/userAPI";
import HeaderVue from '@/components/HeaderVue/HeaderVue';
import { mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    HeaderVue,
  },
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
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  height: 100%;
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
