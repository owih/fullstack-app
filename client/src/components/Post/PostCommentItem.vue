<template>
  <div class="post-comment">
    <div class="post-comment__top">
      <div class="post-comment__avatar">
        <img :src="require('../../assets/images/profile/profile-empty.jpg')" alt="" class="image">
      </div>
      <div class="post-comment__author">
        <strong>Author comment name</strong>
      </div>
    </div>
    <div class="post-comment__text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis doloribus eius fuga voluptas!
      Est eum eveniet illo omnis, porro quod repellat sapiente ullam! Ab commodi ipsa itaque optio vel.
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCommentItem"
}
</script>

<style scoped lang="scss">
  .post-comment {
    &__top {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
    &__avatar {
      margin-right: 8px;
      width: 32px;
      height: 32px;
      border-radius: 32px;
      overflow: hidden;
      .image {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
