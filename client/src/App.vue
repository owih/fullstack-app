<template>
  <div v-if="isLoad">
    <HeaderVue />
    <main class="main">
      <router-view/>
    </main>
    <CreatePostModal :id="createPostModal"/>
    <OpenPostModal id="OpenPostModal"/>
  </div>
</template>

<script>
import HeaderVue from '@/components/Header/HeaderVue';
import { mapActions } from "vuex";
import { userCheck } from "@/http/userAPI";
import CreatePostModal from "@/components/Modals/CreatePostModal";
import OpenPostModal from "@/components/Modals/OpenPostModal";
import { CREATE_POST_MODAL, OPEN_POST_MODAL } from "@/stubs/modals";

export default {
  name: 'App',
  data () {
    return {
      isLoad: false,
      createPostModal: CREATE_POST_MODAL,
      openPostModal: OPEN_POST_MODAL,
    }
  },
  components: {
    HeaderVue,
    CreatePostModal,
    OpenPostModal,
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
