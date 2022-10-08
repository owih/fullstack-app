<template>
  <WrapperVue v-if="this.getLoadedState">
    <HeaderVue />
    <main class="main">
      <router-view/>
    </main>
  </WrapperVue>
</template>

<script>
import HeaderVue from '@/components/Header/HeaderVue';
import WrapperVue from "@/components/Wrapper/WrapperVue";
import { mapActions, mapGetters } from "vuex";

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
  beforeMount () {
    this.checkIsAuthorized()
  },
  methods: {
    ...mapActions([
      'checkIsAuthorized'
    ]),
  },
  computed: {
    ...mapGetters([
      'getLoadedState'
    ]),
  }
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
