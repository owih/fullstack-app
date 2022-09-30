<template>
  <div class="post-item" @click="openPostModal">
    <img
      class="post-item__image"
      :src="src + post.img"
      alt=""
    >
  </div>
</template>

<script>

export default {
  name: "PostItem",
  data () {
    return {
      src: process.env.VUE_APP_API_URL,
    }
  },
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  methods: {
    openPostModal () {
      this.$router.push({ query: { post: this.post.id } });
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables";
  .post-item {
    height: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover & {
      &__image {
        filter: brightness(0.7);
      }
    }
    &__image {
      width: 100%;
      height: 100%;
      max-height: 100%;
      filter: brightness(1);
    }
  }
</style>
