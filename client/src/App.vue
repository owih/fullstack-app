<template>
  <HeaderVue />
  <main class="main">
    <router-view/>
  </main>
  <CreatePostModal id="CreatePostModal"/>
</template>

<script>
import HeaderVue from '@/components/Header/HeaderVue';
import { mapActions } from "vuex";
import { userCheck } from "@/http/userAPI";
import CreatePostModal from "@/components/Modals/CreatePostModal";

export default {
  name: 'App',
  components: {
    HeaderVue,
    CreatePostModal,
  },
  beforeCreate () {
    userCheck().then((data) => {
      this.setUserState(data);
      // TODO: loading page after check is authorized user
    })
      .catch((error) => console.log(error.response.data.message))
      .finally(() => console.log('load finished'));
  },
  methods: {
    ...mapActions([
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
