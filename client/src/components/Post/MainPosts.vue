<template>
<div class="main-posts">
  <div class="main-posts__item" v-for="post in getAllPosts" :key="post.id">
    <MainPostItem :post="post" />
  </div>
</div>
</template>

<script>
import MainPostItem from "@/components/Post/MainPostItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MainPosts",
  components: {
    MainPostItem
  },
  mounted () {
    this.fetchAllPosts({ page: 1, limit: 12 });
  },
  methods: {
    ...mapActions([
      'fetchAllPosts'
    ])
  },
  computed: {
    ...mapGetters([
      'getAllPosts'
    ])
  }
}
</script>

<style scoped lang="scss">
.main-posts {
  &__item {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
}
</style>
