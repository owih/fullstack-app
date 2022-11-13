<template>
<div class="main-post-item">
  <div class="main-post-item__top">
    <div class="main-post-item__row">
      <router-link class="main-post-item__name" :to="`/profile/${post.profileId}`">Login</router-link>
      <div class="main-post-item__likes">Likes: {{ post.likes }}</div>
    </div>
  </div>
  <div class="main-post-item__image-wrapper">
    <img :src="src + post.img" alt="" class="main-post-item__image">
  </div>
  <div class="main-post-item__bottom">
    <div class="main-post-item__description">{{ post.description }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "MainPostItem",
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
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.main-post-item {
  &__row {
    display: flex;
    margin: -8px;
    justify-content: space-between;
  }
  &__top, &__bottom {
    border: 1px solid lightgray;
    padding: 16px;
  }
  &__name {
    padding: 8px;
    font-size: 18px;
    text-decoration: none;
    color: $primary;
    &:hover {
      color: $yellow;
    }
  }
  &__likes {
    padding: 8px;
    font-size: 18px;
  }
  &__image-wrapper {
    width: 500px;
    height: 500px;
  }
  &__image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
