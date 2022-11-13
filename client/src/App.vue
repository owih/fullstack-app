<template>
  <WrapperVue v-if="this.getLoadedState">
    <HeaderVue />
    <main class="main">
      <router-view/>
    </main>
    <FooterVue />
  </WrapperVue>
  <notifications />
</template>

<script>
import HeaderVue from '@/components/Header/HeaderVue';
import WrapperVue from "@/components/Wrapper/WrapperVue";
import FooterVue from "@/components/Footer/FooterVue";
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
    FooterVue,
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
