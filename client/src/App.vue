<template>
  <WrapperVue v-if="isLoad">
    <HeaderVue />
    <main class="main">
      <router-view/>
    </main>
  </WrapperVue>
</template>

<script>
import HeaderVue from '@/components/Header/HeaderVue';
import WrapperVue from "@/components/Wrapper/WrapperVue";
import { mapActions } from "vuex";
import { userCheck } from "@/http/userAPI";

export default {
  name: 'App',
  data () {
    return {
      isLoad: false,
    }
  },
  components: {
    HeaderVue,
    WrapperVue,
  },
  beforeCreate () {
    userCheck().then((data) => {
      this.setUserState(data);
    })
      .catch((error) => console.log(error.response.data.message))
      .finally(() => {
        console.log('load finished');
        this.isLoad = true;
      });
  },
  methods: {
    ...mapActions([
      'setUser', 'setUserAuth'
    ]),
    setUserState (user) {
      this.setUser(user);
      this.setUserAuth();
    },
  },
}
</script>

<style lang="scss">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
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
