<template>
  <div class="post-comments">
    <div class="post-comments__item">
      <PostCommentItem />
    </div>
    <div class="post-comments__item">
      <PostCommentItem />
    </div>
    <div class="post-comments__item">
      <PostCommentItem />
    </div>
    <div class="post-comments__item">
      <PostCommentItem />
    </div>
  </div>
</template>

<script>
import PostCommentItem from "@/components/Post/PostCommentItem";

export default {
  name: "PostComments",
  components: {
    PostCommentItem,
  }
}
</script>

<style scoped lang="scss">
  .post-comments {
    &__item {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
</style>
