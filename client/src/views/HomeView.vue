<template>
  <div class="home">
    <div class="container">
      <div class="wrapper">
        <MainPosts />
      </div>
    </div>
  </div>
</template>

<script>
import MainPosts from "@/components/Post/MainPosts";

export default {
  name: 'HomeView',
  components: {
    MainPosts,
  },
}
</script>

<style scoped lang="scss">
.home {
  .wrapper {
    margin: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
