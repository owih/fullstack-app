<template>
  <div class="posts-list">
    <div class="posts-list__row">
      <div class="posts-list__col" v-if="!posts.length">
        <div
          class="posts-list__create"
          @click="openCreatePostModal"
        >
          <i class="icon icon-plus"></i>
        </div>
      </div>
      <div
        class="posts-list__col"
        v-for="(post, index) in posts"
        :key="post.id"
      >
        <div
          class="posts-list__create"
          v-if="!index"
          @click="openCreatePostModal"
        >
          <i class="icon icon-plus"></i>
        </div>
        <PostItem v-else-if="index" :post="post"/>
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/Profile/PostItem";
import { mapActions } from "vuex";

export default {
  name: "PostsList",
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions([
      'open'
    ]),
    openCreatePostModal () {
      console.log('open')
      this.open('CreatePostModal');
    }
  }
}
</script>

<style scoped lang="scss">
  .posts-list {
    &__create {
      .icon {
        pointer-events: none;
      }
    }
  }
</style>
