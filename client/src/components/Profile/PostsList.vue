<template>
  <div class="posts-list">
    <div class="posts-list__row">
      <div class="posts-list__col">
        <div
          class="posts-list__create"
          @click="openCreatePostModal"
        >
          <i class="icon icon-plus"></i>
        </div>
      </div>
      <div
        class="posts-list__col"
        v-for="post in posts"
        :key="post.id"
      >
        <PostItem :post="post"/>
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
  mounted () {
    console.log(this.posts)
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
@import "../../assets/styles/variables";
  .posts-list {
    &__create {
      background-color: $gray-100;
      height: 100%;
      position: relative;
      cursor: pointer;
      &:hover {
        .icon {
          transform: translate(-50%, -50%) scale(1.2);
        }
      }
      .icon {
        pointer-events: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 50px;
        color: $gray-600;
        transition: $transition-base;
      }
    }
    &__row {
      display: flex;
      margin: -12px;
      flex-wrap: wrap;
    }
    &__col {
      padding: 12px;
      flex: 0 0 33.33333%;
      height: 300px;
    }
  }
</style>
