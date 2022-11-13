<template>
<div class="main-post-item">
  <div class="main-post-item__top">
    <div class="main-post-item__row">
      <router-link class="main-post-item__link" :to="`/profile/${post.profileId}`">
        <div class="main-post-item__avatar-wrapper">
          <img :src="post.img ? src + post.profileImg : require('@/assets/images/profile/profile-empty.jpg')"
               alt=""
               class="main-post-item__avatar">
        </div>
        <div class="main-post-item__name">{{ post.profileName }}</div>
      </router-link>
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
    align-items: center;
  }
  &__top, &__bottom {
    border: 1px solid lightgray;
    padding: 16px;
  }
  &__link {
    padding: 8px;
    font-size: 18px;
    text-decoration: none;
    color: $primary;
    display: flex;
    align-items: center;
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
  &__avatar-wrapper {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
  &__avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
